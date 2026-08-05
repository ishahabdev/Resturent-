import { memo } from 'react';
import useReveal from '../hooks/useReveal';

function About() {
  const ref = useReveal();

  return (
    <section id="quem-somos" className="about-section" ref={ref}>
      <div className="about-container">
        <div className="about-text">
          <h2 style={{ color: 'var(--accent)' }}>Quem Somos</h2>
          <p>
            Somos mais do que uma hamburgueria - somos uma experiência gastronômica intergaláctica!
            Nascida da paixão por sabores únicos e pela cultura pop espacial, a UFO BURGER traz para
            Macapá uma proposta inovadora que combina ingredientes de primeira qualidade com uma
            atmosfera divertida e futurística.
          </p>
          <p>
            Nossa missão é simples: criar hamburgueres que são verdadeiramente "fora deste mundo".
            Cada receita é cuidadosamente desenvolvida para proporcionar uma explosão de sabores que
            vai transportar você para uma jornada culinária espacial inesquecível.
          </p>
          <p>Prepare-se para ser abduzido pelos nossos sabores únicos e pela nossa hospitalidade alienígena!</p>
        </div>

        <div className="about-image">
          <img src="/assets/about.webp" alt="Sobre UFO Burger" loading="lazy" decoding="async" />
        </div>
      </div>
    </section>
  );
}

export default memo(About);
