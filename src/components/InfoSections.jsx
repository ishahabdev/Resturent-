import { memo } from 'react';
import useReveal from '../hooks/useReveal';

function PdfDownload() {
  return (
    <>
      <h3 className="heading">📄 Baixe Nosso Cardápio</h3>
      <div className="centered">
        <a href="/assets/CARDAPIO_UFO_BURGER_compressed.pdf" download className="btn">
          📥 Baixar em PDF
        </a>
      </div>
    </>
  );
}

function IfoodSection() {
  const ref = useReveal();

  return (
    <section style={{ textAlign: 'center', padding: '40px 20px' }} ref={ref}>
      <h3 className="heading">Prefere pedir pelo iFood?</h3>
      <a
        href="https://www.ifood.com.br/delivery/macapa-ap/ufo-burguer-santa-rita/d195c03a-05e6-4f33-8ae7-22a1e8734d69?UTM_Medium=share"
        className="btn"
        target="_blank"
        rel="noreferrer"
      >
        Peça pelo iFood
      </a>
    </section>
  );
}

function Careers() {
  const ref = useReveal();

  return (
    <section id="trabalhe" ref={ref}>
      <h2 className="heading">Trabalhe Conosco</h2>
      <p>Envie seu currículo pelo WhatsApp e faça parte da tripulação!</p>
      <a href="https://wa.me/5596984164450" className="btn" target="_blank" rel="noreferrer">
        Enviar Currículo
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
