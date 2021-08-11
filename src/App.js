import Form from './components/Form';
import './App.css';
import {ReactComponent as Wave} from './wave.svg';
import Header from './components/Header';
import Description from './components/Description';

function App() {
  return (
    <div className="surfretreat">
      <div className="header">
        <Header />
      </div>
      <Description />
      <div className="container">
        <div className="App">
          <Form />
        </div>
        <div className="wave">
          <Wave />
        </div>
      </div>
    </div>
  );
}

export default App;
