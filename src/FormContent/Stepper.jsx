import FinancialsTab from "../Components/AllTabs/FinancialsTab";
import GeneralTab from "../Components/AllTabs/GeneralTab";
import CompanyRegistrarInfoTab from "../Components/AllTabs/CompanyRegistrarInfoTab";
import SubscriptionTab from "../Components/AllTabs/SubscriptionTab";
import ListedInfoTab from "../Components/AllTabs/ListedInfoTab";
import React, { useContext } from "react";
import { FormContext } from "../App";

const Steppers = ({ IpoType }) => {
  const { activeStepIndex } = useContext(FormContext);

  switch (activeStepIndex) {
    case 1:
      return (
        <>
          {
            (IpoType = "Edit" ? (
              <GeneralTab IpoType={IpoType} />
            ) : (
              <GeneralTab IpoType={IpoType} />
            ))
          }
        </>
      );
    case 2:
      return (
        <>
          {
            (IpoType = "Edit" ? (
              <FinancialsTab IpoType="Edit" />
            ) : (
              <FinancialsTab IpoType="Add" />
            ))
          }
        </>
      );
    case 3:
      return (
        <>
          {
            (IpoType = "Edit" ? (
              <CompanyRegistrarInfoTab IpoType="Edit" />
            ) : (
              <CompanyRegistrarInfoTab IpoType="Add" />
            ))
          }
        </>
      );
    case 4:
      return (
        <>
          {" "}
          {
            (IpoType = "Edit" ? (
              <SubscriptionTab IpoType="Edit" />
            ) : (
              <SubscriptionTab IpoType="Add" />
            ))
          }
        </>
      );
    case 5:
      return (
        <>
          {
            (IpoType = "Edit" ? (
              <ListedInfoTab IpoType="Edit" />
            ) : (
              <ListedInfoTab IpoType="Add" />
            ))
          }
        </>
      );
    // never forget the default case, otherwise VS code would be mad!
    default:
      // do nothing
      return (
        <>
          {(IpoType = "Edit" ? <GeneralTab IpoType="Edit" /> : <GeneralTab />)}
        </>
      );
  }
};
export default Steppers;
