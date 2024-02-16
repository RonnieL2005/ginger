import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "./Search";
import DarkmodeLightmode from "./DarkmodeToggle";
import "./App.css"; 


function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`App ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <div className="purple-dashboard"> 
        <h1 className="text-white text-center py-3">Maji Maji Music</h1>
      </div>
      <div className="full-height"> 
        <Search />
        <DarkmodeLightmode isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        
      </div>
    </div>
  );
}

export default App;













