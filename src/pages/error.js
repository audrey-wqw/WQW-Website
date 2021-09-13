import NavBarWeb2 from '../components/navbar-web-2';
import { Link } from "react-router-dom";
import React from 'react';
import * as F from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 
class ErrorPage extends React.Component {
  render(){
    const otherPages =
    [
      { name: 'WQW Connection', url: '/wqw-connection' },
      { name: 'Participant Resources', url: '/resources' },
      { name: 'FAQs', url: '/faq'}
    ]

    const fxOptions = 
    [
      { page: 'Schedule of Events', url: '/fx/schedule', icon: F.faCalendar},
      { page: 'FX Materials', url: '/fx/materials', icon: F.faCheck},
      { page: 'What to Pack', url: '/fx/what-to-pack', icon: F.faSuitcase},
      { page: 'Photos', url: '/fx/photos', icon: F.faCamera},
      { page: 'Volunteer Chat', url: '/chat', icon: F.faComment},
    ]

    return (
      <div>
        {/* <NavBarWeb2 pages={pages} /> */}
        <NavBarWeb2 dd={'Fishing Experience'} options={fxOptions} pages={otherPages} />
        <div className="error-wrapper" style={{display: ((this.allChecked && this.submitted) ? 'none' : '') }}>
          <h1 style={{color: '#66635E' }}>Oops! The page you just requested does not exist</h1>
          <h2 style={{fontSize: '16px', margin: '10px'}}>You may have clicked on a broken link or typed in an invalid URL</h2>
          <Link className="btn error"><FontAwesomeIcon icon={faHome} color="white"/> Return to Dashboard </Link>
        </div>
      </div>
    );
  }
  
}

export default ErrorPage;
