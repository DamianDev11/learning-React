import React, { useState, createRef } from "react";
import Weather from "./components/Weather";

const App = () => {
  const locationInput = createRef();
  const [location, setLocation] = useState("Bengaluru");
  return (
    <div className="weather-app">
      <input
        type="text"
        placeholder="Type a location..."
        ref={locationInput}
        onKeyUp={(e) => {
          if (e.keyCode === 13) {
            setLocation(e.target.value);
            locationInput.current.value = "";
          }
        }}
      />
      <Weather location={location}  render={({error,isLoading,icon,place,temperature,conditions}) => !error ? () : (<div className="error">There was an error fetching the weather</div>)}  
    </div>
  );
};

export default App;
