import { Field, Form, Formik } from "formik";
import React from "react";
import { useState } from "react";
import { useContext } from "react";
import DatePicker from "react-datepicker";
import { FormContext } from "../App";
import AppContentLayout from "../Components/AppContentLayout";
import FilePreviewer from "../Components/FilePreviewer/FilePreviewer";
import PageHeading from "../Components/PageHeading";
import Steppers from "../FormContent/Stepper";
import { Stepper } from "react-form-stepper";
import { useEffect } from "react";
import ChatTab from "../Components/AllTabs/ChatTab";
import "../assets/css/customStepperStyle.css";
import { useDispatch, useSelector } from "react-redux";
import { setChatTab } from "../redux/slice/chatSlice";
const AddIpo = () => {
  const { activeStepIndex, formData, setFormData, setIpoType, IPO } =
    useContext(FormContext);
  const [IPOStatus, setIPOStatus] = useState("Live");
  const dispatch = useDispatch();
  const { chatTab } = useSelector((state) => state.chatReducer);
  const handleIpoChange = (e) => {
    setIPOStatus(e.target.value);
    const one = { ...formData, ["IPOStatus"]: e.target.value };
    setFormData(one);
  };
  const DatePickerField = ({ name, value, onChange }) => {
    return (
      <DatePicker
        selected={(value && new Date(value)) || null}
        className="form-control"
        dateFormat="MMMM Do yyyy"
        onChange={(val) => {
          onChange(name, val);
        }}
      />
    );
  };
  const stepStyleConfig = {
    activeBgColor: "#ed1d24",
    completedBgColor: "#009270",
  };
  useEffect(() => {
    setIpoType("Add");
  }, []);
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
                    <FilePreviewer ipoImage="ipoImage" />
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

              <div className="card-body pt-0">
                <select
                  className="form-select mb-2"
                  data-placeholder="Select an option"
                  onChange={(e) => handleIpoChange(e)}
                  value={IPOStatus}
                >
                  <option></option>
                  <option value="Live" selected="selected">
                    Live
                  </option>
                  <option value="Waitingallotment">Waiting Allotment</option>
                  <option value="Allotmentout">Allotment Out</option>
                  <option value="Upcoming">Upcoming</option>
                  <option value="Listed">Listed</option>
                </select>

                <div className="text-muted fs-7">Set the ipo status.</div>
              </div>
            </div>

            <div className="card card-flush py-4">
              <div className="card-header">
                <div className="card-title">
                  <h2>Tentative Timetable</h2>
                </div>
              </div>
              <Formik
                initialValues={{
                  IPOOpenDate: formData?.IPOOpenDate,
                  IPOCloseDate: formData?.IPOCloseDate,
                  IPOAllotmentDate: formData?.IPOAllotmentDate,
                  IPORefundsInitiation: formData?.IPORefundsInitiation,
                  IPODematTransfer: formData?.IPODematTransfer,
                  IPOListingDate: formData?.IPOListingDate,
                }}
                onSubmit={(values) => {
                  const data = { ...formData, ...values };
                  setFormData(data);
                }}
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
              <Stepper
                styleConfig={stepStyleConfig}
                steps={[
                  { label: "General" },
                  { label: "Financials" },
                  { label: "Company/Registrar Info" },
                  { label: "Subscription" },
                  { label: "Listing Info" },
                ]}
                activeStep={
                  activeStepIndex === 1
                    ? 0
                    : activeStepIndex === 2
                    ? 1
                    : activeStepIndex === 3
                    ? 2
                    : activeStepIndex === 4
                    ? 3
                    : 4
                }
              />
              {chatTab ? <ChatTab /> : <Steppers />}
            </div>
            {/* <Steppers IpoType="Add" /> */}
            <div className="d-flex justify-content-end">
              {/* <Link to="/" className="btn btn-light me-5">
                Cancel
              </Link> */}
              {/* 
              <button
                type="submit"
                id="kt_ecommerce_add_product_submit"
                className="btn btn-primary"
              >
                <span className="indicator-label">Save Changes</span>
                <span className="indicator-progress">
                  Please wait...
                  <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                </span>
              </button> */}
            </div>
          </div>
        </div>
      </AppContentLayout>
      <div
        className="chat-icon-style"
        onClick={() => dispatch(setChatTab(!chatTab))}
      >
        <i className="bi bi-chat-fill"></i>
      </div>
    </>
  );
};

export default AddIpo;
