import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faAtom,
  faLightbulb,
  faArrowsToCircle,
  faArrowsTurnToDots,
  faDiagramProject
} from '@fortawesome/free-solid-svg-icons';
import '../styles/pages/Fusion.css';

const FusionPage = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      icon: faAtom,
      title: "First Principles",
      description: "Break down complicated problems into their most fundamental truths."
    },
    {
      icon: faArrowsTurnToDots,
      title: "Deconstruction",
      description: "Separate the underlying facts from assumptions and conventional wisdom."
    },
    {
      icon: faArrowsToCircle,
      title: "Reconstruction",
      description: "Reassemble the elements from the ground up to create new solutions."
    },
    {
      icon: faDiagramProject,
      title: "Innovation",
      description: "Build novel approaches that challenge existing paradigms."
    }
  ];

  return (
    <div className="content-container">
      <div className="fusion-container">
        <div className="fusion-header">
          <h1>Fusion</h1>
          <p className="subtitle">Where inputs and outputs converge through first principles thinking</p>
        </div>

        <div className="principles-container">
          <div className="quote-box">
            <FontAwesomeIcon icon={faLightbulb} className="quote-icon" />
            <blockquote>
              "First-principles thinking is one of the best ways to reverse-engineer complicated problems and unleash creative possibility."
              <footer>- Ray Dalio</footer>
            </blockquote>
          </div>

          <div className="visualization-container">
            {steps.map((step, index) => (
              <div 
                key={index}
                className={`principle-step ${index === activeStep ? 'active' : ''} 
                           ${index < activeStep ? 'completed' : ''}`}
                onClick={() => setActiveStep(index)}
              >
                <div className="step-icon">
                  <FontAwesomeIcon icon={step.icon} />
                </div>
                <div className="step-content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
                {index < steps.length - 1 && <div className="connector-line" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FusionPage;