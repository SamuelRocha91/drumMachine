import { useState } from 'react'
import './App.css'
import Pad from './components/Pad'

const letters = [
  {
    letter: 'Q',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
    name: 'djanw'
  },
  {
    letter: 'W',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
    name: 'plac'
  },
  {
    letter: 'E',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
    name: 'tunc'
  },
  {
    letter: 'A',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
    name: 'ion'
  },
  {
    letter: 'S',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
    name: 'plac'
  },
  {
    letter: 'D',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
    name: 'fuio'
  },
  {
    letter: 'Z',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
    name: 'CUMF'
  },
  {
    letter: 'X',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
     name: 'TUTUTU'
  },
  {
    letter: 'C',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
    name: 'Ti'

  }]

function App() {
  const [name, setName] = useState('')
  const [isSeted, setIsSeted] = useState('')


  const touchAudio = (e) => {
    const keyLetter = e.key.toUpperCase();
      const audioElement = document.getElementById(keyLetter);

      if (audioElement) {
        audioElement.currentTime = 0;
        const name = letters.filter(({ letter }) => letter == keyLetter)
        audioElement.play();
        setName(name[0].name)
        setIsSeted(keyLetter)
        }

    }
  return (
    <>
    <div tabIndex={0} onKeyDown={ touchAudio } id="drum-machine">
        <div  id="display">
          {letters.map((letter) => (
            <Pad seted={isSeted == letter.letter} state={{ setName, setIsSeted }} key={ letter.letter } letter={letter} />
          ))}
          <div id="name">
              <h1>{name}</h1>
        </div>
        </div>
    </div>
    </>
  )
}

export default App
