import { useState, useEffect, useRef } from 'react';
import './Audio.css';
import audioIcon from '../../assets/audio2.png';
import audioFile from '../../audio/remember.mp3';

const Audio = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [volume, setVolume] = useState(1);
  const audioRef = useRef(null);

  useEffect(() => {
    // Intentar reproducir automáticamente al cargar
    const playAudio = async () => {
      if (audioRef.current) {
        try {
          await audioRef.current.play();
          setIsPlaying(true);
        } catch (error) {
          console.error("Error al intentar reproducir automáticamente:", error);
          setIsPlaying(false); // Ajustar según si se puede reproducir o no
        }
      }
    };
    playAudio();
  }, []);

  useEffect(() => {
    // Ajustar volumen siempre que cambie
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

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
    setVolume(parseFloat(event.target.value));
  };

  return (
    <div className="audio-player">
      <audio ref={audioRef} src={audioFile} loop type="audio/mp3"></audio>
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
