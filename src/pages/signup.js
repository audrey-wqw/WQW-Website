
import logo from '../assets/logo.png';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons';

import { connect } from "react-redux";
import { register } from "../actions/auth";
import React, { Component } from "react";

// const SignUpPage = () => {
//   return (
//     <div className='login-page'>
//       <img className='login-logo' src={logo} alt="WQW logo"/>
//       <div className='login-web'>
//         <div className='top-text'>
//           <h1>Get started</h1>
//           <p>Already registered with Warriors and Quiet Waters?</p> 
//           <Link className='create-acct-link' to='/'>Sign in</Link>
//         </div>
//         <hr style={{width:'100%'}}/>
//         <h3>For new members</h3>
//         <form className="login-form">
//           <label className="login-form-label" for="name">
//             <FontAwesomeIcon icon={faUser} color="#E4B53A"/> 
//             Your Name
//           </label>
//           <input type="text" id="name" /><br />
//           <label className="login-form-label" for="email">
//             <FontAwesomeIcon icon={faEnvelope} color="#E4B53A"/> 
//             Your Email
//           </label>
//           <input type="text" id="email" /><br />
//           <label className="login-form-label" for="password">
//             <FontAwesomeIcon icon={faLock} color="#E4B53A"/>
//             Your Password
//           </label>
//           <input type="password" id="password" /><br />
//           <input className="btn" type="submit" value="SIGN UP" />
//         </form>
//         <div className="socials">
//           <p style={{fontWeight: '400px', color: '#66635E'}}>Follow us</p>
//           <a className='social-icon' target="_blank" href='https://www.instagram.com/warriorsandquietwaters/'><FontAwesomeIcon icon={faInstagram} color="#66635E"/></a><br />
//           <a className='social-icon' target="_blank" href='https://www.facebook.com/wqwMontana/timeline/'><FontAwesomeIcon icon={faFacebookF} color="#66635E"/></a>
//         </div>
//       </div>
//     </div>
//   )
// }
class SignUpPage extends Component {
  constructor(props) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this);
    this.onChangeFName = this.onChangeFName.bind(this);
    this.onChangeLName = this.onChangeLName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      successful: false,
    };
  };

  onChangeFName(e) {
    this.setState({
      firstName: e.target.value,
    });
  };

  onChangeLName(e) {
    this.setState({
      lastName: e.target.value,
    });
  };

  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  };

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  };

  handleRegister(e) {
    e.preventDefault();

    this.setState({
      successful: false,
    });

    // this.form.validateAll();

    // if (this.checkBtn.context._errors.length === 0) {
      this.props
        .dispatch(
          register(this.state.firstName, this.state.lastName, this.state.email, this.state.password)
        )
        .then(() => {
          this.setState({
            successful: true,
          });
        })
        .catch(() => {
          this.setState({
            successful: false,
          });
        });
    //}
  }

  render(){
    const { message } = this.props;
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

          <form className="login-form" onSubmit={this.handleRegister} ref={(c) => { this.form = c; }}>
            <label className="login-form-label" for="fname">
              <FontAwesomeIcon icon={faUser} color="#E4B53A"/> 
              Your First Name
            </label>
            <input type="text" id="fname" value={this.state.firstName} onChange={this.onChangeFName}/><br />
            <label className="login-form-label" for="lname">
              <FontAwesomeIcon icon={faUser} color="#E4B53A"/> 
              Your Last Name
            </label>
            <input type="text" id="lname" value={this.state.lastName} onChange={this.onChangeLName}/><br />
            <label className="login-form-label" for="email">
              <FontAwesomeIcon icon={faEnvelope} color="#E4B53A"/> 
              Your Email
            </label>
            <input type="text" id="email" value={this.state.email} onChange={this.onChangeEmail}/><br />
            <label className="login-form-label" for="password">
              <FontAwesomeIcon icon={faLock} color="#E4B53A"/>
              Your Password
            </label>
            <input type="password" id="password" value={this.state.password} onChange={this.onChangePassword}/><br />
            <input className="btn" type="submit" value="SIGN UP" ref={(c) => { this.checkBtn = c; }}/>
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
}

// export default SignUpPage;
function mapStateToProps(state) {
  const { message } = state.message;
  return {
    message,
  };
}

export default connect(mapStateToProps)(SignUpPage);
