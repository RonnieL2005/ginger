import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import './App.css'; 

const LikeButton = ({ trackId }) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <Button
      className="like-button" 
      variant={isLiked ? 'primary' : 'secondary'}
      onClick={handleLike}
    >
      <span className="button-text">{isLiked ? 'Liked' : 'Like'}</span>
    </Button>
  );
};

export default LikeButton;


