import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CommonMultiplyIcon from "../assets/media/Icons/CommonMultiplyIcon";
import blankImage from "../assets/media/offer/blank-image.svg";
import "../assets/css/FilePreviewer.css";
import {
  createOffer,
  updateOffer,
  updateOfferImage,
} from "../redux/slice/offersSlice";

import { setModalIsOpen, setModalType } from "../redux/slice/modalSlice";

const OffersModal = () => {
  const [clearImage, setClearImage] = useState(false);
  const formData = new FormData();
  const formDataImg = new FormData();
  const dispatch = useDispatch();
  const { offerData } = useSelector((state) => state.offersReducer);
  const { modalType } = useSelector((state) => state.modalReducer);

  console.log(modalType);
  console.log("offerData", offerData);
  const imageMimeType = /image\/(png|jpg|jpeg)/i;
  const [file, setFile] = useState(null);
  const [fileDataURL, setFileDataURL] = useState(
    offerData?.file && modalType === "editOffer" ? offerData?.file : null
  );

  const changeHandler = (e) => {
    const file = e.target.files[0];
    console.log(file);
    if (!file.type.match(imageMimeType)) {
      alert("Image mime type is not valid");
      return;
    }
    setFile(file);
  };

  useEffect(() => {
    let fileReader,
      isCancel = false;

    if (file) {
      fileReader = new FileReader();
      fileReader.onload = (e) => {
        const { result } = e.target;
        if (result && !isCancel) {
          setFileDataURL(result);
        }
      };
      fileReader.readAsDataURL(file);
      setClearImage(true);
    }
    return () => {
      isCancel = true;
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort();
      }
    };
  }, [file]);

  const handleRemoveImage = () => {
    setFile("");
    setFileDataURL("");
    setClearImage(false);
  };

  const handleSubmit = (values) => {
    formData.append("offerTitle", values.offerTitle);
    formData.append("offerDescription", values.offerDescription);
    formData.append("offerSequence", values.offerSequence);
    formData.append("offerStatus", values.offerStatus);
    formData.append("file", file);

    if (modalType === "editOffer") {
      const payload = {
        id: offerData?.id,
        offerTitle: values?.offerTitle,
        offerDescription: values?.offerDescription,
        offerSequence: values?.offerSequence,
        offerStatus: values?.offerStatus,
      };
      formDataImg.append("file", file);
      let payloadImage = {
        payload: formDataImg,
        payloadId: { id: offerData?.id },
      };
      dispatch(updateOfferImage({ payloadImage }));
      dispatch(updateOffer({ payload }));
    } else {
      let payload = formData;
      dispatch(createOffer({ payload }));
    }
    dispatch(setModalIsOpen(false));
    dispatch(setModalType(""));
  };
  return (
    <div
      className="fade show"
      style={{ display: "block", paddingLeft: "0px" }}
      tabIndex="-1"
      aria-modal="true"
      role="dialog"
    >
      <div className="modal-dialog modal-dialog-centered mw-650px">
        <div className="modal-content">
          <div className="modal-header" id="kt_modal_add_offer_header">
            <h2 className="fw-bold">Add Offer</h2>

            <div
              onClick={() => {
                dispatch(setModalIsOpen(false));
                dispatch(setModalType(""));
              }}
              className="btn btn-icon btn-sm btn-active-icon-primary"
              data-bs-dismiss="modal"
            >
              <CommonMultiplyIcon />
            </div>
          </div>

          <div className="modal-body scroll-y mx-5 mx-xl-15 my-7">
            <Formik
              enableReinitialize
              initialValues={
                modalType === "editOffer"
                  ? {
                      offerTitle: offerData?.offerTitle,
                      offerDescription: offerData?.offerDescription,
                      offerSequence: offerData?.offerSequence,
                      offerStatus: offerData?.offerStatus,
                      file: offerData?.file,
                    }
                  : {
                      offerTitle: "",
                      offerDescription: "",
                      offerSequence: "",
                      offerStatus: "",
                      file: "",
                    }
              }
              onSubmit={(values) => handleSubmit(values)}
            >
              {({ values }) => (
                <Form>
                  <div id="kt_modal_add_offer_form" className="form">
                    <div
                      className="d-flex flex-column scroll-y"
                      id="kt_modal_add_offer_scroll"
                      data-kt-scroll="true"
                      data-kt-scroll-activate="{default: false, lg: true}"
                      data-kt-scroll-max-height="auto"
                      data-kt-scroll-dependencies="#kt_modal_add_offer_header"
                      data-kt-scroll-wrappers="#kt_modal_add_offer_scroll"
                      data-kt-scroll-offset="300px"
                      style={{ maxHeight: "494px" }}
                    >
                      <div className="fv-row mb-7">
                        <label className="d-block fw-semibold fs-6 mb-5">
                          Image
                        </label>

                        <div
                          className="image-input image-input-outline image-input-placeholder"
                          data-kt-image-input="true"
                        >
                          <div className="file_preview_wrapper w-125px h-125px btn-container m-auto position-relative">
                            <div>
                              <label
                                htmlFor="image"
                                className="btn position-absolute edit_btn btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                              >
                                <i className="bi bi-pencil-fill fs-7" />
                              </label>
                              <input
                                name="file"
                                type="file"
                                id="image"
                                onChange={changeHandler}
                                hidden
                                accept=".png, .jpg, .jpeg"
                              />
                            </div>

                            <div className="preview w-125px h-125px">
                              <img
                                className="w-125px h-125px"
                                src={fileDataURL ? fileDataURL : blankImage}
                                alt="preview"
                              />
                            </div>
                            {fileDataURL && (
                              <div
                                onClick={handleRemoveImage}
                                className="btn btn_delete btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                              >
                                <i className="bi bi-x fs-2"></i>
                              </div>
                            )}
                          </div>
                        </div>

                        <div
                          className="form-text"
                          style={{ marginTop: "3rem" }}
                        >
                          Allowed file types: png, jpg, jpeg.
                        </div>
                      </div>

                      <div className="fv-row mb-7">
                        <label className="fw-semibold fs-6 mb-2">
                          Offer Title
                        </label>

                        <Field
                          type="text"
                          name="offerTitle"
                          className="form-control form-control-solid mb-3 mb-lg-0"
                          placeholder="Offer Title"
                        />
                      </div>

                      <div className="fv-row mb-7">
                        <label className="fw-semibold fs-6 mb-2">
                          Offer Description
                        </label>

                        <Field
                          name="offerDescription"
                          as="textarea"
                          className="form-control form-control-solid mb-3 mb-lg-0"
                        />
                      </div>

                      <div className="fv-row mb-7">
                        <label className="fw-semibold fs-6 mb-2">
                          Offer Sequence
                        </label>

                        <Field
                          name="offerSequence"
                          type="number"
                          className="form-control form-control-solid mb-3 mb-lg-0"
                          placeholder="Offer Sequence"
                        />
                      </div>

                      <div className="fv-row mb-7">
                        <label className="fw-semibold fs-6 mb-2">Status</label>

                        <div className="d-flex">
                          <div className="form-check form-check-custom form-check-success form-check-solid me-10">
                            <label className="form-check-label">
                              <Field
                                className="form-check-input"
                                type="radio"
                                value="Active"
                                name="offerStatus"
                              />
                              Active
                            </label>
                          </div>

                          <div className="form-check form-check-custom form-check-danger form-check-solid">
                            <label className="form-check-label">
                              <Field
                                className="form-check-input"
                                type="radio"
                                value="Deactive"
                                name="offerStatus"
                              />
                              Deactive
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="text-center pt-15">
                      <button
                        onClick={() => {
                          dispatch(setModalIsOpen(false));
                          dispatch(setModalType(""));
                        }}
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
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OffersModal;
