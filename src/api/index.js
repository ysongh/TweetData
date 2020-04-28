import axios from 'axios';

const url = "https://raw.githubusercontent.com/yenlow/tmp_funicular/master/data/sample_data_for_mockup.json";

export const getSampleData = async() => {
    try{
        const {data} = await axios.get(url);

        const data1 = data.data.map(key => key.grocery_and_pharmacy_percent_change_from_baseline);
        const data2 = data.data.map(key => key.parks_percent_change_from_baseline);
        const data3 = data.data.map(key => key.residential_percent_change_from_baseline);
        const data4 = data.data.map(key => key.retail_and_recreation_percent_change_from_baseline);
        const data5 = data.data.map(key => key.transit_stations_percent_change_from_baseline);
        const data6 = data.data.map(key => key.workplaces_percent_change_from_baseline);
        const data7 = data.data.map(key => key.volume);

        const dates = data.data.map(key => key.date)

        console.log(data);

        return {
            dates: dates,
            source: [
                {
                    "name": "Grocery and Pharmacy",
                    "data": data1
                },
                {
                    "name": "Parks",
                    "data": data2
                },
                {
                    "name": "Residential",
                    "data": data3
                },
                {
                    "name": "Retail and Recreation",
                    "data": data4
                },
                {
                    "name": "Transit Stations",
                    "data": data5
                },
                {
                    "name": "Workplaces",
                    "data": data6
                }
            ],
            volume: [
                {
                    "name": "Volume",
                    "data": data7
                }
            ]
        }
    }
    catch(error){
        console.log(error);
    }
}