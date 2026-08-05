import { memo } from 'react';
import { IconInstagram, IconFacebookF, IconTiktok } from './icons';

function Footer() {
  return (
    <footer>
      <div className="social-icons">
        <a href="https://www.instagram.com/ufoburgermcp" target="_blank" rel="noreferrer" aria-label="Instagram">
          <IconInstagram />
        </a>
        <a href="https://www.facebook.com/ufoburgermcp" target="_blank" rel="noreferrer" aria-label="Facebook">
          <IconFacebookF />
        </a>
        <a href="https://www.tiktok.com/@ufoburgermcp" target="_blank" rel="noreferrer" aria-label="TikTok">
          <IconTiktok />
        </a>
      </div>

      <p>
        Contato: <a href="mailto:info@ufoburgermcp.com">info@ufoburgermcp.com</a>
      </p>
      <p>
        Siga-nos: <a href="https://instagram.com/ufoburgermcp" target="_blank" rel="noreferrer">@ufoburgermcp</a>
      </p>
      <p>&copy; 2025 UFO BURGER — Todos os direitos reservados.</p>
    </footer>
  );
}

export default memo(Footer);
