import React, { Component } from 'react';
import ClientsTable from './ClientsTable';
import FailedTable from './FailedTable';

class Table extends Component {
  render() {
    return (
      <div  className="table-block">
        <div className="cover-holder">
          <ClientsTable
            mocodingUsers = {this.props.mocodingUsers}
            usevmUsers = {this.props.usevmUsers}
          />
          <FailedTable
            mocodingFailedRequests = {this.props.mocodingFailedRequests}
            usevmFailedRequests = {this.props.usevmFailedRequests}
          />
        </div>
      </div>
    );
  }
}

export default Table;
