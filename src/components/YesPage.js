import React, { useState } from 'react';
import '../styles/YesPage.css';
import {Link} from "react-router-dom";

function YesPage() {
  const [fullName, setFullName] = useState('');
  const [plusOne, setPlusOne] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/api/rsvp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ fullName, plusOne }),
    });

    if (response.ok) {
      setSubmitted(true);
    } else {
      alert('Failed to submit RSVP');
    }
  };

  return (
      <div className="yes-container">
        <img src="./yes.JPG" alt="Event" className="yes-image"/>
        <h1>Awesome! You're attending 🎉</h1>
        {!submitted ? (
            <form onSubmit={handleSubmit} className="yes-form">
              <label>
                Full Name:
                <input type="text" value={fullName} onChange={e => setFullName(e.target.value)} required/>
              </label>
              <label>
                Bringing a plus one?
                <input type="checkbox" checked={plusOne} onChange={() => setPlusOne(!plusOne)}/>
              </label>
              <button type="submit">Submit RSVP</button>
              <Link to="/" className="link">Back to main page</Link>
            </form>
        ) : (
            <p>Thanks for RSVPing!</p>
        )}
      </div>
  );
}

export default YesPage;