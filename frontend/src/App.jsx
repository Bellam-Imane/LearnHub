import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Sidebar from './components/Sidebar.jsx';
import Header from './components/Header.jsx';
import Courses from "./pages/Courses.jsx"; 
import Documents from "./pages/Documents.jsx"; 
import Media from './pages/Media.jsx';

import "./App.css";

function App() {
  return (
    <Router>
      {/* page-wrapper hiya li katjm3 Sidebar m3a li ba9yiin */}
      <div className="page-wrapper"> 
        <Sidebar />
        
        {/* main-content hiya li katched l'blassa li chaita w fiha l'Header w l'Courses */}
        <div className="main-content">
          <Header />
          
          <Routes>
            <Route path="/" element={<Courses />} />
            <Route path="/documents" element={<Documents />} />
            <Route path="/video-audio" element={<Media />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;