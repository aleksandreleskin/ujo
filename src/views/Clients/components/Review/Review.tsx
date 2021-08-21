import {ReactNode} from 'react';
import FadeInWhenVisible from '../../../../components/FadeInWhenVisible/FadeInWhenVisible';

interface IReview {
  image: string;
  name: string;
  company: string;
  children: ReactNode;
}

const Review = ({image, name, company, children}: IReview) => {
  return (
    <FadeInWhenVisible>
      <div className="content-block">
        <h2 className="review__title">Customer feedback</h2>
        <div className="review__block">
          <div className="review__row">
            <div className="review__photo">
              <img src={image} alt=""/>
            </div>
            <div>
              <h4>{name}</h4>
              <span>{company}</span>
            </div>
          </div>
          <div className="review__column">
            {children}
          </div>
        </div>
      </div>
    </FadeInWhenVisible>
  );
};

export default Review;
