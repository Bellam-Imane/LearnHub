import React, { useState, useEffect } from 'react';

const ThemeToggler = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    useEffect(() => {
        document.body.className = theme;
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <button onClick={toggleTheme} className="theme-toggler">
            <span className="light-icon"></span>
            <span className="dark-icon"></span>
        </button>
    );
};

export default ThemeToggler;