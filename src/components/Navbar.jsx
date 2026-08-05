import { memo, useCallback, useState } from 'react';
import { useCartActions, useCartState } from '../context/CartContext';
import ThemeToggle from './ThemeToggle';
import { IconShoppingCart, IconBars, IconXmark } from './icons';

const NAV_LINKS = [
  { href: '#hero', label: 'Início' },
  { href: '#quem-somos', label: 'Quem Somos' },
  { href: '#menu', label: 'Cardápio' },
  { href: '#trabalhe', label: 'Trabalhe' },
];

function Navbar() {
  const { totals } = useCartState();
  const { setCartOpen } = useCartActions();
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <header className="navbar">
      <div className="nav-container">
        <a href="#hero" onClick={closeMenu}>
          <img src="/assets/logo.webp" className="nav-logo" alt="UFO Logo" loading="lazy" />
        </a>

        <nav className="nav-menu">
          <ul className="nav-links">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>

          <div className="nav-actions">
            <ThemeToggle />

            <div id="cart-icon" onClick={() => setCartOpen(true)}>
              <IconShoppingCart />
              <span id="cart-count">{totals.count}</span>
            </div>

            <button
              type="button"
              className="hamburger"
              aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <IconXmark /> : <IconBars />}
            </button>
          </div>
        </nav>
      </div>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href} onClick={closeMenu}>
            {link.label}
          </a>
        ))}
      </div>
    </header>
  );
}

export default memo(Navbar);
