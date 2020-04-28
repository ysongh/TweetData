import React from 'react';
import Chart from "react-apexcharts";

const Line = ({ dates, data }) => {
    let optionsList = {
        chart: {
            id: "line",
        },
        xaxis: {
            categories: dates
        }, 
        legend: {
            position: 'top'
        },
        title: {
            text: "Volume",
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
        }
    }
    
    return(
      <Chart
        options={optionsList}
        series={data}
        type="line"
        height="400"
      />
    );
};

export default Line;