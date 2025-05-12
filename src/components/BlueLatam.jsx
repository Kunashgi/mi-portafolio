import { useState } from 'react';
import { Code, Database, Users } from 'lucide-react';
import './BlueLatam.css';

export default function BlueLatam() {
  const [activeTab, setActiveTab] = useState('desarrollo');
  
  const linkedInProfileUrl = "https://www.linkedin.com/in/eduardo-barrera-veloso-1783a5228/";
  
  const tabs = [
    { id: 'desarrollo', icon: <Code size={24} />, title: 'Desarrollo Web' },
    { id: 'database', icon: <Database size={24} />, title: 'Base de Datos' },
    { id: 'team', icon: <Users size={24} />, title: 'Trabajo en Equipo' }
  ];

  const experienceContent = {
    desarrollo: {
      title: 'Desarrollo Web Personalizado',
      description: 'Desarrollé diversos proyectos web personalizados para clientes utilizando Vue (JavaScript) y Django (Python).',
      skills: ['Vue.js', 'JavaScript', 'Django', 'Python', 'Frontend', 'Backend']
    },
    database: {
      title: 'Gestión de Bases de Datos',
      description: 'Implementé bases de datos en SQL, optimizando consultas para mejorar el rendimiento y garantizar la integridad de la información.',
      skills: ['SQL', 'Optimización de consultas', 'Modelado de datos', 'Integridad referencial']
    },
    team: {
      title: 'Colaboración en Equipo',
      description: 'Trabajé en equipo para diseñar e implementar soluciones técnicas eficientes, adaptadas a las necesidades específicas de cada cliente.',
      skills: ['Metodologías ágiles', 'Comunicación', 'Gestión de proyectos', 'Solución de problemas']
    }
  };

  return (
    <div className="experience-container">
      <div className="experience-card">
        <div className="card-header">
          <h2>Experiencia Profesional</h2>
          <p>Desarrollador Full Stack en Blue Latam</p>
        </div>
        
        <div className="card-body">
          <div className="tabs">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`tab ${activeTab === tab.id ? 'active-tab' : ''}`}
              >
                <span className="tab-icon">{tab.icon}</span>
                {tab.title}
              </button>
            ))}
          </div>
          
          <div className="content">
            <h3>{experienceContent[activeTab].title}</h3>
            <p className="description">{experienceContent[activeTab].description}</p>
            
            <div className="skills-section">
              <h4>Habilidades & Tecnologías</h4>
              <div className="skills-container">
                {experienceContent[activeTab].skills.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="card-footer">
          <div className="footer-content">
            <div>
              <span className="period-label">Periodo:</span>
              <span className="period-value">Ene 2022 - Mar 2022</span>
            </div>
            <a 
              href={linkedInProfileUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="details-button"
            >
              Ver más detalles
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}