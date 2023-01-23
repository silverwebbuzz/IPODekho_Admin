import { combineReducers } from "redux";
import mainLineIpoSlices from "../slice/mainLineIpoSlices";

const reducer = combineReducers({
  //slice
  mainLineIpoSlice: mainLineIpoSlices,
});
export default reducer;
