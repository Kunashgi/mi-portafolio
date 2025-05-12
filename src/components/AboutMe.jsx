import React from 'react';
import {
  FaWhatsapp, FaEnvelope, FaLinkedin, FaMapMarkerAlt,
  FaCalendarAlt, FaCode, FaReact, FaVuejs,
  FaAngular, FaPhp, FaPython, FaDocker
} from 'react-icons/fa';
import {
  SiExpress, SiMongodb, SiPostgresql, SiTypescript,
  SiLaravel, SiDjango
} from 'react-icons/si';
import './AboutMe.css';

const AboutMe = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const personalInfo = {
    name: "Eduardo Barrera",
    title: "Desarrollador Full Stack",
    bio: "Desarrollador Full Stack con experiencia en React, Vue, PostgreSQL, MongoDB y Express, además de conocimientosen Docker, Azure y Proxmox. Busco aportar mishabilidades en el desarrollo de soluciones webeficientes y escalables, con enfoque en la mejoracontinua y la experiencia del usuario.",
    phone: "+56920187752",
    email: "edubarr56@gmail.com",
    linkedin: "https://www.linkedin.com/in/eduardo-barrera-veloso-1783a5228/",
    location: "Nacimiento 1379 San Bernardo, Chile",
    birthdate: "12 de junio del 2000",
    profileImage: "https://media.licdn.com/dms/image/v2/D4E03AQEGXvt6KJ6A6w/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1671206785463?e=1750896000&v=beta&t=FWKrvTT_zgGf5I2hOLFw3vujZV7tsBqe5FP2bU7_pko",
    skillGroups: [
      {
        main: "JavaScript",
        icon: <FaCode />,
        frameworks: ["React", "Express", "Vue"],
        frameworkIcons: [<FaReact />, <SiExpress />, <FaVuejs />]
      },
      {
        main: "MongoDB",
        icon: <SiMongodb />,
        frameworks: [],
        frameworkIcons: []
      },
      {
        main: "PostgreSQL",
        icon: <SiPostgresql />,
        frameworks: [],
        frameworkIcons: []
      },
      {
        main: "TypeScript",
        icon: <SiTypescript />,
        frameworks: ["AngularJS"],
        frameworkIcons: [<FaAngular />]
      },
      {
        main: "PHP",
        icon: <FaPhp />,
        frameworks: ["Laravel", "Slim"],
        frameworkIcons: [<SiLaravel />, <FaCode />]
      },
      {
        main: "Python",
        icon: <FaPython />,
        frameworks: ["Django"],
        frameworkIcons: [<SiDjango />]
      },
      {
        main: "Docker",
        icon: <FaDocker />,
        frameworks: ["Nivel básico"],
        frameworkIcons: []
      }
    ]
  };

  const getWhatsAppLink = (phone) => {
    const cleanPhone = phone.replace(/[^0-9]/g, '');
    return `https://wa.me/${cleanPhone}`;
  };

  return (
    <div className="about-container">
      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img 
              src="/images/Maps.png" 
              alt="Mapa ampliado"
              className="modal-image"
            />
            <button className="close-button" onClick={() => setIsModalOpen(false)}>×</button>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="hero-section">
        <div className="container hero-container">
          <div className="hero-content">
            <h1>{personalInfo.name}</h1>
            <h2>{personalInfo.title}</h2>
            <p>{personalInfo.bio}</p>
          </div>
          <div className="hero-image-container">
            <img 
              src={personalInfo.profileImage} 
              alt={personalInfo.name} 
              className="profile-image"
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        <div className="container grid">
          {/* Información de contacto */}
          <div className="contact-info">
            <h3>Información de Contacto</h3>

            <div className="contact-item">
              <div className="icon-container whatsapp">
                <FaWhatsapp className="icon" />
              </div>
              <div className="contact-details">
                <p className="label">WhatsApp</p>
                <a 
                  href={getWhatsAppLink(personalInfo.phone)} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="link whatsapp"
                >
                  {personalInfo.phone}
                </a>
              </div>
            </div>

            <div className="contact-item">
              <div className="icon-container email">
                <FaEnvelope className="icon" />
              </div>
              <div className="contact-details">
                <p className="label">Email</p>
                <a href={`mailto:${personalInfo.email}`} className="link email">
                  {personalInfo.email}
                </a>
              </div>
            </div>

            <div className="contact-item">
              <div className="icon-container linkedin">
                <FaLinkedin className="icon" />
              </div>
              <div className="contact-details">
                <p className="label">LinkedIn</p>
                <a 
                  href={personalInfo.linkedin}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="link linkedin"
                >
                  Ver Perfil
                </a>
              </div>
            </div>

            <div className="contact-item">
              <div className="icon-container location">
                <FaMapMarkerAlt className="icon" />
              </div>
              <div className="contact-details">
                <p className="label">Ubicación</p>
                <p className="value">{personalInfo.location}</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="icon-container birthdate">
                <FaCalendarAlt className="icon" />
              </div>
              <div className="contact-details">
                <p className="label">Fecha de Nacimiento</p>
                <p className="value">{personalInfo.birthdate}</p>
              </div>
            </div>
          </div>

          {/* Mapa y Habilidades */}
          <div className="main-info">
            <div className="map-section card">
              <h3>Mi Ubicación</h3>
              <div className="map-container">
                <img 
                  src="/images/Maps.png" 
                  alt="Mapa de ubicación"
                  className="static-map"
                  onClick={() => setIsModalOpen(true)}
                />
              </div>
              <p className="map-note">* Ubicación aproximada</p>
            </div>

            <div className="skills-section card">
              <div className="section-header">
                <FaCode className="section-icon" />
                <h3>Habilidades Técnicas</h3>
              </div>
              <div className="skills-icons-grid">
                {personalInfo.skillGroups.map((skillGroup, index) => (
                  <div key={index} className="skill-group">
                    <div className="skill-icon-container">
                      {skillGroup.icon}
                    </div>
                    <div className="skill-info">
                      <h4 className="skill-name">{skillGroup.main}</h4>
                      {skillGroup.frameworks.length > 0 && (
                        <div className="skill-frameworks">
                          <div className="framework-icons">
                            {skillGroup.frameworkIcons.map((icon, i) => (
                              <span key={i} className="framework-icon">{icon}</span>
                            ))}
                          </div>
                          <span className="framework-names">
                            {skillGroup.frameworks.join(', ')}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} {personalInfo.name}. Todos los derechos reservados.</p>
          <p className="footer-note">Desarrollado con React</p>
        </div>
      </footer>
    </div>
  );
};

export default AboutMe;
