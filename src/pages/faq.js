import NavBarWeb2 from '../components/navbar-web-2';
import * as F from "@fortawesome/free-solid-svg-icons";
import Accordion from 'react-bootstrap/Accordion';


const FaqPage = () => {
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

  // TODO: IS THIS A STATIC PAGE? 

  return (
    <div className="faq-container">
      <NavBarWeb2 dd={'Fishing Experience'} options={fxOptions} pages={otherPages} />
      <div className="faq-page">
        <h1 style={{color: '#66635E' }}>FREQUENTLY ASKED QUESTIONS</h1>
      </div>
      <div className="faq-questions">
        <Accordion className="accordion-wrapper">
          <Accordion.Item eventKey="0">
            <Accordion.Header id="ah">This is the first question?</Accordion.Header>
            <Accordion.Body id="ab">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
              est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>This is the second question?</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
              est laborum.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>    
    </div>
  );
}

export default FaqPage;
