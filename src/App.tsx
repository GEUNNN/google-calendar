import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DayPicker, DayPickerProps } from "react-day-picker";
import "./App.scss";
import "react-day-picker/dist/style.css";
import {
  focusedCalendar,
  selectedDate,
  selectDay,
  getToday,
} from "./store/slices/calendar";
import Header from "./Components/Header";
import AddEventModal from "./Components/AddEventModal";
import { schedules } from "./store/slices/schedule";

function App() {
  const { year, month, day } = useSelector(focusedCalendar);
  const selected = useSelector(selectedDate);
  const storedDate = useSelector(focusedCalendar);
  const storedScheldue = useSelector(schedules);
  const [isOpened, setIsOpened] = useState(false);

  const dispatch = useDispatch();

  console.log("stored date >>", storedDate);
  console.log("stored schedule >>", storedScheldue);

  return (
    <div className="App">
      <Header year={year} month={month} />
      <main className="main-container">
        <div className="day-picker-wrap">
          <button
            className="schedule-add-btn"
            onClick={() => setIsOpened(true)}
          >
            만들기
          </button>
          <DayPicker
            mode="single"
            selected={new Date(selected)}
            onDayClick={(e) => dispatch(selectDay(new Date(e).toString()))}
            onSelect={() => dispatch(getToday(new Date().toString()))}
          />
          {isOpened && (
            <AddEventModal eventDate={selected} setIsOpened={setIsOpened} />
          )}
        </div>
        <div className="stored-date">
          {storedDate.weekdays.map((days) => (
            <div key={days} className="calendar-days">
              {`${days.slice(0, 3)} 
              
              ${days.slice(8, -4)}`}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
