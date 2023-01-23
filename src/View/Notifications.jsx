import React from "react";

const Notifications = () => {
  return (
    //   {/* // <!--begin::Main--> */}
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
                Notification Entries
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
                {/* <!--begin::Table--> */}
                <table
                  class="table table-striped table-row-bordered gy-5 gs-7 border rounded"
                  id="contact_entries_table"
                >
                  {/* <!--begin::Table head--> */}
                  <thead>
                    {/* <!--begin::Table row--> */}
                    <tr class="text-start text-gray-400 fw-bold fs-7 text-uppercase gs-0">
                      <th class="min-w-125px">Sr No.</th>
                      <th class="min-w-125px">Title</th>
                      <th class="min-w-125px mw-350px">Description</th>
                      <th class="min-w-125px">Redirect</th>
                      <th class="min-w-125px">Date</th>
                    </tr>
                    {/* <!--end::Table row--> */}
                  </thead>
                  {/* <!--end::Table head--> */}
                  {/* <!--begin::Table body--> */}
                  <tbody class="fw-semibold text-gray-600">
                    <tr>
                      <td>01</td>
                      <td>🔔 Elin IPO Allotment Out</td>
                      <td class="mw-350px">
                        It is a long established fact 📊 that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.
                      </td>
                      <td>App screen</td>
                      <td>May 05 2022, 6:45 am</td>
                    </tr>
                    <tr>
                      <td>02</td>
                      <td>Elin IPO</td>
                      <td class="mw-350px">
                        It is a long established fact that a reader will be
                        distracted by the 📊 readable content of a page when
                        looking at its layout.
                      </td>
                      <td>App screen</td>
                      <td>May 05 2022, 6:43 am</td>
                    </tr>
                  </tbody>
                  {/* <!--end::Table body--> */}
                </table>
                {/* <!--end::Table--> */}
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
  );
};

export default Notifications;
