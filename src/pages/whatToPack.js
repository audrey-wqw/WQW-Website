import NavBarWeb2 from '../components/navbar-web-2';
import { Link } from "react-router-dom";
import * as F from "@fortawesome/free-solid-svg-icons";

const whatToPackPage = () => {
  // const pages = [
  //   { name: 'Schedule of Events', url: '/fx/schedule' },
  //   { name: 'Pre-FX Checklist', url: '/fx/checklist' },
  //   { name: 'What to Pack', url: '/fx/what-to-pack' },
  //   { name: 'Photos', url: '/fx/photos' },
  // ]
  const fxOptions = 
  [
    { page: 'Schedule of Events', url: '/fx/schedule', icon: F.faCalendar},
    { page: 'Pre-FX Checklist', url: '/fx/checklist', icon: F.faCheck},
    { page: 'What to Pack', url: '/fx/what-to-pack', icon: F.faSuitcase},
    { page: 'Photos', url: '/fx/photos', icon: F.faCamera},
  ]

  const otherPages =
  [
    { name: 'WQW Connection', url: '/wqw-connection' },
    { name: 'Participant Resources', url: '/resources' },
    { name: 'FAQs', url: '/faq'}
  ]


  return (
    <div>
      {/* <NavBarWeb2 pages={pages} /> */}
      <NavBarWeb2 dd={'Fishing Experience'} options={fxOptions} pages={otherPages} />
      <div className="packing-wrapper">
        <h1 style={{color: '#66635E' }}>WHAT TO PACK</h1>
        <h2 style={{fontSize: '16px', marginTop: '1%', marginBottom: 0}}>In Montana the dress code is casual.</h2>
        <h2 style={{fontSize: '16px', margin: 0}}>Pack a carry on <i>only if possible!</i></h2>
        
          <ul className="items-list">
            <li className="item" style={{color: 'black'}}>Jacket that will keep you warm down to 30 degrees</li>
            <li className="item" style={{color: 'black'}}>Warm socks &amp; hat (optional)</li>
            <li className="item" style={{color: 'black'}}>Swimsuit (Quiet Waters Ranch has an indoor hot tub and pool)</li>
            <li className="item" style={{color: 'black'}}>Appropriate footwear for off pavement &amp; trail wear</li>
            <li className="item" style={{color: 'black'}}>Comfortable clothes for relaxing</li>
            <li className="item" style={{color: 'black'}}>Hygiene kit</li>
          </ul>
  
        <h3 style={{marginTop: '3%', fontSize: '20px', textAlign: 'center'}}>WQW asks that participants cover costs for checked bags en route to Bozeman and airport parking/transport</h3>
        <h3 style={{fontSize: '20px', textAlign: 'center'}}>You will be outfitted with everything needed to fly-fish — you <em>don't</em> need to bring any fishing gear.</h3>
      
      </div>
    </div>
  );
}

export default whatToPackPage;
