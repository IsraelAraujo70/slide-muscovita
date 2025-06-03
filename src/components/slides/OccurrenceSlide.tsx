import React from 'react';
import { motion } from 'framer-motion';

const OccurrenceSlide: React.FC = () => {
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

  const slideInLeft = {
    initial: { x: -100, opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
    transition: { duration: 0.7 }
  };

  const slideInRight = {
    initial: { x: 100, opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
    transition: { duration: 0.7 }
  };

  return (
    <div className="section section-occurrence">
      <div className="container">
        <motion.h2 {...fadeInUp} className="section-title">
          GÊNESE E OCORRÊNCIA
        </motion.h2>
        <div className="occurrence-grid">
          <motion.div {...slideInLeft} className="occurrence-card">
            <h3>Rochas Metamórficas</h3>
            <ul>
              <li>Xistos micáceos</li>
              <li>Gnaisses</li>
              <li>Quartzitos</li>
              <li>Filitos</li>
            </ul>
          </motion.div>
          <motion.div {...fadeIn} className="occurrence-card">
            <h3>Rochas Ígneas</h3>
            <ul>
              <li>Pegmatitos graníticos</li>
              <li>Granitos</li>
              <li>Aplitos</li>
            </ul>
          </motion.div>
          <motion.div {...slideInRight} className="occurrence-card">
            <h3>Processos Hidrotermais</h3>
            <ul>
              <li>Alteração de feldspatos</li>
              <li>Sericitização</li>
              <li>Veios de baixa temperatura</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default OccurrenceSlide;