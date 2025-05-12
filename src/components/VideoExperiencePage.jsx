import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import './VideoExperiencePage.css'; // Asegúrate de tener este archivo CSS para estilos

const VideoExperiencePage = () => {
    const location = useLocation();
    const { tabName, query } = location.state || { tabName: 'Pestaña', query: '' };

    return (
        <div className="tab-container">
            <div className="tab-header">
                <Link to="/example" state={{ query }} className="back-link">
                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Volver a resultados
                </Link>
            </div>
            
            <div className="video-experience-container">
                <h1 className="experience-title">Experiencia Laboral: Nov 2023 - Feb 2025 </h1>
                
                <div className="video-container">
                    <video 
                        controls 
                        className="centered-video"
                        width="640"
                        height="360"
                        src="/videos/mi-video.mp4" // Ruta al video en tu computadora
                    >
                        Tu navegador no soporta el elemento de video.
                    </video>
                </div>
                
                <div className="video-description">
                <p className="description">
  Desarrollo de plataformas web utilizando React, MongoDB y Express, implementando soluciones eficientes y escalables. Cuento con manejo básico de Docker para la creación y despliegue de contenedores, así como experiencia en el modelamiento de bases de datos relacionales y análisis de datos para su correcto llenado. También he realizado el levantamiento de servidores físicos pequeños utilizando Proxmox y he participado en proyectos web que se encuentran publicados y accesibles para el público general.
</p>

                </div>
                
                <div className="external-link">
                    <a 
                        href="https://prometea.uautonoma.cl/home" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="youtube-link"
                    >
                        Ir al sitio web oficial del proyecto
                    </a>
                </div>
            </div>
        </div>
    );
};

export default VideoExperiencePage;