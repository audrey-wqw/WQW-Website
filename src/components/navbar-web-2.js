import { Link } from "react-router-dom";
import logo from '../assets/logo.png';

const NavBarWeb2 = (props) => {
  return (
    <div className="navbar-web-2">
      <Link to="/"><img className='navbar-web-2-logo' src={logo} alt="WQW logo"/></Link>
      <div className="navbar-web-2-pages">
        { !props.pages ? '' : props.pages.map((page) => 
          <Link className="link-2" to={page.url}>{page.name}</Link>
        )
          // 
          // <Link className="link-2" to="/fx/checklist">Pre-FX Checklist</Link>
          // <Link className="link-2" to="/fx/what-to-pack">What to Pack</Link>
          // <Link className="link-2" to="/fx/photos">Photos</Link>
        }
      </div>
    </div>
  )
  
}

export default NavBarWeb2;

