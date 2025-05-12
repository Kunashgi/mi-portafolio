import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ExampleComponent from './pages/ExampleComponent';
import TabComponent from './components/AboutMe';
import TabComponent2 from './components/VideoExperiencePage';
import TabComponent3 from './components/ImageCarouselComponent';
import TabComponent4 from './components/BlueLatam';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/example" element={<ExampleComponent />} />+
        <Route path="/tab" element={<TabComponent />} />
        <Route path="/tab2" element={<TabComponent2 />} />
        <Route path="/tab3" element={<TabComponent3 />} />
        <Route path="/tab4" element={<TabComponent4 />} />
      </Routes>
    </Router>
  );
}

export default App;