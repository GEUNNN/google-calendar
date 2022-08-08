import { useDispatch } from "react-redux";
import {
  getNextWeek,
  getPrevWeek,
  getToday,
  selectDay,
  selectedDate,
} from "../store/slices/calendar";
import "./styles/Header.scss";

export default function Header({
  year,
  month,
}: {
  year: number;
  month: number;
}) {
  const dispatch = useDispatch();

  return (
    <header className="header-container">
      <div className="title-wrap">
        <img src="./menu-icon.svg" alt="menu icon" className="menu-icon" />
        <img
          src="https://ssl.gstatic.com/calendar/images/dynamiclogo_2020q4/calendar_30_2x.png"
          alt="calendar img"
          className="calendar-image"
        />
        <p className="calendar-text">Calendar</p>
      </div>
      <div className="date-wrap">
        <button
          className="today-btn"
          onClick={() => dispatch(selectDay(new Date().toString()))}
        >
          Today
        </button>
        <img
          src="./left-arrow.svg"
          alt="left-arrow"
          className="arrow-icon"
          onClick={() => dispatch(getPrevWeek(1))}
        />
        <img
          src="./right-arrow.svg"
          alt="right-arrow"
          className="arrow-icon"
          onClick={() => dispatch(getNextWeek(1))}
        />
        <div className="year-month-text">
          {month}월 {year}년
        </div>
      </div>
    </header>
  );
}
