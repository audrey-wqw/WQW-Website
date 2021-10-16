import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { authenticationService } from '@/_services';


class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    // redirect to home if already logged in
    if (authenticationService.currentUserValue) { 
      this.props.history.push('/');
    }
  }

  render() {
    function onSubmit() {
      authenticationService.login(email, password)
        .then( user => {
          const { from } = this.props.location.state || { from: { pathname: "/" } };
          this.props.history.push(from);
        },
          error => {
            setSubmitting(false);
            setStatus(error);
          }
        );
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
            <form className="login-form">
              <label className="login-form-label" for="email">
                <FontAwesomeIcon icon={faEnvelope} color={theme.colors.GOLD}/> 
                Your Email
              </label>
              <input type="text" id="email" onChange={e => isEmail(e.target.value) ? setEmail(e.target.value) : ''}/><br />
              <label className="login-form-label" for="password">
                <FontAwesomeIcon icon={faLock} color={theme.colors.GOLD}/>
                Your Password
              </label>
              <input type="password" id="password" onChange={e => setPassword(e.target.value)}/><br />
              {error && (<p style={{color: "red", marginBottom: '10px', fontWeight: '600', fontFamily: 'Open Sans Bold'}}>Your username and/or password is incorrect.</p>)}
              <input className="btn" type="submit" value="Login" onClick={onSubmit(email, password)}/>
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

export { LoginPage };
