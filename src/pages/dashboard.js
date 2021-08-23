import NavBarWeb from '../components/navbar-web';
import * as F from "@fortawesome/free-solid-svg-icons";

const dashboardPage = () => {
  const dashboardTextStyle = {
    fontSize: '45px',
    textAlign: 'center',
  }

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
      <NavBarWeb fx={true} options={fxOptions} otherPages={otherPages}/>
      <div className="dashboard-content">
        <h1 style={dashboardTextStyle}><span style={{fontFamily: 'Open Sans'}}>Welcome</span> NAME</h1>
      </div>
    </div>
  );
}

export default dashboardPage;
