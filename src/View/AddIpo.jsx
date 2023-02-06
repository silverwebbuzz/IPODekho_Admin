import { Field, Form, Formik } from "formik";
import React from "react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import AppContentLayout from "../Components/AppContentLayout";
import FilePreviewer from "../Components/FilePreviewer";
import PageHeading from "../Components/PageHeading";
import "../assets/css/customStepperStyle.css";
import { useDispatch, useSelector } from "react-redux";
import Tabs from "../Components/Tabs/Tabs";
import FilePreview2 from "../Components/FilePreview2";
import { createMainLineIpo } from "../redux/slice/mainLineIpoSlices";
import { useEffect } from "react";
const AddIpo = () => {
  const [ipoDates, setIpoDates] = useState("");

  const dispatch = useDispatch();
  const { ID, getIPODataById } = useSelector(
    (state) => state?.mainLineIpoSlice
  );
  const DatePickerField = ({ name, value, onChange }) => {
    return (
      <DatePicker
        selected={(value && new Date(value)) || null}
        className="form-control"
        dateFormat="MMMM d, yyyy"
        onChange={(val) => {
          onChange(name, val);
          setIpoDates(name, val);
        }}
      />
    );
  };

  const handleIpoStatus = (e) => {
    console.log(e.target?.value);
    let payload = {
      IPOstatus: e?.target?.value,
    };
    if (ID) {
      payload.id = ID;
      dispatch(createMainLineIpo({ payload }));
    } else {
      payload.id = null;
      dispatch(createMainLineIpo({ payload }));
    }
  };
  const handleSubmit = (values) => {
    let payload = {
      IPOStatus: values?.IPOStatus,
      IPOOpenDate: values?.IPOOpenDate,
      IPOCloseDate: values?.IPOCloseDate,
      IPOAllotmentDate: values?.IPOAllotmentDate,
      IPORefundsInitiation: values?.IPORefundsInitiation,
      IPODematTransfer: values?.IPODematTransfer,
      IPOListingDate: values?.IPOListingDate,
    };

    if (ID) {
      payload.id = ID;
      dispatch(createMainLineIpo({ payload }));
    } else {
      payload.id = null;
      dispatch(createMainLineIpo({ payload }));
    }
  };

  return (
    <>
      <PageHeading title={"IPO Add"} />
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
                    <FilePreviewer addImage="addImage" />
                    {/* <FilePreview2 addImage="addImage" /> */}
                  </div>
                </div>
                <div className="text-muted fs-7">
                  Set the product thumbnail image. Only .png, .jpg and *.jpeg
                  image files are accepted
                </div>
              </div>
            </div>

            <div className="card card-flush py-4">
              <div className="card-header">
                <div className="card-title">
                  <h2>Status</h2>
                </div>

                <div className="card-toolbar">
                  <div className="rounded-circle bg-danger w-15px h-15px"></div>
                </div>
              </div>
              <Formik
                enableReinitialize
                initialValues={{ IPOstatus: getIPODataById?.IPOstatus }}
              >
                <Form onChange={handleIpoStatus}>
                  <div className="card-body pt-0">
                    <Field
                      as="select"
                      className="form-control mb-2"
                      name="IPOstatus"
                      // data-placeholder="Select an option"
                      // onChange={(e) => handleIpoStatus(e)}
                      // defaultValue={getIPODataById?.IPOStatus}
                      // value={ipoStatus}
                    >
                      <option value="Live">Live</option>
                      <option value="WaitingAllotment">
                        Waiting Allotment
                      </option>
                      <option value="AllotmentOut">Allotment Out</option>
                      <option value="Upcoming">Upcoming</option>
                      <option value="Listed">Listed</option>
                    </Field>
                    <div className="text-muted fs-7">Set the ipo status. </div>
                  </div>
                </Form>
              </Formik>
            </div>
            <Formik
              initialValues={{
                IPOOpenDate: "",
                IPOCloseDate: "",
                IPOAllotmentDate: "",
                IPORefundsInitiation: "",
                IPODematTransfer: "",
                IPOListingDate: "",
                IPOStatus: "",
              }}
              onSubmit={(values) => {
                handleSubmit(values);
              }}
            >
              {({ values, setFieldValue }) => (
                <Form>
                  <div className="card card-flush py-4">
                    <div className="card-header">
                      <div className="card-title">
                        <h2>Tentative Timetable</h2>
                      </div>
                    </div>

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
                  </div>
                </Form>
              )}
            </Formik>
          </div>

          <div className="d-flex flex-column flex-row-fluid gap-7 gap-lg-10">
            <div className="d-flex flex-column flex-row-fluid gap-7 gap-lg-10">
              <Tabs />
            </div>
          </div>
        </div>
      </AppContentLayout>
    </>
  );
};

export default AddIpo;
