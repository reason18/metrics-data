import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import ChartAttendance from './ChartAttendance';
import ChartFailedRequests from './ChartFailedRequests';
import Preloader from './Preloader';

class MocodingDetails extends Component {
  getAttendanceChart() {
    var labels = [];
    for(let i = 0; i<this.props.mocodingData.users.length; i++) {
      labels[i] = `day${i+1}`;
    }
    return {
      chartData: {
        labels: labels,
        datasets: [{
            data: this.props.mocodingData.users,
            label: "Unique users",
            borderColor: "#3e95cd",
            fill: false
          }, {
            data: this.props.mocodingData.views,
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
    let data = [];
    if(this.props.mocodingData.failedRequests.length === 0) {
      for(let i = 0; i<this.props.mocodingData.users.length; i++) {
        labels[i] = `day${i+1}`;
        data[i] = 0;
      }
    } else {
      for(let i = 0; i<this.props.mocodingData.failedRequests.length; i++) {
        labels[i] = `day${i+1}`;
      }
    }
    return {
      chartData: {
        labels: labels,
        datasets: [{
            data: data,
            label: "Failed Requests",
            borderColor: "#3e95cd",
            fill: false
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: 'World population per region (in millions)'
        }
      }
    }
  }
  render() {
    let attendanceChartData = this.getAttendanceChart();
    let failedRequestsChartData = this.getFailedRequestsChart();
    return (

      <div  className="mocoding-details-block">
      <Link to="/"><span className="btn btn-primary cover-btn-position">Go back</span></Link>
        <div className="cover-holder">
          <h2 className="cover-h2">Mocoding.com details metrics</h2>
          <div className="graph-of-attendance graph-block">
            <h3>Graph of attendance</h3>
            <div className="graph">
              <ChartAttendance siteData={attendanceChartData}/>
            </div>
          </div>
          <div className="graph-of-failed-requests graph-block">
            <h3>Graph of failed requests</h3>
            <div className="graph">
              <ChartFailedRequests siteData={failedRequestsChartData}/>
            </div>
          </div>
          <div className="unique-users-block">
            Count of unique users for last 30 days: {this.props.mocodingData.unicUsers}
          </div>
          <div className="avg-dwnload-page-block">
            Average time for accessing to site for week: {this.props.mocodingData.averageAccessTime}
          </div>
        </div>
        <Preloader fetched={this.props.fetched} />
      </div>
    );
  }
}

export default connect(
  (state) => { return {mocodingData : state.mocodingData,
  fetched: state.mocodingData.fetched }
  }
)(MocodingDetails);
