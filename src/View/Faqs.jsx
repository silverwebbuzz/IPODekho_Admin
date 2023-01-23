import React from "react";

const Faqs = () => {
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
                FAQs
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
                {/* <!--begin::FAQ Repeater--> */}
                <div id="kt_faq_repeater">
                  {/* <!--begin::Form group--> */}
                  <div class="form-group">
                    <div data-repeater-list="kt_faq_repeater">
                      <div data-repeater-item>
                        <div class="form-group row mb-5">
                          <div class="col-md-4">
                            <label class="form-label">FAQ Question</label>
                            <input type="text" class="form-control" />
                          </div>
                          <div class="col-md-6">
                            <label class="form-label">FAQ Answer</label>
                            <textarea class="form-control"></textarea>
                          </div>
                          <div class="col-md-2">
                            <a
                              href="javascript:;"
                              data-repeater-delete
                              class="btn btn-sm btn-light-danger"
                            >
                              <i class="la la-trash-o"></i>Delete
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!--end::Form group--> */}

                  {/* <!--begin::Form group--> */}
                  <div class="form-group mt-5">
                    <a
                      href="javascript:;"
                      data-repeater-create
                      class="btn btn-light-primary"
                    >
                      <i class="la la-plus"></i>Add
                    </a>
                  </div>
                  {/* <!--end::Form group--> */}
                </div>
                {/* <!--end::FAQ Repeater--> */}
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
  );
};

export default Faqs;
