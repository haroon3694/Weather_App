import React from "react";

const api ={
  key: "c2fd752a0ccd93b6d644f7d7a011b51d",
  base: "https://api.openweathermap.org/data/2.5"
}

function App() {
  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input 
          type="text"
          className="search-bar"
          placeholder="search.."
          />
        </div>
      </main>
    </div>
  );
}

export default App;
