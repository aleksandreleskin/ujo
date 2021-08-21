import Container from '../../../layout/Container/Container';
import './Services.css';
import image from '../../../assets/images/services-image.png';
import FadeInWhenVisible from '../../../components/FadeInWhenVisible/FadeInWhenVisible';

const MobileService = () => {
  return (
    <div className="service__content">
      <Container>
        <FadeInWhenVisible>
          <h1>Title 1</h1>
        </FadeInWhenVisible>
        <FadeInWhenVisible>
          <h2>Title 2</h2>
        </FadeInWhenVisible>
        <FadeInWhenVisible>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed risus pulvinar nulla
            sed vulputate vitae
            varius arcu. Etiam penatibus nec eget viverra augue viverra. Neque facilisis lacus, mauris in amet,
            pulvinar.
            Nulla varius odio quis adipiscing. Euismod tristique quis lectus praesent nam ut risus, facilisis donec.
            Aliquet facilisi pretium in sagittis congue.
          </p>
        </FadeInWhenVisible>
        <FadeInWhenVisible>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed risus pulvinar nulla sed vulputate vitae
            varius arcu. Etiam penatibus nec eget viverra augue viverra. Neque facilisis lacus, mauris in amet,
            pulvinar.
            Nulla varius odio quis adipiscing. Euismod tristique quis lectus praesent nam ut risus, facilisis donec.
            Aliquet facilisi pretium in sagittis congue.
          </p>
        </FadeInWhenVisible>
        <FadeInWhenVisible>
          <h2>Image with title</h2>
        </FadeInWhenVisible>
        <FadeInWhenVisible>
          <figure>
            <img src={image} alt=""/>
            <figcaption>Wood sculpture</figcaption>
          </figure>
        </FadeInWhenVisible>
        <FadeInWhenVisible>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed risus pulvinar nulla sed vulputate vitae
            varius arcu. Etiam penatibus nec eget viverra augue viverra. Neque facilisis lacus, mauris in amet,
            pulvinar.
            Nulla varius odio quis adipiscing. Euismod tristique quis lectus praesent nam ut risus, facilisis donec.
            Aliquet facilisi pretium in sagittis congue.
          </p>
        </FadeInWhenVisible>
        <FadeInWhenVisible>
          <ul>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Proin sed risus pulvinar nulla sed vulputate vitae varius arcu.</li>
            <li>Etiam penatibus nec eget viverra augue viverra.</li>
            <li>Nulla varius odio quis adipiscing.</li>
            <li>Euismod tristique quis lectus praesent nam ut risus, facilisis donec.</li>
            <li>Aliquet facilisi pretium in sagittis congue.</li>
          </ul>
        </FadeInWhenVisible>
        <FadeInWhenVisible>
          <h2>Title 2</h2>
        </FadeInWhenVisible>
        <FadeInWhenVisible>
          <div className="row">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed risus pulvinar nulla sed vulputate
              vitae
              varius arcu. Etiam penatibus nec eget viverra augue viverra. Neque facilisis lacus, mauris in amet,
              pulvinar. Nulla varius odio quis adipiscing. Euismod tristique quis lectus praesent nam ut risus,
              facilisis
              donec. Aliquet facilisi pretium in sagittis congue. </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed risus pulvinar nulla sed vulputate
              vitae
              varius arcu. Etiam penatibus nec eget viverra augue viverra. Neque facilisis lacus, mauris in amet,
              pulvinar. Nulla varius odio quis adipiscing. Euismod tristique quis lectus praesent nam ut risus,
              facilisis
              donec. Aliquet facilisi pretium in sagittis congue. </p>
          </div>
        </FadeInWhenVisible>
        <FadeInWhenVisible>
          <blockquote>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed risus pulvinar nulla sed
            vulputate vitae varius arcu. Etiam penatibus nec eget viverra augue viverra.
          </blockquote>
        </FadeInWhenVisible>
        <FadeInWhenVisible>
          <blockquote>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed risus pulvinar nulla sed
            vulputate vitae varius arcu. Etiam penatibus nec eget viverra augue viverra.
          </blockquote>
        </FadeInWhenVisible>
        <FadeInWhenVisible>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est duis commodo aliquam vitae molestie id augue
            cursus a. Urna, habitasse et, erat erat elit. Faucibus nulla nibh pellentesque et, risus semper consequat
            id.
            Sagittis id viverra dictum fermentum cursus faucibus. Integer nibh sem dolor, est eu diam suspendisse.
            Accumsan urna ac aliquet rhoncus turpis egestas nam neque. Duis proin urna malesuada sit. Elit ultrices
            risus
            auctor lacus purus. Non nam consequat scelerisque massa sit morbi. A, cras hac nec consequat nulla morbi
            diam.
            Amet, dictum id posuere justo. Dui bibendum diam posuere ultricies sit mus mi non ut. Pretium tellus dui
            placerat ultricies vel tempor nunc vitae sed. Tellus, curabitur est sed cras urna, erat. Neque convallis sed
            aenean vitae vitae metus a. Mi ullamcorper neque semper et viverra. Semper nunc quisque sit arcu vulputate
            dui
            sapien felis. Quam dignissim libero amet congue. Eros dolor in suscipit odio. Ullamcorper dignissim amet
            libero morbi fermentum. Commodo sociis amet imperdiet ornare augue nisl vulputate amet, nascetur.</p>
        </FadeInWhenVisible>
      </Container>
    </div>
  );
};

export {MobileService};
