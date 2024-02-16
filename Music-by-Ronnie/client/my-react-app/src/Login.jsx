import React from "react";
import { Container, InputGroup, FormControl, Button, Row, Card } from "react-bootstrap";
import './App.css';

const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=8b945ef10ea24755b83ac50cede405a0&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"

export default function Login(){
    return (
        <Container className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}>
            <a className = "btn btn-purple btn-lg .custom-heading" href={AUTH_URL}>Login with Spotify</a>
        </Container>
    );
}