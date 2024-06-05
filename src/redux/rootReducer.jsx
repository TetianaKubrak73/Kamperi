import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import camperSlice from "./slice";
import filterReducer from "./filterSlice";
import favoriteSlice from "./FavoriteSlice";
import storage from "redux-persist/lib/storage";
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["favorite"],
};

const persistedReducer = persistReducer(persistConfig, favoriteSlice);

const rootReducer = combineReducers({
  camper: camperSlice,
  filter: filterReducer,
  favorite: persistedReducer,
});

export default rootReducer;
