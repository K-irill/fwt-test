import { combineReducers, configureStore } from "@reduxjs/toolkit";
import paintingsReducer from "./reducers/paintingsSlice";
import selectReducer from "./reducers/selectSlice";

const rootReducer = combineReducers({
  paintingsReducer,
  selectReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
