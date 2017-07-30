import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import ChartAttendance from './ChartAttendance';
import ChartFailedRequests from './ChartFailedRequests';
import Preloader from './Preloader';

class UsevmDetails extends Component {
  getAttendanceChart() {
    var labels = [];
    for(let i = 0; i<this.props.usevmData.users.length; i++) {
      labels[i] = `day${i+1}`;
    }
    return {
      chartData: {
        labels: labels,
        datasets: [{
            data: this.props.usevmData.users,
            label: "Unique users",
            borderColor: "#3e95cd",
            fill: false
          }, {
            data: this.props.usevmData.views,
            label: "Page views",
            borderColor: "#8e5ea2",
            fill: false
          }
        ]
      },
      options: {
        title: {
          display: true
        }
      }
    }
  }
  getFailedRequestsChart() {
    let labels = [];
    for(let i = 0; i<this.props.usevmData.users.length; i++) {
      labels[i] = `day${i+1}`;
    }

    return {
      chartData: {
        labels: labels,
        datasets: [{
            data: this.props.usevmData.failedRequests,
            label: "Failed Requests",
            borderColor: "#3e95cd",
            fill: false
          }
        ]
      },
      options: {
        title: {
          display: true
        }
      }
    }
  }
  render() {
    let attendanceChartData = this.getAttendanceChart();
    let failedRequestsChartData = this.getFailedRequestsChart();
    return (
      <div  className="usevm-details-block">
        <Link to="/"><span className="btn btn-primary cover-btn-position">Go back</span></Link>
        <div className="cover-holder">
          <h2 className="cover-h2">Usevm.com details metrics</h2>
          <div className="graph-of-attendance graph-block">
            <h3>Graph of attendance</h3>
            <ChartAttendance siteData={attendanceChartData}/>
          </div>
          <div className="graph-of-failed-requests graph-block">
            <h3>Graph of failed requests</h3>
            <ChartFailedRequests siteData={failedRequestsChartData}/>
          </div>
          <div className="unique-users-block">
            Count of unique users for last 30 days: {this.props.usevmData.unicUsers}
          </div>
          <div className="avg-dwnload-page-block">
            Average time for accessing to site for week: {this.props.usevmData.averageAccessTime}
          </div>
        </div>
        <Preloader fetched={this.props.fetched} />
      </div>
    );
  }
}

export default connect(
  (state) => { return {usevmData : state.usevmData,
  fetched: state.mocodingData.fetched}
  }
)(UsevmDetails);
