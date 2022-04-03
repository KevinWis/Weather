import Form from "../../components/form"
import axios from "axios"
import { useState, useEffect } from "react"

const Homepage = () => {
    const [coordinates, setCoordinates] = useState({});
    const [error, setError] = useState(false)

    useEffect(() => { getWeather() }, [coordinates])

    const getCoordinates = async ({ street, city, state, zipcode }) => {
        const streetName = street.replace(" ", "+")
        const cityName = city.replace(" ", "+")
        const url = `https://cors-anywhere.herokuapp.com/https://geocoding.geo.census.gov/geocoder/locations/address?street=${streetName}&city=${cityName}&state=${state}&zip=${zipcode}&benchmark=Public_AR_Census2020&format=json`
        try {
            const res = await axios.get(url);
            const data = await res.data.result.addressMatches[0];
            setCoordinates(data.coordinates)
        }
        catch (err) {
            console.log(err)
            setError(true);
        }
    }

    const getWeather = () => {

    }

    return <div>
        <Form getCoordinates={getCoordinates} />
    </div>
}

export default Homepage;