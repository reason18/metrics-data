import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
class Banner extends Component {
  render() {
    return (
      <div className="banner-block">
        <div className="cover-holder">
          <h1>Welcome!</h1>
          <h2>This is a web site for displaying telemetry data received from a remote server</h2>
        </div>
      </div>
    );
  }
}

export default Banner;
