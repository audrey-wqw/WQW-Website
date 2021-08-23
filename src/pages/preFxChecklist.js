import NavBarWeb2 from '../components/navbar-web-2';
import { Link } from "react-router-dom";

const preFxChecklistPage = () => {
  const pages = [
    { name: 'Schedule of Events', url: '/fx/schedule' },
    { name: 'Pre-FX Checklist', url: '/fx/checklist' },
    { name: 'What to Pack', url: '/fx/what-to-pack' },
    { name: 'Photos', url: '/fx/photos' },
  ]

  return (
    <div>
      <NavBarWeb2 pages={pages} />
      <div className="checklist-wrapper">
        <h1 style={{color: '#66635E' }}>PRE-FX CHECKLIST</h1>
        <h2 style={{fontSize: '20px', margin: 0}}>Are you ready for your upcoming FX?</h2>
        <div className="checklist-form-container">
          <form className="checklist-form-container">
            <label className="checkbox-container" for="dates">My FX dates are on my calendar
              <input type="checkbox" id="dates" name="dates"/>
              <span class="checkmark"></span>
            </label>
           
            <label class="checkbox-container" for="info">My information is filled out
              <input type="checkbox" id="info" name="info"/>
              <span class="checkmark"></span>
            </label>
            
            <label class="checkbox-container" for="flight">I confirmed my flight information with Audrey
              <input type="checkbox" id="flight" name="flight"/>
              <span class="checkmark"></span>
            </label>
          
            <label class="checkbox-container" for="email">I read the welcome email from Saul
              <input type="checkbox" id="email" name="email"/>
              <span class="checkmark"></span>
            </label>
         
            <label class="checkbox-container" for="bags">My bags are packed and I checked the <Link class="pack-link" to="/fx/what-to-pack">packing list</Link>
              <input type="checkbox" id="bags" name="bags"/>
              <span class="checkmark"></span>
            </label>
       
            <input class="btn" style={{width: '40%', alignSelf: 'center'}} type="submit" value="I'M READY"/>
          </form>
        </div>
      </div>
    </div>
  );
}

export default preFxChecklistPage;
