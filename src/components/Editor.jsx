import "./Editor.css";
import EmotionItem from "./EmotionItem";
import Button from "./Button";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { emotionList } from "../util/constants";
import { weatherList } from "../util/weather-const";
import { getStringedDate } from "../util/get-stringed-date";
import WeatherItem from "./WeatherItem";

const Editor = ({ initData, onSubmit }) => {
  const nav = useNavigate();

  const [input, setInput] = useState({
    createdDate: new Date(),
    emotionId: 3,
    weatherList: 3,
    content: "",
  });

  useEffect(() => {
    if (initData) {
      setInput({
        ...initData,
        createdDate: new Date(Number(initData.createdDate)),
      });
    }
  }, [initData]);

  const onChangeInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === "createdDate") {
      value = new Date(value);
    }

    setInput({
      ...input,
      [name]: value,
    });
  };

  const onClickSubmitButton = () => {
    onSubmit(input);
  };

  return (
    <div className="Editor">
      <section className="date-weather_section">
        <section className="date_section">
          <h4>오늘의 날짜</h4>
          <input
            name="createdDate"
            onChange={onChangeInput}
            value={getStringedDate(input.createdDate)}
            type="date"
          />
        </section>
        <section className="weather_section">
          <h4>오늘의 날씨</h4>
          <div className="weather_list_wrapper">
            {weatherList.map((item) => (
              <WeatherItem
                onClick={() =>
                  onChangeInput({
                    target: {
                      name: "weatherId",
                      value: item.weatherId,
                    },
                  })
                }
                key={item.weatherId}
                {...item}
                isSelected={item.weatherId === input.weatherId}
              />
            ))}
          </div>
        </section>
      </section>
      <section className="emotion_section">
        <h4>오늘의 감정</h4>
        <div className="emotion_list_wrapper">
          {emotionList.map((item) => (
            <EmotionItem
              onClick={() =>
                onChangeInput({
                  target: {
                    name: "emotionId",
                    value: item.emotionId,
                  },
                })
              }
              key={item.emotionId}
              {...item}
              isSelected={item.emotionId === input.emotionId}
            />
          ))}
        </div>
      </section>
      <section className="content_section">
        <h4>오늘의 일기</h4>
        <textarea
          name="content"
          value={input.content}
          onChange={onChangeInput}
          placeholder="오늘은 어땠나요?"
        ></textarea>
      </section>
      <section className="button_section">
        <Button text={"취소하기"} onClick={() => nav(-1)} />
        <Button
          onClick={onClickSubmitButton}
          text={"작성완료"}
          type={"POSITIVE"}
        />
      </section>
    </div>
  );
};

export default Editor;
