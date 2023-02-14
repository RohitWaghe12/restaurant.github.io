import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';

import './Chef.css';

const Chef = () => (
  <div className='app__bg app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
    <img src={images.chef} alt="chef" />
    </div>

    <div className='app__wrapper_info'>
    <SubHeading title="Chhef's Word" />
    <h1 className='headtext__cormorant'>What we believe in</h1>

    <div className='app__chef-content'>
      <div className='app__chef-content_quote'>
        <img src={images.quote} alt="quote" />
          <p className='p__opensans'>Finding the right Guest Messaging Software solution for your hotel.</p>
      </div>
        <p className='p__opensans'>Proactively engage with guests to promote customer service and enhance their experience, resulting in improved scores.</p>
    </div>
      <div className='app__chef-sign'>
     <p className='p__opensans'>Kevin Luo</p>
     <p className='p__opensans'>Chef & Founder</p>
     <img src={images.sign} alt="sign" />
      </div>
    </div>
  </div>
);

export default Chef;
