import React, { createContext, useState } from 'react';
import { courses as initialCourses } from '../data/courses.js'; 



// Vite
// eslint-disable-next-line react-refresh/only-export-components
export const CoursesContext = createContext();

export const CoursesProvider = ({ children }) => {
  const [courses, setCourses] = useState(initialCourses);

  const addCourse = (course) => {
    setCourses((prevCourses) => [...prevCourses, course]);
  };

  return (
    <CoursesContext.Provider value={{ courses, addCourse }}>
      {children}
    </CoursesContext.Provider>
  );
};