import { memo } from 'react';
import useReveal from '../hooks/useReveal';

function About() {
  const ref = useReveal();

  return (
    <section id="quem-somos" className="about-section" ref={ref}>
      <div className="about-container">
        <div className="about-text">
          <h2 style={{ color: 'var(--accent)' }}>About Us</h2>
          <p>
            We are more than just a burger joint — we are an intergalactic culinary experience!
            Born from a passion for unique flavors and sci-fi pop culture, UFO BURGER brings
            an innovative concept to Macapá, combining top-quality ingredients with a fun
            and futuristic atmosphere.
          </p>
          <p>
            Our mission is simple: create burgers that are truly "out of this world".
            Each recipe is carefully crafted to deliver an explosion of flavors that
            will take you on an unforgettable cosmic culinary journey.
          </p>
          <p>Prepare to be abducted by our unique flavors and alien hospitality!</p>
        </div>

        <div className="about-image">
          <img src="/assets/about.webp" alt="About UFO Burger" loading="lazy" decoding="async" />
        </div>
      </div>
    </section>
  );
}

export default memo(About);
