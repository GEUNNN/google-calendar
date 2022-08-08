import React, { Dispatch, SetStateAction, useState } from "react";
import "./styles/AddEventModal.scss";
import { useDispatch } from "react-redux";
import { addSchedule } from "../store/slices/schedule";

export default function AddEventModal({
  eventDate,
  setIsOpened,
}: {
  eventDate: string;
  setIsOpened: Dispatch<SetStateAction<boolean>>;
}) {
  const [scheduleTitle, setScheduleTitle] = useState("");
  const [scheduleDate, setScheduleDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const dispatch = useDispatch();

  const handleInput = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: string
  ) => {
    switch (type) {
      case "title":
        setScheduleTitle(e.target.value);
        break;
      case "date":
        setScheduleDate(e.target.value);
        break;
      case "start":
        setStartTime(e.target.value);
        break;
      case "end":
        setEndTime(e.target.value);
        break;
    }
  };

  console.log(scheduleTitle, startTime, endTime);

  const handleSubmit = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    const scheduleData: {
      date: string;
      data: { start: string; end: string; title: string };
    } = {
      date: scheduleDate,
      data: { start: startTime, end: endTime, title: scheduleTitle },
    };

    dispatch(addSchedule(scheduleData));
  };

  return (
    <div className="add-event-modal">
      <div className="close-button" onClick={() => setIsOpened(false)}>
        <img src="./close-icon.svg" alt="close icon" className="close-img" />
      </div>
      <form className="event-form" onSubmit={handleSubmit}>
        <input
          className="event-title"
          placeholder="제목 추가"
          onChange={(e) => handleInput(e, "title")}
        />
        <input
          type="date"
          className="event-date"
          onChange={(e) => handleInput(e, "date")}
        />
        <div className="time-wrap">
          <input
            type="time"
            className="event-time-start"
            onChange={(e) => handleInput(e, "start")}
          />
          <span className="time-dash">—</span>
          <input
            type="time"
            className="event-time-end"
            onChange={(e) => handleInput(e, "end")}
          />
        </div>

        <div className="submit-wrap">
          <button
            className="more-option"
            onClick={() => console.log("more options")}
          >
            옵션 더보기
          </button>
          <button className="save-btn" type="submit">
            저장
          </button>
        </div>
      </form>
    </div>
  );
}
