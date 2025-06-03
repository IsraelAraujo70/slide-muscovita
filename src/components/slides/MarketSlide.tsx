import React from 'react';
import { motion } from 'framer-motion';

const MarketSlide: React.FC = () => {
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
    <div className="section section-market">
      <div className="container">
        <motion.h2 {...fadeInUp} className="section-title">
          ASPECTOS ECONÔMICOS
        </motion.h2>
        <motion.div {...slideInLeft} className="market-content">
          <h3>Fatores de Qualidade</h3>
          <ul>
            <li>Tamanho dos cristais</li>
            <li>Transparência</li>
            <li>Ausência de inclusões</li>
            <li>Propriedades elétricas</li>
          </ul>
        </motion.div>
        <motion.div {...slideInRight} className="market-trends">
          <h3>Tendências de Mercado</h3>
          <ul>
            <li>Crescimento na indústria eletrônica</li>
            <li>Demanda por cosméticos naturais</li>
            <li>Novos materiais compostos</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default MarketSlide;