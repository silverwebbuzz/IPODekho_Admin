import React from "react";
import AppContentLayout from "../Components/AppContentLayout";
import PageHeading from "../Components/PageHeading";
import "../assets/css/style.bundle.css";
import "../assets/plugins/global/plugins.bundle.css";

import { useState } from "react";
import ReactQuill from "react-quill";
import { modules } from "../Constants/commonConstants";
const PrivacyPolicy = () => {
  const [companyDescription, setCompanyDescription] =
    useState("<h1>HEllO</h1>");
  return (
    <>
      <PageHeading title={"Privacy Policy"} />
      <AppContentLayout>
        <div id="kt_app_content" className="app-content flex-column-fluid">
          <div
            id="kt_app_content_container"
            className="app-container container-xxl"
          >
            <div className="card">
              <div className="card-body">
                {/* <div className="min-h-500px h-500px mb-2"></div> */}
                <ReactQuill
                  className="min-h-200px h-200px "
                  modules={modules}
                  onChange={setCompanyDescription}
                  value={companyDescription}
                />
                <div className="d-flex justify-content-end mt-15">
                  <a className="btn btn-primary">Save Changes</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AppContentLayout>
    </>
  );
};

export default PrivacyPolicy;
