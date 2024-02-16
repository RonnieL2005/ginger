import React from "react";
import { Button } from "react-bootstrap";

function DarkmodeLightmode({ isDarkMode, toggleDarkMode }) {
  return (
    <Button onClick={toggleDarkMode} variant={isDarkMode ? "light" : "dark"}>
      {isDarkMode ? "Light Mode" : "Dark Mode"}
    </Button>
  );
}

export default DarkmodeLightmode;

