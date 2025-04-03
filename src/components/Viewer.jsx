import "./Viewer.css";
import { getEmotionImage } from "../util/get-emotion-image";
import { emotionList } from "../util/constants";
import { getWeatherImage } from "../util/get-weather-image";
import { weatherList } from "../util/weather-const";

const Viewer = ({ emotionId, weatherId, content }) => {
  const emotionItem = emotionList.find(
    (item) => String(item.emotionId) === String(emotionId)
  );

  const weatherItem = weatherList.find(
    (item) => String(item.weatherId) === String(weatherId)
  );

  return (
    <div className="Viewer">
      <section className="img_section">
        <h4>오늘의 감정</h4>
        <div className={`emotion_img_wrapper emotion_img_wrapper_${emotionId}`}>
          <img src={getEmotionImage(emotionId)} />
          <div>{emotionItem.emotionName}</div>
        </div>
      </section>
      <section className="weather_section">
        <h4>오늘의 날씨</h4>
        <div className="weather_img_wrapper">
          <img src={getWeatherImage(weatherId)} />
          <div>{weatherItem.weatherName}</div>
        </div>
      </section>
      <section className="content_section">
        <h4>오늘의 일기</h4>
        <div className="content_wrapper">
          <p>{content}</p>
        </div>
      </section>
    </div>
  );
};

export default Viewer;
