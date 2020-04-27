import React from 'react';
import Chart from "react-apexcharts";

const Home = ({ dates, data }) => {
    let optionsList = {
          options: {
            chart: {
                id: "line"
            },
            xaxis: {
                categories: [122, 222]
            }
        }
    }
    console.log("dates", dates)
    console.log("data", data)
    return(
      <Chart
        options={optionsList}
        series={data}
        type="area"
        height="400"
      />
    );
};

export default Home;