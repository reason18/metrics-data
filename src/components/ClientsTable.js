import React, { Component } from 'react';
import { Link } from 'react-router';

class ClientsTable extends Component {


  render() {
    return (
      <div>
          <h2 className="cover-h2">Number of users</h2>
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
                <td className="cover-table-item">{this.props.mocodingUsers.perDay}</td>
                <td className="cover-table-item">{this.props.mocodingUsers.perWeek}</td>
                <td className="cover-table-item">{this.props.mocodingUsers.perMonth}</td>
              </tr>
              <tr>
                <td className="cover-table-item"><Link to="/usevm-details">usevm.com</Link></td>
                <td className="cover-table-item">{this.props.usevmUsers.perDay}</td>
                <td className="cover-table-item">{this.props.usevmUsers.perWeek}</td>
                <td className="cover-table-item">{this.props.usevmUsers.perMonth}</td>
              </tr>
            </tbody>
          </table>
          </div>
      </div>
    );
  }
}

export default ClientsTable;
