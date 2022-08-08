import { AnyAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DayPickerProps } from "react-day-picker";
import { RootState } from "..";
import { addWeeks, startOfWeek, subWeeks } from "date-fns";

type Current = { day: string; weekdays: string[]; year: number; month: number };
type Calendar = {
  selectedDate: string;
  //   current: tCurrent
  focused: Current;
};

const today = new Date();
const initialWeekDays = () => {
  const weekDays = [];
  const firstDate = startOfWeek(new Date(today), { weekStartsOn: 0 });

  for (let i = 0; i < 7; i++) {
    let result = firstDate.setDate(firstDate.getDate() + 1);
    weekDays.push(new Date(result - 1).toDateString());
  }
  return weekDays;
};
const initialState: Calendar = {
  selectedDate: today.toString(),
  focused: {
    day: today.getDate().toString(),
    weekdays: initialWeekDays(),
    year: today.getFullYear(),
    month: today.getMonth() + 1,
  },
};

var clickCount = 0;

export const calendarSlice = createSlice({
  name: "calendar",
  initialState: initialState,
  reducers: {
    getNextWeek: (state, action) => {
      let newWeekArr = [];
      clickCount = 0;
      clickCount++;
      for (let i = 0; i < 7; i++) {
        newWeekArr.push(
          addWeeks(
            new Date(state.focused.weekdays[i]),
            clickCount
          ).toDateString()
        );
      }
      state.focused.weekdays = newWeekArr;
      state.focused.month = new Date(newWeekArr[0]).getMonth() + 1;
      state.focused.year = new Date(newWeekArr[0]).getFullYear();
    },
    getPrevWeek: (state, action) => {
      let newWeekArr = [];
      clickCount = 0;
      clickCount++;
      console.log("get prev week click count", clickCount);
      for (let i = 0; i < 7; i++) {
        newWeekArr.push(
          subWeeks(
            new Date(state.focused.weekdays[i]),
            clickCount
          ).toDateString()
        );
      }
      state.focused.weekdays = newWeekArr;
      state.focused.month = new Date(newWeekArr[0]).getMonth() + 1;
      state.focused.year = new Date(newWeekArr[0]).getFullYear();
    },
    getNextMonth: (state, action) => {
      console.log(state, action);
    },
    getPrevMonth: (state, action) => {
      console.log(state, action);
    },
    getToday: (state, action: PayloadAction<string>) => {
      state.selectedDate = action.payload;
    },
    selectDay: (state, action: PayloadAction<string>) => {
      state.focused.year = new Date(action.payload).getFullYear();
      state.focused.month = new Date(action.payload).getMonth();
      const startDate = startOfWeek(new Date(action.payload), {
        weekStartsOn: 0,
      });
      let newWeekArr = [];
      for (let i = 0; i < 7; i++) {
        let result = startDate.setDate(startDate.getDate() + 1);
        newWeekArr.push(new Date(result - 1).toDateString());
      }
      state.focused.weekdays = newWeekArr;
    },
  },
});

export const {
  getNextWeek,
  getPrevWeek,
  getNextMonth,
  getPrevMonth,
  getToday,
  selectDay,
} = calendarSlice.actions;
export const focusedCalendar = (state: RootState) => state.calendar.focused;
export const selectedDate = (state: RootState) => state.calendar.selectedDate;

export default calendarSlice.reducer;
