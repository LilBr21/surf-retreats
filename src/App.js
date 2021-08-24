import { useState } from 'react';

import GlobalFonts from './Fonts/Fonts';
import Form from './components/Form';
import {ReactComponent as Wave} from './assets/wave.svg';
import Header from './components/Header';
import Burger from './components/BurgerMenu/Burger';
import Menu from './components/BurgerMenu/Menu';
import Description from './components/Description';
import DestinationSlider from './components/Destinations/DestinationSlider';
import Gallery from './components/Slider/Gallery';
import Faq from './components/Faq';
import Bookings from './components/Bookings';
import Sources from './components/Sources';

import './App.css';

function App() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <div className="surfretreat">
      <GlobalFonts />
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
      <Sources />
    </div>
  );
}

export default App;
