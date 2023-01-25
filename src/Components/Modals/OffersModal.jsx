import { Field, Form, Formik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createOffer, updateOffer } from "../../redux/slice/offersSlice";
import FilePreviewer from "../FilePreview/FilePreviewer";

const OffersModal = ({ data }) => {
  console.log(data);
  const { modalIsOpen, modalType } = useSelector((state) => state.modalReducer);
  const dispatch = useDispatch();
  const handleSubmit = (values) => {
    const payload = {
      file: values.file,
      offerTitle: values.offerTitle,
      offerDescription: values.offerDescription,
      offerSequence: values.offerSequence,
      offerStatus: values.offerStatus,
    };
    if (modalType) {
      payload.id = data.id;
      dispatch(updateOffer({ payload }));
    } else {
      dispatch(createOffer({ payload }));
    }
  };

  return (
    <div
      className="modal fade show"
      id="kt_modal_add_offer"
      tabindex="-1"
      aria-modal="true"
      role="dialog"
      // className="modal fade"
      style={{ display: "block" }}
      // id="kt_modal_add_offer"
      // tabindex="-1"
      // aria-hidden="true"
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
            <Formik
              initialValues={
                modalType
                  ? {
                      file: data?.file,
                      offerTitle: data?.offerTitle,
                      offerDescription: data?.offerDescription,
                      offerSequence: data?.offerSequence,
                      offerStatus: data?.offerStatus,
                    }
                  : {
                      file: "",
                      offerTitle: "",
                      offerDescription: "",
                      offerSequence: "",
                      offerStatus: "",
                    }
              }
              onSubmit={(values) => handleSubmit(values)}
            >
              <Form id="kt_modal_add_offer_form" className="form" action="#">
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
                      <div
                        className="btn-container
                      w-125px
                      h-125px
                      m-auto
                      position-relative
                      file_preview_wrapper"
                        // className="image-input-wrapper image-input-placeholder w-125px h-125px"
                      >
                        <FilePreviewer offerModal="offerModal" />
                      </div>
                    </div>

                    <div className="form-text">
                      Allowed file types: png, jpg, jpeg.
                    </div>
                  </div>

                  <div className="fv-row mb-7">
                    <label className="fw-semibold fs-6 mb-2">Offer Title</label>

                    <Field
                      type="text"
                      className="form-control form-control-solid mb-3 mb-lg-0"
                      placeholder="Offer Title"
                      name="offerTitle"
                    />
                  </div>

                  <div className="fv-row mb-7">
                    <label className="fw-semibold fs-6 mb-2">
                      Offer Description
                    </label>

                    <Field
                      className="form-control form-control-solid mb-3 mb-lg-0"
                      as="textarea"
                      name="offerDescription"
                    />
                  </div>

                  <div className="fv-row mb-7">
                    <label className="fw-semibold fs-6 mb-2">
                      Offer Sequence
                    </label>

                    <Field
                      type="text"
                      className="form-control form-control-solid mb-3 mb-lg-0"
                      placeholder="Offer Sequence"
                      name="offerSequence"
                    />
                  </div>

                  <div className="fv-row mb-7">
                    <label className="fw-semibold fs-6 mb-2">Status</label>

                    <div className="d-flex">
                      <div className="form-check form-check-custom form-check-success form-check-solid me-10">
                        <Field
                          className="form-check-input"
                          type="radio"
                          value="Positive"
                          name="offerStatus"
                          id="offer_active"
                        />
                        <label className="form-check-label" for="offer_active">
                          Active
                        </label>
                      </div>

                      <div className="form-check form-check-custom form-check-danger form-check-solid">
                        <Field
                          className="form-check-input"
                          type="radio"
                          value="Negative"
                          name="offerStatus"
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
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OffersModal;
