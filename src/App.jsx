import React, { useState } from "react";
import moon120p from "./assets/moon120p-removebg-preview.png";
import moon240p from "./assets/moon240p-removebg-preview.png";
import moon720p from "./assets/moon720p-removebg-preview.png";

const App = () => {
  const [selectedOption, setSelectedOption] = useState("120p");
  const options = ["120p", "240p", "720p", "1080p"];

  const displayImage = () => {
    switch (selectedOption) {
      case "120p":
        return <img src={moon120p} alt="120p moon image" height="150px" width="150px" />;
      case "240p":
        return <img src={moon240p} alt="240p moon image" height="250px" width="250px" />;
      case "720p":
        return <img src={moon720p} alt="720p moon image" height="200px" width="200px" />;
      case "1080p":
        return (
            <div style={{ color: 'white', fontSize: '48px' }}> 
              You 
            </div>
        )
    }
  };

  return (
    <div className="main-container"
    >
      <div className="image-container">{displayImage()}</div>
      <select
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
        className="select-box"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default App;
