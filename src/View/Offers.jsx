import React from "react";
import AppContentLayout from "../Components/AppContentLayout";
import CommonAddIcon from "../assets/media/Icons/CommonAddIcon";
import CommonSearchIcon from "../assets/media/Icons/CommonSearchIcon";
import PageHeading from "../Components/PageHeading";

const Offers = () => {
  return (
    <>
      <PageHeading title={"Offers"} />
      <AppContentLayout>
        <div className="card-header border-0 pt-6">
          <div className="card-title">
            <div className="d-flex align-items-center position-relative my-1">
              <span className="svg-icon svg-icon-1 position-absolute ms-6">
                <CommonSearchIcon />
              </span>

              <input
                type="text"
                data-kt-news-table-filter="search"
                className="form-control form-control-solid w-250px ps-14"
                placeholder="Search Offers"
              />
            </div>
          </div>

          <div className="card-toolbar">
            <div
              className="d-flex justify-content-end"
              data-kt-user-table-toolbar="base"
            >
              <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#kt_modal_add_offer"
              >
                <span className="svg-icon svg-icon-2">
                  <CommonAddIcon />
                </span>
              </button>
            </div>

            <div
              className="modal fade"
              id="kt_modal_add_offer"
              tabindex="-1"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered mw-650px">
                <div className="modal-content">
                  <div className="modal-header" id="kt_modal_add_offer_header">
                    <h2 className="fw-bold">Add Offer</h2>

                    <div
                      className="btn btn-icon btn-sm btn-active-icon-primary"
                      data-bs-dismiss="modal"
                    >
                      <span className="svg-icon svg-icon-1">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            opacity="0.5"
                            x="6"
                            y="17.3137"
                            width="16"
                            height="2"
                            rx="1"
                            transform="rotate(-45 6 17.3137)"
                            fill="currentColor"
                          />
                          <rect
                            x="7.41422"
                            y="6"
                            width="16"
                            height="2"
                            rx="1"
                            transform="rotate(45 7.41422 6)"
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>

                  <div className="modal-body scroll-y mx-5 mx-xl-15 my-7">
                    <form
                      id="kt_modal_add_offer_form"
                      className="form"
                      action="#"
                    >
                      <div
                        className="d-flex flex-column scroll-y me-n7 pe-7"
                        id="kt_modal_add_offer_scroll"
                        data-kt-scroll="true"
                        data-kt-scroll-activate="{default: false, lg: true}"
                        data-kt-scroll-max-height="auto"
                        data-kt-scroll-dependencies="#kt_modal_add_offer_header"
                        data-kt-scroll-wrappers="#kt_modal_add_offer_scroll"
                        data-kt-scroll-offset="300px"
                      >
                        <div className="fv-row mb-7">
                          <label className="d-block fw-semibold fs-6 mb-5">
                            Image
                          </label>

                          {/* <style>
                                             .image-input-placeholder {
                                               background-image: url("assets/media/news/blank-image.svg");
                                             }
                                             [data-theme="dark"]
                                               .image-input-placeholder {
                                               background-image: url("assets/media/news/blank-image-dark.svg");
                                             }
                                           </style> */}

                          <div
                            className="image-input image-input-outline image-input-placeholder"
                            data-kt-image-input="true"
                          >
                            <div className="image-input-wrapper image-input-placeholder w-125px h-125px"></div>

                            <label
                              className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                              data-kt-image-input-action="change"
                              data-bs-toggle="tooltip"
                              title="Change avatar"
                            >
                              <i className="bi bi-pencil-fill fs-7"></i>

                              <input
                                type="file"
                                name="avatar"
                                accept=".png, .jpg, .jpeg"
                              />
                              <input type="hidden" name="avatar_remove" />
                            </label>

                            <span
                              className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                              data-kt-image-input-action="cancel"
                              data-bs-toggle="tooltip"
                              title="Cancel avatar"
                            >
                              <i className="bi bi-x fs-2"></i>
                            </span>

                            <span
                              className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                              data-kt-image-input-action="remove"
                              data-bs-toggle="tooltip"
                              title="Remove avatar"
                            >
                              <i className="bi bi-x fs-2"></i>
                            </span>
                          </div>

                          <div className="form-text">
                            Allowed file types: png, jpg, jpeg.
                          </div>
                        </div>

                        <div className="fv-row mb-7">
                          <label className="fw-semibold fs-6 mb-2">
                            Offer Title
                          </label>

                          <input
                            type="text"
                            className="form-control form-control-solid mb-3 mb-lg-0"
                            placeholder="Offer Title"
                          />
                        </div>

                        <div className="fv-row mb-7">
                          <label className="fw-semibold fs-6 mb-2">
                            Offer Description
                          </label>

                          <textarea className="form-control form-control-solid mb-3 mb-lg-0"></textarea>
                        </div>

                        <div className="fv-row mb-7">
                          <label className="fw-semibold fs-6 mb-2">
                            Offer Sequence
                          </label>

                          <input
                            type="text"
                            className="form-control form-control-solid mb-3 mb-lg-0"
                            placeholder="Offer Sequence"
                          />
                        </div>

                        <div className="fv-row mb-7">
                          <label className="fw-semibold fs-6 mb-2">
                            Status
                          </label>

                          <div className="d-flex">
                            <div className="form-check form-check-custom form-check-success form-check-solid me-10">
                              <input
                                className="form-check-input"
                                type="radio"
                                value="Positive"
                                name="offer_status"
                                id="offer_active"
                              />
                              <label
                                className="form-check-label"
                                for="offer_active"
                              >
                                Active
                              </label>
                            </div>

                            <div className="form-check form-check-custom form-check-danger form-check-solid">
                              <input
                                className="form-check-input"
                                type="radio"
                                value="Negative"
                                name="offer_status"
                                checked=""
                                id="offer_deactive"
                              />
                              <label
                                className="form-check-label"
                                for="offer_deactive"
                              >
                                Deactive
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="text-center pt-15">
                        <button
                          type="reset"
                          className="btn btn-light me-3"
                          data-bs-dismiss="modal"
                        >
                          Discard
                        </button>
                        <button type="submit" className="btn btn-primary">
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card-body py-4">
          <table
            className="table align-middle table-row-dashed fs-6 gy-5"
            id="offer_table"
          >
            <thead>
              <tr className="text-start text-muted fw-bold fs-7 text-uppercase gs-0">
                <th className="min-w-125px">Image</th>
                <th className="min-w-125px">Offer Title</th>
                <th className="min-w-125px mw-350px">Offer Description</th>
                <th className="min-w-125px">Offer Sequence</th>
                <th className="min-w-125px">Status</th>
                <th className="text-end min-w-100px">Actions</th>
              </tr>
            </thead>

            <tbody className="text-gray-600 fw-semibold">
              <tr>
                <td>
                  <img
                    src="assets/media/offer/offer1.png"
                    alt="offer"
                    className="mh-75px"
                  />
                </td>
                <td>Zerodha</td>
                <td className="mw-350px">
                  Open a trading and Demat account online and start investing
                  for free
                </td>
                <td>1</td>
                <td>
                  <span className="badge badge-light-primary">Active</span>
                </td>
                <td className="text-end">
                  <button
                    type="button"
                    className="btn btn-light btn-active-light-primary btn-sm"
                    data-bs-toggle="modal"
                    data-bs-target=".kt_modal_edit_offer"
                  >
                    <span className="svg-icon svg-icon-muted svg-icon-1hx">
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
              </tr>

              <tr>
                <td>
                  <img
                    src="assets/media/offer/offer2.png"
                    alt="offer"
                    className="mh-75px"
                  />
                </td>
                <td>Paytm Money</td>
                <td className="mw-350px">
                  investing is Simple, Transparent & for everyone.
                </td>
                <td>2</td>
                <td>
                  <span className="badge badge-light-primary">Active</span>
                </td>
                <td className="text-end">
                  <button
                    type="button"
                    className="btn btn-light btn-active-light-primary btn-sm"
                    data-bs-toggle="modal"
                    data-bs-target=".kt_modal_edit_offer"
                  >
                    <span className="svg-icon svg-icon-muted svg-icon-1hx">
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
              </tr>

              <tr>
                <td>
                  <img
                    src="assets/media/offer/offer2.png"
                    alt="offer"
                    className="mh-75px"
                  />
                </td>
                <td>Paytm Money</td>
                <td className="mw-350px">
                  investing is Simple, Transparent & for everyone.
                </td>
                <td>3</td>
                <td>
                  <span className="badge badge-light-danger">Deactive</span>
                </td>
                <td className="text-end">
                  <button
                    type="button"
                    className="btn btn-light btn-active-light-primary btn-sm"
                    data-bs-toggle="modal"
                    data-bs-target=".kt_modal_edit_offer"
                  >
                    <span className="svg-icon svg-icon-muted svg-icon-1hx">
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
              </tr>
            </tbody>
          </table>
        </div>
      </AppContentLayout>
    </>
  );
};

export default Offers;
