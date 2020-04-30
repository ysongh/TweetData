// note - the input is an array with one object
export const objectToArray =  (newData) => {
    let total = 0;
    // remove the date from the object
    delete newData[0].date;

    // convert object into array of ojects
    const list = [];
    let dataAr = new Map(Object.entries(newData));
    dataAr = Object.fromEntries(dataAr);
    for(let i in dataAr[0]){
        // only show symptom that does not have value that are null
        if(dataAr[0][i]){
            total += dataAr[0][i];
            list.push({
                name: i,
                value: dataAr[0][i]
            })
        }
    }

    return {total, list};
}

export const donutData = (top5, total) => {
    let count = 0;
    let labels = []
    let values = [];

    for(let i of top5){
        count += i.value;
        labels.push(i.name.toUpperCase());
        values.push(i.value);
    }
    labels.push("OTHER");
    values.push(total - count);

    return { labels, values };
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