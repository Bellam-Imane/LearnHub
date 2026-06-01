import { useRef } from 'react';
import ThemeToggler from './ThemeToggler';

export default function Header() {
    const fileInputRef = useRef(null);

    // Récupérer les informations de l'utilisateur connecté depuis le localStorage
    const user = JSON.parse(localStorage.getItem("user"));

    // Extraire l'initiale du prénom pour l'avatar
    const userInitial = user?.fullName?.charAt(0).toUpperCase() || "?";
    const userName = user?.fullName || "Utilisateur";

    // Déclencher l'ouverture du sélecteur de fichiers au clic sur le bouton Upload
    const handleUploadClick = () => {
        fileInputRef.current.click();
    };

    // Récupérer le fichier sélectionné par l'utilisateur
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            console.log('Fichier sélectionné :', file.name);
        }
    };

    return (
        <header className="main-header">
            <div className="search-bar">
                <input type="text" placeholder="Search..." />
            </div>
            <div className="header-actions">
                <ThemeToggler />
                {/* Input fichier caché — déclenché par le bouton Upload */}
                <input
                    type="file"
                    ref={fileInputRef}
                    style={{ display: 'none' }}
                    onChange={handleFileChange}
                />
                <button className="upload-button" onClick={handleUploadClick}>
                    Upload
                </button>
                {/* Affichage dynamique des informations de l'utilisateur connecté */}
                <div className="user-profile">
                    <span className="user-avatar">{userInitial}</span>
                    <span className="user-name">{userName}</span>
                </div>
            </div>
        </header>
    );
}