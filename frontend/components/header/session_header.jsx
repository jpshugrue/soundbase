import React from 'react';
import { Link } from 'react-router-dom';

const SessionHeader = () => (
  <div className="sessionHeaderBox">
    <div className="sessionHeaderImageBox">
      <Link to="/"><img src={window.staticImages.headerLogoSession}></img></Link>
    </div>
  </div>
);

export default SessionHeader;
