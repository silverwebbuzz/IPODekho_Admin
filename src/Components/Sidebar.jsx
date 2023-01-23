import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import DefaultDarkLogo from "../assets/media/logos/default-dark.svg";
import DefaultSmallLogo from "../assets/media/logos/default-small.svg";
import ContactUsIcon from "./ContactUsIcon";
import FaqsIcon from "./FaqsIcon";
import IpoAllotmentIcon from "./IpoAllotmentIcon";
import MainLineIpoIcon from "./MainLineIpoIcon";
import NewsIcon from "./NewsIcon";
import NotificationsIcon from "./NotificationsIcon";
import OffersIcon from "./OffersIcon";
import PrivacyPolicyIcon from "./PrivacyPolicyIcon";
import SidebarToggleIcon from "./SidebarToggleIcon";
import SmeIpoIcon from "./SmeIpoIcon";
import TermsAndConditionsIcon from "./TermsAndConditionsIcon";
import UserIcon from "./UserIcon";

const Sidebar = () => {
  return (
    <>
      <div
        id="kt_app_sidebar"
        className="app-sidebar flex-column"
        data-kt-drawer="true"
        data-kt-drawer-name="app-sidebar"
        data-kt-drawer-activate="{default: true, lg: false}"
        data-kt-drawer-overlay="true"
        data-kt-drawer-width="225px"
        data-kt-drawer-direction="start"
        data-kt-drawer-toggle="#kt_app_sidebar_mobile_toggle"
      >
        <div className="app-sidebar-logo px-6" id="kt_app_sidebar_logo">
          <NavLink to="/">
            <img
              alt="Logo"
              src={DefaultDarkLogo}
              className="h-25px app-sidebar-logo-default"
            />
            <img
              alt="Logo"
              src={DefaultSmallLogo}
              className="h-20px app-sidebar-logo-minimize"
            />
          </NavLink>

          <div
            id="kt_app_sidebar_toggle"
            className="app-sidebar-toggle btn btn-icon btn-shadow btn-sm btn-color-muted btn-active-color-primary body-bg h-30px w-30px position-absolute top-50 start-100 translate-middle rotate"
            data-kt-toggle="true"
            data-kt-toggle-state="active"
            data-kt-toggle-target="body"
            data-kt-toggle-name="app-sidebar-minimize"
          >
            <span className="svg-icon svg-icon-2 rotate-180">
              <SidebarToggleIcon />
            </span>
          </div>
        </div>

        <div className="app-sidebar-menu overflow-hidden flex-column-fluid">
          <div
            id="kt_app_sidebar_menu_wrapper"
            className="app-sidebar-wrapper hover-scroll-overlay-y my-5"
            data-kt-scroll="true"
            data-kt-scroll-activate="true"
            data-kt-scroll-height="auto"
            data-kt-scroll-dependencies="#kt_app_sidebar_logo, #kt_app_sidebar_footer"
            data-kt-scroll-wrappers="#kt_app_sidebar_menu"
            data-kt-scroll-offset="5px"
            data-kt-scroll-save-state="true"
          >
            <div
              className="menu menu-column menu-rounded menu-sub-indention px-3"
              id="#kt_app_sidebar_menu"
              data-kt-menu="true"
              data-kt-menu-expand="false"
            >
              <div className="menu-item">
                <NavLink to="/" className="menu-link" activeClassName="active">
                  <MainLineIpoIcon />
                  <span className="menu-title">Mainline IPO</span>
                </NavLink>
              </div>

              <div className="menu-item">
                <NavLink to="/sme_ipo" className="menu-link">
                  <SmeIpoIcon />
                  <span className="menu-title">SME IPO</span>
                </NavLink>
              </div>

              <div className="menu-item">
                <NavLink to="/news" className="menu-link">
                  <NewsIcon />
                  <span className="menu-title">News</span>
                </NavLink>
              </div>

              <div className="menu-item">
                <NavLink to="/offers" className="menu-link">
                  <OffersIcon />
                  <span className="menu-title">Offers</span>
                </NavLink>
              </div>

              <div className="menu-item">
                <NavLink to="/faqs" className="menu-link" href="faqs.html">
                  <FaqsIcon />
                  <span className="menu-title">FAQs</span>
                </NavLink>
              </div>

              <div className="menu-item">
                <NavLink to="/ipo_allotment_tips" className="menu-link">
                  <IpoAllotmentIcon />
                  <span className="menu-title">IPO Allotment Tips</span>
                </NavLink>
              </div>

              <div className="menu-item">
                <NavLink to="/privacy_policy" className="menu-link">
                  <PrivacyPolicyIcon />
                  <span className="menu-title">Privacy Policy</span>
                </NavLink>
              </div>

              <div className="menu-item">
                <NavLink to="/terms_conditions" className="menu-link">
                  <TermsAndConditionsIcon />
                  <span className="menu-title">Terms & Conditions</span>
                </NavLink>
              </div>

              <div className="menu-item">
                <NavLink to="/contact_us" className="menu-link">
                  <ContactUsIcon />
                  <span className="menu-title">Contact Us</span>
                </NavLink>
              </div>

              <div className="menu-item">
                <NavLink to="/user" className="menu-link">
                  <UserIcon />
                  <span className="menu-title">User</span>
                </NavLink>
              </div>

              <div className="menu-item">
                <NavLink to="/notifications" className="menu-link">
                  <NotificationsIcon />
                  <span className="menu-title">Notifications</span>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Outlet />
    </>
  );
};

export default Sidebar;
