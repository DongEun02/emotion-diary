import "./WeatherItem.css";
import { getWeatherImage } from "../util/get-weather-image";

const WeatherItem = ({ weatherId, weatherName, isSelected, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`WeatherItem ${
        isSelected ? `WeatherItem_on_${weatherId}` : ""
      }`}
    >
      <img className="weather_img" src={getWeatherImage(weatherId)} />
      <div className="weather_name"> {weatherName}</div>
    </div>
  );
};

export default WeatherItem;
