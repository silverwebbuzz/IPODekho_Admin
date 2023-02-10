import { combineReducers } from "redux";
import chatSlice from "../slice/chatSlice";
import imagePreviewSlice from "../slice/imagePreviewSlice";
import mainLineIpoSlices from "../slice/mainLineIpoSlices";
import newsSlice from "../slice/newsSlice";
import offersSlice from "../slice/offersSlice";
import sidebarToggleSlice from "../slice/sidebarToggleSlice";
import allotmentTipsSlice from "../slice/allotmentSlice";
import privacyPolicySlice from "../slice/privacyPolicySlice";
const reducer = combineReducers({
  //slice
  mainLineIpoSlice: mainLineIpoSlices,
  toggleReducer: sidebarToggleSlice,
  chatReducer: chatSlice,
  newsReducer: newsSlice,
  imagePreviewReducer: imagePreviewSlice,
  offersReducer: offersSlice,
  allotmentTipsSliceReducer: allotmentTipsSlice,
  privacyPolicyReducer: privacyPolicySlice,
});
export default reducer;
