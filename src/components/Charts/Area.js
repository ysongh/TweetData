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
                    text: "Twitter Pandemic Index"
                },
                labels: {
                    formatter: val => { return val.toFixed(4) }
                },
                min: -0.2,
                max: 0.1,
            },
            {
                opposite: true,
                title: {
                    text: "Number of confirmed cases"
                },
                labels: {
                    formatter: val => { return val.toFixed(0) }
                }
            }
        ],
        legend: {
            position: 'top'
        },
        annotations: {
            xaxis: [
              {
                x: "2020-02-02",
                borderColor: '#00E396',
                label: {
                  orientation: 'vertical',
                  text: 'First death outside China in the Philippines'
                }
              },
              {
                x: "2020-02-07",
                borderColor: '#00E396',
                label: {
                  orientation: 'vertical',
                  text: 'The world mourns the death of Dr Li Wenliang'
                }
              },
              {
                x: "2020-02-29",
                borderColor: '#00E396',
                label: {
                  orientation: 'vertical',
                  text: 'First death in the US (Washington state)'
                }
              },
              {
                x: "2020-03-03",
                borderColor: '#00E396',
                label: {
                  orientation: 'vertical',
                  text: 'Federal Reserve drops interest rate by 0.5%'
                }
              },
              {
                x: "2020-03-11",
                borderColor: '#00E396',
                label: {
                  orientation: 'vertical',
                  text: 'WHO declares COVID-19 a pandemic'
                }
              },
              {
                x: "2020-03-13",
                borderColor: '#00E396',
                label: {
                  orientation: 'vertical',
                  text: 'US announces relief package'
                }
              }
            ]
        },
        tooltip: {
            custom: function({ dataPointIndex}) {
              return `
                <div class="popup">
                  <h5>Top 10</h5>

                  <div class="popup-grid">
                    <div class="mr-1">
                        <p>1) ${top5List[dataPointIndex][0] ? top5List[dataPointIndex][0].name : "N/A"}<p>
                        <p>2) ${top5List[dataPointIndex][1] ? top5List[dataPointIndex][1].name : "N/A"}<p>
                        <p>3) ${top5List[dataPointIndex][2] ? top5List[dataPointIndex][2].name : "N/A"}<p>
                        <p>4) ${top5List[dataPointIndex][3] ? top5List[dataPointIndex][3].name : "N/A"}<p>
                        <p>5) ${top5List[dataPointIndex][4] ? top5List[dataPointIndex][4].name : "N/A"}<p>
                    </div>
                    <div>
                        <p>6) ${top5List[dataPointIndex][5] ? top5List[dataPointIndex][5].name : "N/A"}<p>
                        <p>7) ${top5List[dataPointIndex][6] ? top5List[dataPointIndex][6].name : "N/A"}<p>
                        <p>8) ${top5List[dataPointIndex][7] ? top5List[dataPointIndex][7].name : "N/A"}<p>
                        <p>9) ${top5List[dataPointIndex][8] ? top5List[dataPointIndex][8].name : "N/A"}<p>
                        <p>10) ${top5List[dataPointIndex][9] ? top5List[dataPointIndex][9].name : "N/A"}<p>
                    </div>
                  </div>
                  
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
            name: "Number of confirmed cases",
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