import React, { Component } from 'react';

class Preloader extends Component {
  render() {
    return (
      <div className={(!this.props.fetched)? "preloader-block" : "preloader-hidden"}>
        <div className="loader-block">
          <div className="loader">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Preloader;
