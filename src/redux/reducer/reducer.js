import { combineReducers } from "redux";
import chatSlice from "../slice/chatSlice";
import mainLineIpoSlices from "../slice/mainLineIpoSlices";
import newsSlice from "../slice/newsSlice";
import sidebarToggleSlice from "../slice/sidebarToggleSlice";

const reducer = combineReducers({
  //slice
  mainLineIpoSlice: mainLineIpoSlices,
  toggleReducer: sidebarToggleSlice,
  chatReducer: chatSlice,
  newsReducer: newsSlice,
});
export default reducer;
