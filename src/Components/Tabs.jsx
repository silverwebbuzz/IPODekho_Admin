import React from "react";
import { useState } from "react";
import TabPaneLayout from "./TabPaneLayout";
import DisabledGeneralTab from "./AllDisabledTabs/DisabledGeneralTab";
import DisabledFinancialsTab from "./AllDisabledTabs/DisabledFinancialsTab";
import DisabledRegistrarInfoTab from "./AllDisabledTabs/DisabledCompanyRegistrarInfoTab";
import DisabledSubscriptionTab from "./AllDisabledTabs/DisabledSubscriptionTab";
import DisabledListedInfoTab from "./AllDisabledTabs/DisabledListedInfoTab";
import ChatTab from "./AllTabs/ChatTab";

const Tabs = () => {
  const pointerStyle = { cursor: "pointer" };
  const [activeTab, setActiveTab] = useState("ipo_general");

  return (
    <>
      <ul className="nav nav-custom nav-tabs nav-line-tabs nav-line-tabs-2x border-0 fs-4 fw-semibold mb-n2">
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
            <DisabledGeneralTab />
          </TabPaneLayout>
        ) : activeTab === "ipo_financials" ? (
          <TabPaneLayout>
            <DisabledFinancialsTab />
          </TabPaneLayout>
        ) : activeTab === "ipo_companyinfo" ? (
          <TabPaneLayout>
            <DisabledRegistrarInfoTab />
          </TabPaneLayout>
        ) : activeTab === "ipo_subscription" ? (
          <TabPaneLayout>
            <DisabledSubscriptionTab />
          </TabPaneLayout>
        ) : activeTab === "ipo_listed_info" ? (
          <TabPaneLayout>
            <DisabledListedInfoTab />
          </TabPaneLayout>
        ) : (
          <TabPaneLayout>
            <ChatTab />
          </TabPaneLayout>
        )}
      </div>
    </>
  );
};

export default Tabs;
