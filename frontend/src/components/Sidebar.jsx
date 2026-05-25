import { Link } from 'react-router-dom';

export default function Sidebar() {
    return (
        <aside className="sidebar">
            <div className="sidebar-header">
                <div className="logo">Storage</div>
            </div>
            <nav className="sidebar-nav">
                <ul>
                    {/* Darna Link to="/" bach trj3na l Dashboard (Home) */}
                    <li><Link to="/">Dashboard</Link></li>
                    
                    {/* Link to="/documents" bach tdina l page jdida */}
                    <li><Link to="/documents">Documents</Link></li>
                    
                    <li><Link to="/video-audio">Video, Audio</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link to="/others">Others</Link></li>
                </ul>
            </nav>
            <div className="sidebar-footer">
                <div className="folder-icon"></div>
            </div>
        </aside>
    )
}