import React, { useState } from 'react';
import './App.css';

function App() {
  const [display, setDisplay] = useState('10 Things That Require Zero Talent');
  const fullName = 'KRISTOFER KHURT DE DOTE - IT3A';

  const handleKeyPress = (key) => {
    const things = {
      1: 'Being On Time',
      2: 'Making An Effort',
      3: 'Being High Energy',
      4: 'Having A Positive Attitude',
      5: 'Being Passionate',
      6: 'Using Good Body Language',
      7: 'Being Coachable',
      8: 'Doing A Little Extra',
      9: 'Being Prepared',
      0: 'Having A Strong Work Ethic',
    };

    if (key === 'RESET') {
      setDisplay('10 Things That Require Zero Talent');
    } else if (key === 'NAME') {
      setDisplay(fullName.toUpperCase());
    } else {
      setDisplay(things[key]);
    }
  };

  return (
    <div className="App">
      <h1>{fullName}</h1>
      <h2>{display}</h2>
      <div className="buttons">
        {Object.keys({ 1: '', 2: '', 3: '', 4: '', 5: '', 6: '', 7: '', 8: '', 9: '', 0: '' }).map((key) => (
          <button key={key} onClick={() => handleKeyPress(key)}>
            {key}
          </button>
        ))}
        <button className="reset" onClick={() => handleKeyPress('RESET')}>RESET</button>
        <button className="name" onClick={() => handleKeyPress('NAME')}>NAME</button>
      </div>
    </div>
  );
}

export default App;
