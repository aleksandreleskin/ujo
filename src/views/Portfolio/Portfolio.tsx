import {Dispatch, SetStateAction, useEffect, useState} from 'react';
import FirstScreen from './components/FirstScreen/FirstScreen';
import Slides from './components/Slides/Slides';

interface ISlide {
  image_bg: string;
  image_logo: string;
  year: string;
  title: string;
}

interface IPortfolio {
  activeImage: string;
  setActiveImage: Dispatch<SetStateAction<string>>;
  slides: Array<ISlide>;
  activeClient: ISlide;
  setActiveClient: Dispatch<SetStateAction<number>>;
}

const Portfolio = ({activeClient, setActiveClient, slides}: IPortfolio) => {
  const [activeSlide, setActiveSlide] = useState(1);
  const [activeBackground, setActiveBackground] = useState(false);

  useEffect(() => {
    setActiveBackground(false);
    setTimeout(() => setActiveClient(-1), 500);
  }, [setActiveBackground, setActiveClient]);

  return (
    <div style={{height: '100vh'}}>
      <img
        src={activeClient?.image_bg}
        alt=""
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          height: '100vh',
          width: '100vw',
          zIndex: activeBackground ? 10 : -1,
          opacity:  activeBackground ? 1 : 0,
          transition: 'opacity 0.5s ease-in-out',
          objectFit: 'cover'
        }}
      />
      <FirstScreen slides={slides} setActiveSlide={setActiveSlide}>
        <Slides
          slides={slides}
          activeSlide={activeSlide}
          setActiveClient={setActiveClient}
          setActiveBackground={setActiveBackground}
        />
      </FirstScreen>
    </div>
  );
};

export default Portfolio;
