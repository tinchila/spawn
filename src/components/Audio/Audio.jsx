import { useState, useEffect } from 'react';
import './Audio.css';
import audioIcon from '../../assets/audio2.png'; // Importar la imagen del icono de audio
import audioFile from '../../assets/remember.mp3'; // Importar el archivo de audio

const Audio = () => {
  const [isPlaying, setIsPlaying] = useState(false); // Asumimos que se inicia sin reproducir
  const [isVisible, setIsVisible] = useState(false);
  const [volume, setVolume] = useState(1); // Volumen inicial al máximo

  useEffect(() => {
    const audioElement = document.getElementById('intro');

    const playAudio = () => {
      if (audioElement) {
        audioElement.play().catch((error) => console.error('Error al reproducir el audio:', error));
        setIsPlaying(true);
        document.removeEventListener('click', playAudio);
      }
    };

    document.addEventListener('click', playAudio);

    return () => {
      document.removeEventListener('click', playAudio);
    };
  }, []);

  useEffect(() => {
    const audioElement = document.getElementById('intro');
    if (audioElement) {
      audioElement.loop = true; // Aseguramos que el audio se repita
      audioElement.volume = volume; // Establecemos el volumen inicial
    }
  }, [volume]);

  const togglePlay = () => {
    const audioElement = document.getElementById('intro');
    if (audioElement) {
      if (isPlaying) {
        audioElement.pause();
      } else {
        audioElement.play().catch((error) => console.error('Error al reproducir el audio:', error));
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const changeVolume = (event) => {
    const newVolume = event.target.value;
    setVolume(newVolume);
    const audioElement = document.getElementById('intro');
    if (audioElement) {
      audioElement.volume = newVolume;
    }
  };

  return (
    <div className="audio-player">
      <audio id="intro" src={audioFile} />
      <img
        src={audioIcon}
        alt="Toggle Player"
        className="toggle-button"
        onClick={toggleVisibility}
      />
      {isVisible && (
        <div className="controls">
          <button className="play-pause-button" onClick={togglePlay}>
            {isPlaying ? (
              <div className="pause-icon"></div>
            ) : (
              <div className="play-icon"></div>
            )}
          </button>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={changeVolume}
            className="volume-slider"
          />
        </div>
      )}
    </div>
  );
};

export default Audio;
