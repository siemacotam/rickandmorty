import { configureStore } from "@reduxjs/toolkit";
import characters from "./reducers/characterReducer/charactersReducer";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const store = configureStore({
  reducer: {
    characters,
  },
});
