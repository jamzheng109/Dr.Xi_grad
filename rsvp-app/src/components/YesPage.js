import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/YesPage.css';

function YesPage() {
  return (
    <div className="yes-container">
      <h2 className="yes-message">Awesome! We're glad you'll join us.</h2>
      <Link to="/" className="link">Back to main page</Link>
    </div>
  );
}

export default YesPage;