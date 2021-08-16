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
import './index.css';

// import page components
import LoginPage from './pages/login';
import SignUpPage from './pages/signup';
import SchedulePage from './pages/schedule';


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


ReactDOM.render(
  <React.StrictMode>
    <Router>
      {/* <Navigation /> */}

      <Switch>
        <Route exact path="/" component={LoginPage}></Route>
        <Route exact path="/signup" component={SignUpPage}></Route>
        <Route exact path="/fx/schedule" component={SchedulePage}></Route>
        {/* TODO: MAKE AN ERROR PAGE <Route component={ErrorPage}></Route>  */}
      </Switch>

      {/* <Footer /> */}
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
