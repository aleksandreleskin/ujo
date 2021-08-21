import {ReactNode} from 'react';
import FadeInWhenVisible from '../../../../components/FadeInWhenVisible/FadeInWhenVisible';

interface IDesign {
  images: Array<string>;
  children: ReactNode;
}

const Design = ({images, children}: IDesign) => {
  return (
    <FadeInWhenVisible>
      <div className="content-block">
        <h2 className="content__title">Design</h2>
        <span className="content__subtitle">Design</span>
        <div className="design__images">
          {images.map((image, i) => <img src={image} key={i} alt=""/>)}
        </div>
        <div className="design__row">{children}</div>
      </div>
    </FadeInWhenVisible>
  );
};

export default Design;
