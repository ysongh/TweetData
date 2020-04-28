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