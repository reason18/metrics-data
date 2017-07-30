import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';


class ChartFailedRequests extends Component {
  render() {
    console.log(this.props.siteData)
    return (
      <div className="chart">
        <Line
          data={this.props.siteData.chartData}
          option={{
            title: {
              display: true,
              fontSize: 25
            }
          }}
        />
      </div>
    );
  }
}

export default ChartFailedRequests;
