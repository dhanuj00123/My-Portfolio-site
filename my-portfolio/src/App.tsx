import React from "react";
import logo from "./logo.svg";

function App() {
  return (
    <div className="bg-pink-500 text-white w-screen h-screen">
      <header className="flex flex-col h-full text-center justify-center items-center">
        <img
          src={logo}
          className="animate-spin w-40 h-40 bg-yellow-200 rounded-full"
          alt="logo"
        />
        <p className="mt-8">
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
