import React, { useState, useContext } from 'react';
import CoursesCard from '../components/CoursesCard.jsx';
import { CoursesContext } from '../context/CoursesContext.jsx'; // Jbnah mn l'Context!

export default function Courses() {
  const { courses } = useContext(CoursesContext); // Hna kanchddo les cours
  const [sortOrder, setSortOrder] = useState('asc');
  const [layout, setLayout] = useState('grid');

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  const sortedCourses = [...courses].sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.title.localeCompare(b.title);
    } else {
      return b.title.localeCompare(a.title);
    }
  });

  return (
    <section id="courses" className="courses-section">
      <div className="section-header">
        <h2>Courses</h2>
        <div className="section-controls">
          <span onClick={toggleSortOrder} style={{ cursor: 'pointer' }}>
            Name {sortOrder === 'asc' ? '▲' : '▼'}
          </span>
          <button onClick={() => setLayout('list')} className={layout === 'list' ? 'active' : ''}>
            ☰
          </button>
          <button onClick={() => setLayout('grid')} className={layout === 'grid' ? 'active' : ''}>
            ☷
          </button>
        </div>
      </div>

      <div className={layout === 'grid' ? 'courses-grid' : 'courses-list'}>
        {sortedCourses.map((course) => (
          <CoursesCard
            key={course.title}
            title={course.title}
            icon={course.icon}
            bgColor={course.bgColor}
            date={course.date}
            size={course.size}
            layout={layout}
          />
        ))}
      </div>
    </section>
  );
}