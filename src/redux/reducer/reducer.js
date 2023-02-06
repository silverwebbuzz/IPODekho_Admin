import { combineReducers } from "redux";
import chatSlice from "../slice/chatSlice";
import imagePreviewSlice from "../slice/imagePreviewSlice";
import mainLineIpoSlices from "../slice/mainLineIpoSlices";
import newsSlice from "../slice/newsSlice";
import offersSlice from "../slice/offersSlice";
import sidebarToggleSlice from "../slice/sidebarToggleSlice";

const reducer = combineReducers({
  //slice
  mainLineIpoSlice: mainLineIpoSlices,
  toggleReducer: sidebarToggleSlice,
  chatReducer: chatSlice,
  newsReducer: newsSlice,
  imagePreviewReducer: imagePreviewSlice,
  offersReducer: offersSlice,
});
export default reducer;
