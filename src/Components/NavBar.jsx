import React from "react";
import UserImage from "../assets/media/user/300-1.jpg";
import DarkModeIcon from "./DarkModeIcon";
import HeaderMenuToggleIcon from "./HeaderMenuToggleIcon";
import LightModeIcon from "./LightModeIcon";
import SidebarMobileToggleIcon from "./SidebarMobileToggleIcon";
import SystemDefaultModeIcon from "./SystemDefaultModeIcon";
import ThemeDarkShowIcon from "./ThemeDarkShowIcon";
import ThemeLightShowIcon from "./ThemeLightShowIcon";
// src\assets\media\user\300-1.jpg
const NavBar = () => {
  return (
    <>
      <div id="kt_app_header" class="app-header">
        <div
          class="app-container container-fluid d-flex align-items-stretch justify-content-between"
          id="kt_app_header_container"
        >
          <div
            class="d-flex align-items-center d-lg-none ms-n3 me-1 me-md-2"
            title="Show sidebar menu"
          >
            <div
              class="btn btn-icon btn-active-color-primary w-35px h-35px"
              id="kt_app_sidebar_mobile_toggle"
            >
              <span class="svg-icon svg-icon-2 svg-icon-md-1">
                <SidebarMobileToggleIcon />
              </span>
            </div>
          </div>

          <div class="d-flex align-items-center flex-grow-1 flex-lg-grow-0">
            <a href="/mainlineipo.html" class="d-lg-none">
              <img
                alt="Logo"
                src="assets/media/logos/default-small.svg"
                class="h-30px"
              />
            </a>
          </div>
          <div
            class="d-flex align-items-stretch justify-content-end flex-lg-grow-1"
            id="kt_app_header_wrapper"
          >
            <div class="app-navbar flex-shrink-0">
              <div class="app-navbar-item ms-1 ms-md-3">
                <a
                  href="#"
                  class="btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary w-30px h-30px w-md-40px h-md-40px"
                  data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                  data-kt-menu-attach="parent"
                  data-kt-menu-placement="bottom-end"
                >
                  <span class="svg-icon theme-light-show svg-icon-2">
                    <ThemeLightShowIcon />
                  </span>
                  <span class="svg-icon theme-dark-show svg-icon-2">
                    <ThemeDarkShowIcon />
                  </span>
                </a>
                <div
                  class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-title-gray-700 menu-icon-muted menu-active-bg menu-state-color fw-semibold py-4 fs-base w-150px"
                  data-kt-menu="true"
                  data-kt-element="theme-mode-menu"
                >
                  <div class="menu-item px-3 my-0">
                    <a
                      href="#"
                      class="menu-link px-3 py-2"
                      data-kt-element="mode"
                      data-kt-value="light"
                    >
                      <span class="menu-icon" data-kt-element="icon">
                        <span class="svg-icon svg-icon-3">
                          <LightModeIcon />
                        </span>
                      </span>
                      <span class="menu-title">Light</span>
                    </a>
                  </div>
                  <div class="menu-item px-3 my-0">
                    <a
                      href="#"
                      class="menu-link px-3 py-2"
                      data-kt-element="mode"
                      data-kt-value="dark"
                    >
                      <span class="menu-icon" data-kt-element="icon">
                        <span class="svg-icon svg-icon-3">
                          <DarkModeIcon />
                        </span>
                      </span>
                      <span class="menu-title">Dark</span>
                    </a>
                  </div>
                  <div class="menu-item px-3 my-0">
                    <a
                      href="#"
                      class="menu-link px-3 py-2"
                      data-kt-element="mode"
                      data-kt-value="system"
                    >
                      <span class="menu-icon" data-kt-element="icon">
                        <span class="svg-icon svg-icon-3">
                          <SystemDefaultModeIcon />
                        </span>
                      </span>
                      <span class="menu-title">System</span>
                    </a>
                  </div>
                </div>
              </div>
              <div
                class="app-navbar-item ms-1 ms-md-3"
                id="kt_header_user_menu_toggle"
              >
                <div
                  class="cursor-pointer symbol symbol-30px symbol-md-40px"
                  data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
                  data-kt-menu-attach="parent"
                  data-kt-menu-placement="bottom-end"
                >
                  <img src={UserImage} alt="user" />
                </div>
                <div
                  class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg menu-state-color fw-semibold py-4 fs-6 w-275px"
                  data-kt-menu="true"
                >
                  <div class="menu-item px-3">
                    <div class="menu-content d-flex align-items-center px-3">
                      <div class="symbol symbol-50px me-5">
                        <img alt="Logo" src={UserImage} />
                      </div>
                      <div class="d-flex flex-column">
                        <div class="fw-bold d-flex align-items-center fs-5">
                          Max Smith
                          <span class="badge badge-light-success fw-bold fs-8 px-2 py-1 ms-2">
                            Pro
                          </span>
                        </div>
                        <a
                          href="#"
                          class="fw-semibold text-muted text-hover-primary fs-7"
                        >
                          max@kt.com
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="separator my-2"></div>
                  <div class="menu-item px-5 my-1">
                    <a
                      href="../../demo1/dist/account/settings.html"
                      class="menu-link px-5"
                    >
                      Account Settings
                    </a>
                  </div>
                  <div class="menu-item px-5">
                    <a
                      href="../../demo1/dist/authentication/layouts/corporate/sign-in.html"
                      class="menu-link px-5"
                    >
                      Sign Out
                    </a>
                  </div>
                </div>
              </div>
              <div
                class="app-navbar-item d-lg-none ms-2 me-n3"
                title="Show header menu"
              >
                <div
                  class="btn btn-icon btn-active-color-primary w-30px h-30px w-md-35px h-md-35px"
                  id="kt_app_header_menu_toggle"
                >
                  <span class="svg-icon svg-icon-2 svg-icon-md-1">
                    <HeaderMenuToggleIcon />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
