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
        text: "Term",
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