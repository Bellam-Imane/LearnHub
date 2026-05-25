import Header from '../components/Header.jsx'
import Courses from './Courses.jsx'
import Sidebar from '../components/Sidebar.jsx'

export default function Homepage() {
    return (
        <div className="page-wrapper">
            <Sidebar />
            <main className="main-content">
                <Header />
                <Courses />
            </main>
        </div>
    )
}
