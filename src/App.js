import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Layout from "./Components/Layout";
import { createContext } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

const MainLineIPO = lazy(() => import("./View/MainLineIPO"));
const SmeIpo = lazy(() => import("./View/SmeIpo"));
const News = lazy(() => import("./View/News"));
const Offers = lazy(() => import("./View/Offers"));
const Faqs = lazy(() => import("./View/Faqs"));
const IpoAllotmentTips = lazy(() => import("./View/IpoAllotmentTips"));
const PrivacyPolicy = lazy(() => import("./View/PrivacyPolicy"));
const TermsAndConditions = lazy(() => import("./View/TermsAndConditions"));
const ContactUs = lazy(() => import("./View/ContactUs"));
const Users = lazy(() => import("./View/Users"));
const Notifications = lazy(() => import("./View/Notifications"));
const AddIpo = lazy(() => import("./View/AddIpo"));
const IpoEdit = lazy(() => import("./View/IpoEdit"));
const IpoDetail = lazy(() => import("./View/IpoDetail"));
export const IDContext = createContext();
const App = () => {
  // const { ID } = useSelector((state) => state.mainLineIpoSlice);
  const [id, setId] = useState("");
  return (
    <>
      {/* <IDContext.Provider value={{ id, setId }}> */}
      <Layout>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Routes>
            <Route path="mainline_ipo" element={<MainLineIPO />} />
            <Route path="mainline_ipo/add_ipo" element={<AddIpo />} />
            <Route path="mainline_ipo/ipo_detail" element={<IpoDetail />} />
            <Route path="mainline_ipo/ipo_edit" element={<IpoEdit />} />
            <Route path="sme_ipo" element={<SmeIpo />} />
            <Route path="sme_ipo/add_ipo" element={<AddIpo />} />
            <Route path="sme_ipo/ipo_detail" element={<IpoDetail />} />
            <Route path="sme_ipo/ipo_edit" element={<IpoEdit />} />
            <Route path="news" element={<News />} />
            <Route path="offers" element={<Offers />} />
            <Route path="faqs" element={<Faqs />} />
            <Route path="ipo_allotment_tips" element={<IpoAllotmentTips />} />
            <Route path="privacy_policy" element={<PrivacyPolicy />} />
            <Route path="terms_conditions" element={<TermsAndConditions />} />
            <Route path="contact_us" element={<ContactUs />} />
            <Route path="user" element={<Users />} />
            <Route path="notifications" element={<Notifications />} />
          </Routes>
        </Suspense>
      </Layout>
      {/* </IDContext.Provider> */}
    </>
  );
};

export default App;
