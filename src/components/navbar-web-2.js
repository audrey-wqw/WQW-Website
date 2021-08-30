import { useState } from 'react';
import { Link } from "react-router-dom";
import logo from '../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const NavBarWeb2 = (props) => {

  return (
    <div className="navbar-web-2">
      <Link to="/"><img className='navbar-web-2-logo' src={logo} alt="WQW logo"/></Link>
      <div className="navbar-web-2-pages">
        { !props.pages ? '' : props.pages.map((page) => 
          <Link className="link-2" to={page.url}>{page.name}</Link>
        )
        }
        {
          !props.dd ? '' :
          <div className="nav-dd">
            {/* <Link className='link-2'>{props.dd}</Link> */}
            <button className="collapse">
              {props.dd}
              <FontAwesomeIcon icon={faChevronDown} color="black"/>
            </button>
            <div className="dd-content">
              {props.options.map((item) =>
                <Link className="link" to={item.url} style={{fontSize: '14px'}}>
                  <FontAwesomeIcon style={{padding: '1.5%'}} icon={item.icon} color="#66635E"/>
                  {item.page}
                </Link>
              )}
            </div>
          </div>
        }
      </div>
    </div>
  )
  
}

export default NavBarWeb2;

