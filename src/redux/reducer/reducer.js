import { combineReducers } from "redux";
import chatSlice from "../slice/chatSlice";
import imagePreviewSlice from "../slice/imagePreviewSlice";
import mainLineIpoSlices from "../slice/mainLineIpoSlices";
import newsSlice from "../slice/newsSlice";
import offersSlice from "../slice/offersSlice";
import sidebarToggleSlice from "../slice/sidebarToggleSlice";
import privacyPolicySlice from "../slice/privacyPolicySlice";
import faqsSlice from "../slice/faqsSlice";
import ipoAllotSlice from "../slice/ipoAllotSlice";
const reducer = combineReducers({
  //slice
  mainLineIpoSlice: mainLineIpoSlices,
  toggleReducer: sidebarToggleSlice,
  chatReducer: chatSlice,
  newsReducer: newsSlice,
  imagePreviewReducer: imagePreviewSlice,
  offersReducer: offersSlice,
  privacyPolicyReducer: privacyPolicySlice,
  faqsReducer: faqsSlice,
  ipoAllotReducer: ipoAllotSlice,
});
export default reducer;
