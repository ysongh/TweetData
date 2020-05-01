import React from 'react';
import Chart from "react-apexcharts";

const Line = ({ dates, data, top5List }) => {
  const optionsList = {
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
      },
      annotations: {
        xaxis: [
          {
            x: "2020-03-30",
            borderColor: '#00E396',
            label: {
              orientation: 'horizontal',
              text: 'Y-axis annotation on 8800'
            }
          }
        ]
      },
      tooltip: {
        custom: function({series, seriesIndex, dataPointIndex, w}) {
          return `
            <div>
              <h5>Top 5</h5>
              <p>${top5List[dataPointIndex][0].name}<p>
              <p>${top5List[dataPointIndex][1].name}<p>
              <p>${top5List[dataPointIndex][2].name}<p>
              <p>${top5List[dataPointIndex][3].name}<p>
              <p>${top5List[dataPointIndex][4].name}<p>
            </div>
          `
        }
      }
    }

    const seriesList = [
      {
        name: "Volume",
        data: data
      }
    ]

    return(
      <Chart
        options={optionsList}
        series={seriesList}
        type="area"
        height="500"
      />
    );
};

export default Line;