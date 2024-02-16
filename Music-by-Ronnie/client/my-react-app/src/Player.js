



  //the tooglePlay holds the audioRef so when it is clicked by the onClick on the button it either plays or pauses 
  //if the song was already playing
  //useRef has been used here as audioRef to toggle playback between play() and pause()
  //audio has been initialized by useState so that it is only created when the components mounts
  //updateTime and setAudioDuration functions inside the useEffect hook to ensure it only uses the audio object
  import React, { useState, useEffect } from 'react';
  import { Button } from 'react-bootstrap';
  
  const AudioPlayer = ({ trackUrl }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [audio] = useState(new Audio(trackUrl));
  
    useEffect(() => {
      const updateTime = () => {
        setCurrentTime(audio.currentTime);
      };
  
      const setAudioDuration = () => {
        setDuration(audio.duration);
      };
  
      audio.addEventListener('timeupdate', updateTime);
      audio.addEventListener('loadedmetadata', setAudioDuration);
  
      return () => {
        audio.removeEventListener('timeupdate', updateTime);
        audio.removeEventListener('loadedmetadata', setAudioDuration);
      };
    }, [audio]); 
  
    const togglePlay = () => {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      setIsPlaying(!isPlaying);
    };
  
    const handleChange = (event) => {
      const newTime = event.target.value;
      audio.currentTime = newTime;
      setCurrentTime(newTime);
    };
  
    return (
      <div>
        <Button onClick={togglePlay}>{isPlaying ? 'Pause' : 'Play'}</Button>
        <input
          type="range"
          min={0}
          max={duration}
          value={currentTime}
          onChange={handleChange}
        />
      </div>
    );
  };
  
  export default AudioPlayer;
  
  


