import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CommonMultiplyIcon from "../assets/media/Icons/CommonMultiplyIcon";
import blankImage from "../assets/media/offer/blank-image.svg";
import { setModalIsOpen } from "../redux/slice/modalSlice";
import { getUserById, updateUsers } from "../redux/slice/usersSlice";
import * as Yup from "yup";
import "../assets/css/FilePreviewer.css";
import "yup-phone";
const UserModal = ({ userID, setShowModal, showModal }) => {
  const [imageMsg, setImageMsg] = useState("");
  const formData = new FormData();
  const dispatch = useDispatch();
  const { getDataByIdData } = useSelector((state) => state.userReducer);

  const imageMimeType = /image\/(png|jpg|jpeg)/i;
  const [file, setFile] = useState(null);
  const [fileDataURL, setFileDataURL] = useState(blankImage);

  const changeHandler = (e) => {
    const MAX_FILE_SIZE = 4096; // 2MB

    const file = e.target.files[0];
    const fileSizeKiloBytes = file.size / 1024;

    if (fileSizeKiloBytes > MAX_FILE_SIZE) {
      setFile("");
      setImageMsg("File size is greater than maximum limit*");
    } else if (!file.type.match(imageMimeType)) {
      setFile("");
      setImageMsg("Image type is not valid*");
    } else {
      setImageMsg("");
      setFile(file);
    }
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
  };
  const handleSubmit = (values) => {
    formData.append("displayName", values?.displayName);
    formData.append("email", values?.email);
    formData.append("phoneNumber", "+" + values?.phoneNumber);
    formData.append("photoURL", file);
    let payload = {
      payload: formData,
      payloadId: { id: getDataByIdData?.uid },
    };
    dispatch(updateUsers({ payload }));
    // dispatch(setModalIsOpen(false));
    setShowModal({
      ...showModal,
      showClass: "",
      displayClass: "",
      modalBackdrop: "",
    });
  };
  useEffect(() => {
    let payload = {
      id: userID,
    };
    dispatch(getUserById({ payload }));
  }, [dispatch, fileDataURL]);

  useEffect(() => {
    setFileDataURL(
      getDataByIdData?.photoURL ? getDataByIdData?.photoURL : blankImage
    );
  }, [getDataByIdData?.photoURL]);

  return (
    <div className="modal-dialog modal-dialog-centered mw-650px">
      <div className="modal-content">
        <div className="modal-header" id="kt_modal_edit_user_header">
          <h2 className="fw-bold">Edit User</h2>

          <div
            className="btn btn-icon btn-sm btn-active-icon-primary"
            data-bs-dismiss="modal"
            onClick={() =>
              setShowModal({
                ...showModal,
                showClass: "",
                displayClass: "",
                modalBackdrop: "",
              })
            }
          >
            <CommonMultiplyIcon />
          </div>
        </div>

        <div className="modal-body scroll-y mx-5 mx-xl-15 my-7">
          <Formik
            enableReinitialize
            initialValues={{
              photoURL: fileDataURL,
              displayName: getDataByIdData?.displayName,
              email: getDataByIdData?.email,
              phoneNumber: getDataByIdData?.phoneNumber,
            }}
            onSubmit={(values) => handleSubmit(values)}
          >
            {({ values, touched, errors }) => (
              <Form>
                <div id="kt_modal_edit_user_form" className="form">
                  <div
                    class="d-flex flex-column scroll-y me-n7 pe-7"
                    id="kt_modal_edit_user_scroll"
                    data-kt-scroll="true"
                    data-kt-scroll-activate="{default: false, lg: true}"
                    data-kt-scroll-max-height="auto"
                    data-kt-scroll-dependencies="#kt_modal_edit_user_header"
                    data-kt-scroll-wrappers="#kt_modal_edit_user_scroll"
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
                      <div className="text-danger fs-5 mt-2">{imageMsg}</div>
                      <div className="form-text" style={{ marginTop: "3rem" }}>
                        Allowed file types: png, jpg, jpeg.
                      </div>
                    </div>

                    <div className="fv-row mb-7">
                      <label className="fw-semibold fs-6 mb-2">
                        first Name
                      </label>

                      <Field
                        type="text"
                        name="displayName"
                        className="form-control form-control-solid mb-3 mb-lg-0"
                        placeholder="first name"
                      />
                    </div>

                    <div className="fv-row mb-7">
                      <label className="fw-semibold fs-6 mb-2">Email</label>

                      <Field
                        name="email"
                        type="email"
                        className="form-control form-control-solid mb-3 mb-lg-0"
                        placeholder="email"
                      />
                    </div>

                    <div className="fv-row mb-7">
                      <label className="fw-semibold fs-6 mb-2">Phone</label>
                      <Field
                        name="phoneNumber"
                        type="tel"
                        className="form-control form-control-solid mb-3 mb-lg-0"
                        placeholder="phone"
                      />
                      {validationSchema.isValid(values.phoneNumber) === true ? (
                        <div>dfjihfdff0.</div>
                      ) : null}
                    </div>
                  </div>

                  <div className="text-center pt-15">
                    <button
                      onClick={() =>
                        setShowModal({
                          ...showModal,
                          showClass: "",
                          displayClass: "",
                          modalBackdrop: "",
                        })
                      }
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
  );
};

export default UserModal;
