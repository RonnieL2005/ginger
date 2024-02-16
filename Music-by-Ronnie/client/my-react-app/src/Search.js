import "bootstrap/dist/css/bootstrap.min.css";
import { FormControl, InputGroup, Container, Button, Row, Card } from "react-bootstrap";
import { useState, useEffect } from "react";
import AudioPlayer from "./Player";
import LikeButton from "./Likebutton"; 

const CLIENT_ID = "aa70adba9a1a458aac412984347f5843";
const CLIENT_SECRET = "9a3eec2f5b8945b59c22c0e2dd8f5ba2";

function Search() {
  const [searchInput, setSearchInput] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    var authParameters = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET
    };

    fetch('https://accounts.spotify.com/api/token', authParameters)
      .then(result => result.json())
      .then(data => setAccessToken(data.access_token))
      .catch(error => console.error('Error fetching access token:', error));
  }, []);

  async function search() {
    try {
      var searchParameters = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + accessToken 
        }
      };

      const response = await fetch('https://api.spotify.com/v1/search?q=' + searchInput + '&type=track', searchParameters);
      const data = await response.json();
      const tracksData = data.tracks.items;
      setTracks(tracksData);
    } catch (error) {
      console.error('Error searching for tracks:', error);
    }
  }

  return (
    <div className="App">
      <Container>
        <InputGroup className="mb-3" size="lg">
          <FormControl
            placeholder="Search for Track"
            type="input"
            onChange={event => setSearchInput(event.target.value)}
          />
          <Button onClick={search}>Search</Button>
        </InputGroup>
      </Container>
      <Container>
        <Row className="mx-2 row row-cols-5">
          {tracks.map((track, i) => (
            <Card key={i}>
              <Card.Img src={track.album.images[0].url} />
              <Card.Body>
                <Card.Title>{track.name}</Card.Title>
                <AudioPlayer trackUrl={track.preview_url} />
                <LikeButton trackId={track.id} /> 
              </Card.Body>
            </Card>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Search;




