import { memo } from 'react';
import useReveal from '../hooks/useReveal';

function MapSection() {
  const ref = useReveal();

  return (
    <section id="map" ref={ref}>
      <h2 className="heading">Encontre-nos</h2>
      <p>Av. Profa. Cora de Carvalho, 2882 - Santa Rita, Macapá - AP</p>

      <div style={{ width: '100%', height: 400, marginTop: 20 }}>
        <iframe
          title="Localização UFO BURGER"
          src="https://www.google.com/maps?q=Av.%20Profa.%20Cora%20de%20Carvalho,%202882%20-%20Santa%20Rita,%20Macap%C3%A1%20-%20AP&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}

export default memo(MapSection);
