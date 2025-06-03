import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import './App.css';

// Import all slide components
import IntroSlide from './components/slides/IntroSlide';
import HistorySlide from './components/slides/HistorySlide';
import PropertiesSlide from './components/slides/PropertiesSlide';
import OccurrenceSlide from './components/slides/OccurrenceSlide';
import ReservesSlide from './components/slides/ReservesSlide';
import ExtractionSlide from './components/slides/ExtractionSlide';
import ApplicationsSlide from './components/slides/ApplicationsSlide';
import MarketSlide from './components/slides/MarketSlide';
import SustainabilitySlide from './components/slides/SustainabilitySlide';
import FutureSlide from './components/slides/FutureSlide';

const App: React.FC = () => {
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
            <IntroSlide />
            <HistorySlide />
            <PropertiesSlide />
            <OccurrenceSlide />
            <ReservesSlide />
            <ExtractionSlide />
            <ApplicationsSlide />
            <MarketSlide />
            <SustainabilitySlide />
            <FutureSlide />
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
};

export default App;
