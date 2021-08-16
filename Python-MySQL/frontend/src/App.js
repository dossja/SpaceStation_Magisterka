import './App.css';
import React from 'react';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import Login from "./Login.js"

function App() {
  const darkTheme = createTheme({
    palette: {
      type: 'dark',
    },
  });
  const [showNavBar, setShowNavBar] = React.useState(false);

  return (
    <ThemeProvider theme={darkTheme}>
      <div className="App">
        <header className="App-header">
          <div> {showNavBar ? <h1>Nothing</h1> : <Login setShowNavBar={setShowNavBar} />}
          </div>

        </header>
      </div>
    </ThemeProvider >
  );
}

export default App;
