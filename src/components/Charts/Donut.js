import React from 'react';
import Chart from "react-apexcharts";

const Donut = ({ labels, values }) => {
    let optionsList = {
        chart: {
          id: "area",
        },
        labels: labels,
        legend: {
            position: 'top'
        }
    }
    
    return(
      <Chart
        options={optionsList}
        series={values}
        type="donut"
        height="270"
      />
    );
};

export default Donut;