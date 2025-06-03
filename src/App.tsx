import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import { motion } from 'framer-motion';
import './App.css';

const App: React.FC = () => {
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
    <ReactFullpage
      licenseKey={'YOUR_KEY_HERE'}
      credits={{ enabled: false }}
      scrollingSpeed={1000}
      navigation
      navigationTooltips={[
        'Introdução',
        'História',
        'Propriedades',
        'Ocorrência',
        'Reservas',
        'Extração',
        'Aplicações',
        'Mercado',
        'Sustentabilidade',
        'Futuro'
      ]}
      showActiveTooltip
      render={() => {
        return (
          <ReactFullpage.Wrapper>
            {/* Seção 1: Introdução */}
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

            {/* Seção 2: História */}
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

            {/* Seção 3: Propriedades */}
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

            {/* Seção 4: Ocorrência */}
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

            {/* Seção 5: Reservas */}
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

            {/* Seção 6: Extração */}
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

            {/* Seção 7: Aplicações */}
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

            {/* Seção 8: Mercado */}
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

            {/* Seção 9: Sustentabilidade */}
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

            {/* Seção 10: Futuro */}
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
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
};

export default App;
