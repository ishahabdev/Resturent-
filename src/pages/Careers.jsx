import { useState } from 'react';
import { 
  Briefcase, 
  Upload, 
  Sparkles, 
  Heart, 
  Smile, 
  DollarSign,
  ArrowRight,
  Mail,
  Phone,
  Clock,
  BellOff,
  UserCheck
} from 'lucide-react';

export default function Careers() {
  const [applicantName, setApplicantName] = useState('');
  const [applicantPhone, setApplicantPhone] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [preferredRole, setPreferredRole] = useState('Chef / Kitchen Staff');
  const [cvFile, setCvFile] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="space-y-16 lg:space-y-24 pb-20">
      
      {/* Page Header */}
      <section className="bg-[#180E09] text-white py-16 lg:py-20 text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-4 relative z-10 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-cheezYellow/20 text-cheezYellow text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Cheezora Talent Community</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight">
            Careers at <span className="cheezora-logo-text block sm:inline">Cheezora</span>
          </h1>
          <p className="text-xs sm:text-sm text-zinc-300 max-w-xl mx-auto leading-relaxed">
            Thank you for your interest in joining our culinary crew! Here is our current recruitment status.
          </p>
        </div>
      </section>

      {/* Main Notice: No Current Openings */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border-2 border-amber-200/80 shadow-cheese text-center space-y-6">
          
          <div className="w-20 h-20 rounded-full bg-amber-50 border-2 border-cheezYellow flex items-center justify-center mx-auto text-cheezBrown shadow-inner">
            <BellOff className="w-10 h-10 text-cheezYellow-dark" />
          </div>

          <div className="space-y-2 max-w-xl mx-auto">
            <span className="text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full bg-amber-100 text-cheezBrown inline-block">
              Recruitment Notice
            </span>
            <h2 className="text-3xl font-extrabold text-cheezBrown">
              No Open Vacancies Right Now
            </h2>
            <p className="text-sm text-zinc-600 leading-relaxed pt-1">
              Our kitchen, front-of-house, and delivery teams are currently operating at full capacity. We do not have any active openings at this moment.
            </p>
          </div>

          <div className="bg-cheezCream/70 border border-amber-200 rounded-2xl p-6 text-left max-w-2xl mx-auto space-y-3">
            <div className="flex items-center gap-2 text-cheezBrown font-bold text-sm">
              <UserCheck className="w-4 h-4 text-emerald-600" />
              <span>Want to be contacted when a vacancy opens?</span>
            </div>
            <p className="text-xs text-zinc-600 leading-relaxed">
              We frequently review applications in our talent database whenever new kitchen shifts, delivery slots, or branch expansions are announced. Submit your CV below to join our talent pool!
            </p>
          </div>

        </div>
      </section>

      {/* Talent Pool Submission Form */}
      <section className="max-w-2xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-amber-200 shadow-sm space-y-6">
          
          <div className="border-b border-amber-100 pb-4">
            <span className="text-xs font-bold text-cheezRed uppercase tracking-wider block">
              Future Opportunities
            </span>
            <h3 className="text-2xl font-black text-cheezBrown mt-1">
              Drop Your Resume in Our Talent Pool
            </h3>
            <p className="text-xs text-zinc-500 mt-1">
              Leave your contact info and resume. If a matching role opens up, our HR team will reach out to you first.
            </p>
          </div>

          {submitted ? (
            <div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-200 text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto text-2xl font-black">
                ✓
              </div>
              <div>
                <h4 className="text-base font-extrabold text-emerald-900">
                  Profile Saved in Talent Pool!
                </h4>
                <p className="text-xs text-emerald-700 mt-1 leading-relaxed">
                  Thank you, <strong>{applicantName}</strong>! Your resume has been stored in our prospective candidate records. We will contact you as soon as a relevant position becomes available.
                </p>
              </div>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setApplicantName('');
                  setApplicantPhone('');
                  setApplicantEmail('');
                  setCvFile(null);
                }}
                className="px-5 py-2 rounded-xl bg-emerald-700 text-white text-xs font-bold hover:bg-emerald-800"
              >
                Submit Another Resume
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-cheezBrown mb-1">
                  Preferred Department / Role:
                </label>
                <select
                  value={preferredRole}
                  onChange={(e) => setPreferredRole(e.target.value)}
                  className="w-full text-xs font-semibold p-2.5 bg-cheezCream border border-amber-200 rounded-xl text-cheezBrown focus:ring-2 focus:ring-cheezYellow focus:outline-none"
                >
                  <option value="Chef / Kitchen Staff">Chef / Pizza Oven Master</option>
                  <option value="Dine-in Waiter / Host">Dine-in Waiter / Hospitality Host</option>
                  <option value="Delivery Rider">Fast Delivery Rider</option>
                  <option value="Cashier / Order Desk">Cashier / Order Taking Executive</option>
                  <option value="Kitchen Helper / Prep">Kitchen Helper / Dishwasher</option>
                  <option value="Branch Supervisor">Branch Shift Supervisor</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-cheezBrown mb-1">
                    Your Full Name:
                  </label>
                  <input
                    type="text"
                    required
                    value={applicantName}
                    onChange={(e) => setApplicantName(e.target.value)}
                    placeholder="e.g. Ali Ahmed"
                    className="w-full text-xs p-2.5 border border-amber-200 rounded-xl focus:ring-2 focus:ring-cheezYellow focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-cheezBrown mb-1">
                    Phone / WhatsApp:
                  </label>
                  <input
                    type="tel"
                    required
                    value={applicantPhone}
                    onChange={(e) => setApplicantPhone(e.target.value)}
                    placeholder="0313-XXXXXXX"
                    className="w-full text-xs p-2.5 border border-amber-200 rounded-xl focus:ring-2 focus:ring-cheezYellow focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-cheezBrown mb-1">
                  Email Address:
                </label>
                <input
                  type="email"
                  required
                  value={applicantEmail}
                  onChange={(e) => setApplicantEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full text-xs p-2.5 border border-amber-200 rounded-xl focus:ring-2 focus:ring-cheezYellow focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-cheezBrown mb-1">
                  Upload Resume / CV (PDF or Image):
                </label>
                <div className="relative border-2 border-dashed border-amber-300 rounded-xl p-4 text-center hover:bg-cheezCream/50 transition-colors cursor-pointer">
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
                    onChange={(e) => setCvFile(e.target.files[0])}
                    className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                  />
                  <Upload className="w-5 h-5 text-cheezRed mx-auto mb-1" />
                  <p className="text-xs font-bold text-cheezBrown">
                    {cvFile ? cvFile.name : 'Click to Upload Resume / CV'}
                  </p>
                  <p className="text-[10px] text-zinc-400">PDF, DOC, or JPG up to 5MB</p>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-cheezBrown hover:bg-black text-white font-extrabold text-xs uppercase tracking-wider shadow-md flex items-center justify-center gap-2 hover:shadow-lg transition-all"
              >
                <span>Save to Talent Pool</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="pt-2 text-center text-xs text-zinc-500">
                You can also email your resume directly to{' '}
                <a href="mailto:careers@cheezora.com" className="font-bold text-cheezRed hover:underline">
                  careers@cheezora.com
                </a>
              </div>
            </form>
          )}

        </div>
      </section>

      {/* Workplace Culture Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="bg-white p-6 rounded-3xl border border-amber-100 shadow-xs space-y-2">
            <span className="text-3xl block">🤝</span>
            <h4 className="font-extrabold text-sm text-cheezBrown">Inclusive Environment</h4>
            <p className="text-xs text-zinc-500">We respect hard work, punctuality, and culinary dedication.</p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-amber-100 shadow-xs space-y-2">
            <span className="text-3xl block">🍕</span>
            <h4 className="font-extrabold text-sm text-cheezBrown">Passionate Foodies</h4>
            <p className="text-xs text-zinc-500">Every team member takes genuine pride in the cheese stretch we serve.</p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-amber-100 shadow-xs space-y-2">
            <span className="text-3xl block">📈</span>
            <h4 className="font-extrabold text-sm text-cheezBrown">Future Growth</h4>
            <p className="text-xs text-zinc-500">We prioritize internal promotion whenever new branches launch.</p>
          </div>
        </div>
      </section>

    </div>
  );
}
