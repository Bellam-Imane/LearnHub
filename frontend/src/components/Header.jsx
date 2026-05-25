import React, { useRef } from 'react';
import ThemeToggler from './ThemeToggler';

export default function Header() {
    const fileInputRef = useRef(null);

    const handleUploadClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            console.log('Selected file:', file.name);
            // You can add your file upload logic here
        }
    };

    return (
        <header className="main-header">
            <div className="search-bar">
                <input type="text" placeholder="Search..." />
            </div>
            <div className="header-actions">
                <ThemeToggler />
                <input
                    type="file"
                    ref={fileInputRef}
                    style={{ display: 'none' }}
                    onChange={handleFileChange}
                />
                <button className="upload-button" onClick={handleUploadClick}>Upload</button>
                <div className="user-profile">
                    <span className="user-avatar">MI</span>
                    <span className="user-name">Mitchel</span>
                </div>
            </div>
        </header>
    )
}
