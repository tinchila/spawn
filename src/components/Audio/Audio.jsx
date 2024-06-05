import { useState, useEffect } from 'react';
import './Audio.css';
import audioIcon from '../../assets/audio2.png';
import audioFile from '../../audio/remember.mp3' ;

const Audio = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [volume, setVolume] = useState(1);

  useEffect(() => {
    const audioElement = document.getElementById('intro');
    if (audioElement) {
      audioElement.loop = true;
      audioElement.volume = volume;
    }
  }, [volume]);

  const handleUserInteraction = () => {
    const audioElement = document.getElementById('intro');
    if (audioElement && !isPlaying) {
      audioElement.play().then(() => {
        setIsPlaying(true);
      }).catch((error) => console.error('Error al reproducir el audio:', error));
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleUserInteraction);
    document.addEventListener('scroll', handleUserInteraction);

    return () => {
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('scroll', handleUserInteraction);
    };
  }, [isPlaying]);

  const togglePlay = () => {
    const audioElement = document.getElementById('intro');
    if (audioElement) {
      if (isPlaying) {
        audioElement.pause();
      } else {
        audioElement.play().then(() => {
          setIsPlaying(true);
        }).catch((error) => console.error('Error al reproducir el audio:', error));
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const changeVolume = (event) => {
    const audioElement = document.getElementById('intro');
    const newVolume = event.target.value;
    if (audioElement) {
      audioElement.volume = newVolume;
    }
    setVolume(newVolume);
  };

  return (
    <div className="audio-player">
      <audio id="intro" src={audioFile} type="audio/mp3"></audio>
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
