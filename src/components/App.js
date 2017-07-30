import React, { Component } from 'react';
import Banner from './Banner';
import Table from './Table';
import Preloader from './Preloader';

import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Banner />
          <Table
            mocodingUsers = {this.props.mocodingUsers}
            mocodingFailedRequests = {this.props.mocodingFailedRequests}
            usevmUsers = {this.props.usevmUsers}
            usevmFailedRequests = {this.props.usevmFailedRequests}
          />
          <Preloader fetched={this.props.fetched} />

      </div>
    );
  }
}

export default connect(
  (state) => { return{
    mocodingUsers : state.mocodingUsers,
    mocodingFailedRequests : state.mocodingFailedRequests,
    usevmUsers : state.usevmUsers,
    usevmFailedRequests : state.usevmFailedRequests,
    fetched: state.mocodingUsers.fetched && state.mocodingFailedRequests.fetched && state.usevmUsers.fetched && state.usevmFailedRequests.fetched
  }
  }
)(App);
