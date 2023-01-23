import React from "react";

const ContactUs = () => {
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
                Contact Us Entries
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
                      <th class="min-w-125px">Name</th>
                      <th class="min-w-125px">Email</th>
                      <th class="min-w-125px">Phone</th>
                      <th class="min-w-125px">Subject</th>
                      <th class="min-w-125px">Date</th>
                      <th class="min-w-125px">Message</th>
                    </tr>
                    {/* <!--end::Table row--> */}
                  </thead>
                  {/* <!--end::Table head--> */}
                  {/* <!--begin::Table body--> */}
                  <tbody class="fw-semibold text-gray-600">
                    <tr>
                      <td>Emma Smith</td>
                      <td>smith@kpmg.com</td>
                      <td>+911324567890</td>
                      <td>Testing</td>
                      <td>May 05 2022, 6:43 am</td>
                      <td class="mw-350px">
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is
                        that it has a more-or-less normal distribution of
                        letters, as opposed to using 'Content here, content
                        here', making it look like readable English.
                      </td>
                    </tr>
                    <tr>
                      <td>Emma Smith</td>
                      <td>smith@kpmg.com</td>
                      <td>+911324567890</td>
                      <td>Testing</td>
                      <td>May 05 2022, 6:43 am</td>
                      <td class="mw-350px">
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is
                        that it has a more-or-less normal distribution of
                        letters, as opposed to using 'Content here, content
                        here', making it look like readable English.
                      </td>
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
    //   <!--end:::Main-->
  );
};

export default ContactUs;
