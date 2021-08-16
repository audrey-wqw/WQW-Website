import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const NavBarWeb = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar-web">
      <ul>
        Fishing Experience 
        <button className="collapse" onClick={() => setIsOpen(!isOpen)}>
          <FontAwesomeIcon icon={isOpen ? faChevronDown : faChevronUp} color="#F4F2ED"/>
        </button>
        {isOpen ? (props.options.map((item) => <li><Link className="link" to={item.url} style={{fontSize: '14px'}}>{item.page}</Link></li>)) : ''}
      </ul>
      <Link className="link" to="/" style={{fontFamily: 'Open Sans'}}>Account Settings</Link>
    </div>
  )
  
}

export default NavBarWeb;

