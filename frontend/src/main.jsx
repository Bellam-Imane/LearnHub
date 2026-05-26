
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css'; // Wla l'fichier css l'asli dyalk
import { CoursesProvider } from './context/CoursesContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Hna lweyna l'application kamla b Sndoq Global */}
    <CoursesProvider>
      <App />
    </CoursesProvider>
  </React.StrictMode>
);

