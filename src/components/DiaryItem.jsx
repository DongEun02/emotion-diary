import "./DiaryItem.css";
import { getEmotionImage } from "../util/get-emotion-image";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { weatherList } from "../util/weather-const";

const DiaryItem = ({ id, emotionId, createdDate, weatherId, content }) => {
  const nav = useNavigate();
  const weatherItem = weatherList.find(
    (item) => String(item.weatherId) === String(weatherId)
  );

  return (
    <div className="DiaryItem">
      <div
        onClick={() => nav(`/diary/${id}`)}
        className={`img_section img_section_${emotionId}`}
      >
        <img src={getEmotionImage(emotionId)} />
      </div>
      <div onClick={() => nav(`/diary/${id}`)} className="info_section">
        <div className="created_date">
          {new Date(createdDate).toLocaleDateString()}
        </div>
        <div className="content">{content}</div>
      </div>
      <div className="weather_section">날씨: {weatherItem.weatherName}</div>

      <div className="button_section">
        <Button onClick={() => nav(`/edit/${id}`)} text={"수정하기"} />
      </div>
    </div>
  );
};

export default DiaryItem;
