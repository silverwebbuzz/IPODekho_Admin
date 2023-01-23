import React from "react";
import { useState } from "react";
import ReactQuill from "react-quill";
import { modules } from "../Constants/commonConstants";

const TermsAndConditions = () => {
  const [companyDescription, setCompanyDescription] =
    useState("<h1>HEllO</h1>");
  return (
    // <!--begin::Main-->
    <div class="app-main flex-column flex-row-fluid" id="kt_app_main">
      {/* <!--begin::Content wrapper--> */}
      <div class="d-flex flex-column flex-column-fluid">
        {/* <!--begin::Toolbar--> */}
        <div id="kt_app_toolbar" class="app-toolbar py-3 py-lg-6">
          {/* <!--begin::Toolbar container--> */}
          <div
            id="kt_app_toolbar_container"
            class="app-container container-xxl d-flex flex-stack"
          >
            {/* <!--begin::Page title--> */}
            <div class="page-title d-flex flex-column justify-content-center flex-wrap me-3">
              {/* <!--begin::Title--> */}
              <h1 class="page-heading d-flex text-dark fw-bold fs-3 flex-column justify-content-center my-0">
                Terms & Conditions
              </h1>
              {/* <!--end::Title--> */}
            </div>
            {/* <!--end::Page title--> */}
          </div>
          {/* <!--end::Toolbar container--> */}
        </div>
        {/* <!--end::Toolbar--> */}
        {/* <!--begin::Content--> */}
        <div id="kt_app_content" class="app-content flex-column-fluid">
          {/* <!--begin::Content container--> */}
          <div
            id="kt_app_content_container"
            class="app-container container-xxl"
          >
            {/* <!--begin::Card--> */}
            <div class="card">
              {/* <!--begin::Card body--> */}
              <div class="card-body">
                {/* <!--begin::Input group--> */}
                <div>
                  <div
                    id="terms_conditions_content"
                    name="terms_conditions_content"
                    class="min-h-500px h-500px mb-2"
                  >
                    <ReactQuill
                      className="min-h-200px h-200px "
                      modules={modules}
                      onChange={setCompanyDescription}
                      value={companyDescription}
                    />
                  </div>
                </div>
                {/* <!--end::Input group--> */}
                <div class="d-flex justify-content-end mt-15">
                  {/* <!--begin::Button--> */}
                  <a class="btn btn-primary">Save Changes</a>
                  {/* <!--end::Button--> */}
                </div>
              </div>
              {/* <!--end::Card body--> */}
            </div>
            {/* <!--end::Card--> */}
          </div>
          {/* <!--end::Content container--> */}
        </div>
        {/* <!--end::Content--> */}
      </div>
      {/* <!--end::Content wrapper--> */}
    </div>
    //   <!--end:::Main-->
  );
};

export default TermsAndConditions;
