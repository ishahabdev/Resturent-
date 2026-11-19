import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu as MenuIcon, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

const NAV_LINKS = [
  { path: '/', label: 'Home' },
  { path: '/menu', label: 'Menu' },
  { path: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { totals, openCart } = useCart();
  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header className="sticky top-0 z-50 w-full bg-black border-b border-white/5 py-4 px-4 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Exact Cheezora Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <img
            src="/assets/cheezora-logo.png"
            alt="Cheezora"
            className="h-9 sm:h-10 w-auto object-contain"
            onError={(e) => {
              // Fallback if image fails
              e.currentTarget.style.display = 'none';
              e.currentTarget.nextSibling.style.display = 'flex';
            }}
          />
          <div className="hidden items-center gap-1.5 text-2xl font-black tracking-tight">
            <span className="text-white">Cheez</span>
            <span className="text-cheezYellow">ora</span>
          </div>
        </Link>

        {/* Center Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          {NAV_LINKS.map((link) => {
            const isAnchor = link.path.includes('#');

            if (isAnchor) {
              return (
                <a
                  key={link.path}
                  href={link.path}
                  className="text-sm font-semibold tracking-wide text-white hover:text-cheezYellow transition-colors duration-200"
                >
                  {link.label}
                </a>
              );
            }

            return (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-semibold tracking-wide transition-all duration-200 relative py-1 ${
                    isActive
                      ? 'text-cheezYellow font-bold after:content-[""] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-cheezYellow after:rounded-full'
                      : 'text-white hover:text-cheezYellow'
                  }`
                }
              >
                {link.label}
              </NavLink>
            );
          })}
        </nav>

        {/* Right Red Order Now Button with Cart count */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={openCart}
            className="relative px-5 sm:px-6 py-2.5 rounded-full bg-cheezRed hover:bg-cheezRed-hover text-white text-xs sm:text-sm font-bold flex items-center gap-2 shadow-cheezRed transition-transform active:scale-95"
          >
            <ShoppingCart className="w-4 h-4" />
            <span>Order Now</span>
            {totals.count > 0 && (
              <span className="ml-1 bg-white text-cheezRed text-[10px] font-black px-1.5 py-0.2 rounded-full">
                {totals.count}
              </span>
            )}
          </button>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-white hover:text-cheezYellow transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 pt-4 border-t border-white/10 space-y-3 pb-2 bg-black">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="block text-sm font-semibold text-white hover:text-cheezYellow py-2 px-3 rounded-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/careers"
            className="block text-sm font-semibold text-zinc-400 hover:text-cheezYellow py-2 px-3 rounded-lg"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Careers
          </Link>
        </div>
      )}
    </header>
  );
}
