import { Link } from 'react-router-dom';
import { Pizza, Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-20 text-center">
      <div className="max-w-md w-full bg-white rounded-3xl p-8 sm:p-10 border border-amber-200 shadow-cheese space-y-6">
        
        <div className="w-24 h-24 rounded-full bg-cheezCream border-2 border-cheezYellow flex items-center justify-center mx-auto text-5xl shadow-inner animate-bounce">
          🧀
        </div>

        <div>
          <span className="text-xs font-black text-cheezRed uppercase tracking-widest block mb-1">
            Error 404
          </span>
          <h1 className="text-3xl font-black text-cheezBrown">
            Whoops! This Slice Was Eaten
          </h1>
          <p className="text-xs sm:text-sm text-zinc-500 mt-2 leading-relaxed">
            The page you are looking for has either melted away or was abducted by hungry cheese lovers.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            to="/"
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-cheezRed hover:bg-cheezRed-hover text-white text-xs font-bold shadow-cheezRed flex items-center justify-center gap-2 transition-all"
          >
            <Home className="w-4 h-4" />
            <span>Return Home</span>
          </Link>
          <Link
            to="/menu"
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-cheezCream hover:bg-amber-100 text-cheezBrown text-xs font-bold border border-amber-200 flex items-center justify-center gap-2 transition-all"
          >
            <Pizza className="w-4 h-4 text-cheezRed" />
            <span>Check Menu</span>
          </Link>
        </div>

      </div>
    </div>
  );
}
