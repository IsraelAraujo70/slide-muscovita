import React from 'react';
import { motion } from 'framer-motion';

const SustainabilitySlide: React.FC = () => {
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
    <div className="section section-sustainability">
      <div className="container">
        <motion.h2 {...fadeInUp} className="section-title">
          SUSTENTABILIDADE
        </motion.h2>
        <div className="sustainability-grid">
          <motion.div {...fadeIn} className="sust-card">
            <h3>Liderança em Sustentabilidade</h3>
            <p>Mineração ambientalmente responsável</p>
          </motion.div>
          <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="sust-card">
            <h3>Empoderamento Comunitário</h3>
            <p>Criação de empregos e educação</p>
          </motion.div>
          <motion.div {...fadeIn} transition={{ delay: 0.4 }} className="sust-card">
            <h3>Avanço Tecnológico</h3>
            <p>Automação e inteligência artificial</p>
          </motion.div>
          <motion.div {...fadeIn} transition={{ delay: 0.6 }} className="sust-card">
            <h3>Expansão Global</h3>
            <p>Novos mercados e parcerias</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SustainabilitySlide;