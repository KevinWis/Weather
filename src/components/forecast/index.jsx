import { useState, useEffect } from "react";

const Forecast = ({ forecast, location, error }) => {
    const [clock, setClock] = useState(new Date());

    const filteredForecast = forecast.filter((day) => {
        return (day.number % 2 === 1)
    })

    useEffect(() => {
        const timer = setInterval(getCurrentTime, 1000);
        return () => {
            clearInterval(timer);
        };
    }, [])

    const getCurrentTime = () => {
        setClock(new Date());
    }

    const convertToCelsius = (temp) => {
        const currentTemp = (temp - 32) / 1.8;
        return currentTemp.toFixed(1);
    }

    const hours = clock.getHours();
    const minutes = clock.getMinutes();
    const seconds = clock.getSeconds();

    return <div className="outer container">
        <div className="inner container">
            {location && <div className="upperContainer">
                <p className="location">
                    <span>{location.city},</span>
                    <span>{location.state}</span>
                </p>
                <p className="clock">
                    <span>{hours < 10 ? "0" + hours : hours}</span>:
                    <span>{minutes < 10 ? "0" + minutes : minutes}</span>:
                    <span>{seconds < 10 ? "0" + seconds : seconds}</span>
                </p>
            </div>
            }
            {forecast && <div className="lowerContainer">
                <div className="first-date">
                    <div className="icon">

                    </div>
                    <div className="date-temp">
                        <h3>Today</h3>
                        <span>{forecast[0].temperature}F</span>
                        <span>{convertToCelsius(forecast[0].temperature)}C</span>
                    </div>
                </div>
                <div className="following-dates">
                    {filteredForecast.map((el) => {
                        return <div>
                            <h4>{el.name}</h4>
                            <div className="date-temp">
                                <div className="icon">

                                </div>
                                <span>{el.temperature}F</span>
                                <span>{convertToCelsius(el.temperature)}C</span>
                            </div>
                        </div>
                    })}
                </div>
            </div>}
        </div>
    </div>
}

export default Forecast