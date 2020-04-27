import axios from 'axios';

const url = "https://raw.githubusercontent.com/yenlow/tmp_funicular/master/data/sample_data_for_mockup.json";

export const getSampleData = async() => {
    try{
        const {data} = await axios.get(url);

        return data;
    }
    catch(error){
        console.log(error);
    }
}