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

import { getIpoById, updateIPO } from "../redux/slice/mainLineIpoSlices";
import "../assets/css/customStepperStyle.css";
import Tabs from "../Components/Tabs";

const EditIpo = () => {
  // const dispatch = useDispatch();
  // const location = useLocation();
  // const ipoPrefillData = location.state?.data;
  // const { getIPODataById } = useSelector((state) => state?.mainLineIpoSlice);
  // const [IPOStatus, setIPOStatus] = useState("Live");
  // const handleIpoChange = (e) => {
  //   setIPOStatus(e.target.value);
  //   const one = { ...prefillData, ["IPOStatus"]: e.target.value };
  //   // setPrefillData(one);
  //   let payload = {
  //     id: prefillData.id,
  //     IPOStatus: e.target.value,
  //   };
  //   dispatch(updateIPO({ payload }));
  // };
  // const stepStyleConfig = {
  //   activeBgColor: "#ed1d24",
  //   completedBgColor: "#009270",
  // };
  // const DatePickerField = ({ name, value, onChange }) => {
  //   return (
  //     <DatePicker
  //       selected={(value && new Date(value)) || null}
  //       className="form-control"
  //       dateFormat="MMMM Do yyyy"
  //       onChange={(val) => {
  //         onChange(name, val);
  //       }}
  //     />
  //   );
  // };
  // console.log(IPO);
  // useEffect(() => {
  //   if (ipoPrefillData?.id) {
  //     setActiveStepIndex(1);
  //     let payload = {
  //       id: ipoPrefillData?.id,
  //       CategoryForIPOS: "MainlineIPO",
  //     };
  //     dispatch(getIpoById({ payload }));
  //   }
  // }, [ipoPrefillData?.id]);

  // useEffect(() => {
  //   if (getIPODataById) {
  //     setIpoType("Edit");
  //     let Data = { ...prefillData, ...getIPODataById };
  //     setPrefillData(Data);
  //   }
  // }, [getIPODataById]);
  // useEffect(() => {
  //   console.log("getIPODataById", getIPODataById);
  //   if (getIPODataById) {
  //     let one = {};
  //     const asArray = Object.entries(getIPODataById); // convert object into array
  //     asArray?.filter(([key, value]) => {
  //       if (key === "promotersName") {
  //         let fvalue = value;
  //         let jsonArray = JSON.parse(
  //           JSON.parse(JSON.stringify(fvalue).replace(/\//g, ""))
  //         );
  //         one[key] = jsonArray || [];
  //       }
  //       if (key === "companyFinancials") {
  //         let fvalue = value;
  //         let jsonArray = JSON.parse(
  //           JSON.parse(JSON.stringify(fvalue).replace(/\//g, ""))
  //         );
  //         one[key] = jsonArray;
  //       }
  //       if (key === "financialLotsize") {
  //         let fvalue = value;
  //         let jsonArray = JSON.parse(
  //           JSON.parse(JSON.stringify(fvalue).replace(/\//g, ""))
  //         );
  //         one[key] = jsonArray;
  //       }
  //       if (key === "peersComparison") {
  //         let fvalue = value;
  //         let jsonArray = JSON.parse(
  //           JSON.parse(JSON.stringify(fvalue).replace(/\//g, ""))
  //         );
  //         one[key] = jsonArray;
  //       }
  //       if (key === "subscriptionDetails") {
  //         let fvalue = value;
  //         let jsonArray = JSON.parse(
  //           JSON.parse(JSON.stringify(fvalue).replace(/\//g, ""))
  //         );
  //         one[key] = jsonArray;
  //       }
  //     });
  //     setPrefillData((preState) => {
  //       return { ...preState, ...one };
  //     });
  //   }
  // }, [getIPODataById]);
  // console.log(prefillData?.IPOOpenDate);
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
                  onChange={(e) => console.log(e)}
                  value=""
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
                enableReinitialize
                initialValues={{
                  IPOOpenDate: "",
                  IPOCloseDate: "",
                  IPOAllotmentDate: "",
                  IPORefundsInitiation: "",
                  IPODematTransfer: "",
                  IPOListingDate: "",
                  // IPOOpenDate: prefillData?.IPOOpenDate,
                  // IPOCloseDate: prefillData?.IPOCloseDate || "",
                  // IPOAllotmentDate: prefillData?.IPOAllotmentDate || "",
                  // IPORefundsInitiation: prefillData?.IPORefundsInitiation || "",
                  // IPODematTransfer: prefillData?.IPODematTransfer || "",
                  // IPOListingDate: prefillData?.IPOListingDate || "",
                }}
                onSubmit={(values) => console.log("values")}
              >
                {({ values, setFieldValue }) => (
                  <Form>
                    <div className="card-body pt-0">
                      <div className="w-100 fv-row mb-10">
                        <label className="form-label">IPO Open Date</label>
                        <Field
                          type="date"
                          name="IPOOpenDate"
                          className="form-control mb-2"
                        />
                      </div>

                      <div className="w-100 fv-row mb-10">
                        <label className="form-label">IPO Close Date</label>
                        <Field
                          type="date"
                          name="IPOCloseDate"
                          className="form-control mb-2"
                          // value={values?.IPOCloseDate}
                          // onChange={setFieldValue}
                          // dateFormat="MMMM d, yyyy"
                        />
                      </div>
                      <div className="w-100 fv-row mb-10">
                        <label className="form-label">IPO Allotment Date</label>
                        <Field
                          type="date"
                          name="IPOAllotmentDate"
                          className="form-control mb-2"
                          // value={values?.IPOAllotmentDate}
                          // onChange={setFieldValue}
                        />
                      </div>
                      <div className="w-100 fv-row mb-10">
                        <label className="form-label">
                          IPO Refunds Initiation
                        </label>
                        <Field
                          type="date"
                          name="IPORefundsInitiation"
                          className="form-control mb-2"
                          // value={values?.IPORefundsInitiation}
                          // onChange={setFieldValue}
                        />
                      </div>
                      <div className="w-100 fv-row mb-10">
                        <label className="form-label">IPO Demat Transfer</label>
                        <Field
                          type="date"
                          name="IPODematTransfer"
                          className="form-control mb-2"
                          // value={values?.IPODematTransfer}
                          // onChange={setFieldValue}
                          // dateFormat="MMMM d, yyyy"
                        />
                      </div>
                      <div className="w-100 fv-row">
                        <label className="form-label">IPO Listing Date</label>
                        <Field
                          type="date"
                          name="IPOListingDate"
                          className="form-control mb-2"
                          // value={values?.IPOListingDate}
                          // onChange={setFieldValue}
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
            {/* <Tabs EditIpo="EditIpo" data={ipoPrefillData} /> */}
            <div className="d-flex flex-column flex-row-fluid gap-7 gap-lg-10">
              <div className="d-flex flex-column flex-row-fluid gap-7 gap-lg-10">
                <Tabs />
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
            {/* <Steppers IpoType="Edit" />
             */}
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
    </>
  );
};

export default EditIpo;
