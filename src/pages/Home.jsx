import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    // Función para manejar la redirección a ExampleComponent
    const handleSearch = (event) => {
        event.preventDefault(); // Prevenir el comportamiento por defecto del formulario
        navigate('/example', { state: { query: searchQuery } }); // Redirigir y pasar el término de búsqueda
    };

    // Función para manejar el botón "Voy a tener suerte"
    const handleLuckySearch = () => {
        navigate('/example', { state: { lucky: true, query: searchQuery } });
    };

    return (
        <div className="home-container">
            {/* Barra de navegación superior */}
            <div className="nav-container">
                <div className="nav-right">
                    <a href="#" className="nav-link">Gmail</a>
                    <a href="#" className="nav-link">Imágenes</a>
                    <button className="apps-button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M6 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" />
                            <path d="M6 13c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" />
                            <path d="M6 18c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" />
                        </svg>
                    </button>
                    <button>
                        
                    </button>

                 
                </div>
            </div>

            {/* Contenido principal centrado */}
            <div className="main-content">
                {/* Logo de Google */}
                <div className="logo-container">
                    <h1 className="google-logo">
                        <span className="blue">E</span>
                        <span className="red">d</span>
                        <span className="yellow">u</span>
                        <span className="blue">a</span>
                        <span className="green">r</span>
                        <span className="red">d</span>
                        <span className="blue">o</span>
                    </h1>
                </div>
                
                {/* Barra de búsqueda */}
                <div className="search-container">
                    <form onSubmit={handleSearch}>
                        <div className="search-wrapper">
                            <div className="search-bar">
                                {/* Icono de lupa */}
                                <svg className="search-icon" width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                                
                                <input
                                    type="text"
                                    className="search-input"
                                    placeholder="Buscar en Google"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                                
                                {/* Icono de micrófono */}
                                <svg className="mic-icon" width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                                </svg>
                            </div>
                            
                            <div className="button-container">
                                <button type="submit" className="google-button">
                                    Buscar con Google
                                </button>
                                <button type="button" className="google-button" onClick={handleLuckySearch}>
                                    Voy a tener suerte
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            
            {/* Footer simple */}
            <div className="footer">
                <div className="footer-content">
                    <div className="footer-links-left">
                        <button className="footer-link">Sobre Google</button>
                        <button className="footer-link">Publicidad</button>
                        <button className="footer-link">Negocios</button>
                    </div>
                    <div className="footer-links-right">
                        <button className="footer-link">Privacidad</button>
                        <button className="footer-link">Condiciones</button>
                        <button className="footer-link">Preferencias</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;