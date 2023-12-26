// src/App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Splash from './components/Splash/mainSplash';
import SignUp from './components/Auth/signup';
import { OnboardingPart1 } from './components/Onboarding/onboarding1';
import { OnboardingPart2 } from './components/Onboarding/onboarding2';
import { OnboardingPart3 } from './components/Onboarding/onboarding3';
import { OnboardingPart4 } from './components/Onboarding/onboarding4';
import HomeScreen from './components/Home/shipphome';
import Settings from './components/Settings/settings';
import { Messages } from './components/Messages/matches';
import { Chatscreen } from './components/Messages/chatscreen';
import { MyLinkups } from './components/Calendar/linkups';
import { MatchScreen } from './components/Matches/singlematch';
import { GroupMatchScreen } from './components/Matches/groupmatch';
import { UnmatchPopUp } from './components/Popups/unmatch';
import { BlockPopUp } from './components/Popups/blocker';
import { BlockDonePopUp } from './components/Popups/blocker2';
import PersonalityQuiz from './components/Personality Quiz/quiz';
import { TakeQuiz } from './components/Personality Quiz/takequiz';
import MyAccount from './components/Account/myaccount';
import SetLinkupPopup from './components/Popups/setLinkup';
import OnboardingSplash from './components/Splash/splash1';
import OnboardingSplash2 from './components/Splash/splash2';
import OnboardingSplash3 from './components/Splash/splash3';
import UploadContentPopup from './components/Popups/uploadcontent';
import ConnectTweetPopup from './components/Popups/connecttweet';
import ConnectTikTokPopup from './components/Popups/connecttiktok';
import ProfilePromptsPopup from './components/Popups/profileprompts';
import AnswerPromptPopup from './components/Popups/answerprompt';
import SpotifyPromptPopup from './components/Popups/spotifyprompt';
import ExpandedScreen from './components/Home/expandedhome';
import { DeletePopUp } from './components/Popups/deleteacc';
import { SpecialAccessPopUp } from './components/Popups/specialacc';
import Chat from './components/Messages/2chatscreen';
import OTPScreen from './components/Auth/otp';



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
        <Route path="/splash" element={<Splash />} />
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
        <Route path="/shipphome" element={<HomeScreen />} />
        <Route path="/otp" element={<OTPScreen />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/chatscreen" element={<Chatscreen />} />
        <Route path="/mylinkups" element={<MyLinkups />} />
        <Route path="matchscreen" element={<MatchScreen />} />
        <Route path="groupmatchscreen" element={<GroupMatchScreen />} />
        <Route path="unmatchpopup" element={<UnmatchPopUp />} />
        <Route path="blockpopup" element={<BlockPopUp />} />
        <Route path="blockdonepopup" element={<BlockDonePopUp />} />
        <Route path="personalityquiz" element={<PersonalityQuiz />} />
        <Route path="takequiz" element={<TakeQuiz />} />
        <Route path="myprofile" element={<MyAccount />} />
        <Route path="setlinkup" element={<SetLinkupPopup />} />
        <Route path="splash1" element={<OnboardingSplash />} />
        <Route path="splash2" element={<OnboardingSplash2 />} />
        <Route path="splash3" element={<OnboardingSplash3 />} />
        <Route path="uploadcontent" element={<UploadContentPopup/>} />
        <Route path="connecttweet" element={<ConnectTweetPopup/>} />
        <Route path="connecttiktok" element={<ConnectTikTokPopup/>} />
        <Route path="profileprompts" element={<ProfilePromptsPopup/>} />
        <Route path="answerprompt" element={<AnswerPromptPopup/>} />
        <Route path="spotifyprompt" element={<SpotifyPromptPopup/>} />
        <Route path="profileexpanded" element={<ExpandedScreen/>} />
        <Route path="deleteaccount" element={<DeletePopUp/>} />
        <Route path="specialaccess" element={<SpecialAccessPopUp/>} />
        <Route path="chatscreen2" element={<Chat/>} />
      </Routes>
    </Router>
  );
}

export default App;
