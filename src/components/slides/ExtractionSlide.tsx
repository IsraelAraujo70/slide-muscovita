import React from 'react';
import { motion } from 'framer-motion';

const ExtractionSlide: React.FC = () => {
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
    <div className="section section-extraction">
      <div className="container">
        <motion.h2 {...fadeInUp} className="section-title">
          EXTRAÇÃO E BENEFICIAMENTO
        </motion.h2>
        <div className="process-flow">
          <motion.div {...slideInLeft} className="process-step">
            <h3>Lavra</h3>
            <p>Céu aberto | Subterrânea | Método seletivo</p>
          </motion.div>
          <motion.div {...fadeIn} transition={{ delay: 0.3 }} className="process-step">
            <h3>Beneficiamento</h3>
            <p>Britagem | Separação | Laminação | Classificação</p>
          </motion.div>
          <motion.div {...slideInRight} className="process-step">
            <h3>Controle de Qualidade</h3>
            <p>Análise granulométrica | Testes elétricos | Avaliação</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ExtractionSlide;