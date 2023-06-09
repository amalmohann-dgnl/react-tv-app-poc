import { useState } from 'react';
import { FocusNode } from '@please/lrud';
import { AnimatePresence } from 'framer-motion';
import './app.css';
import Profiles from './Pages/profiles/profiles';
import Home from './Pages/home/home';
import Nav from './components/nav/nav';

export default function App() {

  const [selectedProfile, setSelectedProfile] = useState(null);
  const hasSelectedProfile = Boolean(selectedProfile);

  return (
    <FocusNode className="app">
      <AnimatePresence>
        {!hasSelectedProfile && (
          <Profiles setSelectedProfile={setSelectedProfile} />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {hasSelectedProfile && <Home profile={selectedProfile} />}
      </AnimatePresence>
      {selectedProfile && <Nav selectedProfile={selectedProfile} />}
    </FocusNode>
  );
}
