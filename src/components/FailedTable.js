import React, { Component } from 'react';
import { Link } from 'react-router';

class FailedTable extends Component {
  render() {
    return (
      <div>
          <h2 className="cover-h2">Number of failed request</h2>
          <div className="table-responsive">
          <table className="table table-hover">
            <thead>
              <tr>
                <th className="cover-table-head">Site</th>
                <th className="cover-table-head">per day</th>
                <th className="cover-table-head">per week</th>
                <th className="cover-table-head">per month</th>
              </tr>
            </thead>
            <tbody>
                <tr>
                  <td className="cover-table-item"><Link to="/mocoding-details">mocoding.com</Link></td>
                  <td className="cover-table-item">{this.props.mocodingFailedRequests.perDay}</td>
                  <td className="cover-table-item">{this.props.mocodingFailedRequests.perWeek}</td>
                  <td className="cover-table-item">{this.props.mocodingFailedRequests.perMonth}</td>
                </tr>
              <tr>
                <td className="cover-table-item"><Link to="/usevm-details">usevm.com</Link></td>
                <td className="cover-table-item">{this.props.usevmFailedRequests.perDay}</td>
                <td className="cover-table-item">{this.props.usevmFailedRequests.perWeek}</td>
                <td className="cover-table-item">{this.props.usevmFailedRequests.perMonth}</td>
              </tr>
            </tbody>
          </table>
          </div>
      </div>
    );
  }
}

export default FailedTable;
