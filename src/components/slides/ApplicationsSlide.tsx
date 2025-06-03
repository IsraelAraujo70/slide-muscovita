import React from 'react';
import { motion } from 'framer-motion';

const ApplicationsSlide: React.FC = () => {
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
    <div className="section section-applications">
      <div className="container">
        <motion.h2 {...fadeInUp} className="section-title">
          APLICAÇÕES INDUSTRIAIS
        </motion.h2>
        <div className="applications-grid">
          <motion.div {...fadeIn} className="app-card electric">
            <h3>Indústria Elétrica</h3>
            <p>Isolantes, Capacitores, Transformadores</p>
          </motion.div>
          <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="app-card paint">
            <h3>Tintas e Revestimentos</h3>
            <p>Pigmento nacarado, Anticorrosivo</p>
          </motion.div>
          <motion.div {...fadeIn} transition={{ delay: 0.4 }} className="app-card cosmetic">
            <h3>Cosmética</h3>
            <p>Maquiagem, Pós faciais, Sombras</p>
          </motion.div>
          <motion.div {...fadeIn} transition={{ delay: 0.6 }} className="app-card others">
            <h3>Outras Aplicações</h3>
            <p>Refratários, Borrachas, Plásticos</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationsSlide;