import React from "react";
import { useState } from "react";
import FinancialsTab from "../AllTabs/FinancialsTab";
import GeneralTab from "../AllTabs/GeneralTab";
import SubscriptionTab from "../AllTabs/SubscriptionTab";
import CompanyRegistrarInfoTab from "../AllTabs/CompanyRegistrarInfoTab";
import FormContent from "./formContent";
import AppContentLayout from "../AppContentLayout";
import ListedInfoTab from "../AllTabs/ListedInfoTab";

const Stepper = () => {
  const [step, setStep] = useState(1);
  const [state, setState] = useState({
    company_name: "",
    companyDescription: "",
    objectsOfIssue: "",
    faceValue: "",
    FromPrice: "",
    toPrice: "",
    lotSize: "",
    issueSize: "",
    freshIssue: "",
    OfferForSale: "",
    retailQuota: "",
    qibQuota: "",
    niiQuota: "",
    issueType: "",
    // listingAt: "",
    drhp: "",
    rhp: "",
    // pramotersName: [],
    sharehold: "",
    posthold: "",

    //finacial fields
    epshare: "",
    peRatio: "",
    RoNWReturn: "",
    netAssetValue: "",
    // companyFinancials: [],
    // financialLotsize: [],
    // peersComparison: [],

    //company registration detail fields
    companyAddress: "",
    companyPhone: "",
    companyEmail: "",
    companyWebsite: "",
    companyRegisterName: "",
    companyRegisterPhone: "",
    companyRegisterEmail: "",
    companyRegisterWebsite: "",
    companyRegisterAllotmentLink: "",
  });
  const {
    company_name,
    companyDescription,
    objectsOfIssue,
    faceValue,
    FromPrice,
    toPrice,
    lotSize,
    issueSize,
    freshIssue,
    OfferForSale,
    retailQuota,
    qibQuota,
    niiQuota,
    issueType,
    // listingAt,
    drhp,
    rhp,
    // pramotersName: [],
    sharehold,
    posthold,
    //finacial fields
    epshare,
    peRatio,
    RoNWReturn,
    netAssetValue,
    // companyFinancials,
    // financialLotsize,
    // peersComparison,

    //regitration fields
    companyAddress,
    companyPhone,
    companyEmail,
    companyWebsite,
    companyRegisterName,
    companyRegisterPhone,
    companyRegisterEmail,
    companyRegisterWebsite,
    companyRegisterAllotmentLink,
  } = state;
  const values = {
    company_name,
    companyDescription,
    objectsOfIssue,
    faceValue,
    FromPrice,
    toPrice,
    lotSize,
    issueSize,
    freshIssue,
    OfferForSale,
    retailQuota,
    qibQuota,
    niiQuota,
    issueType,
    // listingAt,
    drhp,
    rhp,
    // pramotersName: [],
    sharehold,
    posthold,
    //finacial fields
    epshare,
    // companyFinancials,
    // financialLotsize,
    // peersComparison,
    peRatio,
    RoNWReturn,
    netAssetValue,
    //registration field
    companyAddress,
    companyPhone,
    companyEmail,
    companyWebsite,
    companyRegisterName,
    companyRegisterPhone,
    companyRegisterEmail,
    companyRegisterWebsite,
    companyRegisterAllotmentLink,
  };

  const prevStep = () => {
    setStep(step - 1);
  };
  const nextStep = () => {
    setStep(step + 1);
  };

  const handleChange = (input, e) => {
    setState({ ...values, [input]: e });
  };
  switch (step) {
    case 1:
      return (
        <>
          {" "}
          <GeneralTab
            handleChange={handleChange}
            nextStep={nextStep}
            prevStep={prevStep}
            values={values}
          />
        </>
      );
    case 2:
      return (
        <>
          {" "}
          <FinancialsTab
            handleChange={handleChange}
            nextStep={nextStep}
            prevStep={prevStep}
            values={values}
          />
        </>
      );
    case 3:
      return (
        <CompanyRegistrarInfoTab
          handleChange={handleChange}
          nextStep={nextStep}
          prevStep={prevStep}
          values={values}
        />
      );
    case 4:
      return (
        <SubscriptionTab
          handleChange={handleChange}
          nextStep={nextStep}
          prevStep={prevStep}
          values={values}
        />
      );
    case 5:
      return (
        <ListedInfoTab
          handleChange={handleChange}
          nextStep={nextStep}
          prevStep={prevStep}
          values={values}
        />
      );
    // never forget the default case, otherwise VS code would be mad!
    default:
      // do nothing
      <GeneralTab
        handleChange={handleChange}
        nextStep={nextStep}
        prevStep={prevStep}
        values={values}
      />;
  }
};

export default Stepper;
