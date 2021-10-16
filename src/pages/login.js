import React from 'react';
import { Link, Redirect } from "react-router-dom";

import logo from '../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import theme from '../utils/theme';

import { isEmail } from "validator";

import { connect } from "react-redux";
import { login } from "../actions/auth";

// const LoginPage = (props) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const [error, setError] = useState(null);

//   const checkFormValid = (email === '') && (password === '') && !error;
//   const [formValid, setFormValid] = useState(checkFormValid);

//   return (
//     <div>
//       <div className='login-page'>
//         <img className='login-logo' src={logo} alt="WQW logo"/>
//         <div className='login-web'>
//           <div className='top-text'>
//             <h1>Welcome Back</h1>
//             <p>Not yet registered with Warriors and Quiet Waters?</p> 
//             <Link className='create-acct-link' to='/signup'>Create Account</Link>
//             {/* TODO: REMOVE ONCE LOGIN LOGIC IS READY */}
//             {/* <Link className='create-acct-link' to='/dashboard'>BYPASS</Link> */}
//           </div>
//           <hr />
//           <h3>For returning members</h3>
//           <form className="login-form">
//             <label className="login-form-label" for="email">
//               <FontAwesomeIcon icon={faEnvelope} color={theme.colors.GOLD}/> 
//               Your Email
//             </label>
//             <input type="text" id="email"/><br />
//             <label className="login-form-label" for="password">
//               <FontAwesomeIcon icon={faLock} color={theme.colors.GOLD}/>
//               Your Password
//             </label>
//             <input type="password" id="password"/><br />
//             {error && (<p style={{color: "red", marginBottom: '10px', fontWeight: '600', fontFamily: 'Open Sans Bold'}}>Your username and/or password is incorrect.</p>)}
//             <input className="btn" type="submit" value="Login"/>
//           </form>
//           <div className="socials">
//             <p style={{fontWeight: '400px', color: '#66635E'}}>Follow us</p>
//             <a className='social-icon' target="_blank" href='https://www.instagram.com/warriorsandquietwaters/'><FontAwesomeIcon icon={faInstagram} color={theme.colors.DARKGRAY}/></a><br />
//             <a className='social-icon' target="_blank" href='https://www.facebook.com/wqwMontana/timeline/'><FontAwesomeIcon icon={faFacebookF} color={theme.colors.DARKGRAY}/></a>
//           </div>
//         </div>
//       </div>

//       <div className="login-mobile">
//         <form className="login-form-mobile">
//           <h2 class='mobile-title'>Log in</h2>
//           <div className='mobile-form-elt'>
//             <label className="login-form-label-mobile" for="email">
//               <FontAwesomeIcon icon={faEnvelope} color="#E4B53A"/> 
//               Your Email
//             </label>
//             <input className="input-mobile" type="text" id="email" /><br />
//           </div>
//           <label className="login-form-label-mobile" for="password">
//             <FontAwesomeIcon icon={faLock} color="#E4B53A"/>
//             Your Password
//           </label>
//           <input className="input-mobile" type="password" id="password" /><br />
//           <input className="btn" type="submit" value="Login →" />
//         </form>
//       </div>
//     </div>
//   )
// }

// export default LoginPage;

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      email: "",
      password: "",
      loading: false,
    };
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  handleLogin(e) {
    e.preventDefault();

    this.setState({
      loading: true,
    });

    const { dispatch, history } = this.props;

    // if (this.checkBtn.context._errors.length === 0) {
      dispatch(login(this.state.email, this.state.password))
        .then(() => {
          history.push("/dashboard");
          window.location.reload();
        })
        .catch(() => {
          this.setState({
            loading: false
          });
        });
    // } else {
    //   this.setState({
    //     loading: false,
    //   });
    // }
  }


  render() {
    const { isLoggedIn, message } = this.props;

    if (isLoggedIn) {
      return <Redirect to="/dashboard" />;
    }

    return (
      <div>
        <div className='login-page'>
          <img className='login-logo' src={logo} alt="WQW logo"/>
          <div className='login-web'>
            <div className='top-text'>
              <h1>Welcome Back</h1>
              <p>Not yet registered with Warriors and Quiet Waters?</p> 
              <Link className='create-acct-link' to='/signup'>Create Account</Link>
                
            </div>
            <hr />
            <h3>For returning members</h3>
            <form className="login-form" onSubmit={this.handleLogin} ref={(c) => { this.form = c; }}>
              <label className="login-form-label" for="email">
                <FontAwesomeIcon icon={faEnvelope} color={theme.colors.GOLD}/> 
                Your Email
              </label>
              <input type="text" id="email" value={this.state.email} onChange={this.onChangeEmail}/><br />
              <label className="login-form-label" for="password">
                <FontAwesomeIcon icon={faLock} color={theme.colors.GOLD}/>
                Your Password
              </label>
              <input type="password" id="password" value={this.state.password} onChange={this.onChangePassword}/><br />
              {/* {error && (<p style={{color: "red", marginBottom: '10px', fontWeight: '600', fontFamily: 'Open Sans Bold'}}>Your username and/or password is incorrect.</p>)} */}
              <input className="btn" type="submit" value="Login" disabled={this.state.loading}/>
            </form>
            <div className="socials">
              <p style={{fontWeight: '400px', color: '#66635E'}}>Follow us</p>
              <a className='social-icon' target="_blank" href='https://www.instagram.com/warriorsandquietwaters/'><FontAwesomeIcon icon={faInstagram} color={theme.colors.DARKGRAY}/></a><br />
              <a className='social-icon' target="_blank" href='https://www.facebook.com/wqwMontana/timeline/'><FontAwesomeIcon icon={faFacebookF} color={theme.colors.DARKGRAY}/></a>
            </div>
          </div>
        </div>
  
        <div className="login-mobile">
          <form className="login-form-mobile">
            <h2 class='mobile-title'>Log in</h2>
            <div className='mobile-form-elt'>
              <label className="login-form-label-mobile" for="email">
                <FontAwesomeIcon icon={faEnvelope} color="#E4B53A"/> 
                Your Email
              </label>
              <input className="input-mobile" type="text" id="email" /><br />
            </div>
            <label className="login-form-label-mobile" for="password">
              <FontAwesomeIcon icon={faLock} color="#E4B53A"/>
              Your Password
            </label>
            <input className="input-mobile" type="password" id="password" /><br />
            <input className="btn" type="submit" value="Login →" />
          </form>
        </div>
      </div>
    )
  }
};

function mapStateToProps(state) {
  const { isLoggedIn } = state.auth;
  const { message } = state.message;
  return {
    isLoggedIn,
    message
  };
};

// export default { LoginPage };
export default connect(mapStateToProps)(LoginPage);

