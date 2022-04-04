import Form from "../../components/form"
import Forecast from "../../components/forecast"
import axios from "axios"
import { useState, useEffect } from "react"

const Homepage = () => {
    const [error, setError] = useState(false);
    const [forecast, setForecast] = useState()
    const [location, setLocation] = useState("");
    const [backgroundImage, setBackgroundImage] = useState("");

    const getCoordinates = async ({ street, city, state, zipcode }) => {
        setLocation({ city, state });
        const streetName = street.replace(" ", "+")
        const cityName = city.replace(" ", "+")
        const url = `https://cors-anywhere.herokuapp.com/https://geocoding.geo.census.gov/geocoder/locations/address?street=${streetName}&city=${cityName}&state=${state}&zip=${zipcode}&benchmark=Public_AR_Census2020&format=json`
        try {
            const res = await axios.get(url);
            const data = await res.data.result.addressMatches[0];
            getGrid(data.coordinates)
            setError(false);
        }
        catch (err) {
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
            setError(true);
        }
    }

    const getWeather = async (forecastUrl) => {
        try {
            const res = await axios.get(forecastUrl);
            const data = await res.data.properties.periods
            setForecast(data)
            getBackgroundImage();
        }
        catch (err) {
            setError(true);
        }
    }

    const getBackgroundImage = async () => {
        try {
            const res = await axios.get(`https://api.unsplash.com/search/photos?page=1&query=${location.city}-${location.state}&client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`)
            const image = await res.data.results[0].urls.regular;
            setBackgroundImage(image);
        } catch (err) {
            console.log(err)
        }
    }

    return <div>
        <Form getCoordinates={getCoordinates} />
        <Forecast forecast={forecast} location={location} error={error} backgroundImage={backgroundImage} />
    </div>
}

export default Homepage;