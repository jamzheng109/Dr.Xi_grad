import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/MainPage.css';

function MainPage() {
  const navigate = useNavigate();

  return (
      <div className="main-container">
          <img src={`${process.env.PUBLIC_URL}/grad.JPG`} className="main-image"/>
          <h1>RSVP FOR DR. XI's GRADUATION PARTY!!!</h1>
          <h1 className="main-title">Will you be attending the event on June 11?</h1>
          <h2>Address: 57 Walnut St, Quincy, MA 02170</h2>
          <h2>Start time will be @6pm but come whenever!!!</h2>
          <h2>Optional dress code: light blue</h2>
          <button onClick={() => navigate('/yes')} className="button button-yes">
              Yes
          </button>
          <button onClick={() => navigate('/no')} className="button button-no">
              No
          </button>
      </div>
  );
}

export default MainPage;