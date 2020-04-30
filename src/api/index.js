import axios from 'axios';
import allData from './sample_data_for_mockup';

const url1 = "https://raw.githubusercontent.com/yenlow/tmp_funicular/b8ad9f5a1c4091ca7e79a0c5f09e550b17194202/data/sample_data_for_mockup.json";
const url2 = "https://raw.githubusercontent.com/yenlow/tmp_funicular/1f5720396ad531e305fe3793b4c243a414533788/data/sample_jhu_data_for_mockup.json";
const url3 = "https://raw.githubusercontent.com/yenlow/tmp_funicular/master/data/global_daily_symptoms.json";

const countryCoordinates = {
    "all": {
        lat: 36.6911074,
        lng: 5.3220739,
        zoom: 2
    },
    "US": {
        lat: 40.0423477,
        lng: -99.4082212,
        zoom: 4
    },
    "Mainland China": {
        lat: 34.3773575,
        lng: 107.0089618,
        zoom: 4
    },
    "Australia": {
        lat: -28.4948235,
        lng: 134.2207814,
        zoom: 4
    },
}

export const getSampleData = async() => {
    try{
        const {data} = await axios.get(url1);

        const data1 = data.data.map(key => key.grocery_and_pharmacy_percent_change_from_baseline);
        const data2 = data.data.map(key => key.parks_percent_change_from_baseline);
        const data3 = data.data.map(key => key.residential_percent_change_from_baseline);
        const data4 = data.data.map(key => key.retail_and_recreation_percent_change_from_baseline);
        const data5 = data.data.map(key => key.transit_stations_percent_change_from_baseline);
        const data6 = data.data.map(key => key.workplaces_percent_change_from_baseline);
        const data7 = data.data.map(key => key.volume);

        const dates = data.data.map(key => key.date)

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

export const getMapData = async(country, date) => {
    try{
        const {data} = await axios.get(url2);
        let resData;

        if(country === "all"){
            resData = data.data.filter(key => key.longitude && key.latitude && key.date === date);
        }
        else{
            resData = data.data.filter(key => key.longitude && key.latitude && key.country_region === country && key.date === date);
        }
        
        return {
            "currentCoordinates": countryCoordinates[country],
            "data": resData
        }
    }
    catch(error){
        console.log(error);
    }
}

export const symptomData = async () => {
    try{
        const {data} = await axios.get(url3);

        const newData = data.data.filter(key => key.date === "2020-03-12");

        // remove the date from the object
        delete newData[0].date;

        // convert object into array of ojects
        const list = [];
        let dataAr = new Map(Object.entries(newData));
        dataAr = Object.fromEntries(dataAr);
        for(let i in dataAr[0]){
            list.push({
                name: i,
                value: dataAr[0][i]
            })
        }

        return list;

    }
    catch(error){
        console.log(error);
    }
}

export const tweetData = async () => {
    try{
        const {data} = await axios.get(url3);

        console.log(data);

    }
    catch(error){
        console.log(error);
    }
}
/*
const removeProperty = obj => {
    const newObj = obj.map(i => {
        if(i.ayoikutiaturan){
            console.log(i.ayoikutiaturan)
        }
        delete i.country_region_code;
        delete i.parks_percent_change_from_baseline;
        delete i.grocery_and_pharmacy_percent_change_from_baseline;
        delete i.residential_percent_change_from_baseline;
        delete i.retail_and_recreation_percent_change_from_baseline;
        delete i.transit_stations_percent_change_from_baseline;
        delete i.workplaces_percent_change_from_baseline;
        return i;
    });

    return newObj;
}
*/