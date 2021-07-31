import './App.css';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import Login from "./Login.js"

function App() {
  const darkTheme = createTheme({
    palette: {
      type: 'dark',
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <div className="App">
        <header className="App-header">
          <Login />
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
