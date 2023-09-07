import React, { useState } from "react";
import "./App.css";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [personName, setPersonName] = useState("");
  const [inputName, setInputName] = useState("");

  const handleLogin = () => {
    if (inputName.trim()) {
      setLoggedIn(true);
      setPersonName(inputName);
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setPersonName("");
    setInputName("");
  };

  return (
    <div className="App">
      <h1> Login Here</h1>
      {loggedIn ? (
        <div>
          <p>Hi, Welcome {personName}!</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <input
            type="text"
            placeholder="Enter your name"
            value={inputName}
            onChange={(e) => setInputName(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
}

export default App;
