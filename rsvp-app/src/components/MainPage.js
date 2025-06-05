import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/MainPage.css';

function MainPage() {
  const navigate = useNavigate();

  return (
      <div className="main-container">
          <img src="/grad.JPG" alt="Event" className="main-image"/>
          <h1>RSVP FOR DR. XI's GRADUATION PARTY!!!</h1>
          <h1 className="main-title">Will you be attending the event on June 11 @6pm?</h1>
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