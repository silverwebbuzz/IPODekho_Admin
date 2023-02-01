import reducer from "../reducer/reducer";

import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

// import reducer from "../reducer/reducer";

// import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

// const customizedMiddleware = getDefaultMiddleware({
//   serializableCheck: false,
// });
// export const store = configureStore({
//   reducer: reducer,
//   middleware: customizedMiddleware,
//   // middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
// });
