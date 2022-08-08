import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";

type ScheduleDetail = {
  start: string;
  end: string;
  title: string;
};
type Schedule = {
  [key: string]: Array<ScheduleDetail>;
};

const initialState: Schedule = {
  "2022-08-01": [
    {
      start: "13:30",
      end: "14:40",
      title: "자바스크립트 공부",
    },
  ],
};

export const scheduleSlice = createSlice({
  name: "schedule",
  initialState: initialState,
  reducers: {
    addSchedule: (
      state,
      action: PayloadAction<{
        date: string;
        data: ScheduleDetail;
      }>
    ) => {
      if (!state[action.payload.date]) {
        state[action.payload.date] = [];
      }
      state[action.payload.date] = [
        ...state[action.payload.date],
        action.payload.data,
      ];
      console.log(state, action.payload);
    },
    removeSchedule: (
      state,
      action: PayloadAction<{
        date: string;
        data: { start: string; end: string; title: string };
      }>
    ) => {
      delete state[action.payload.date];
      console.log(state, action);
    },
  },
});

export const { addSchedule, removeSchedule } = scheduleSlice.actions;
export const schedules = (state: RootState) => state.schedule;

export default scheduleSlice.reducer;
