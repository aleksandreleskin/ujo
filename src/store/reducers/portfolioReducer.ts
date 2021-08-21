import pixli_bg_img from '../../assets/images/portfolio/pixli_bg.png';
import pixli_logo_img from '../../assets/images/portfolio/pixli_logo.svg';
import bigam_bg_img from '../../assets/images/portfolio/bigam_bg.png';
import bigam_logo_img from '../../assets/images/portfolio/bigam_logo.svg';
import metro_bg_img from '../../assets/images/portfolio/metro_bg.png';
import metro_logo_img from '../../assets/images/portfolio/metro_logo.svg';
import small_bg_img from '../../assets/images/portfolio/small_bg.png';
import small_logo_img from '../../assets/images/portfolio/small_logo.svg';
import application_bg_img from '../../assets/images/portfolio/application_bg.png';

const GET_CLIENT = 'GET_CLIENT';

interface ISlide {
  image_bg: string;
  image_logo: string;
  year: string;
  title: string;
  description: string;
  stack: Array<string>;
  text_logo?: string;
}

const slides: Array<ISlide> = [
  {
    image_bg: pixli_bg_img,
    image_logo: pixli_logo_img,
    title: 'Pixli',
    year: '2020',
    description: 'Professional platform for visual digital design and frontend development',
    stack: ['Mobile app', 'UX/UI design', 'Front-end', 'Back-end'],
  },
  {
    image_bg: bigam_bg_img,
    image_logo: bigam_logo_img,
    title: 'Bigam',
    year: '2020',
    description: '',
    stack: ['Mobile app', 'UX/UI design', 'Front-end', 'Back-end'],
  },
  {
    image_bg: metro_bg_img,
    image_logo: metro_logo_img,
    title: 'Metro',
    year: '2020',
    description: '',
    stack: ['Mobile app', 'UX/UI design', 'Front-end', 'Back-end']
  },
  {
    image_bg: small_bg_img,
    image_logo: small_logo_img,
    title: 'Small',
    year: '2020',
    description: 'Mobile application for a chain without a checkout supermarket',
    stack: ['Mobile app', 'UX/UI design', 'Front-end', 'Back-end']
  },
  {
    image_bg: application_bg_img,
    image_logo: '',
    text_logo: 'Turnkey solution for your application',
    title: 'Turnkey solution for your application',
    year: '2021',
    description: '',
    stack: ['Mobile app', 'UX/UI design', 'Front-end', 'Back-end']
  },
];

const initialState = {
  slides: slides
};

const portfolioReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_CLIENT:
      return state.slides[action.index];
    default:
      return state;
  }
};

export default portfolioReducer;
