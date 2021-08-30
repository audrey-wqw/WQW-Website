import NavBarWeb2 from '../components/navbar-web-2';
import * as F from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const PhotosPage = () => {
  const fxOptions = 
  [
    { page: 'Schedule of Events', url: '/fx/schedule', icon: F.faCalendar},
    { page: 'FX Materials', url: '/fx/materials', icon: F.faCheck},
    { page: 'What to Pack', url: '/fx/what-to-pack', icon: F.faSuitcase},
    { page: 'Photos', url: '/fx/photos', icon: F.faCamera},
    { page: 'Volunteer Chat', url: '/chat', icon: F.faComment},
  ]

  const otherPages =
  [
    { name: 'WQW Connection', url: '/wqw-connection' },
    { name: 'Participant Resources', url: '/resources' },
    { name: 'FAQs', url: '/faq'}
  ]

  return (
    <div className="photo-container">
      <NavBarWeb2 dd={'Fishing Experience'} options={fxOptions} pages={otherPages} />
      <div className="photo-page">
        <h1 style={{color: '#66635E' }}>PHOTOS</h1>
        <Link className="photo-link" to='/'>SGT MAC'S PHOTOS</Link>
        <Link className="photo-link" to='/'>PERSONAL PHOTO SHARE</Link>
      </div>
    </div>
  );
}

export default PhotosPage;
