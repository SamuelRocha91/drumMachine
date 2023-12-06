import PropTypes from 'prop-types';

export default function Pad({ letter, state,  seted}) {

    
    const clickAudio = (e) => {
        e.preventDefault()
      const audioElement = document.getElementById(letter.letter);
        audioElement.currentTime = 0; 
     audioElement.play();
      state.setName(letter.name)
      state.setIsSeted(letter.letter)
    };
    
 
    return (
        <div  onClick={clickAudio}  className='drum-pad' id={letter.name
} >
            <button style={{  transition: '1s' , backgroundColor: seted && 'yellow', borderColor: 'black' }}>{letter.letter}
                <audio  src={letter.src} id={letter.letter} className='clip'></audio>
                </button>
        </div>
    )
}

Pad.propTypes = {
    state: PropTypes.func.isRequired,
    letter: PropTypes.shape({
        letter: PropTypes.func.isRequired,
        src: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    }).isRequired,
    seted: PropTypes.bool.isRequired,
}