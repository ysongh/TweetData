import React from 'react';
import Chart from "react-apexcharts";

const Donut = ({ arr }) => {
    let optionsList = {
        chart: {
            id: "area",
        },
        legend: {
            position: 'top'
        }
    }
    
    return(
      <Chart
        options={optionsList}
        series={arr}
        type="donut"
        height="285"
      />
    );
};

export default Donut;