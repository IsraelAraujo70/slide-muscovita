import React from 'react';
import { motion } from 'framer-motion';

const ReservesSlide: React.FC = () => {
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
    <div className="section section-reserves">
      <div className="container">
        <motion.h2 {...fadeInUp} className="section-title">
          DISTRIBUIÇÃO MUNDIAL
        </motion.h2>
        <motion.div {...fadeIn} className="world-map">
          <div className="country-highlight brazil">
            <h3>Brasil</h3>
            <ul>
              <li>Minas Gerais</li>
              <li>Bahia</li>
              <li>Ceará</li>
            </ul>
          </div>
          <div className="major-deposits">
            <h3>Maiores Depósitos</h3>
            <div className="countries-grid">
              <span>África do Sul</span>
              <span>Brasil</span>
              <span>Índia</span>
              <span>Rússia</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ReservesSlide;