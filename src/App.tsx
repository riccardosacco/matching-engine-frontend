import React from 'react';

// Import Context state
// import State from "./context/app.state.js"

// Import components
import Header from "./components/Header"

import "./assets/styles.scss";

const App: React.FC = () =>  {
  return (
      <div className="app">
        <Header />
      </div>
  );
}

export default App;
