import { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';

function App() {
  const { isThemeDark, setIsThemeDark } = useContext(ThemeContext);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          You are running this on {process.env.NODE_ENV} and the URL to it is <br />
          {process.env.REACT_APP_URL}
        </p>
        <div>
          Using the <strong>{isThemeDark ? 'Dark' : 'Light'}</strong> theme. Do you wanna switch?{' '}
          <input type="checkbox" onChange={() => setIsThemeDark((prev) => !prev)} />
        </div>
      </header>
    </div>
  );
}

export default App;
