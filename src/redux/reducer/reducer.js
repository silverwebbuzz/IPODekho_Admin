import { combineReducers } from "redux";
import mainLineIpoSlices from "../slice/mainLineIpoSlices";
import modalSlice from "../slice/modalSlice";
import offersSlice from "../slice/offersSlice";
import sidebarToggleSlice from "../slice/sidebarToggleSlice";
import textEditorSlice from "../slice/textEditorSlice";

const reducer = combineReducers({
  //slice
  mainLineIpoSlice: mainLineIpoSlices,
  toggleReducer: sidebarToggleSlice,
  textEditorReducer: textEditorSlice,
  offersReducer: offersSlice,
  modalReducer: modalSlice,
});
export default reducer;
