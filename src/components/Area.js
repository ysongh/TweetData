import React from 'react';
import Chart from "react-apexcharts";

const Area = ({ dates, data }) => {
    let optionsList = {
        chart: {
            id: "area",
        },
        xaxis: {
            categories: dates
        }, 
        legend: {
            position: 'top'
        },
        title: {
            text: "Percent Change From Baseline",
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
        type="area"
        height="400"
      />
    );
};

export default Area;