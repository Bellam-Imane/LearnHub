import React from 'react';
import { FiPlayCircle, FiHeadphones, FiPlus } from 'react-icons/fi';

const Media = () => {
  return (
    <div className="courses-section">
      <div className="section-header">
        <h2>Video & Audio</h2>
        {/* Bouton sghir b design jdid bach tzid media */}
        <button className="upload-button" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <FiPlus /> Ajouter Media
        </button>
      </div>

      <div className="media-grid">
        
        {/* Carte dyal Video */}
        <div className="media-card">
          <div className="media-thumbnail video-thumb">
            <FiPlayCircle className="play-icon" />
          </div>
          <div className="media-info">
            <h4>React JS - Les bases (Darija)</h4>
            <p>Video • 45 min</p>
          </div>
        </div>

        {/* Carte dyal Audio / Podcast */}
        <div className="media-card">
          <div className="media-thumbnail audio-thumb">
            <FiHeadphones className="play-icon" />
          </div>
          <div className="media-info">
            <h4>Podcast: Datasicence partie-1 </h4>
            <p>Audio • 20 min</p>
          </div>
        </div>

        {/* Carte Video 2 */}
        <div className="media-card">
          <div className="media-thumbnail video-thumb">
            <FiPlayCircle className="play-icon" />
          </div>
          <div className="media-info">
            <h4>module CSS/HTML</h4>
            <p>Video • 15 min</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Media;