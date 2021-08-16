
import logo from '../assets/logo.png';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons';

const SignUpPage = () => {
  return (
    <div className='login-page'>
      <img className='login-logo' src={logo} alt="WQW logo"/>
      <div className='login-web'>
        <div className='top-text'>
          <h1>Get started</h1>
          <p>Already registered with Warriors and Quiet Waters?</p> 
          <Link className='create-acct-link' to='/'>Sign in</Link>
        </div>
        <hr style={{width:'100%'}}/>
        <h3>For new members</h3>
        <form className="login-form">
          <label className="login-form-label" for="name">
            <FontAwesomeIcon icon={faUser} color="#E4B53A"/> 
            Your Name
          </label>
          <input type="text" id="name" /><br />
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
          <input className="btn" type="submit" value="SIGN UP" />
        </form>
        <div className="socials">
          <p style={{fontWeight: '400px', color: '#66635E'}}>Follow us</p>
          <a className='social-icon' target="_blank" href='https://www.instagram.com/warriorsandquietwaters/'><FontAwesomeIcon icon={faInstagram} color="#66635E"/></a><br />
          <a className='social-icon' target="_blank" href='https://www.facebook.com/wqwMontana/timeline/'><FontAwesomeIcon icon={faFacebookF} color="#66635E"/></a>
        </div>
      </div>
    </div>
  )
}

export default SignUpPage;
