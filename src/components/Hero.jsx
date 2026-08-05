import { useEffect, useRef } from 'react';
import { gsap } from '../lib/gsap';
import useReveal from '../hooks/useReveal';

export default function Hero() {
  const sectionRef = useReveal();
  const logoRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(logoRef.current, { opacity: 0, scale: 0.8, duration: 1 });
      gsap.from(btnRef.current, { opacity: 1, y: 20, duration: 1, delay: 0.4 });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section id="hero" ref={sectionRef}>
      <div className="container">
        <img
          src="/assets/logo.webp"
          alt="UFO BURGER Logo"
          className="logo"
          ref={logoRef}
          fetchpriority="high"
          decoding="async"
        />
        <h1 className="heading">Bem-vindo à UFO BURGER</h1>
        <p>Hamburgueria temática localizada em Macapá, Brasil</p>
        <a href="https://wa.me/+5596981201020" className="btn" target="_blank" rel="noreferrer" ref={btnRef}>
          Fale Conosco no WhatsApp
        </a>
      </div>
    </section>
  );
}
