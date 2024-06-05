import { useState, useEffect, useCallback } from 'react';
import './Audio.css';
import audioIcon from '../../assets/audio2.png';

const Audio = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [volume, setVolume] = useState(1);

  // Function to get the audio element
  const getAudioElement = () => document.getElementById('intro');

  useEffect(() => {
    const audioElement = getAudioElement();
    if (audioElement) {
      audioElement.volume = volume;
      setIsPlaying(!audioElement.paused);
    }
  }, [volume]);

  const handleUserInteraction = useCallback(() => {
    const audioElement = getAudioElement();
    if (audioElement && !isPlaying) {
      audioElement.play().then(() => {
        setIsPlaying(true);
      }).catch((error) => console.error('Error al reproducir el audio:', error));
    }
  }, [isPlaying]);

  useEffect(() => {
    document.addEventListener('click', handleUserInteraction);
    document.addEventListener('scroll', handleUserInteraction);

    return () => {
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('scroll', handleUserInteraction);
    };
  }, [handleUserInteraction]);

  const togglePlay = () => {
    const audioElement = getAudioElement();
    console.log('Audio Element:', audioElement); // Debugging line
    if (audioElement) {
      if (audioElement.paused) {
        audioElement.play().then(() => {
          console.log('Playing audio'); // Debugging line
          setIsPlaying(true);
        }).catch((error) => console.error('Error al reproducir el audio:', error));
      } else {
        console.log('Pausing audio'); // Debugging line
        audioElement.pause();
        setIsPlaying(false);
      }
    }
  };
  

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const changeVolume = (event) => {
    const newVolume = parseFloat(event.target.value);
    const audioElement = getAudioElement();
    if (audioElement) {
      audioElement.volume = newVolume;
    }
    setVolume(newVolume);
  };

  return (
    <div className="audio-player">
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
