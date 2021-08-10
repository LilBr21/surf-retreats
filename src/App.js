import Form from './components/Form';
import './App.css';
import {ReactComponent as Wave} from './wave.svg';

function App() {
  return (
    <div className="container">
      <div className="App">
        <Form />
      </div>
      <div className="wave">
        <Wave />
      </div>
    </div>
  );
}

export default App;
