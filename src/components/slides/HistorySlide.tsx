import React from 'react';
import { motion } from 'framer-motion';

const HistorySlide: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
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
    <div className="section section-history">
      <div className="container">
        <motion.h2 {...fadeInUp} className="section-title">
          CONTEXTO HISTÓRICO
        </motion.h2>
        <motion.div {...slideInLeft} className="content-box">
          <h3>Primeiros Relatos - Século XVII</h3>
          <ul>
            <li>Muscovy Glass</li>
            <li>Cat Silver</li>
            <li>Lapis Specularis</li>
          </ul>
        </motion.div>
        <motion.div {...slideInRight} className="content-box">
          <h3>Johann Gottfried Schmeisser - 1794</h3>
          <p>Primeira utilização oficial do termo "muscovita"</p>
          <p>Derivado de "Muscovy Glass" - referência às folhas translúcidas utilizadas como vidros em janelas na Rússia</p>
        </motion.div>
      </div>
    </div>
  );
};

export default HistorySlide;