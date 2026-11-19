import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import Menu from './pages/Menu';
import Contact from './pages/Contact';
import Careers from './pages/Careers';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-cheezCream text-cheezBrown">
      <ScrollToTop />
      
      {/* Sticky Dark Navbar with Logo & Cart Counter */}
      <Navbar />

      {/* Main Page Content */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {/* Slide-in Cart Drawer */}
      <CartDrawer />

      {/* Floating WhatsApp Quick Order Button */}
      <WhatsAppButton />

      {/* Footer with Contact, Hours, Map, Links */}
      <Footer />
    </div>
  );
}
