import FadeInWhenVisible from '../../../../components/FadeInWhenVisible/FadeInWhenVisible';

const Prototypes = ({image}: { image: string }) => {
  return (
    <FadeInWhenVisible>
      <div className="content-block">
        <h2 className="content__title">Application prototypes</h2>
        <span className="content__subtitle">Wireframes</span>
        <div className="prototype__image">
          <img src={image} alt=""/>
        </div>
      </div>
    </FadeInWhenVisible>
  );
};

export default Prototypes;
