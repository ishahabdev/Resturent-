import { memo } from 'react';
import useReveal from '../hooks/useReveal';

function PdfDownload() {
  return (
    <>
      <h3 className="heading">📄 Download Our Menu</h3>
      <div className="centered">
        <a href="/assets/CARDAPIO_UFO_BURGER_compressed.pdf" download className="btn">
          📥 Download PDF
        </a>
      </div>
    </>
  );
}

function IfoodSection() {
  const ref = useReveal();

  return (
    <section style={{ textAlign: 'center', padding: '40px 20px' }} ref={ref}>
      <h3 className="heading">Prefer ordering via iFood?</h3>
      <a
        href="https://www.ifood.com.br/delivery/macapa-ap/ufo-burguer-santa-rita/d195c03a-05e6-4f33-8ae7-22a1e8734d69?UTM_Medium=share"
        className="btn"
        target="_blank"
        rel="noreferrer"
      >
        Order on iFood
      </a>
    </section>
  );
}

function Careers() {
  const ref = useReveal();

  return (
    <section id="trabalhe" ref={ref}>
      <h2 className="heading">Work With Us</h2>
      <p>Send your resume via WhatsApp and become part of the crew!</p>
      <a href="https://wa.me/5596984164450" className="btn" target="_blank" rel="noreferrer">
        Send Resume
      </a>
    </section>
  );
}

function InfoSections() {
  return (
    <>
      <PdfDownload />
      <IfoodSection />
      <Careers />
    </>
  );
}

export default memo(InfoSections);
