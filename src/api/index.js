import axios from 'axios';

import { objectToArray, donutData } from './helper';
import globalDailyData from './global_daily_data.json';

import globalDailyEmojis from './global_daily_emojis.json';
import globalDailyHashtags from  './global_daily_hashtags.json';
import globalDailySymptoms from  './global_daily_symptoms.json';
import globalDailyTerms from  './global_daily_terms.json';

const url1 = "";
//const url2 = "";
//const url3 = "";

const files = [
    globalDailySymptoms,
    globalDailyTerms,
    globalDailyHashtags,
    globalDailyEmojis
]

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

        const dates = data.data.map(key => key.date);

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
        // const {data} = await axios.get(url2);
        // let resData;

        // if(country === "all"){
        //     resData = data.data.filter(key => key.longitude && key.latitude && key.date === date);
        // }
        // else{
        //     resData = data.data.filter(key => key.longitude && key.latitude && key.country_region === country && key.date === date);
        // }
        
        return {
            "currentCoordinates": countryCoordinates["all"],
            "data": []
        }
    }
    catch(error){
        console.log(error);
    }
}

export const getTypeAllData = async (i) => {
    try{
        //const {data} = await axios.get(url);

        const dates = files[i].data.map(i => i.date);
        let top5List = [];

        const values = files[i].data.map(i => {
            const arr = [i];
            const {total, list} = objectToArray(arr);

            list.sort((a, b) => b.value - a.value);
            const top5 = list.slice(0, 10);
            top5List.push(top5);

            return total;
        })

        return {dates, values, top5List};
    }
    catch(error){
        console.log(error);
    }
}

export const getTypeData = async (num, date) => {
    try{
        const dates = files[num].data.map(i => i.date);
        const newData = files[num].data.filter(key => key.date === date);

        let {total, list} = objectToArray(newData);

        list.sort((a, b) => b.value - a.value);

        list = list.slice(0, 20);

        const top5 = list.slice(0, 5);

        let { labels, values } = donutData(top5, total);
        console.log(JSON.stringify(top5))
        console.log(JSON.stringify(list))
        console.log(JSON.stringify(labels))
        console.log(JSON.stringify(values))

        return {top5, list, labels, values, dates};

    }
    catch(error){
        console.log(error);
    }
}

export const getScores = async () => {
    try{
        const resData = globalDailyData;
        const cases = resData.map(key => key.cases);
        const dates = resData.map(key => key.index);

        const sentimentScores = resData.map(key => key.sentiment_score);

        return {dates, sentimentScores, cases};

    }
    catch(error){
        console.log(error);
    }
}