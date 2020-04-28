import React from 'react';
import Chart from "react-apexcharts";

const Line = ({ dates, data }) => {
  let optionsList = {
    chart: {
        id: "line",
        toolbar: {
          tools: {
            download: false,
          }
      }
    },
    xaxis: {
        categories: dates
    },
    yaxis: {
      title: {
          text: "Volume"
      }
    },
    legend: {
        position: 'top'
    },
    title: {
        text: "USA",
        align: 'left',
        margin: 10,
        offsetX: 0,
        offsetY: 0,
        floating: false,
        style: {
          fontSize:  '20px',
          fontWeight:  'bold',
          color:  '#263238'
        },
      },
      stroke: {
        curve: 'smooth'
      }
    }

    return(
      <Chart
        options={optionsList}
        series={data}
        type="line"
        height="500"
      />
    );
};

export default Line;