import { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState(0);

  const syncValue = (newValue) => {
    newValue = Math.max(0, Math.min(360, Number(newValue))); // Constrain value between 0 and 360
    setValue(newValue);
  };

  return (
    <div style={{ padding: "20px" }}>
      <div className="container">
        <label htmlFor="value-input">Value (0-360): </label>
        <input
          type="number"
          id="value-input"
          min="0"
          max="360"
          value={value}
          onChange={(e) => syncValue(e.target.value)}
        />
      </div>

      <div className="container">
        <label htmlFor="value-slider">Slider: </label>
        <input
          type="range"
          id="value-slider"
          min="0"
          max="360"
          value={value}
          onChange={(e) => syncValue(e.target.value)}
        />
      </div>

      <div className="container">
        <label>Common Values: </label>
        {[0, 45, 60, 90, 180].map((commonValue) => (
          <label key={commonValue}>
            <input
              type="radio"
              name="common-value"
              value={commonValue}
              checked={value === commonValue}
              onChange={() => syncValue(commonValue)}
            />{" "}
            {commonValue}
          </label>
        ))}
      </div>
    </div>
  );
}

export default App;
