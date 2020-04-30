import React from 'react';
import Chart from "react-apexcharts";

const Donut = () => {
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
        series={[44, 55, 41, 17, 15]}
        type="donut"
        height="285"
      />
    );
};

export default Donut;