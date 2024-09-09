import React, { useState, useEffect } from 'react';
import './App.css';

const arr = [
  {
    text: 'Q',
    name: 'Heater 1',
    src: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3',
  },
  {
    text: 'W',
    name: 'Heater 2',
    src: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3',
  },
  {
    text: 'E',
    name: 'Heater 3',
    src: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3',
  },
  {
    text: 'A',
    name: 'Heater 4',
    src: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3',
  },
  {
    text: 'S',
    name: 'Clap',
    src: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3',
  },
  {
    text: 'D',
    name: 'Open-HH',
    src: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3',
  },
  {
    text: 'Z',
    name: "Kick-n'Hat",
    src: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3',
  },
  {
    text: 'X',
    name: 'Kick',
    src: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3',
  },
  {
    text: 'C',
    name: 'Closed-HH',
    src: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3',
  },
];

const App = () => {
  const [display, setDisplay] = useState('');

  const handleClick = (text) => {
    const sound = document.getElementById(text);  
    if (sound){
      sound.play();
    }
    const name = arr.find((item) => item.text === text);
    if (name){
      setDisplay(name.name);
    }
  };

  useEffect(() =>{
    document.addEventListener('keydown', (e) => {
      const key = e.key.toUpperCase();      
      handleClick(key);      
    })
  },[])

  return (
    <div>
      <div id="drum-machine">
        <div id="display">{display}</div>
        <div id="keys">
          {arr.map(({ name, text, src }) => (
            <div
              key={name}
              className="drum-pad"
              id={name}
              onClick={() => handleClick(text)} 
            >
              {text}
              <audio className='clip' id={text} src={src}></audio>  
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
