import { Form, Formik, Field } from "formik";
import moment, { invalid } from "moment/moment";
import React, { useState } from "react";
import { useEffect } from "react";
import DatePicker from "react-datepicker";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import AppContentLayout from "../Components/AppContentLayout";
import FilePreviewer from "../Components/FilePreviewer";
import PageHeading from "../Components/PageHeading";
import {
  createMainLineIpo,
  getIpoById,
  updateIPO,
  uploadIMG,
} from "../redux/slice/mainLineIpoSlices";
import "../assets/css/customStepperStyle.css";
import Tabs from "../Components/Tabs/Tabs";
import blankImage from "../assets/media/offer/blank-image.svg";
import SpinnerLoader from "../Components/SpinnerLoader";

const EditIpo = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [imageMsg, setImageMsg] = useState("");
  const ipoPrefillData = location.state;
  const [ipoDates, setIpoDates] = useState("");
  const formData = new FormData();
  const formDataImg = new FormData();
  const imageMimeType = /image\/(png|jpg|jpeg)/i;
  const [file, setFile] = useState(null);
  const [fileDataURL, setFileDataURL] = useState(ipoPrefillData?.data?.file);
  const { updatedIpo, getIPODataById, uploadImage, isLoading } = useSelector(
    (state) => state?.mainLineIpoSlice
  );

  const handleIpoStatus = (e) => {
    // setIpoStatus(e?.target?.value);
    let payload = {
      id: getIPODataById?.id,
      IPOStatus: e?.target?.value,
    };
    dispatch(updateIPO({ payload }));
  };

  const DatePickerField = ({ name, value, onChange }) => {
    return (
      <DatePicker
        selected={(value && new Date(value)) || null}
        className="form-control"
        dateFormat="MMM d, yyyy"
        onChange={(val) => {
          onChange(name, val);
          setIpoDates(name, val);
        }}
      />
    );
  };

  const handleSubmit = (values) => {
    let payload = {
      id: ipoPrefillData?.data?.id,
      IPOOpenDate: values?.IPOOpenDate,
      IPOCloseDate: values?.IPOCloseDate,
      IPOAllotmentDate: values?.IPOAllotmentDate,
      IPORefundsInitiation: values?.IPORefundsInitiation,
      IPODematTransfer: values?.IPODematTransfer,
      IPOListingDate: values?.IPOListingDate,
    };
    dispatch(updateIPO({ payload }));
  };

  useEffect(() => {
    const payload = {
      id: ipoPrefillData?.data?.id,
      CategoryForIPOS: ipoPrefillData?.data?.CategoryForIPOS,
    };
    dispatch(getIpoById({ payload }));
  }, [dispatch]);

  const handleRemoveImage = () => {
    setFile("");
    setFileDataURL("");
    const file = "";
    formDataImg.append("file", file);
    let payload = {
      payload: formDataImg,
      id: { id: ipoPrefillData?.data?.id },
    };

    dispatch(uploadIMG({ payload }));
    setImageMsg("");
  };

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
      formData.append("file", file);
      formDataImg.append("file", file);
      let payload = {
        payload: formDataImg,
        id: { id: ipoPrefillData?.data?.id },
      };

      dispatch(uploadIMG({ payload }));
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

  useEffect(() => {
    setFileDataURL(getIPODataById?.file);
  }, [getIPODataById?.file]);

  return (
    <>
      <PageHeading title={"IPO Edit"} />
      <AppContentLayout>
        <div
          className="form d-flex flex-column flex-lg-row"
          data-kt-redirect="../../demo1/dist/apps/ecommerce/catalog/products.html"
        >
          <div className="d-flex flex-column gap-7 gap-lg-10 w-100 w-lg-300px min-w-lg-300px mb-7 me-lg-10">
            <div className="card card-flush py-4">
              <div className="card-header">
                <div className="card-title">
                  <h4>Company Logo</h4>
                </div>
              </div>

              <div className="card-body text-center pt-0">
                <div
                  class="image-input image-input-empty image-input-outline image-input-placeholder mb-3"
                  data-kt-image-input="true"
                >
                  <div className="btn-container w-150px h-150px m-auto position-relative file_preview_wrapper">
                    <p>
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
                        //   value={values?.file}
                      />
                    </p>

                    <div className="preview w-150px h-150px">
                      {isLoading ? (
                        <SpinnerLoader />
                      ) : (
                        <img
                          src={fileDataURL ? fileDataURL : blankImage}
                          alt="preview"
                        />
                      )}
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
                  <div className="text-danger fs-5 mt-2">{imageMsg}</div>
                </div>
                <div className="text-muted fs-7">
                  Set the product thumbnail image. Only .png, .jpg and *.jpeg
                  image files are accepted
                </div>
              </div>
            </div>
            <Formik
              enableReinitialize
              initialValues={{ IPOStatus: getIPODataById?.IPOstatus }}
            >
              {({ values }) => (
                <Form onChange={handleIpoStatus}>
                  <div className="card card-flush py-4">
                    <div className="card-header">
                      <div className="card-title">
                        <h2>Status</h2>
                      </div>

                      <div className="card-toolbar">
                        {values?.IPOStatus === "Live" ? (
                          <div
                            className="rounded-circle bg-danger w-15px h-15px"
                            id="kt_ipo_status"
                          ></div>
                        ) : values?.IPOStatus === "WaitingAllotment" ? (
                          <div
                            className="rounded-circle bg-warning w-15px h-15px"
                            id="kt_ipo_status"
                          ></div>
                        ) : values?.IPOStatus === "AllotmentOut" ? (
                          <div
                            className="rounded-circle bg-primary w-15px h-15px"
                            id="kt_ipo_status"
                          ></div>
                        ) : values?.IPOStatus === "Upcoming" ? (
                          <div
                            className="rounded-circle bg-info w-15px h-15px"
                            id="kt_ipo_status"
                          ></div>
                        ) : values?.IPOStatus === "Listed" ? (
                          <div
                            className="rounded-circle bg-success w-15px h-15px"
                            id="kt_ipo_status"
                          ></div>
                        ) : (
                          <div
                            className="rounded-circle bg-none w-15px h-15px"
                            id="kt_ipo_status"
                          ></div>
                        )}
                      </div>
                    </div>

                    <div className="card-body pt-0">
                      <Field
                        as="select"
                        className="form-control mb-2"
                        name="IPOStatus"
                        // data-placeholder="Select an option"
                        // onChange={(e) => handleIpoStatus(e)}
                        // defaultValue={getIPODataById?.IPOStatus}
                        // value={ipoStatus}
                      >
                        <option></option>
                        <option value="Live">Live</option>
                        <option value="WaitingAllotment">
                          Waiting Allotment
                        </option>
                        <option value="AllotmentOut">Allotment Out</option>
                        <option value="Upcoming">Upcoming</option>
                        <option value="Listed">Listed</option>
                      </Field>

                      <div className="text-muted fs-7">
                        Set the ipo status.{" "}
                      </div>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>

            <div className="card card-flush py-4">
              <div className="card-header">
                <div className="card-title">
                  <h2>Tentative Timetable</h2>
                </div>
              </div>
              <Formik
                enableReinitialize
                initialValues={
                  ipoPrefillData.type
                    ? {
                        IPOOpenDate: getIPODataById?.IPOOpenDate,
                        IPOCloseDate: getIPODataById?.IPOCloseDate,
                        IPOAllotmentDate: getIPODataById?.IPOAllotmentDate,
                        IPORefundsInitiation:
                          getIPODataById?.IPORefundsInitiation,
                        IPODematTransfer: getIPODataById?.IPODematTransfer,
                        IPOListingDate: getIPODataById?.IPOListingDate,
                      }
                    : {
                        IPOOpenDate: "",
                        IPOCloseDate: "",
                        IPOAllotmentDate: "",
                        IPORefundsInitiation: "",
                        IPODematTransfer: "",
                        IPOListingDate: "",
                      }
                }
                onSubmit={(values) => handleSubmit(values)}
              >
                {({ values, setFieldValue }) => (
                  <Form>
                    <div className="card-body pt-0">
                      <div className="w-100 fv-row mb-10">
                        <label className="form-label">IPO Open Date</label>
                        <DatePickerField
                          name="IPOOpenDate"
                          className="form-control mb-2"
                          value={values?.IPOOpenDate}
                          onChange={setFieldValue}
                        />
                      </div>

                      <div className="w-100 fv-row mb-10">
                        <label className="form-label">IPO Close Date</label>
                        <DatePickerField
                          name="IPOCloseDate"
                          className="form-control mb-2"
                          value={values?.IPOCloseDate}
                          onChange={setFieldValue}
                        />
                      </div>
                      <div className="w-100 fv-row mb-10">
                        <label className="form-label">IPO Allotment Date</label>
                        <DatePickerField
                          name="IPOAllotmentDate"
                          className="form-control mb-2"
                          value={values?.IPOAllotmentDate}
                          onChange={setFieldValue}
                        />
                      </div>
                      <div className="w-100 fv-row mb-10">
                        <label className="form-label">
                          IPO Refunds Initiation
                        </label>
                        <DatePickerField
                          name="IPORefundsInitiation"
                          className="form-control mb-2"
                          value={values?.IPORefundsInitiation}
                          onChange={setFieldValue}
                        />
                      </div>
                      <div className="w-100 fv-row mb-10">
                        <label className="form-label">IPO Demat Transfer</label>
                        <DatePickerField
                          name="IPODematTransfer"
                          className="form-control mb-2"
                          value={values?.IPODematTransfer}
                          onChange={setFieldValue}
                        />
                      </div>
                      <div className="w-100 fv-row">
                        <label className="form-label">IPO Listing Date</label>
                        <DatePickerField
                          name="IPOListingDate"
                          className="form-control mb-2"
                          value={values?.IPOListingDate}
                          onChange={setFieldValue}
                        />
                      </div>
                      <div className="d-flex justify-content-center mt-4">
                        <button type="submit" className="btn btn-primary" ss>
                          Save Changes
                        </button>
                      </div>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>

          <div className="d-flex flex-column flex-row-fluid gap-7 gap-lg-10">
            <div className="d-flex flex-column flex-row-fluid gap-7 gap-lg-10">
              <div className="d-flex flex-column flex-row-fluid gap-7 gap-lg-10">
                <Tabs
                  IPOTYPE={ipoPrefillData?.data?.CategoryForIPOS}
                  ipoEdit={ipoPrefillData.type}
                  ipoPrefillData={ipoPrefillData.data}
                />
              </div>
              <div className="d-flex justify-content-end"></div>
            </div>
            <div className="d-flex justify-content-end"></div>
          </div>
        </div>
      </AppContentLayout>
    </>
  );
};

export default EditIpo;
