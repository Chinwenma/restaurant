import React from 'react';
import { images, data } from "../../constants";
import { SubHeading, } from "../../components";
import './Laurels.css';


const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
  <div className='app__laurels_awards-card'>
    <img src={imgUrl} alt="award" />
    <div className="app__laurels_awards-card_content">
      <p className="p__cormorant" style={{ color: '#DCCA87' }}>{title}</p>
      <p className="p__opensans">{subtitle}</p>
    </div>
  </div>
);



const Laurels = () => (
  <div className='app__bg app__wrapper  section__padding' id='award'>
    <div className='app__wrapper_info'>
      <SubHeading title="Awards & Recognition " />
      <h1 className='headtext__cormorant'>Our Laurels</h1>
      <div className='app__laurels_awards'>
        {data.awards.map((award, index) => (
          <AwardCard award={award} key={award.title} />
        ))}
      </div>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.laurels} alt='laurel' />
    </div>
  </div>
);

export default Laurels;
