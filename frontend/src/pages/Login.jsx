import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; 

export default function Login() {
  const navigate = useNavigate();

  // Gestion des champs du formulaire de connexion
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // 💡 ENVOI RÉEL : Vérifier les identifiants auprès de l'API de connexion (Port 5000)
      const response = await axios.post("http://localhost:5000/api/auth/login", formData);
      
      // Si la connexion est réussie et le backend valide l'utilisateur
      if (response.data) {
        console.log("Connexion réussie ! Bienvenue sur Learn Hub ", response.data);
        
        // Stocker le token d'authentification pour sécuriser les futures requêtes
        if (response.data.token) {
          localStorage.setItem("token", response.data.token);
        }

        // Redirection sécurisée vers le Dashboard après vérification
        navigate("/dashboard");
      }
    } catch (error) {
      // Afficher l'erreur renvoyée par le backend (ex: Mot de passe incorrect)
      console.error("Erreur de connexion :", error.response?.data?.message || error.message);
      alert(error.response?.data?.message || "Email ou mot de passe incorrect !");
    }
  };

  return (
    /* Arrière-plan dynamique et moderne (Identique à la Landing et Register) */
    <div className="min-h-screen bg-gradient-to-br from-[#f4f7fe] via-[#ffffff] to-[#eef2ff] flex items-center justify-center p-6 font-['Inter'] relative overflow-hidden">
      
      {/* Cercles décoratifs flous en arrière-plan */}
      <div className="absolute -top-10 -left-10 w-72 h-72 bg-[#6a5acd]/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-[#ffc107]/10 rounded-full blur-3xl -z-10"></div>

      {/* Boite principale du formulaire (Design épuré) */}
      <div className="w-full max-w-md bg-white/80 backdrop-blur-md border border-white p-10 rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
        
        {/* Logo / Titre */}
        <div className="text-center mb-8">
          <h2 onClick={() => navigate("/")} className="text-3xl font-extrabold text-[#6a5acd] tracking-tighter cursor-pointer inline-block">
            Learn Hub
          </h2>
          <p className="text-gray-500 text-sm mt-2 font-medium">Welcome back! Sign in to your account</p>
        </div>

        {/* Formulaire de connexion */}
        <form onSubmit={handleSubmit} className="space-y-5">
          
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

          {/* Options supplémentaires : Remember me & Forgot Password */}
          <div className="flex items-center justify-between text-sm pt-1">
            <label className="flex items-center gap-2 cursor-pointer text-gray-600 font-medium">
              <input type="checkbox" className="accent-[#6a5acd] rounded" />
              Remember me
            </label>
            <button type="button" className="text-[#6a5acd] font-bold hover:underline">
              Forgot password?
            </button>
          </div>

          {/* Bouton de connexion */}
          <button
            type="submit"
            className="w-full py-4 mt-2 bg-[#6a5acd] text-white font-bold rounded-2xl shadow-[0_10px_25px_rgba(106,90,205,0.2)] hover:shadow-[0_15px_30px_rgba(106,90,205,0.3)] hover:-translate-y-0.5 transition-all duration-300 text-base"
          >
            Sign In
          </button>
        </form>

        {/* Lien vers la page Register */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-500 font-medium">
            Don't have an account yet?{" "}
            <button onClick={() => navigate("/register")} className="text-[#6a5acd] font-bold hover:underline">
              Sign Up
            </button>
          </p>
        </div>

      </div>
    </div>
  );
}