import React from "react";

const Users = () => {
  return (
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
                Users
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
              {/* <!--begin::Card header--> */}
              <div class="card-header border-0 pt-6">
                {/* <!--begin::Card title--> */}
                <div class="card-title">
                  {/* <!--begin::Search--> */}
                  <div class="d-flex align-items-center position-relative my-1">
                    {/* <!--begin::Svg Icon | path: icons/duotune/general/gen021.svg--> */}
                    <span class="svg-icon svg-icon-1 position-absolute ms-6">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          opacity="0.5"
                          x="17.0365"
                          y="15.1223"
                          width="8.15546"
                          height="2"
                          rx="1"
                          transform="rotate(45 17.0365 15.1223)"
                          fill="currentColor"
                        />
                        <path
                          d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                    {/* <!--end::Svg Icon--> */}
                    <input
                      type="text"
                      data-kt-user-table-filter="search"
                      class="form-control form-control-solid w-250px ps-14"
                      placeholder="Search user"
                    />
                  </div>
                  {/* <!--end::Search--> */}
                </div>
                {/* <!--begin::Card title--> */}
              </div>
              {/* <!--end::Card header--> */}
              {/* <!--begin::Card body--> */}
              <div class="card-body py-4">
                {/* <!--begin::Table--> */}
                <table
                  class="table align-middle table-row-dashed fs-6 gy-5"
                  id="kt_table_users"
                >
                  {/* <!--begin::Table head--> */}
                  <thead>
                    {/* <!--begin::Table row--> */}
                    <tr class="text-start text-muted fw-bold fs-7 text-uppercase gs-0">
                      <th class="min-w-125px">User</th>
                      <th class="min-w-125px">Phone</th>
                      <th class="min-w-125px">Joined Date</th>
                      <th class="text-end min-w-100px">Actions</th>
                    </tr>
                    {/* <!--end::Table row--> */}
                  </thead>
                  {/* <!--end::Table head--> */}
                  {/* <!--begin::Table body--> */}
                  <tbody class="text-gray-600 fw-semibold">
                    {/* <!--begin::Table row--> */}
                    <tr>
                      <td class="d-flex align-items-center">
                        <div class="symbol symbol-circle symbol-50px overflow-hidden me-3">
                          <div class="symbol-label">
                            <img
                              src="assets/media/user/300-6.jpg"
                              alt="Emma Smith"
                              class="w-100"
                            />
                          </div>
                        </div>
                        <div class="d-flex flex-column">
                          <span class="text-gray-800 mb-1">Emma Smith</span>
                          <span>smith@kpmg.com</span>
                        </div>
                      </td>
                      <td>+91 1234567890</td>
                      <td>05 May 2022, 6:43 am</td>
                      <td class="text-end">
                        <button
                          type="button"
                          class="btn btn-light btn-light-primary btn-sm"
                          data-bs-toggle="modal"
                          data-bs-target=".kt_modal_edit_user"
                        >
                          <span class="svg-icon svg-icon-muted svg-icon-size-3">
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                opacity="0.3"
                                d="M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z"
                                fill="currentColor"
                              />
                              <path
                                d="M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z"
                                fill="currentColor"
                              />
                            </svg>
                          </span>
                          Edit
                        </button>
                      </td>
                      {/* <!--end::Action=--> */}
                    </tr>
                    {/* <!--end::Table row--> */}
                    {/* <!--begin::Table row--> */}
                    <tr>
                      <td class="d-flex align-items-center">
                        <div class="symbol symbol-circle symbol-50px overflow-hidden me-3">
                          <div class="symbol-label fs-3 bg-light-danger text-danger">
                            M
                          </div>
                        </div>
                        <div class="d-flex flex-column">
                          <span class="text-gray-800 mb-1">Melody Macy</span>
                          <span>melody@altbox.com</span>
                        </div>
                      </td>
                      <td>+91 1234567890</td>
                      <td>05 May 2022, 6:43 am</td>
                      <td class="text-end">
                        <button
                          type="button"
                          class="btn btn-light btn-light-primary btn-sm"
                          data-bs-toggle="modal"
                          data-bs-target=".kt_modal_edit_user"
                        >
                          <span class="svg-icon svg-icon-muted svg-icon-size-3">
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                opacity="0.3"
                                d="M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z"
                                fill="currentColor"
                              />
                              <path
                                d="M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z"
                                fill="currentColor"
                              />
                            </svg>
                          </span>
                          Edit
                        </button>
                      </td>
                      {/* <!--end::Action=--> */}
                    </tr>
                    {/* <!--end::Table row--> */}
                    {/* <!--begin::Table row--> */}
                    <tr>
                      <td class="d-flex align-items-center">
                        <div class="symbol symbol-circle symbol-50px overflow-hidden me-3">
                          <div class="symbol-label">
                            <img
                              src="assets/media/user/300-1.jpg"
                              alt="Emma Smith"
                              class="w-100"
                            />
                          </div>
                        </div>
                        <div class="d-flex flex-column">
                          <span class="text-gray-800 mb-1">Max Smith</span>
                          <span>max@kt.com</span>
                        </div>
                      </td>
                      <td>+91 1234567890</td>
                      <td>05 May 2022, 6:43 am</td>
                      <td class="text-end">
                        <button
                          type="button"
                          class="btn btn-light btn-light-primary btn-sm"
                          data-bs-toggle="modal"
                          data-bs-target=".kt_modal_edit_user"
                        >
                          <span class="svg-icon svg-icon-muted svg-icon-size-3">
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                opacity="0.3"
                                d="M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z"
                                fill="currentColor"
                              />
                              <path
                                d="M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z"
                                fill="currentColor"
                              />
                            </svg>
                          </span>
                          Edit
                        </button>
                      </td>
                      {/* <!--end::Action=--> */}
                    </tr>
                    {/* <!--end::Table row--> */}
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

export default Users;
