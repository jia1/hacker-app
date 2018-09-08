import FacebookGroup from './FacebookGroup';
import {
  FacebookLogin,
  loggedOutState as facebookLoggedOutState
} from './FacebookLogin';
import GoogleLogin from './GoogleLogin';
import Home from './Home';
import SideTabs from './SideTabs';
import Tabs from './Tabs';

// Ref for export via index.js:
// https://stackoverflow.com/questions/34072598/es6-exporting-importing-in-index-file
export {
  FacebookGroup,
  FacebookLogin,
  facebookLoggedOutState,
  GoogleLogin,
  Home,
  SideTabs,
  Tabs
};
