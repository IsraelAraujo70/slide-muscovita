import React from 'react';
import { motion } from 'framer-motion';

const PropertiesSlide: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const fadeIn = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: { duration: 0.8 }
  };

  return (
    <div className="section section-properties">
      <div className="container">
        <motion.h2 {...fadeInUp} className="section-title">
          PROPRIEDADES MINERALÓGICAS
        </motion.h2>
        <div className="properties-grid">
          <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="property-card">
            <h3>Propriedades Físicas</h3>
            <ul>
              <li>Sistema: Monoclínico</li>
              <li>Classe: Filossilicatos</li>
              <li>Fórmula: KAl₂(AlSi₃O₁₀)(OH)₂</li>
              <li>Dureza: 2-2,5 (Mohs)</li>
              <li>Densidade: 2,77-2,88 g/cm³</li>
            </ul>
          </motion.div>
          <motion.div {...fadeIn} transition={{ delay: 0.4 }} className="property-card">
            <h3>Propriedades Ópticas</h3>
            <ul>
              <li>Pleocroísmo: Fraco</li>
              <li>Birrefringência: 0,036-0,049</li>
              <li>nα = 1,552-1,576</li>
              <li>nβ = 1,582-1,615</li>
              <li>nγ = 1,587-1,618</li>
            </ul>
          </motion.div>
          <motion.div {...fadeIn} transition={{ delay: 0.6 }} className="property-card">
            <h3>Propriedades Elétricas</h3>
            <ul>
              <li>Resistividade: 10¹²-10¹⁶ Ω·cm</li>
              <li>Constante Dielétrica: 6-7</li>
              <li>Rigidez: 160-200 kV/mm</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PropertiesSlide;