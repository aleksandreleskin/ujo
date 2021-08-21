import './App.css';

// Import dependencies
import {BrowserRouter} from 'react-router-dom';

// Import components
import Menu from './components/Menu/Menu';
import MainSwitch from './components/MainSwitch/MainSwitch';
import PopupForm from './components/PopupForm/PopupForm';
import Cursor from './components/Cursor/Cursor';
import {connect} from 'react-redux';

interface IApp {
  showMenu: boolean;
  showPopup: boolean;
}

const App = ({showMenu, showPopup}: IApp) => {
  return (
    <div className="App" style={{height: showMenu || showPopup ? '100vh' : '', overflow: showMenu || showPopup ? 'hidden' : ''}}>
      <Cursor/>
      <BrowserRouter>
        <Menu/>
        <PopupForm/>
        <MainSwitch/>
      </BrowserRouter>
    </div>
  );
};

export default connect(
  (state: any) => {
    const {showMenu, showPopup} = state.headerReducer;

    return {showMenu, showPopup};
  }, () => ({}))
(App);
