import Form from './components/Form';
import './App.css';
import {ReactComponent as Wave} from './wave.svg';
import Header from './components/Header';
import Description from './components/Description';
import DestinationSlider from './components/Slider/DestinationSlider';
import Gallery from './components/Gallery';
import Faq from './components/Faq';
import Bookings from './components/Bookings';

function App() {
  return (
    <div className="surfretreat">
      <div className="header">
        <Header />
      </div>
      <Description />
      <div className='choosedestination'>
        <DestinationSlider />
      </div>
      <Gallery />
      <Faq />
      <Bookings />
      <div className="container">
        <div className="form-part">
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
