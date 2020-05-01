import React from 'react';
import Chart from "react-apexcharts";

const Area = ({ dates, data, type, cases, top5List }) => {
    console.log(top5List)
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
        yaxis: [
            {
                title: {
                    text: "Sentiment Score"
                },
                labels: {
                    formatter: val => { return val.toFixed(4) + "%" }
                },
                min: -0.2,
                max: 0.1,
            },
            {
                opposite: true,
                title: {
                    text: "Number of Confirmed Cases"
                },
                labels: {
                    formatter: val => { return val.toFixed(0) }
                }
            }
        ],
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
        tooltip: {
            custom: function({ dataPointIndex}) {
              return `
                <div class="popup">
                  <h5>Top 5</h5>
                  <p>1) ${top5List[dataPointIndex][0].name}<p>
                  <p>2) ${top5List[dataPointIndex][1].name}<p>
                  <p>3) ${top5List[dataPointIndex][2].name}<p>
                  <p>4) ${top5List[dataPointIndex][3].name}<p>
                  <p>5) ${top5List[dataPointIndex][4].name}<p>
                </div>
              `
            }
          }
    }

    const seriesList = [
        {
            type: "line",
            name: "Sentiment Score",
            data: data
        },
        {
            type: "line",
            name: "Case",
            data: cases
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