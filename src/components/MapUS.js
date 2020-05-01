import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import IconBlue from '../assets/icon1.svg';
import IconRed from '../assets/icon2.svg';

import { getMapData } from '../api';

const blueIcon = L.icon({
    iconUrl: IconBlue,
    iconRetinaUrl: IconBlue,
    iconSize: [25, 41],
    popupAnchor: [0, -10]
});

const redIcon = L.icon({
    iconUrl: IconRed,
    iconRetinaUrl: IconRed,
    iconSize: [25, 41],
    popupAnchor: [0, -10]
});

class MapUS extends Component{
    state = {
        lat: 36.6911074,
        lng: 5.3220739,
        zoom: 2,
        data: [],
        country: "all",
        date: "2020-03-09"
    }

    async componentDidMount(){
        const data = await getMapData("all", this.state.date);
        
        this.setState({
            lat: data.currentCoordinates.lat,
            lng: data.currentCoordinates.lng,
            zoom: data.currentCoordinates.zoom,
            data: data.data
        });
    }

    onChangeCountry = async (country) => {
        const data = await getMapData(country, this.state.date);

        console.log(data);
    
        this.setState({
            lat: data.currentCoordinates.lat,
            lng: data.currentCoordinates.lng,
            zoom: data.currentCoordinates.zoom,
            data: data.data,
            country: country
        });
      }

    onChangeDate = async (date) => {
        const data = await getMapData(this.state.country, date);

        console.log(data);

        this.setState({
            lat: data.currentCoordinates.lat,
            lng: data.currentCoordinates.lng,
            zoom: data.currentCoordinates.zoom,
            data: data.data,
            date: date
        });
    }

    render(){
        const position = [this.state.lat, this.state.lng];

        return (
            <div className="container">
                <h1 className="title mt-2">Map</h1>
                <div className="row">
                    <div className="col s6">
                        <label>Select Country</label>
                        <select className="browser-default" defaultValue={this.state.country} onChange={(e) => this.onChangeCountry(e.target.value)}>
                            <option value="all">All Country</option>
                            <option value="US">United States</option>
                            <option value="Mainland China">China</option>
                            <option value="Australia">Australia</option>
                        </select>
                    </div>
                    <div className="col s6">
                        <label>Select Date</label>
                        <select className="browser-default" defaultValue={this.state.date} onChange={(e) => this.onChangeDate(e.target.value)}>
                            <option value="2020-03-09">2020-03-09</option>
                            <option value="2020-03-10">2020-03-10</option>
                            <option value="2020-03-11">2020-03-20</option>
                        </select>
                    </div>
                    <div className="col s12">
                        <Map className="map" center={position} zoom={this.state.zoom}>
                            <TileLayer
                                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />

                            {this.state.data.map((i, key) => {
                                const cityPosition = [i.latitude, i.longitude];

                                return (
                                    <Marker key={key} position={cityPosition} icon={i.confirmed > 1000 ? redIcon : blueIcon}>
                                        <Popup>
                                            <strong>{i.province_state ? "Province State" : "Country Region"}</strong>: {i.province_state ? i.province_state : i.country_region} <br /> 
                                            <strong>Confirmed</strong>: {i.confirmed} <br /> 
                                            <strong>Death</strong>: {i.death_cnt} <br /> 
                                            <strong>Recovered</strong>: {i.recovered} <br /> 
                                        </Popup>
                                    </Marker>
                                )
                            })}
                        </Map>
                    </div>
                </div>
            </div>
        )
    }
}

export default MapUS;