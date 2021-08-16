
import logo from '../assets/logo.png';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons';


const LoginPage = () => {
  return (
    <div>
      <div className='login-page'>
        <img className='login-logo' src={logo} alt="WQW logo"/>
        <div className='login-web'>
          <div className='top-text'>
            <h1>Welcome Back</h1>
            <p>Not yet registered with Warriors and Quiet Waters?</p> 
            <Link className='create-acct-link' to='/signup'>Create Account</Link>
            {/* TODO: REMOVE ONCE LOGIN LOGIC IS READY */}
            <Link className='create-acct-link' to='/fx/schedule'>BYPASS</Link>
          </div>
          <hr />
          <h3>For returning members</h3>
          <form className="login-form">
            <label className="login-form-label" for="email">
              <FontAwesomeIcon icon={faEnvelope} color="#E4B53A"/> 
              Your Email
            </label>
            <input type="text" id="email" /><br />
            <label className="login-form-label" for="password">
              <FontAwesomeIcon icon={faLock} color="#E4B53A"/>
              Your Password
            </label>
            <input type="password" id="password" /><br />
            <input className="btn" type="submit" value="Login" />
          </form>
          <div className="socials">
            <p style={{fontWeight: '400px', color: '#66635E'}}>Follow us</p>
            <a className='social-icon' target="_blank" href='https://www.instagram.com/warriorsandquietwaters/'><FontAwesomeIcon icon={faInstagram} color="#66635E"/></a><br />
            <a className='social-icon' target="_blank" href='https://www.facebook.com/wqwMontana/timeline/'><FontAwesomeIcon icon={faFacebookF} color="#66635E"/></a>
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

export default LoginPage;
