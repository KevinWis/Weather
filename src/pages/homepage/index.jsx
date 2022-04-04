import Form from "../../components/form"
import Forecast from "../../components/forecast"
import axios from "axios"
import { useEffect, useState } from "react"
import { OuterContainer } from "./style"

const Homepage = () => {
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [forecast, setForecast] = useState();
    const [location, setLocation] = useState("");
    const [backgroundImage, setBackgroundImage] = useState("");


    const getCoordinates = async ({ address, city, state, zipcode }) => {
        setLoading(true);
        setError(false);
        setLocation({ city, state });
        const addressName = address.replaceAll(" ", "+");
        const cityName = city.replaceAll(" ", "+");
        const url = `https://cors-anywhere.herokuapp.com/https://geocoding.geo.census.gov/geocoder/locations/address?street=${addressName}&city=${cityName}&state=${state}&zip=${zipcode}&benchmark=Public_AR_Census2020&format=json`
        const headers = {
            "X-Requested-With": "XMLHttpRequest"
        }
        try {
            const res = await axios.get(url, headers);
            const data = await res.data.result.addressMatches[0];
            getGrid(data.coordinates)
        }
        catch (err) {
            setError(true);
            setLoading(false);
        }
    }
    useEffect(() => {
        getBackgroundImage();
    }, [location])

    const getGrid = async (coordinates) => {
        const url = `https://api.weather.gov/points/${coordinates.y},${coordinates.x}`
        try {
            const res = await axios.get(url);
            const forecastUrl = await res.data.properties.forecast;
            getWeather(forecastUrl);
        }
        catch (err) {
            setError(true);
            setLoading(false);
        }
    }

    const getWeather = async (forecastUrl) => {
        try {
            const res = await axios.get(forecastUrl);
            const data = await res.data.properties.periods;
            setForecast(data);
        }
        catch (err) {
            setError(true);
        }
        setLoading(false);
    }

    const getBackgroundImage = async () => {
        try {
            const res = await axios.get(`https://api.unsplash.com/search/photos?page=1&query=${location.city}-${location.state}&client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`)
            const image = await res.data.results[0].urls.regular;
            setBackgroundImage(image);
        } catch (err) {
            console.log(err);
        }
    }

    return <OuterContainer>
        <Form getCoordinates={getCoordinates} />
        <Forecast forecast={forecast} location={location} backgroundImage={backgroundImage} loading={loading} error={error} />
    </OuterContainer>
}

export default Homepage;