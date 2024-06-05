import { useState, useEffect, useRef } from 'react';
import './Audio.css';
import audioIcon from '../../assets/audio2.png';
import audioFile from '../../audio/remember.mp3';

const Audio = () => {
  const [isPlaying, setIsPlaying] = useState(true); // Autoplay inicial
  const [isVisible, setIsVisible] = useState(false);
  const [volume, setVolume] = useState(1);
  const audioRef = useRef(null); // Uso de useRef para referenciar el elemento audio

  useEffect(() => {
    // Ajustando volumen y reproducción automática
    if (audioRef.current) {
      audioRef.current.volume = volume;
      if (isPlaying) {
        audioRef.current.play();
      }
    }
  }, [volume, isPlaying]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play();
        setIsPlaying(true);
      } else {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const changeVolume = (event) => {
    setVolume(event.target.value);
  };

  return (
    <div className="audio-player">
      <audio ref={audioRef} id="intro" src={audioFile} autoPlay loop type="audio/mp3"></audio>
      <img
        src={audioIcon}
        alt="Toggle Player"
        className="toggle-button"
        onClick={toggleVisibility}
      />
      {isVisible && (
        <div className="controls">
          <button className="play-pause-button" onClick={togglePlay}>
            {isPlaying ? <div className="pause-icon"></div> : <div className="play-icon"></div>}
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
