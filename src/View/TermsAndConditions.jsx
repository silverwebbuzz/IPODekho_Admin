import React from "react";
import { useState } from "react";
import ReactQuill from "react-quill";
import { modules } from "../Constants/commonConstants";

const TermsAndConditions = () => {
  const [companyDescription, setCompanyDescription] =
    useState("<h1>HEllO</h1>");
  return (
    <div class="app-main flex-column flex-row-fluid" id="kt_app_main">
      <div class="d-flex flex-column flex-column-fluid">
        <div id="kt_app_toolbar" class="app-toolbar py-3 py-lg-6">
          <div
            id="kt_app_toolbar_container"
            class="app-container container-xxl d-flex flex-stack"
          >
            <div class="page-title d-flex flex-column justify-content-center flex-wrap me-3">
              <h1 class="page-heading d-flex text-dark fw-bold fs-3 flex-column justify-content-center my-0">
                Terms & Conditions
              </h1>
            </div>
          </div>
        </div>

        <div id="kt_app_content" class="app-content flex-column-fluid">
          <div
            id="kt_app_content_container"
            class="app-container container-xxl"
          >
            <div class="card">
              <div class="card-body">
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
                <div class="d-flex justify-content-end mt-15">
                  <a class="btn btn-primary">Save Changes</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
