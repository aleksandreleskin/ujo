import slider_header from '../../../../assets/images/slider-header.svg';
import {useState} from 'react';
import FadeInWhenVisible from '../../../../components/FadeInWhenVisible/FadeInWhenVisible';

const Slider = ({images}: { images: Array<string> }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <FadeInWhenVisible>
      <div className="content-block">
        <div className="slider">
          <img src={slider_header} className="slider__header" alt=""/>
          <div className="slider__wrapper">
            {images.map((image, i) =>
              <img style={{transform: `translateX(${-100 * activeSlide}%)`}} src={image} key={i} alt=""/>)}
          </div>
          <div className="slider__control">
            <button onClick={() => activeSlide > 0 && setActiveSlide(activeSlide - 1)}>Back</button>
            <button onClick={() => activeSlide < images.length - 1 && setActiveSlide(activeSlide + 1)}>Next</button>
          </div>
        </div>
      </div>
    </FadeInWhenVisible>
  );
};

export default Slider;
