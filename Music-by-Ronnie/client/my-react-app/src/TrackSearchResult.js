import React from "react";

function TrackSearchResult({ track, onPlayTrack }) {
  const handlePlayTrack = () => {
    onPlayTrack(track.uri);
  };

  return (
    <div
      className="d-flex m-2 align-items-center"
      style={{ cursor: "pointer" }}
      onClick={handlePlayTrack}
    >
      <img src={track.albumUrl} style={{ height: "64px", width: "64px" }} alt="Album" />
      <div className="ml-3">
        <div>{track.title}</div>
        <div className="text-muted">{track.artist}</div>
      </div>
    </div>
  );
}

export default TrackSearchResult;

