import React from "react";
import { useState } from "react";
import ChatTab from "../AllTabs/ChatTab";
import FinancialsTab from "../AllTabs/FinancialsTab";
import GeneralTab from "../AllTabs/GeneralTab";
import ListedInfoTab from "../AllTabs/ListedInfoTab";
import SubscriptionTab from "../AllTabs/SubscriptionTab";
import CompanyRegistrarInfoTab from "../AllTabs/CompanyRegistrarInfoTab";
import TabPaneLayout from "./TabPaneLayout";

import DisabledGeneralTab from "../AllDisabledTabs/DisabledGeneralTab";
import DisabledFinancialsTab from "../AllDisabledTabs/DisabledFinancialsTab";
import DisabledRegistrarInfoTab from "../AllDisabledTabs/DisabledCompanyRegistrarInfoTab";
import DisabledSubscriptionTab from "../AllDisabledTabs/DisabledSubscriptionTab";
import DisabledListedInfoTab from "../AllDisabledTabs/DisabledListedInfoTab";

const Tabs = ({ addIpo, data, EditIpo }) => {
  const pointerStyle = { cursor: "pointer" };
  const [activeTab, setActiveTab] = useState("ipo_general");
  // console.log(data);
  const IPOdata = data;
  // console.log(IPOdata);
  return (
    <>
      <ul className="nav nav-custom nav-tabs nav-line-tabs nav-line-tabs-2x border-0 fs-4 fw-semibold mb-n2">
        {/* <TabNav
          onClick={() => setActiveTab("ipo_general")}
          tabName={"General"}
          activeTab={activeTab}
        />

        <TabNav
          onClick={() => setActiveTab("ipo_financials")}
          tabName={"Financials"}
          activeTab={activeTab}
        />

        <TabNav
          onClick={() => setActiveTab("ipo_companyinfo")}
          tabName={"Company/Registrar Info"}
          activeTab={activeTab}
        /> */}

        <li className="nav-item">
          <span
            style={pointerStyle}
            onClick={() => setActiveTab("ipo_general")}
            className={`nav-link text-active-primary pb-4 ${
              activeTab === "ipo_general" && "active"
            }`}
            data-bs-toggle="tab"
          >
            General
          </span>
        </li>

        <li className="nav-item">
          <span
            style={pointerStyle}
            onClick={() => setActiveTab("ipo_financials")}
            className={`nav-link text-active-primary pb-4 ${
              activeTab === "ipo_financials" && "active"
            }`}
            data-bs-toggle="tab"
          >
            Financials
          </span>
        </li>

        <li className="nav-item">
          <span
            style={pointerStyle}
            onClick={() => setActiveTab("ipo_companyinfo")}
            className={`nav-link text-active-primary pb-4 ${
              activeTab === "ipo_companyinfo" && "active"
            }`}
            data-bs-toggle="tab"
          >
            Company/Registrar Info
          </span>
        </li>

        <li className="nav-item">
          <span
            style={pointerStyle}
            onClick={() => setActiveTab("ipo_subscription")}
            className={`nav-link text-active-primary pb-4 ${
              activeTab === "ipo_subscription" && "active"
            }`}
            data-bs-toggle="tab"
          >
            Subscription
          </span>
        </li>

        <li className="nav-item">
          <span
            style={pointerStyle}
            onClick={() => setActiveTab("ipo_listed_info")}
            className={`nav-link text-active-primary pb-4 ${
              activeTab === "ipo_listed_info" && "active"
            }`}
            data-bs-toggle="tab"
          >
            Listed Info
          </span>
        </li>

        <li className="nav-item">
          <span
            style={pointerStyle}
            onClick={() => setActiveTab("ipo_chat")}
            className={`nav-link text-active-primary pb-4 ${
              activeTab === "ipo_chat" && "active"
            }`}
            data-bs-toggle="tab"
          >
            Chat
          </span>
        </li>
      </ul>

      <div className="tab-content">
        {activeTab === "ipo_general" ? (
          <TabPaneLayout>
            {addIpo ? (
              <GeneralTab />
            ) : EditIpo ? (
              <GeneralTab IPODATA={IPOdata} EditIpo={EditIpo} />
            ) : (
              <DisabledGeneralTab IPODATA={IPOdata} />
            )}
          </TabPaneLayout>
        ) : activeTab === "ipo_financials" ? (
          <TabPaneLayout>
            {addIpo ? <FinancialsTab /> : <DisabledFinancialsTab />}
          </TabPaneLayout>
        ) : activeTab === "ipo_companyinfo" ? (
          <TabPaneLayout>
            {addIpo ? (
              <CompanyRegistrarInfoTab />
            ) : (
              <DisabledRegistrarInfoTab />
            )}
          </TabPaneLayout>
        ) : activeTab === "ipo_subscription" ? (
          <TabPaneLayout>
            {addIpo ? <SubscriptionTab /> : <DisabledSubscriptionTab />}
          </TabPaneLayout>
        ) : activeTab === "ipo_listed_info" ? (
          <TabPaneLayout>
            {addIpo ? <ListedInfoTab /> : <DisabledListedInfoTab />}
          </TabPaneLayout>
        ) : (
          activeTab === "ipo_chat" && (
            <TabPaneLayout>
              <ChatTab />
            </TabPaneLayout>
          )
        )}
      </div>
    </>
  );
};

export default Tabs;
