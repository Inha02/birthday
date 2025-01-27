import logo from './logo.svg';
import './App.css';
import React from "react";
import Header from "./components/Header";
import BirthdayCard from "./components/BirthdayCard";

function App() {
  return (
    <div className="app">
      <Header />
      <BirthdayCard />
    </div>
  );
}

export default App;
