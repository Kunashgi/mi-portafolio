import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import './ImageCarouselComponent.css'; // Asegúrate de tener este archivo CSS para estilos

const ImageCarouselComponent = () => {
    const location = useLocation();
    const { query } = location.state || { tabName: 'Presentación', query: '' };

    // Descripción fija que permanecerá igual para todas las diapositivas
    const fixedDescription = "Realicé el mantenimiento de la página web principal de la empresa CamionGo utilizando React (JavaScript) y Laravel (PHP), contribuyendo significativamente a la mejora del rendimiento y la experiencia del usuario. Además, participé en el desarrollo de un módulo de monitoreo GPS implementado con AngularJS (TypeScript) y Slim (PHP), logrando una integración eficiente con los sistemas de rastreo. También colaboré en la optimización de flujos internos para la gestión de transportistas y generadores de carga, facilitando el registro y la organización de viajes dentro del sistema.";

    // Define las imágenes para el carrusel (ajusta las rutas a donde tengas tus imágenes)
    const images = [
        {
            src: "/images/Imagen1.png",
            title: "Visualizacón de las entregas en curso"
        },
        {
            src: "/images/Imagen2.png",
            title: "Ejemplo de busqueda por patente"
        },
        {
            src: "/images/Imagen3.png",
            title: "Visualizacion con el monitoreo GPS"
        },
        {
            src: "/images/Imagen4.png",
            title: "Asignación de coordinador"
        },
        {
            src: "/images/Imagen5.png",
            title: "Mapa GPS en tiempo real"
        },
        {
            src: "/images/Imagen6.png",
            title: "Detalles adicionales"
        },
        {
            src: "/images/Imagen7.png",
            title: "Historial"
        },
        {
            src: "/images/Imagen8.png",
            title: "Busqueda por patente y mapa GPS"
        },
        {
            src: "/images/Imagen9.png",
            title: "Visualización cuando un vehiculo no cuenta con GPS"
        },
        {
            src: "/images/Imagen10.png",
            title: "Busqueda por patente y mapa GPS"
        },
        {
            src: "/images/Imagen11.png",
            title: "Visualizacion panel completo"
        }
    ];

    // Estados para manejar la diapositiva actual y el modo pantalla completa
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isFullscreen, setIsFullscreen] = useState(false);

    // Funciones para navegar entre diapositivas
    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
    };

    // Función para saltar a una diapositiva específica
    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    // Función para alternar el modo pantalla completa
    const toggleFullscreen = () => {
        setIsFullscreen(!isFullscreen);
    };

    // Función para manejar las teclas en modo pantalla completa
    const handleKeyDown = (e) => {
        if (isFullscreen) {
            if (e.key === 'Escape') {
                setIsFullscreen(false);
            } else if (e.key === 'ArrowRight') {
                nextSlide();
            } else if (e.key === 'ArrowLeft') {
                prevSlide();
            }
        }
    };

    // Efecto para añadir event listener para teclas
    React.useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isFullscreen, currentSlide]);

    return (
        <div className="tab-container">
            {isFullscreen ? (
                <div className="fullscreen-mode" onClick={toggleFullscreen}>
                    <div className="fullscreen-image-container" onClick={(e) => e.stopPropagation()}>
                        <img 
                            src={images[currentSlide].src} 
                            alt={`Diapositiva ${currentSlide + 1}`} 
                            className="fullscreen-image"
                        />
                        <div className="fullscreen-controls">
                            <button className="fullscreen-nav-button prev-button" onClick={(e) => { e.stopPropagation(); prevSlide(); }}>
                                <svg width="36" height="36" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <div className="fullscreen-info">
                                <h3>{images[currentSlide].title}</h3>
                                <div className="fullscreen-counter">{currentSlide + 1} / {images.length}</div>
                            </div>
                            <button className="fullscreen-nav-button next-button" onClick={(e) => { e.stopPropagation(); nextSlide(); }}>
                                <svg width="36" height="36" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                            <button className="exit-fullscreen-button" onClick={(e) => { e.stopPropagation(); toggleFullscreen(); }}>
                                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <>
                    <div className="tab-header">
                        <Link to="/example" state={{ query }} className="back-link">
                            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            Volver a resultados
                        </Link>
                        <h1 className="tab-title">
                            Experiencia Laboral: Ene 2023 - Jun 2023
                        </h1>
                    </div>
                    
                    <div className="carousel-container">
                        <div className="carousel-slide">
                            <div className="image-container">
                                <img 
                                    src={images[currentSlide].src} 
                                    alt={`Diapositiva ${currentSlide + 1}`} 
                                    className="carousel-image"
                                />
                                <button className="fullscreen-button" onClick={toggleFullscreen}>
                                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
                                    </svg>
                                </button>
                            </div>
                            
                            <div className="slide-content">
                                <h2 className="slide-title">{images[currentSlide].title}</h2>
                                <p className="slide-description">{fixedDescription}</p>
                                
                                <div className="youtube-link-container">
                                    <a 
                                        href="https://camiongo.com/" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="youtube-link"
                                    >
                                        Visitar sitio web de la empresa
                                        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="external-link-icon">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        
                        <div className="carousel-controls">
                            <button className="carousel-button prev-button" onClick={prevSlide}>
                                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                                Anterior
                            </button>
                            
                            <div className="slide-indicators">
                                {images.map((_, index) => (
                                    <button 
                                        key={index} 
                                        className={`slide-indicator ${currentSlide === index ? 'active' : ''}`}
                                        onClick={() => goToSlide(index)}
                                    />
                                ))}
                            </div>
                            
                            <button className="carousel-button next-button" onClick={nextSlide}>
                                Siguiente
                                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                        
                        <div className="slide-counter">
                            {currentSlide + 1} / {images.length}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default ImageCarouselComponent;