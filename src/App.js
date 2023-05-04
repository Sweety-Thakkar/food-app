import React, { useState, createContext } from 'react';
import './App.css';
import Link from './router';

export const UserContext = createContext()

function App() {
  const [label, setLabel] = useState("all")
  return (
    <>
      <UserContext.Provider value={{ label, setLabel }}>
        <Link />
      </UserContext.Provider>
    </>
  );
}

export default App;
