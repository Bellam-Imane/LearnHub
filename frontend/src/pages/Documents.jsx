import React, { useState } from 'react';

const Documents = () => {
  const [courseName, setCourseName] = useState('');
  const [File, setFile] = useState(null);

  const handleUpload = (e) => {
    e.preventDefault();
    alert("Nadi! L'fichier w Smiya tzado.");
  };

  return (
    <div className="courses-section">
      <div className="section-header">
        <h2>Ajouter un Document</h2>
      </div>

      {/* Had div howa li ghadi ycentri l'carte f l'wst */}
      <div className="center-wrapper">
        <div className="wa3r-upload-card">
          <h3>Partager un nouveau cours</h3>
          <p className="upload-description">
           Ici, vous pouvez déposer vos documents pour que d'autres puissent en bénéficier.
          </p>

          <form onSubmit={handleUpload} className="wa3r-upload-form">
            
            <div className="wa3r-form-group">
              <label>Nom du Cours</label>
              <input 
                type="text" 
                placeholder="Ex: HTML, CSS, React..."
                value={courseName}
                onChange={(e) => setCourseName(e.target.value)}
                className="wa3r-input"
              />
            </div>

            <div className="wa3r-form-group">
              <label>Fichier (PDF,txt, Word...)</label>
              <div className="file-drop-area">
                <input 
                  type="file" 
                  onChange={(e) => setFile(e.target.files[0])}
                  className="wa3r-file-input"
                />
              </div>
            </div>

            {/* Bouton jdid b design wa3r */}
            <button type="submit" className="btn-wa3r">
              télecharger votre Cours
            </button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Documents;