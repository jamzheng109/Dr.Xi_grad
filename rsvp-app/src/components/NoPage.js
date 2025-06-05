import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NoPage.css';

function NoPage() {
  return (
    <div className="no-container">
      <h2 className="no-message">Sorry you can't make it!</h2>
      <Link to="/" className="link">Back to main page</Link>
    </div>
  );
}

export default NoPage;