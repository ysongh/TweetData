import React from 'react';
import Chart from "react-apexcharts";

const Donut = ({ labels, values }) => {
    let optionsList = {
        chart: {
          id: "donut",
        },
        plotOptions: {
          pie: {
            donut: {
              size: '55%',
              labels: {
                show: true,
                total: {
                  show: true,
                  showAlways: true,
                  label: 'Total',
                  fontSize: '21px',
                  fontFamily: 'Helvetica, Arial, sans-serif',
                  fontWeight: 600,
                  color: '#373d3f',
                }
              },
              
            }
          }
        },
        labels: labels,
        legend: {
            position: 'top'
        },
        colors: ['#2E93fA', '#66DA26', '#546E7A', '#E91E63', '#FF9800', '#b6bd33']
    }
    
    return(
      <Chart
        className="mt-1"
        options={optionsList}
        series={values}
        type="donut"
        height="330"
      />
    );
};

export default Donut;