import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';

import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id="home">
    <div className="app__wrapper_info">
    <SubHeading title="Chase the new flavour"/>
    <h1 className='app__header-h1'>The Key TO Fine Dining</h1>
      <p className='p__opensans' style={{ margin: "2rem 0" }}>We hope you are staying well during this trying time, and we look forward to your arrival tomorrow. Please let us know when you plan to check in and if we can assist you with transportation and luggage.</p>
      <button type="button" className="custom__button">Explore Menu</button>
    </div>

    <div className='app__wrapper_img'>
     <img src={images.welcome} alt="header img" />
    </div>

  </div>
);

export default Header;
