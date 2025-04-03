import weather1 from "./../assets/sunny.png";
import weather2 from "./../assets/cloudy.png";
import weather3 from "./../assets/rainy.png";
import weather4 from "./../assets/snowy.png";

export function getWeatherImage(weatherId) {
  switch (weatherId) {
    case 1:
      return weather1;
    case 2:
      return weather2;
    case 3:
      return weather3;
    case 4:
      return weather4;
    default:
      return null;
  }
}
