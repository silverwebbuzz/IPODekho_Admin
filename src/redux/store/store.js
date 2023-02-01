import reducer from "../reducer/reducer";

import { configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { persistStore } from "redux-persist";
import thunk from "redux-thunk";

// export const persistedReducer = persistReducer(persistConfig, reducer);
// const persistConfig = {
//   key: "root",
//   storage,
// };
export const store = configureStore({
  reducer: reducer,
  middleware: [thunk],
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
// export const persistor = persistStore(store);
