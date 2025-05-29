import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from './pages/LandingPage';
import TimerPage from './pages/TimerPage';
import RealtimePage from './pages/RealTime';
import NameInput from './components/NameInput';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/nameinput" element={<NameInput />} />
        <Route path="/timerpage" element={<TimerPage />} />
        <Route path="/realtime" element={<RealtimePage />} />

        <Route path="*" element={<LandingPage />} />
      </Routes>
    </Router>
  )
}

export default App
