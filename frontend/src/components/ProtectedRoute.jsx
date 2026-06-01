import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {

  // Vérifier la présence du token et des informations utilisateur dans le localStorage
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("user");

  // Si l'un des deux est absent, rediriger vers la page de connexion
  if (!token || !user) return <Navigate to="/login" />;

  // Si les deux existent, afficher la page demandée
  return children;
}

export default ProtectedRoute;