import axios from 'axios';

const url = "https://raw.githubusercontent.com/yenlow/tmp_funicular/master/data/sample_data_for_mockup.json";

export const getSampleData = async() => {
    try{
        const {data} = await axios.get(url);

        const resData = data.data.map(key => {
            return key.grocery_and_pharmacy_percent_change_from_baseline;
        });

        const dates = data.data.map(key => key.date)

        return {
            dates: dates,
            source: [
                {
                    "name": "grocery_and_pharmacy_percent_change_from_baseline",
                    "data": resData
                }
            ]
        }
    }
    catch(error){
        console.log(error);
    }
}