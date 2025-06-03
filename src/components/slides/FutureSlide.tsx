import React from 'react';
import { motion } from 'framer-motion';

const FutureSlide: React.FC = () => {
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
    <div className="section section-future">
      <div className="container">
        <motion.h2 {...fadeInUp} className="section-title">
          PERSPECTIVAS FUTURAS
        </motion.h2>
        <motion.div {...fadeIn} className="future-content">
          <h3>Oportunidades de Pesquisa</h3>
          <ul>
            <li>Nanocompósitos com muscovita</li>
            <li>Aplicações em energia renovável</li>
            <li>Materiais funcionais avançados</li>
            <li>Processos sustentáveis</li>
          </ul>
        </motion.div>
        <motion.div {...fadeInUp} transition={{ delay: 0.5 }} className="conclusion">
          <p>A muscovita representa um mineral de grande importância econômica e tecnológica, 
          com o Brasil posicionado estrategicamente no mercado global.</p>
        </motion.div>
      </div>
    </div>
  );
};

export default FutureSlide;