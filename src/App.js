// src/App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Splash from './components/Splash/mainSplash';
import SignUp from './components/Auth/signup';
import { OnboardingPart1 } from './components/Onboarding/onboarding1';
import { OnboardingPart2 } from './components/Onboarding/onboarding2';
import { OnboardingPart3 } from './components/Onboarding/onboarding3';
import { OnboardingPart4 } from './components/Onboarding/onboarding4';

function App() {
  const [currentScreen, setCurrentScreen] = useState(1);

  const handleNext = () => {
    setCurrentScreen((prevScreen) => prevScreen + 1);
  };

  const handleBack = () => {
    setCurrentScreen((prevScreen) => prevScreen - 1);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/onboarding1"
          element={<OnboardingPart1 onNext={handleNext} />}
        />
        <Route
          path="/onboarding2"
          element={<OnboardingPart2 onNext={handleNext} onBack={handleBack} currentScreen={currentScreen} />}
        />
        <Route
          path="/onboarding3"
          element={<OnboardingPart3 onNext={handleNext} onBack={handleBack} currentScreen={currentScreen} />}
        />
        <Route
          path="/onboarding4"
          element={<OnboardingPart4 onNext={handleNext} onBack={handleBack} currentScreen={currentScreen} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
