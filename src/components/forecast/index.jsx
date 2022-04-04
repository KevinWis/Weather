import { useState, useEffect } from "react";
import { IoMdPartlySunny, IoMdSunny, IoMdRainy, IoMdThunderstorm, IoMdCloudy, IoMdSnow } from "react-icons/io"

const Forecast = ({ forecast, location, error }) => {
    const [clock, setClock] = useState(new Date());

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

    const filteredForecast = forecast?.filter((day) => {
        if (forecast[0].name.toLowerCase() === "today") {
            return (day.number % 2 === 1) && day.number > 1;
        }
        if (forecast[0].name.toLowerCase() === "tonight") {
            return (day.number % 2 === 0) && day.number > 1 && day.number < 14;
        }
    })

    const getIcon = (weatherName) => {
        const name = weatherName.toLowerCase();

        if (name.includes("partly sunny")) return <IoMdPartlySunny />
        if (name.includes("sunny")) return <IoMdSunny />
        if (name.includes("thunder")) return <IoMdThunderstorm />
        if (name.includes("snow")) return <IoMdSnow />
        if (name.includes("rain") || name.includes("storm")) return <IoMdRainy />
        if (name.includes("cloud")) return <IoMdCloudy />

        return <IoMdSunny />;
    }

    const hours = clock.getHours();
    const minutes = clock.getMinutes();
    const seconds = clock.getSeconds();

    return <div className="outer container">
        {filteredForecast && <div className="inner container">
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
            <div className="lowerContainer">
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
                    {filteredForecast.map((el, index) => {
                        return <div key={index}>
                            <h4>{el.name}</h4>
                            <div className="date-temp">
                                <div className="icon">
                                    {getIcon(el.shortForecast)}
                                </div>
                                <span>{el.temperature}F</span>
                                <span>{convertToCelsius(el.temperature)}C</span>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </div>
        }
        {!error && !filteredForecast &&
            <div></div>
        }
        {error &&
            <div></div>
        }
    </div>
}

export default Forecast