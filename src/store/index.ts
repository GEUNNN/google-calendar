import { configureStore } from "@reduxjs/toolkit";
import calenderReducer from "./slices/calendar";
import scheduleReducer from "./slices/schedule";

export const store = configureStore({
  reducer: {
    calendar: calenderReducer,
    schedule: scheduleReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
