import Form from "../../components/form"
import Forecast from "../../components/forecast"
import axios from "axios"
import { useState, useEffect } from "react"

const Homepage = () => {
    const [error, setError] = useState(false);
    const [forecast, setForecast] = useState()
    const [location, setLocation] = useState("");

    const getCoordinates = async ({ street, city, state, zipcode }) => {
        setLocation({ city, state });
        const streetName = street.replace(" ", "+")
        const cityName = city.replace(" ", "+")
        const url = `https://cors-anywhere.herokuapp.com/https://geocoding.geo.census.gov/geocoder/locations/address?street=${streetName}&city=${cityName}&state=${state}&zip=${zipcode}&benchmark=Public_AR_Census2020&format=json`
        try {
            const res = await axios.get(url);
            const data = await res.data.result.addressMatches[0];
            getGrid(data.coordinates)
        }
        catch (err) {
            console.log(err)
            setError(true);
        }
    }
    const getGrid = async (coordinates) => {
        const url = `https://api.weather.gov/points/${coordinates.y},${coordinates.x}`
        try {
            const res = await axios.get(url);
            const forecastUrl = await res.data.properties.forecast;
            getWeather(forecastUrl)
        }
        catch (err) {
            console.log(err)
        }
    }
    const getWeather = async (forecastUrl) => {
        try {
            const res = await axios.get(forecastUrl);
            const data = await res.data.properties.periods
            setForecast(data)
            console.log(data)
        }
        catch (err) {
            console.log(err)
        }
    }

    return <div>
        <Form getCoordinates={getCoordinates} />
        <Forecast forecast={forecast} location={location} error={error} />
    </div>
}

export default Homepage;