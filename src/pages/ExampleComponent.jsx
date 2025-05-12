import React from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import './ExampleComponent.css';

const ExampleComponent = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { query, lucky } = location.state || { query: '', lucky: false };
    const [searchInput, setSearchInput] = React.useState(query);

    // Manejar nueva búsqueda
    const handleSearch = (e) => {
        e.preventDefault();
        // Actualizamos la página con la nueva búsqueda
        navigate('/example', { state: { query: searchInput, lucky: false }, replace: true });
    };

    // Manejar navegación a pestañas
const handleTabClick = (tabName) => {
    const tabRoutes = {
        'Resultado1': '/tab',
        'Resultado2': '/tab2',
        'Resultado3': '/tab3',
        'Resultado4': '/tab4',
        'Maps': '/tab5',
        'Más': '/tab6',
    };

    const route = tabRoutes[tabName] || '/tab';
    navigate(route, { state: { query: searchInput } });
};

    return (
        <div className="search-results-container">
            {/* Barra superior de búsqueda */}
            <div className="search-header">
                <div className="search-header-top">
                    <div className="search-header-logo">
                        <Link to="/">
                            <div className="mini-google-logo">
                            <span className="blue">E</span>
                        <span className="red">d</span>
                        <span className="yellow">u</span>
                        <span className="blue">a</span>
                        <span className="green">r</span>
                        <span className="red">d</span>
                        <span className="blue">o</span>
                            </div>
                        </Link>
                    </div>
                    <div className="search-header-bar">
                        <form onSubmit={handleSearch}>
                            <div className="search-input-container">
                                <input
                                    type="text"
                                    className="search-header-input"
                                    value={searchInput}
                                    onChange={(e) => setSearchInput(e.target.value)}
                                />
                                <div className="search-header-icons">
                                    <button type="button" className="clear-button" onClick={() => setSearchInput('')}>
                                        <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                    <div className="divider"></div>
                                    <button type="button" className="mic-button">
                                        <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                                        </svg>
                                    </button>
                                    <button type="submit" className="search-button">
                                        <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="search-header-actions">
                        <button className="header-button">
                            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </button>
                    </div>
                </div>
                
                {/* Navegación de pestañas */}
                <div className="search-tabs">
                    <div className="tab active" onClick={() => handleTabClick("Todo")}>
                        <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        Todo
                    </div>
                    <div className="tab" onClick={() => handleTabClick("Imágenes")}>
                        <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        Imágenes
                    </div>
                    <div className="tab" onClick={() => handleTabClick("Videos")}>
                        <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                        Videos
                    </div>
                    <div className="tab" onClick={() => handleTabClick("Noticias")}>
                        <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                        </svg>
                        Noticias
                    </div>
                    <div className="tab" onClick={() => handleTabClick("Maps")}>
                        <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                        </svg>
                        Maps
                    </div>
                    <div className="tab" onClick={() => handleTabClick("Más")}>
                        <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                        </svg>
                        Más
                    </div>
                </div>
            </div>

            {/* Resultados de búsqueda */}
            <div className="search-results">
                <div className="search-info">
                    Aproximadamente 4 resultados para <strong>"{query}"</strong> (0,52 segundos)
                </div>

                {/* Lista de resultados */}
                <div className="search-result-items">
                    <div className="search-result-item" >
                        <div className="search-result-url">
                            <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101" />
                            </svg>
                            www.sobremi.com › resultados para conocerme un poco más
                        </div>
                        <h3 className="search-result-title">
                            <a onClick={() => handleTabClick('Resultado1')} style={{ cursor: 'pointer' }}>
                                Sobre mi
                            </a>
                        </h3>
                        <p className="search-result-description">
                            Esta es una página encontrarás informacion respecto a mi persona, como mis experiencias, habilidades, fecha de nacimiento, entre otras cosas
                            de manera bastante resumida.
                        </p>
                    </div>

                    <div className="search-result-item">
                        <div className="search-result-url">
                            <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101" />
                            </svg>
                            www.observatorio.cl › mi experiencia laboral mas reciente
                        </div>
                        <h3 className="search-result-title">
                            <a onClick={() => handleTabClick('Resultado2')} style={{ cursor: 'pointer' }}>
                                Observatorio Prometea: Universidad Autónoma de Chile
                            </a>
                        </h3>
                        <p className="search-result-description">
                           Aquí encontraras informacion de mi ultimo trabajo realizado, las tecnologias aplicadas, entre mas cosas.
                        </p>
                    </div>

                    <div className="search-result-item">
                        <div className="search-result-url">
                            <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101" />
                            </svg>
                            www.camiongo.cl ›  trabajo de titulo / tesis
                        </div>
                        <h3 className="search-result-title">
                            <a onClick={() => handleTabClick('Resultado3')} style={{ cursor: 'pointer' }}>
                                CamionGO Monitoreo GPS
                            </a>
                        </h3>
                        <p className="search-result-description">
                            Trabajo realizado como tesis y practica en la universidad
                        </p>
                    </div>

                    <div className="search-result-item">
                        <div className="search-result-url">
                            <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101" />
                            </svg>
                            www.blultam.cl › primera practica profesional
                        </div>
                        <h3 className="search-result-title">
                        <a onClick={() => handleTabClick('Resultado4')} style={{ cursor: 'pointer' }}>    
                                BlueLatam 
                            </a>
                        </h3>
                        <p className="search-result-description">
                            Mi primera experiencia laboral, y practica profesional
                        </p>
                    </div>
                </div>

                {/* Paginación */}
                <div className="search-pagination">
                    <div className="pagination-logo">
                        <div className="blue">G</div>
                        <div className="red">o</div>
                        <div className="yellow">o</div>
                        <div className="blue">g</div>
                        <div className="green">l</div>
                        <div className="red">e</div>
                    </div>
                    <div className="pagination-pages">
                        <span className="page active">1</span>
                        <span className="page">2</span>
                        <span className="page">3</span>
                        <span className="page">4</span>
                        <span className="page">5</span>
                        <span className="page">6</span>
                        <span className="page">7</span>
                        <span className="page">8</span>
                        <span className="page">9</span>
                        <span className="page">10</span>
                        <span className="next">Siguiente</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExampleComponent;