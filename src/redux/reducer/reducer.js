import { combineReducers } from "redux";
import chatSlice from "../slice/chatSlice";
import mainLineIpoSlices from "../slice/mainLineIpoSlices";
import sidebarToggleSlice from "../slice/sidebarToggleSlice";

const reducer = combineReducers({
  //slice
  mainLineIpoSlice: mainLineIpoSlices,
  toggleReducer: sidebarToggleSlice,
  chatReducer: chatSlice,
});
export default reducer;
