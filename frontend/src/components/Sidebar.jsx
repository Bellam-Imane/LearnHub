import { Link, useLocation } from 'react-router-dom';

/**
 * Composant Sidebar (Barre latérale de navigation)
 * Permet la navigation entre les différentes sections du Dashboard
 */
export default function Sidebar() {
    const location = useLocation();

    // Fonction pour vérifier si le lien est actif (Optionnel pour le style)
    const isActive = (path) => location.pathname === path ? "active" : "";

    return (
        <aside className="sidebar">
            {/* En-tête de la barre latérale */}
            <div className="sidebar-header">
                <div className="logo">Learn Hub</div>
            </div>
            
            {/* Liens de navigation mis à jour avec les sous-routes du Dashboard */}
            <nav className="sidebar-nav">
                <ul>
                    {/* Lien vers la section principale des cours */}
                    <li className={isActive("/dashboard/courses")}>
                        <Link to="/dashboard/courses">Dashboard</Link>
                    </li>
                    
                    {/* Lien vers la gestion des documents */}
                    <li className={isActive("/dashboard/documents")}>
                        <Link to="/dashboard/documents">Documents</Link>
                    </li>
                    
                    {/* Lien vers la section média (Vidéo & Audio) */}
                    <li className={isActive("/dashboard/video-audio")}>
                        <Link to="/dashboard/video-audio">Video, Audio</Link>
                    </li>
                    
                    {/* Liens secondaires (À configurer plus tard si nécessaire) */}
                    <li className={isActive("/dashboard/profile")}>
                        <Link to="/dashboard/profile">Profile</Link>
                    </li>
                    <li className={isActive("/dashboard/others")}>
                        <Link to="/dashboard/others">Others</Link>
                    </li>
                </ul>
            </nav>

            {/* Pied de page de la barre latérale */}
            <div className="sidebar-footer">
                <div className="folder-icon"></div>
            </div>
        </aside>
    )
}