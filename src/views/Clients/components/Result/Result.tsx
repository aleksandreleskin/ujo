import {ReactNode} from 'react';
import FadeInWhenVisible from '../../../../components/FadeInWhenVisible/FadeInWhenVisible';

interface IResult {
  children: ReactNode;
  title?: string;
  subtitle?: string;
}

const Result = ({children, title = 'Result', subtitle}: IResult) => {
  return (
    <FadeInWhenVisible>
      <section className="content-block">
        <h2>{title}</h2>
        {subtitle && <span className="content__subtitle">{subtitle}</span>}
        <div className="result__text">
          {children}
        </div>
      </section>
    </FadeInWhenVisible>
  );
};

export default Result;
