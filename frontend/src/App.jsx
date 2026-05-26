import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importations des pages publiques (Design moderne en Anglais)
import LandingPage from './pages/LandingPage.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';

// Importations des composants du tableau de bord (Structure de ta collègue)
import Sidebar from './components/Sidebar.jsx';
import Header from './components/Header.jsx';

// Importations des pages internes du Dashboard
import Courses from './pages/Courses.jsx';
import Documents from './pages/Documents.jsx';
import Media from './pages/Media.jsx';

// Importation du context pour la gestion globale des cours
import { CoursesProvider } from './context/CoursesContext.jsx';

// Importation des styles généraux de l'application
import "./App.css";

/**
 * Composant Layout du Dashboard
 * Structure globale incluant la barre latérale, l'en-tête et le contenu dynamique
 */
function DashboardLayout() {
  return (
    <div className="page-wrapper">
      {/* Barre de navigation latérale fixe */}
      <Sidebar />

      {/* Conteneur principal pour le header et les pages dynamiques */}
      <div className="main-content">
        {/* En-tête supérieur (Recherche, profil, thème) */}
        <Header />

        {/* Routage interne du Dashboard (Sous-routes) */}
        <Routes>
          {/* Route par défaut : Redirige ou affiche les cours dès l'accès au tableau de bord */}
          <Route index element={<Courses />} />
          
          {/* Chemins spécifiques pour chaque section du Dashboard */}
          <Route path="courses" element={<Courses />} />
          <Route path="documents" element={<Documents />} />
          <Route path="video-audio" element={<Media />} />
        </Routes>
      </div>
    </div>
  );
}

/**
 * Composant Principal de l'application (App)
 * Gère le fournisseur de contexte et le routage global du site
 */
export default function App() {
  return (
    /* Enveloppement de l'application avec le contexte des cours */
    <CoursesProvider>
      <Router>
        <Routes>

          {/* 1. Pages Publiques (Accessibles sans connexion) */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* 2. Espace Privé (Dashboard avec toutes ses sous-routes) */}
          <Route path="/dashboard/*" element={<DashboardLayout />} />

        </Routes>
      </Router>
    </CoursesProvider>
  );
}