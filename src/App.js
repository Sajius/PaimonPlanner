import React from 'react';
import './App.css';
import Cookies from 'universal-cookie';
import CharacterInventory from './CharacterInventory';

const cookies = new Cookies();

function App() {
  return (
    <main className="App">
      <p>Hello Paimon</p>
      <CharacterInventory cookies={cookies} />
      <p>Klee: {cookies.get('klee')}</p>
      <p>Noelle: {cookies.get('noelle')}</p>
      {/* Tab Component */}
      {/* Character Selection Comp */}
      {/* Material Calendar Comp */}
      {/* Suggestion Comp */}
      {/* Character Selection Component */}
      {/* Footer Component */}
    </main>
  );
}

/* Footer needs a "buy me wishes button" and "this is not affiliated with Miyoho" blurb */

export default App;
