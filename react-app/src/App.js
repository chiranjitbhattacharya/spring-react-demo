import logo from './logo.svg';
import springLogo from './spring-logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={springLogo} className="SpringApp-logo" alt="logo" />
        <p className="title">
          SpringBoot + ReactJs
        </p>
      </header>
    </div>
  );
}

export default App;
