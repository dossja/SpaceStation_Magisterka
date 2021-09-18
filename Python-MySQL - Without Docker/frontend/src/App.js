import './App.css';
import React from 'react';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import Login from "./Login.js";
import NavBar from "./NavBar.js";

function App() {
  const darkTheme = createTheme({
    palette: {
      type: 'dark',
    },
  });
  const [showNavBar, setShowNavBar] = React.useState(false);
  const [currentUserID, setCurrentUserID] = React.useState(null);
  const [isManager, setIsManager] = React.useState(false);

  return (
    <ThemeProvider theme={darkTheme}>
      <div className="App">
        <header className="App-header">
          {/* {currentUserID} */}
          <div className="App-body">
            {showNavBar ? <NavBar currentUserID={currentUserID} isManager={isManager} /> : <Login setShowNavBar={setShowNavBar} setCurrentUserID={setCurrentUserID} setIsManager={setIsManager} />}
          </div>

        </header>
      </div>
    </ThemeProvider >
  );
}

export default App;
