import React from 'react';
import Chart from "react-apexcharts";

const Area = ({ dates, data, type }) => {
    console.log(data)
    let optionsList = {
        chart: {
            id: "area",
            toolbar: {
                tools: {
                    download: false,
                }
            }
        },
        dataLabels: {
            enabled: false
        },
        xaxis: {
            categories: dates
        },
        yaxis: {
            title: {
                text: "Sentiment Score"
            },
            labels: {
                formatter: val => { return val.toFixed(4) + "%" }
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
        }
    }

    const seriesList = [
        {
          name: "Volume",
          data: data
        }
    ];
    
    return(
      <Chart
        options={optionsList}
        series={seriesList}
        type={type}
        height="500"
      />
    );
};

export default Area;