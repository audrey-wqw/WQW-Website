import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const NavBarWeb = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar-web">
      {!props.fx ? '' :  
      <ul style={{marginBottom: '4%'}}>
        Fishing Experience 
        <button className="collapse" onClick={() => setIsOpen(!isOpen)}>
          <FontAwesomeIcon icon={isOpen ? faChevronDown : faChevronUp} color="#F4F2ED"/>
        </button>
        {isOpen ? (props.options.map((item) => 
          <li>
            {/* {console.log(item.icon)} */}
            <FontAwesomeIcon style={{padding: '1.5%'}} icon={item.icon} color="#F4F2ED"/>
            <Link className="link" to={item.url} style={{fontSize: '14px'}}>
              {item.page}
            </Link>
          </li>)) : ''}
      </ul>
      }
      {props.otherPages.map((page) => 
        <div style={{marginBottom: '6px'}}>
          <Link className="link" to={page.url} style={{fontFamily: 'Open Sans'}}>{page.name}</Link>
          <br />
        </div>
      )}
    </div>
  )
  
}

export default NavBarWeb;

