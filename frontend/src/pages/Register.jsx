import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // 💡 IMPORTATION : Axios pour communiquer avec le backend

export default function Register() {
  const navigate = useNavigate();
  
  // Gestion des champs du formulaire (Stockage temporaire en React)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // 💡 ENVOI RÉEL : Envoyer les données vers l'API d'inscription du Backend (Port 5000)
      const response = await axios.post("http://localhost:5000/api/auth/register", formData);
      
      // Si le backend répond avec succès (utilisateur créé)
      if (response.data) {
        console.log("Utilisateur créé avec succès dans le fichier JSON ! 🎉", response.data);
        
        // Stocker le token dans le localStorage pour rester connecté (si votre backend en renvoie un)
        if (response.data.token) {
          localStorage.setItem("token", response.data.token);
        }

        // Une fois l'inscription validée par le backend, on redirige vers le Dashboard
        navigate("/dashboard"); 
      }
    } catch (error) {
      // Gestion des erreurs en cas d'email déjà existant ou problème de serveur
      console.error("Erreur lors de l'inscription :", error.response?.data?.message || error.message);
      alert(error.response?.data?.message || "Une erreur est survenue lors de l'inscription !");
    }
  };

  return (
    /* Arrière-plan vivant avec dégradé identique à la Landing Page */
    <div className="min-h-screen bg-gradient-to-br from-[#f4f7fe] via-[#ffffff] to-[#eef2ff] flex items-center justify-center p-6 font-['Inter'] relative overflow-hidden">
      
      {/* Cercles décoratifs flous en arrière-plan */}
      <div className="absolute -top-10 -left-10 w-72 h-72 bg-[#6a5acd]/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-[#ffc107]/10 rounded-full blur-3xl -z-10"></div>

      {/* Boite principale du formulaire (Glassmorphism léger) */}
      <div className="w-full max-w-md bg-white/80 backdrop-blur-md border border-white p-10 rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
        
        {/* Logo / Titre */}
        <div className="text-center mb-8">
          <h2 onClick={() => navigate("/")} className="text-3xl font-extrabold text-[#6a5acd] tracking-tighter cursor-pointer inline-block">
            Learn Hub
          </h2>
          <p className="text-gray-500 text-sm mt-2 font-medium">Create your account to start learning</p>
        </div>

        {/* Formulaire */}
        <form onSubmit={handleSubmit} className="space-y-5">
          
          {/* Champ Full Name */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
            <input
              type="text"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleChange}
              placeholder="John Doe"
              className="w-full px-5 py-3.5 bg-white border border-gray-200 rounded-2xl text-sm focus:outline-none focus:border-[#6a5acd] focus:ring-2 focus:ring-[#6a5acd]/10 transition-all placeholder:text-gray-400"
            />
          </div>

          {/* Champ Email */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="hello@example.com"
              className="w-full px-5 py-3.5 bg-white border border-gray-200 rounded-2xl text-sm focus:outline-none focus:border-[#6a5acd] focus:ring-2 focus:ring-[#6a5acd]/10 transition-all placeholder:text-gray-400"
            />
          </div>

          {/* Champ Password */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Password</label>
            <input
              type="password"
              name="password"
              required
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full px-5 py-3.5 bg-white border border-gray-200 rounded-2xl text-sm focus:outline-none focus:border-[#6a5acd] focus:ring-2 focus:ring-[#6a5acd]/10 transition-all placeholder:text-gray-400"
            />
          </div>

          {/* Bouton de soumission */}
          <button
            type="submit"
            className="w-full py-4 mt-2 bg-[#6a5acd] text-white font-bold rounded-2xl shadow-[0_10px_25px_rgba(106,90,205,0.2)] hover:shadow-[0_15px_30px_rgba(106,90,205,0.3)] hover:-translate-y-0.5 transition-all duration-300 text-base"
          >
            Create Account
          </button>
        </form>

        {/* Lien vers la page Login */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-500 font-medium">
            Already have an account?{" "}
            <button onClick={() => navigate("/login")} className="text-[#6a5acd] font-bold hover:underline">
              Sign In
            </button>
          </p>
        </div>

      </div>
    </div>
  );
}