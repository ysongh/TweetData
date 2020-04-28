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
        yaxis: {
            title: {
                text: "Percent Change From Baseline"
            },
            min: -70,
            max: 50,
            labels: {
                formatter: val => { return val + "%" }
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
        dataLabels: {

        }
    }
    
    return(
      <Chart
        options={optionsList}
        series={data}
        type="area"
        height="500"
      />
    );
};

export default Area;