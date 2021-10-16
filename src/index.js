// general imports
import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { Provider } from 'react-redux'


// import page components
import LoginPage from './pages/login';
import SignUpPage from './pages/signup';
import SchedulePage from './pages/schedule';
import PreFxChecklistPage from './pages/preFxChecklist';
import DashboardPage from './pages/dashboard';
import WhatToPackPage from './pages/whatToPack';
import PhotosPage from './pages/photos';
import FaqPage from './pages/faq';
import ErrorPage from './pages/error';

import { logout } from "./actions/auth";
import { clearMessage } from "./actions/message";
import { history } from './utils/history';


import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const middleware = [thunk];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);


export class Login extends React.Component {
  componentDidMount() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  render() {
    return (
      
        <div> 
          <LoginPage />
        </div>

      
    )
  }
}

export class SignUp extends React.Component {
  componentDidMount() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  render() {
    return (
      <div>
        <SignUpPage />
      </div>
    )
  }
}

export class Schedule extends React.Component {
  componentDidMount() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  render() {
    return (
      <div>
        <SchedulePage />
      </div>
    )
  }
}

export class PreFxChecklist extends React.Component {
  componentDidMount() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  render() {
    return (
      <div>
        <PreFxChecklistPage />
      </div>
    )
  }
}

export class Dashboard extends React.Component {
  componentDidMount() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  render() {
    return (
      <div>
        <DashboardPage />
      </div>
    )
  }
}

export class WhatToPack extends React.Component {
  componentDidMount() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  render() {
    return (
      <div>
        <WhatToPackPage />
      </div>
    )
  }
}

export class Photos extends React.Component {
  componentDidMount() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  render() {
    return (
      <div>
        <PhotosPage />
      </div>
    )
  }
}

export class Faq extends React.Component {
  componentDidMount() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  render() {
    return (
      <div>
        <FaqPage />
      </div>
    )
  }
}

export class Error extends React.Component {
  componentDidMount() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  render() {
    return (
      <div>
        <ErrorPage />
      </div>
    )
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        {/* <Navigation /> */}

        <Switch>
          <Route exact path="/" component={LoginPage}></Route>
          <Route exact path="/signup" component={SignUpPage}></Route>
          <Route exact path="/fx/schedule" component={SchedulePage}></Route>
          <Route exact path="/fx/checklist" component={PreFxChecklistPage}></Route>
          <Route exact path="/fx/what-to-pack" component={WhatToPackPage}></Route>
          <Route exact path="/dashboard" component={DashboardPage}></Route>
          <Route exact path="/fx/photos" component={PhotosPage}></Route>
          <Route exact path="/faq" component={FaqPage}></Route>
          <Route component={ErrorPage}></Route> 
        </Switch>

        {/* <Footer /> */}
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
