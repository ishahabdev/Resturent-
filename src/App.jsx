import { lazy, Suspense, useCallback, useEffect, useState } from 'react';
import { CartProvider } from './context/CartContext';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import MenuFilters from './components/MenuFilters';
import InfoSections from './components/InfoSections';
import Footer from './components/Footer';
import FloatingCart from './components/FloatingCart';
import CartDrawer from './components/CartDrawer';
import CheckoutModal from './components/CheckoutModal';
import Loader from './components/Loader';

const FeaturedBurgers = lazy(() => import('./components/FeaturedBurgers'));
const MenuSection = lazy(() => import('./components/MenuSection'));
const MapSection = lazy(() => import('./components/MapSection'));

function PreloadChunks() {
  useEffect(() => {
    let cancelled = false;
    const prefetch = () => {
      if (cancelled) return;
      Promise.all([
        import('./components/FeaturedBurgers'),
        import('./components/MenuSection'),
        import('./components/MapSection'),
      ]).catch(() => {});
    };
    if ('requestIdleCallback' in window) {
      const id = window.requestIdleCallback(prefetch, { timeout: 1500 });
      return () => {
        cancelled = true;
        window.cancelIdleCallback(id);
      };
    }
    const t = window.setTimeout(prefetch, 800);
    return () => {
      cancelled = true;
      window.clearTimeout(t);
    };
  }, []);

  return null;
}

export default function App() {
  const [activeCategory, setActiveCategory] = useState('all');
  const handleCategoryChange = useCallback((category) => setActiveCategory(category), []);

  return (
    <ThemeProvider>
      <CartProvider>
        <PreloadChunks />
        <FloatingCart />
        <Navbar />
        <Hero />

        <Suspense fallback={<Loader />}>
          <FeaturedBurgers />
        </Suspense>

        <About />

        <MenuFilters activeCategory={activeCategory} onChange={handleCategoryChange} />

        <Suspense fallback={<Loader />}>
          <MenuSection activeCategory={activeCategory} />
        </Suspense>

        <InfoSections />

        <Suspense fallback={null}>
          <MapSection />
        </Suspense>

        <Footer />

        <CartDrawer />
        <CheckoutModal />
      </CartProvider>
    </ThemeProvider>
  );
}
