import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    /* Conteneur principal avec un dégradé de fond dynamique et vivant */
    <div className="min-h-screen bg-gradient-to-br from-[#f4f7fe] via-[#ffffff] to-[#eef2ff] text-[#1a1717] font-['Inter'] flex flex-col overflow-hidden">
      
      {/* Barre de navigation (Navbar) */}
      <nav className="flex items-center justify-between px-10 py-6 z-50">
        <h1 className="text-3xl font-extrabold text-[#6a5acd] tracking-tighter">
          Learn Hub
        </h1>
        <div className="flex gap-4">
          <button onClick={() => navigate("/login")} className="px-6 py-2 text-[#737791] font-semibold hover:text-[#6a5acd] transition">
            Sign In
          </button>
          <button onClick={() => navigate("/register")} className="px-6 py-2.5 bg-white text-[#6a5acd] border border-[#6a5acd]/20 font-bold rounded-2xl shadow-sm hover:shadow-md transition">
            Sign Up
          </button>
        </div>
      </nav>

      {/* Section Hero - Design Centré et Interactif */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 pt-20 pb-32 flex-1">
        
        {/* Éléments de décoration en arrière-plan pour donner de la "Vie" */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#6a5acd]/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#ffc107]/10 rounded-full blur-3xl -z-10"></div>

        {/* Contenu Principal Centré */}
        <div className="max-w-3xl z-10">
          <h2 className="text-5xl md:text-7xl font-[800] leading-[1.1] mb-8 bg-clip-text text-transparent bg-gradient-to-b from-gray-900 to-gray-600">
            Share & Learn Together
          </h2>
          <p className="text-xl text-[#737791] font-medium mb-12 max-w-xl mx-auto leading-relaxed">
            A modern educational platform to exchange your knowledge, 
            access exclusive courses, and boost your skills.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <button
              onClick={() => navigate("/login")}
              className="px-10 py-4 bg-[#6a5acd] text-white font-bold rounded-2xl shadow-[0_10px_25px_rgba(106,90,205,0.3)] hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(106,90,205,0.4)] transition-all duration-300 w-full sm:w-auto text-lg"
            >
              Get Started Now
            </button>
            <button
              onClick={() => navigate("/register")}
              className="px-10 py-4 bg-white border border-[#e8e8e8] text-[#1a1717] font-bold rounded-2xl hover:bg-gray-50 transition-all duration-300 w-full sm:w-auto text-lg"
            >
              Explore Courses
            </button>
          </div>
        </div>

        {/* Éléments visuels flottants (sans box rigide et sans scale) */}
        <div className="relative mt-20 w-full max-w-4xl h-40">
            {/* Animation globale des cartes flottantes */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 flex gap-6 animate-bounce-slow">
                
                {/* Carte Art Créatif */}
                <div className="hidden md:flex flex-col items-center p-6 bg-white/80 backdrop-blur-md border border-white rounded-[32px] shadow-2xl rotate-[-6deg] -translate-x-32 hover:rotate-0 transition-transform duration-500">
                    <div className="w-16 h-16 bg-[#eef2ff] rounded-2xl flex items-center justify-center text-3xl mb-4">🎨</div>
                    <span className="font-bold text-sm text-gray-800">Creative Art</span>
                    <span className="text-[#6a5acd] text-xs font-bold mt-1">12 Courses</span>
                </div>

                {/* Carte Design Central */}
                <div className="flex flex-col items-center p-8 bg-white border border-white rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.1)] z-20 hover:rotate-0 transition-transform duration-500">
                    <div className="w-20 h-20 bg-[#fff9db] rounded-3xl flex items-center justify-center text-4xl mb-4">📚</div>
                    <span className="font-extrabold text-lg text-gray-900">Design Thinking</span>
                    <span className="text-[#737791] text-sm">Interactive Learning</span>
                </div>

                {/* Carte Développement Web */}
                <div className="hidden md:flex flex-col items-center p-6 bg-white/80 backdrop-blur-md border border-white rounded-[32px] shadow-2xl rotate-[6deg] translate-x-32 hover:rotate-0 transition-transform duration-500">
                    <div className="w-16 h-16 bg-[#f0fdf4] rounded-2xl flex items-center justify-center text-3xl mb-4">💻</div>
                    <span className="font-bold text-sm text-gray-800">Web Development</span>
                    <span className="text-[#22c55e] text-xs font-bold mt-1">New</span>
                </div>
                
            </div>
        </div>

      </section>

      {/* Pied de page (Footer) */}
      <footer className="text-center py-10 text-[#737791] text-sm font-medium border-t border-gray-100 bg-white/50 backdrop-blur-sm">
        © 2026 Learn Hub. All rights reserved.
      </footer>

      {/* Styles injectés pour l'effet de flottaison fluide */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes bounce-slow {
          0%, 100% { transform: translate(-50%, 0px); }
          50% { transform: translate(-50%, -20px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s infinite ease-in-out;
        }
      `}} />

    </div>
  );
}