import React from 'react';
import { motion } from 'framer-motion';

const IntroSlide: React.FC = () => {
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
    <div className="section section-intro">
      <div className="container">
        <motion.h1 {...fadeInUp} className="main-title">
          MUSCOVITA
        </motion.h1>
        <motion.h2 {...fadeIn} className="subtitle">
          Propriedades, Ocorrência e Aplicações Industriais
        </motion.h2>
        <motion.div {...fadeInUp} transition={{ delay: 0.3 }} className="seminar-info">
          <p>SEMINÁRIO DE MINERALOGIA APLICADA</p>
          <p className="professor">Prof. Dr. Fabiano Cabañas Navarro</p>
        </motion.div>
        <motion.div {...fadeIn} transition={{ delay: 0.6 }} className="authors">
          <p>Apresentado por:</p>
          <p>Pedro Henrique de Souza Moinhos</p>
          <p>Bruno Weslley Bruno Costa</p>
          <p>Israel Araujo Oliveira</p>
        </motion.div>
      </div>
    </div>
  );
};

export default IntroSlide;