import { useState } from 'react';

import Form from './components/Form';
import './App.css';
import {ReactComponent as Wave} from './wave.svg';
import Header from './components/Header';
import Burger from './components/BurgerMenu/Burger';
import Menu from './components/BurgerMenu/Menu';
import Description from './components/Description';
import DestinationSlider from './components/Slider/DestinationSlider';
import Gallery from './components/Gallery';
import Faq from './components/Faq';
import Bookings from './components/Bookings';

function App() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <div className="surfretreat">
      <div className="header">
        <Header />
      </div>
      <Description />
      <div>
        <Burger open={menuIsOpen} setOpen={setMenuIsOpen}/>
        <Menu open={menuIsOpen} setOpen={setMenuIsOpen}/>
      </div>
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
