import { useState, useEffect } from "react";
import { IoMdPartlySunny, IoMdSunny, IoMdRainy, IoMdThunderstorm, IoMdCloudy, IoMdSnow } from "react-icons/io"
import { ForecastContainer, Message, UpperContainer, LowerContainer, PrimaryDate, DatesContainer, SecondaryDate } from "./style"

const Forecast = ({ forecast, location, backgroundImage, error }) => {
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
        return Math.round(currentTemp);
    }

    const filteredForecast = forecast?.filter((day) => {
        if (forecast[1].name.toLowerCase().includes("night")) {
            return (day.number % 2 === 1) && day.number > 1;
        }
        else {
            return (day.number % 2 === 0) && day.number > 1 && day.number < 14;
        }
    })

    const getIcon = (weatherName) => {
        const name = weatherName.toLowerCase();

        if (name.includes("partly sunny")) return <IoMdPartlySunny />
        if (name.includes("sunny")) return <IoMdSunny />
        if (name.includes("thunder")) return <IoMdThunderstorm />
        if (name.includes("snow")) return <IoMdSnow />
        if (name.includes("rain") || name.includes("storm") || name.includes("drizzle")) return <IoMdRainy />
        if (name.includes("cloud")) return <IoMdCloudy />

        return <IoMdSunny />;
    }
    const hours = clock.getHours();
    const minutes = clock.getMinutes();
    const seconds = clock.getSeconds();

    return <ForecastContainer backgroundImage={backgroundImage}>
        <div className="innerContainer">
            {filteredForecast && !error && <div className="inner container">
                {location && <UpperContainer>
                    <p className="location">
                        <span>{location.city}, </span>
                        <span>{location.state}</span>
                    </p>
                    <p className="clock">
                        <span>{hours < 10 ? "0" + hours : hours}:</span>
                        <span>{minutes < 10 ? "0" + minutes : minutes}:</span>
                        <span>{seconds < 10 ? "0" + seconds : seconds}</span>
                    </p>
                </UpperContainer>
                }
                <LowerContainer>
                    <PrimaryDate>
                        <div>
                            {getIcon(forecast[0].shortForecast)}
                        </div>
                        <div className="date-temp">
                            <p className="date">Today</p>
                            <p className="temp">
                                <span>{forecast[0].temperature}°F</span>
                                <span>{convertToCelsius(forecast[0].temperature)}°C</span>
                            </p>

                        </div>
                    </PrimaryDate>
                    <hr />
                    <DatesContainer>
                        {filteredForecast.map((el, index) => {
                            return <SecondaryDate key={index}>
                                <p className="date">{el.name.slice(0, 3)}</p>
                                <div className="icon-temp">
                                    <div >
                                        {getIcon(el.shortForecast)}
                                    </div>
                                    <p>{el.temperature}°F</p>
                                    <p>{convertToCelsius(el.temperature)}°C</p>
                                </div>
                            </SecondaryDate>
                        })}
                    </DatesContainer>
                </LowerContainer>
            </div>
            }
            {!error && !filteredForecast &&
                <Message>Fill the form to get the forecast! </Message>
            }
            {error &&
                <Message>uh oh something went wrong.
                    Please certify that the address you added exists.
                    <p>
                        If you're in the development server, You might need to request access to
                        <a href="https://cors-anywhere.herokuapp.com/corsdemo">CORS-Anywhere</a>
                    </p>
                </Message>
            }

        </div>
    </ForecastContainer>
}

export default Forecast