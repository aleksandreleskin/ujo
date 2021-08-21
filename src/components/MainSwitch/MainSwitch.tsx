import {useEffect, useState} from 'react';
import {Redirect, Route, Switch, useLocation} from 'react-router-dom';
import FirstScreen from '../FirstScreen/FirstScreen';
import {HomeClients, HomeDesign, HomeMobile, HomeOutsourcing, HomeWeb} from '../../views/Home/components/Slides/Slides';
import Service from '../../views/Service/Service';
import {MobileService} from '../../views/Service/Services/Services';
import Company from '../../views/Company/Company';
import Contact from '../../views/Contact/Contact';
import Portfolio from '../../views/Portfolio/Portfolio';
import Clients from '../../views/Clients/Clients';
import {connect} from 'react-redux';
import Task from '../../views/Clients/components/Task/Task';
import Volume from '../../views/Clients/components/Volume/Volume';
import Result from '../../views/Clients/components/Result/Result';
import Slider from '../../views/Clients/components/Slider/Slider';
import Design from '../../views/Clients/components/Design/Design';
import Prototypes from '../../views/Clients/components/Prototypes/Prototypes';
import Palette from '../../views/Clients/components/Palette/Palette';
import Review from '../../views/Clients/components/Review/Review';
import ProjectStart from '../../views/Project/ProjectStart/ProjectStart';
import ProjectService from '../../views/Project/ProjectService/ProjectService';
import ProjectContact from '../../views/Project/ProjectContact/ProjectContact';
import ProjectFiles from '../../views/Project/ProjectFiles/ProjectFiles';

import client_1_img from '../../assets/images/clients/client-1.png';
import client_2_img from '../../assets/images/clients/client-2.png';

import slider_img_1 from '../../assets/images/slider-img-1.png';
import slider_img_2 from '../../assets/images/slider-img-2.png';
import slider_img_3 from '../../assets/images/slider-img-3.png';
import slider_img_4 from '../../assets/images/slider-img-4.png';

import wireframe_img from '../../assets/images/wireframe.png';
import wireframe_2_img from '../../assets/images/wireframe-2.png';
import wireframe_3_img from '../../assets/images/wireframe-3.png';

import design_img_1 from '../../assets/images/design_img_1.png';
import design_img_2 from '../../assets/images/design_img_2.png';
import design_img_3 from '../../assets/images/design_img_3.png';
import design_img_4 from '../../assets/images/design_img_4.png';

import result_img_1 from '../../assets/images/result_img_1.svg';
import result_img_2 from '../../assets/images/result_img_2.svg';

import review_img_1 from '../../assets/images/review_img_1.png';
import review_img_2 from '../../assets/images/review_img_2.png';

import ScrollButton from '../ScrollButton/ScrollButton';

interface IMainSwitch {
  slides: Array<any>;
}

const MainSwitch = ({slides}: IMainSwitch) => {
  const [isAnimate, setIsAnimate] = useState(false);
  const [activeImage, setActiveImage] = useState('');
  const [activeClient, setActiveClient] = useState(0);

  const location = useLocation();

  useEffect(() => setIsAnimate(false), [location]);

  return (
    <Switch>
      <Route path="/mobile" exact>
        <div style={{height: '100vh'}}>
          <FirstScreen>
            <HomeMobile isAnimate={isAnimate} animate={true}/>
          </FirstScreen>
        </div>
      </Route>
      <Route path="/design" exact>
        <div style={{height: '100vh'}}>
          <FirstScreen>
            <HomeDesign isAnimate={isAnimate} animate={true}/>
          </FirstScreen>
        </div>
      </Route>
      <Route path="/web" exact>
        <div style={{height: '100vh'}}>
          <FirstScreen>
            <HomeWeb isAnimate={isAnimate} animate={true}/>
          </FirstScreen>
        </div>
      </Route>
      <Route path="/outsourcing" exact>
        <div style={{height: '100vh'}}>
          <FirstScreen>
            <HomeOutsourcing isAnimate={isAnimate} animate={true}/>
          </FirstScreen>
        </div>
      </Route>
      <Route path="/clients" exact>
        <div style={{height: '100vh'}}>
          <FirstScreen>
            <HomeClients isAnimate={isAnimate} animate={true}/>
          </FirstScreen>
        </div>
      </Route>

      <Route path="/services/mobile" exact>
        <ScrollButton/>
        <Service content={<MobileService/>} setIsAnimate={setIsAnimate}>
          <FirstScreen notScrollable={true}>
            <HomeMobile animate={true}/>
          </FirstScreen>
        </Service>
      </Route>
      <Route path="/services/design" exact>
        <ScrollButton/>
        <Service content={<MobileService/>} setIsAnimate={setIsAnimate}>
          <FirstScreen notScrollable={true}><HomeDesign/></FirstScreen>
        </Service>
      </Route>
      <Route path="/services/web" exact>
        <ScrollButton/>
        <Service content={<MobileService/>} setIsAnimate={setIsAnimate}>
          <FirstScreen notScrollable={true}><HomeWeb/></FirstScreen>
        </Service>
      </Route>
      <Route path="/services/outsourcing" exact>
        <ScrollButton/>
        <Service content={<MobileService/>} setIsAnimate={setIsAnimate}>
          <FirstScreen notScrollable={true}><HomeOutsourcing/></FirstScreen>
        </Service>
      </Route>

      <Route path="/company" exact>
        <ScrollButton/>
        <Company/>
      </Route>

      <Route path="/contact" exact>
        <Contact/>
      </Route>

      <Route path="/portfolio/:id" exact>
        <Portfolio
          activeImage={activeImage}
          setActiveImage={setActiveImage}
          slides={slides}
          activeClient={slides[activeClient]}
          setActiveClient={setActiveClient}
        />
      </Route>

      <Route path="/portfolio" exact>
        <Redirect to="/portfolio/1"/>
      </Route>

      <Route path="/portfolio/project/1" exact>
        <ScrollButton/>
        <Clients
          activeClient={slides[0]}
          setActiveClient={setActiveClient}
          slides={slides}
        >
          <Task>
            <p>To create a constructor for experienced professional designers, which in its capabilities is as close as possible to manual layout.</p>
          </Task>
          <Volume volumes={[
            {title: '12506', indexes: ['Opening hours']},
            {title: '6 developers', indexes: ['2 designers', '2 testers', '2 project managers']},
          ]}/>
          <Result>
            <p>Modern animation is implemented on a platform without the need to work with JavaScript. Fast loading
              user thanks to clean code optimization.</p>
            <p>In Pixli, you can create many different effects, set up complex interactions between elements and
              change their styles and properties, control these functions on the timeline.</p>
            <p><strong> Triggers:</strong> using triggers, site elements can interact with each other,
              for example, you can create a poll on the site and when you click on the button, a timer will start, and when the time is up,
              the user will see this, and the form data will be sent to the site administrator.</p>
            <p><strong>Maximum freedom with CMS:</strong> the platform already has a built-in visual CMS with dynamic
              content management, but users also have access to unlimited export of created sites to external
              hosting, integration with any CMS and Framework platforms, the inclusion of any scripts in the PIXLI code.
              You can download the site archive.</p>
            <p>
              <strong>You can connect your own domain name</strong>, and an SSL certificate, and the site will be perfect
              optimized for all types of search engines.</p>
            <div className="result__photos">
              <img src={client_1_img} alt=""/>
              <img src={client_2_img} alt=""/>
            </div>
            <h3>Pixli successfully saves valuable developers' time: </h3>
            <ul>
              <li>Multi-user access - several developers can make changes to the project at the same time</li>
              <li>Copying between projects - for the same type of projects, repeating elements can be simply
                copy
              </li>
              <li>The White Label function is the transfer of the site to the customer through a separate personal account</li>
            </ul>
          </Result>
          <Palette
            colors={[
              {color: '#333333', text: 'Primary Text'},
              {color: '#292F3B', text: 'Secondary Text'},
              {color: '#C9C9C9', text: 'Tertiary Text'},
            ]}
            palette={[
              '#4F42E9',
              '#7166F9',
              '#8F86F9',
              '#B7B1FE',
              '#D5D1FF',
              '#850BFF',
              '#AB56FF',
              '#C184FF',
              '#D6ACFF',
              '#E2C6FF',
              '#F1AF51',
              '#FBC170',
              '#F2C27E',
              '#F9D39C',
              '#FFE8C8',
              '#FF50B5',
              '#FF73C4',
              '#FF80C9',
              '#FFA5D9',
              '#FFCAE9',
              '#E04F5F',
              '#EC6E7C',
              '#FD9EA9',
            ]}
            fonts={{
              name: {title: 'Montserrat', size: 95},
              examples: [
                {title: 'H1', size: 40, weight: 700},
                {title: 'H2', size: 24, weight: 700},
                {title: 'H3', size: 18, weight: 700},
                {title: 'Body 1', size: 18, weight: 400, variant: {title: 'Body 1 - Medium', weight: 500}},
                {title: 'Body 2', size: 14, weight: 400, variant: {title: 'Body 2 - Medium', weight: 500}},
                {title: 'Button', size: 16, weight: 400},
              ]
            }}
          />
          <Slider images={[slider_img_1]}/>
        </Clients>
      </Route>

      <Route path="/portfolio/project/2" exact>
        <ScrollButton/>
        <Clients
          activeClient={slides[1]}
          setActiveClient={setActiveClient}
          slides={slides}
        >
          <Task
            title="About project">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed risus pulvinar nulla sed vulputate
              vitae varius arcu. Etiam penatibus nec eget viverra augue viverra. Neque facilisis lacus, mauris in amet,
              pulvinar. Nulla varius odio quis adipiscing. Euismod tristique quis lectus praesent nam ut risus,
              facilisis donec. Aliquet facilisi pretium in sagittis congue.</p>
          </Task>
          <Volume volumes={[
            {title: '12506', indexes: ['Opening hours']},
            {title: '6 developers', indexes: ['2 designers', '2 testers', '2 project managers']},
            {title: '6 developers', indexes: ['2 designers', '2 testers', '2 project managers']},
            {title: '6 developers', indexes: ['2 designers', '2 testers', '2 project managers']},
          ]}/>
          <Palette
            colors={[
              {color: '#191919', text: 'Primary Text & Icons'},
              {color: '#5A5A5A', text: 'Secondary Text'},
              {color: '#8D8C8C', text: 'Tertiary Text'},
              {color: '#B2B2B2', text: 'Disabled Text & Placeholder'},
              {color: '#E0E0E0', text: 'Border'},
              {color: '#F5F5F5', text: 'Gray Background'},
              {color: '#FFFFFF', text: 'White Background'},
            ]}
            palette={[
              '#004584',
              '#1C609F',
              '#4B7EAE',
              '#819FBB',
              '#BBC7D2',
              '#4B75BA',
              '#5B82C1',
              '#809CC9',
              '#A7B8D4',
              '#CFD7E5',
              '#F97C00',
              '#F59D45',
              '#F7AF68',
              '#F9C692',
              '#FCDDBF',
              '#F9B34E',
              '#FAC171',
              '#FBCE8E',
              '#FCDBAE',
              '#FDEBD2',
              '#45A163',
              '#EB5D47',
              '#FADF7E',
            ]}
            fonts={{
              name: {title: 'Helvetica', size: 120},
              examples: [
                {title: 'Header', size: 58, weight: 700},
                {title: 'Title', size: 36, weight: 400},
                {title: 'Subtitle', size: 32, weight: 400},
                {title: 'Body 1', size: 30, weight: 400, variant: {title: 'Body 1 - Medium', weight: 500}},
                {title: 'Body 2', size: 25, weight: 400, variant: {title: 'Body 2 - Medium', weight: 500}},
                {title: 'Caption', size: 22, weight: 400},
                {title: 'BUTTON', size: 25, weight: 400},
              ]
            }}
          />
          <Prototypes image={wireframe_img}/>
          <Design images={[design_img_1, design_img_2]}>
            <div className="design__column">
              <h4>Title 2</h4>
              <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed risus pulvinar nulla sed vulputate
                  vitae varius arcu. Etiam penatibus nec eget viverra augue viverra.</p>
              </div>
            </div>
            <div className="design__column">
              <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed risus pulvinar nulla sed vulputate
                  vitae varius arcu. Etiam penatibus nec eget viverra augue viverra.</p>
              </div>
            </div>
          </Design>
          <Slider images={[slider_img_2]}/>
          <Result title="Title" subtitle="Subtitle">
            <div style={{textAlign: 'center', marginTop: '-270px', paddingBottom: '60px'}}>
              <img src={result_img_1} style={{maxWidth: '100%'}} alt=""/>
            </div>
            <div className="design__column">
              <h4>Subtitle 2</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed risus pulvinar nulla sed vulputate
                vitae varius arcu. Etiam penatibus nec eget viverra augue viverra.</p>
            </div>
            <div className="design__column">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed risus pulvinar nulla sed vulputate
                vitae varius arcu. Etiam penatibus nec eget viverra augue viverra. Neque facilisis lacus, mauris in
                amet, pulvinar. Nulla varius odio quis adipiscing. Euismod tristique quis lectus praesent nam ut risus,
                facilisis donec. Aliquet facilisi pretium in sagittis congue. </p>
            </div>
            <div style={{textAlign: 'center', paddingBottom: '160px'}}>
              <img src={result_img_2} style={{maxWidth: '100%'}} alt=""/>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed risus pulvinar nulla sed vulputate
              vitae varius arcu. Etiam penatibus nec eget viverra augue viverra. Neque facilisis lacus, mauris in amet,
              pulvinar. Nulla varius odio quis adipiscing. Euismod tristique quis lectus praesent nam ut risus,
              facilisis donec. Aliquet facilisi pretium in sagittis congue. </p>
            <ul>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Proin sed risus pulvinar nulla sed vulputate vitae varius arcu.</li>
              <li>Etiam penatibus nec eget viverra augue viverra.</li>
              <li>Neque facilisis lacus, mauris in amet, pulvinar.</li>
              <li>Nulla varius odio quis adipiscing.</li>
              <li>Euismod tristique quis lectus praesent nam ut risus, facilisis donec.</li>
              <li>Aliquet facilisi pretium in sagittis congue.</li>
            </ul>
          </Result>
          <Review image={review_img_1} name="Bigam" company="Bigam">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed risus pulvinar nulla sed vulputate
              vitae varius arcu. Etiam penatibus nec eget viverra augue viverra. Neque facilisis lacus, mauris in amet,
              pulvinar. Nulla varius odio quis adipiscing. Euismod tristique quis lectus praesent nam ut risus,
              facilisis donec. Aliquet facilisi pretium in sagittis congue. </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed risus pulvinar nulla sed vulputate
              vitae varius arcu. Etiam penatibus nec eget viverra augue viverra. Neque facilisis lacus, mauris in amet,
              pulvinar. Nulla varius odio quis adipiscing. Euismod tristique quis lectus praesent nam ut risus,
              facilisis donec. Aliquet facilisi pretium in sagittis congue. </p>
          </Review>
        </Clients>
      </Route>

      <Route path="/portfolio/project/3" exact>
        <ScrollButton/>
        <Clients
          activeClient={slides[2]}
          setActiveClient={setActiveClient}
          slides={slides}
        >
          <Task>
            <p>Optimization of costs for the work of promoters, collecting information about promoted products, informing
              customers about products, the ability to easily and quickly receive feedback from customers. Simply put,
              the company needed a promoter who could attract a buyer, conduct a tasting, learn about his
              impressions and process this information.</p>
          </Task>
          <Volume volumes={[
            {title: '790', indexes: ['Opening hours']},
            {title: '2 developers', indexes: ['1 designer', '1 tester', '1 project manager']},
          ]}/>
          <Result title="Result" subtitle="An online promoter who can:">
            <ul>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Proin sed risus pulvinar nulla sed vulputate vitae varius arcu.</li>
              <li>Etiam penatibus nec eget viverra augue viverra.</li>
              <li>Neque facilisis lacus, mauris in amet, pulvinar.</li>
              <li>Nulla varius odio quis adipiscing.</li>
              <li>Euismod tristique quis lectus praesent nam ut risus, facilisis donec.</li>
              <li>Aliquet facilisi pretium in sagittis congue.</li>
            </ul>
            <p>To implement this idea, we needed a stand with products and an interactive screen. Added to it
              audio accompaniment, so that the buyer pays attention to the tasting, and eventually makes a target action-a
              purchase. The buyer evaluates the taste or other properties of the product, answers questions on an interactive
              on the screen, and for this he gets a certain bonus. The application collects all such reviews and in a processed form
              provides data on the store's administration and the manufacturer of the product, as well as shows the product rating
              to other potential buyers.</p>
          </Result>
          <Slider images={[slider_img_3]}/>
          <Palette
            colors={[
              {color: '#111111', text: 'Primary Text & Icons'},
              {color: '#5A5A5A', text: 'Secondary Text'},
              {color: '#A3A3A3', text: 'Tertiary Text'},
            ]}
            palette={[
              '#00387F',
              '#1256AC',
              '#417FCC',
              '#6696D2',
              '#99B7DD',
              '#226C99',
              '#3189BE',
              '#52A4D6',
              '#98C8E4',
              '#C5DDEB',
              '#FFE300',
              '#FFE939',
              '#FFEE61',
              '#FFF285',
              '#FFF7B3',
              '#D95E3F',
              '#FC7B5A',
              '#FF957A',
              '#FFB6A4',
              '#FFD9CF',
              '#45A163',
              '#79D096',
              '#B0FFCB',
            ]}
            fonts={{
              name: {title: 'Montserrat', size: 95},
              examples: [
                {title: 'Header', size: 40, weight: 700},
                {title: 'Title', size: 30, weight: 400},
                {title: 'Subtitle', size: 24, weight: 400},
                {title: 'Body 1', size: 20, weight: 400, variant: {title: 'Body 1 - Medium', weight: 500}},
                {title: 'Body 2', size: 18, weight: 400, variant: {title: 'Body 2 - Medium', weight: 500}},
                {title: 'Button', size: 25, weight: 400},
              ]
            }}
          />
          <Review image={review_img_2} name="Metro" company="Metro">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed risus pulvinar nulla sed vulputate
              vitae varius arcu. Etiam penatibus nec eget viverra augue viverra. Neque facilisis lacus, mauris in amet,
              pulvinar. Nulla varius odio quis adipiscing. Euismod tristique quis lectus praesent nam ut risus,
              facilisis donec. Aliquet facilisi pretium in sagittis congue. </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed risus pulvinar nulla sed vulputate
              vitae varius arcu. Etiam penatibus nec eget viverra augue viverra. Neque facilisis lacus, mauris in amet,
              pulvinar. Nulla varius odio quis adipiscing. Euismod tristique quis lectus praesent nam ut risus,
              facilisis donec. Aliquet facilisi pretium in sagittis congue. </p>
          </Review>
        </Clients>
      </Route>

      <Route path="/portfolio/project/4" exact>
        <ScrollButton/>
        <Clients
          activeClient={slides[3]}
          setActiveClient={setActiveClient}
          slides={slides}
        >
          <Task>
            <p>Implement a mobile application for the Small cashless store network, with which customers
              stores can make purchases without the participation of sellers and cashiers.</p>
            <p>Now it is enough for the store's client to scan the products using the mobile application and
              make a payment there, including using Apple Pay and Google Pay.</p>
          </Task>
          <Volume volumes={[
            {title: '740', indexes: ['Opening hours']},
            {title: '4 developers', indexes: ['1 designer', '1 tester', '1 project manager']},
          ]}/>
          <Palette
            colors={[
              {color: '#1A1D1E', text: 'Primary Text & Icons'},
              {color: '#7E7E82', text: 'Secondary Text'},
              {color: '#8D8C8C', text: 'Tertiary Text'},
            ]}
            palette={[
              '#537DB7',
              '#6F9DDD',
              '#7CADF0',
              '#99BBEB',
              '#C9E0FF',
              '#F5CA44',
              '#F8D66C',
              '#F1D682',
              '#FFEAA9',
              '#F9E9B9',
              '#D24A44',
              '#E46862',
              '#ED7B76',
              '#F68A86',
              '#E9B9B7',
              '#614F7D',
              '#836BA8',
              '#A089C5',
              '#AE94D7',
              '#C2B2DB',
              '#35A248',
              '#50BD63',
              '#72ED87',
              '#98E5A6',
              '#C7F9D0',
            ]}
            fonts={{
              name: {title: 'Gilroy', size: 120},
            }}
          />
          <Prototypes image={wireframe_2_img}/>
          <Design images={[design_img_3, design_img_4]}>
            <div className="design__column">
              <h4>Technology stack</h4>
              <div>
                <p>Cross-platform mobile application for iOS and Android, integrated with 1C</p>
                <ul>
                  <li>Backend - Python</li>
                  <li>Frontend - React Native</li>
                  <li>Integrations - 1С, firebase</li>
                </ul>
              </div>
            </div>
            <div className="design__column">
              <h4>Functional:</h4>
              <div>
                <ul>
                  <li>Registration and authorization</li>
                  <li>The ability to scan the barcode of the product using the built-in scanner</li>
                  <li>Adding products to the shopping cart</li>
                  <li>Payment for purchases, including using Apple Pay and Google Pay</li>
                  <li>Bonus program</li>
                </ul>
              </div>
            </div>
          </Design>
          <Slider images={[slider_img_4]}/>
          <Review image="" name="Small" company="Small">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed risus pulvinar nulla sed vulputate
              vitae varius arcu. Etiam penatibus nec eget viverra augue viverra. Neque facilisis lacus, mauris in amet,
              pulvinar. Nulla varius odio quis adipiscing. Euismod tristique quis lectus praesent nam ut risus,
              facilisis donec. Aliquet facilisi pretium in sagittis congue. </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed risus pulvinar nulla sed vulputate
              vitae varius arcu. Etiam penatibus nec eget viverra augue viverra. Neque facilisis lacus, mauris in amet,
              pulvinar. Nulla varius odio quis adipiscing. Euismod tristique quis lectus praesent nam ut risus,
              facilisis donec. Aliquet facilisi pretium in sagittis congue. </p>
          </Review>
        </Clients>
      </Route>

      <Route path="/portfolio/project/5" exact>
        <ScrollButton/>
        <Clients
          activeClient={slides[4]}
          setActiveClient={setActiveClient}
          slides={slides}
        >
          <Task>
            <p>Implement a mobile application for the Small cashless store network, with which customers
              stores can make purchases without the participation of sellers and cashiers.</p>
            <p>Now it is enough for the store's client to scan the products using the mobile application and
              make a payment there, including using Apple Pay and Google Pay.</p>
          </Task>
          <Volume volumes={[
            {title: '740', indexes: ['Opening hours']},
            {title: '4 developers', indexes: ['1 designer', '1 tester', '1 project manager']},
          ]}/>
          <Result title="">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed risus pulvinar nulla sed vulputate
              vitae varius arcu. Etiam penatibus nec eget viverra augue viverra. Neque facilisis lacus, mauris in amet,
              pulvinar. Nulla varius odio quis adipiscing. Euismod tristique quis lectus praesent nam ut risus,
              facilisis donec. Aliquet facilisi pretium in sagittis congue. </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed risus pulvinar nulla sed vulputate
              vitae varius arcu. Etiam penatibus nec eget viverra augue viverra. Neque facilisis lacus, mauris in amet,
              pulvinar. Nulla varius odio quis adipiscing. Euismod tristique quis lectus praesent nam ut risus,
              facilisis donec. Aliquet facilisi pretium in sagittis congue. </p>
            <blockquote className="result__quite">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed risus pulvinar nulla sed vulputate
              vitae varius arcu. Etiam penatibus nec eget viverra augue viverra.
            </blockquote>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est duis commodo aliquam vitae molestie id augue
              cursus a. Urna, habitasse et, erat erat elit. Faucibus nulla nibh pellentesque et, risus semper consequat
              id. Sagittis id viverra dictum fermentum cursus faucibus. Integer nibh sem dolor, est eu diam suspendisse.
              Accumsan urna ac aliquet rhoncus turpis egestas nam neque. Duis proin urna malesuada sit. Elit ultrices
              risus auctor lacus purus. Non nam consequat scelerisque massa sit morbi. A, cras hac nec consequat nulla
              morbi diam. Amet, dictum id posuere justo. Dui bibendum diam posuere ultricies sit mus mi non ut. Pretium
              tellus dui placerat ultricies vel tempor nunc vitae sed. Tellus, curabitur est sed cras urna, erat. Neque
              convallis sed aenean vitae vitae metus a. Mi ullamcorper neque semper et viverra. Semper nunc quisque sit
              arcu vulputate dui sapien felis. Quam dignissim libero amet congue. Eros dolor in suscipit odio.
              Ullamcorper dignissim amet libero morbi fermentum. Commodo sociis amet imperdiet ornare augue nisl
              vulputate amet, nascetur.</p>
          </Result>
          <Prototypes image={wireframe_3_img}/>
        </Clients>
      </Route>

      <Route path="/portfolio/project" exact>
        <Redirect to="/portfolio/project/1"/>
      </Route>

      <Route path="/project" exact>
        <div style={{height: '100vh'}}>
          <ProjectStart/>
        </div>
      </Route>

      <Route path="/project/service" exact>
        <div style={{height: '100vh'}}>
          <ProjectService/>
        </div>
      </Route>

      <Route path="/project/contact" exact>
        <div style={{height: '100vh'}}>
          <ProjectContact/>
        </div>
      </Route>

      <Route path="/project/files" exact>
        <div style={{height: '100vh'}}>
          <ProjectFiles/>
        </div>
      </Route>

      <Redirect from="*" to="/mobile"/>
    </Switch>
  );
};

export default connect(
  (state: any) => {
    const {slides} = state.portfolioReducer;
    return {slides};
  },
  () => ({}),
)(MainSwitch);
