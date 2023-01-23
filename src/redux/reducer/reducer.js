import { combineReducers } from "redux";
import mainLineIpoSlices from "../slice/mainLineIpoSlices";
import sidebarToggleSlice from "../slice/sidebarToggleSlice";

const reducer = combineReducers({
  //slice
  mainLineIpoSlice: mainLineIpoSlices,
  toggleReducer: sidebarToggleSlice,
});
export default reducer;
