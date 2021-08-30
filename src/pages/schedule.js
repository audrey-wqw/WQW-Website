import Header from '../components/header';
// import NavBarWeb from '../components/navbar-web';
import NavBarWeb2 from '../components/navbar-web-2';
import * as F from "@fortawesome/free-solid-svg-icons";

const SchedulePage = () => {
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

  /* TODO: delete and pull data from salesforce */
  const schedule =
  [
    { 
      date: 'Tuesday, July 6',
      dayEvent: 'FLY FISHING 101',
      dateItems: [
        { time: '7:30 AM', event: 'Breakfast', eventDetails: 'Have caregivers prepared for fishing by 8:15 AM' },
        { time: '9:30 AM', event: 'Fly Fishing Instruction 101 at QWR', eventDetails: 'Location: QWR' },
        { time: '12:00 PM', event: 'Guided Fly Fishing', eventDetails: 'Greycliff ponds, be back at QWR by 5:30 PM' }
      ]
    },
    { 
      date: 'Tuesday, July 6',
      dayEvent: 'FLY FISHING 101',
      dateItems: [
        {time: '7:30 AM', event: 'Breakfast', eventDetails: 'Have caregivers prepared for fishing by 8:15 AM'}
      ]
    },
  ]

  return (
    <div>
      {/* <Header title="Schedule of Events" /> */}
      <div className="schedule-page">
        {/* <NavBarWeb fx={true} options={fxOptions} otherPages={otherPages} /> */}
        <NavBarWeb2 dd={'Fishing Experience'} options={fxOptions} pages={otherPages} />
          <div className="schedule-container">
          <h1 style={{color: '#66635E' }}>SCHEDULE OF EVENTS</h1>
          <h2 style={{fontSize: '20px', margin: 0}}>Here's what the next few days look like ...</h2>
            {schedule.map((item) => 
              <div className="schedule-item">
                <div className="schedule-item-heading">
                  <h1 style={{fontSize: "25px"}}>{item.date}</h1>
                  <h3 style={{fontSize: "25px", fontFamily: 'Open Sans Light', letterSpacing: '10%'}}>{item.dayEvent}</h3>
                </div>
                { item.dateItems.map((singleEvent) => 
                  <div className="schedule-item-event">
                    <p style={{fontSize: "20px", color: "#66635E", width: '15%'}}>{singleEvent.time}</p>
                    <div className="schedule-item-details">
                      <p style={{fontFamily: 'Open Sans Bold', fontSize: "20px", color: "#66635E"}}>{singleEvent.event}</p>
                      <p style={{fontSize: '16px'}}>{singleEvent.eventDetails}</p>
                    </div>
                    <hr style={{width: '100%', marginTop: '1%', borderWidth: '0.10px'}}/>
                  </div>
                )}
            </div>
            )}
          </div>
      </div>
    </div>
  );
}

export default SchedulePage;
