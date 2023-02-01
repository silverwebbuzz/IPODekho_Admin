import { Field, FieldArray, Form, Formik } from "formik";
import React, { useState } from "react";
import { useContext } from "react";
import { FormContext } from "../../App";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useSelector } from "react-redux";
const SubscriptionTab = ({ ipoEdit }) => {
  const { getIPODataById } = useSelector((state) => state?.mainLineIpoSlice);
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
  const IpoType = "Edit";
  return (
    <>
      <div>
        <Formik
          initialValues={
            ipoEdit
              ? {
                  subscriptionDetails: [],
                  qualifiedInstitutions: getIPODataById?.qualifiedInstitutions,
                  nonInstitutionalBuyers:
                    getIPODataById?.nonInstitutionalBuyers,
                  bNII: getIPODataById?.bNII,
                  sNII: getIPODataById?.sNII,
                  retailInvestors: getIPODataById?.retailInvestors,
                  employees: getIPODataById?.employees,
                  others: getIPODataById?.others,
                  total: getIPODataById?.total,
                }
              : {
                  subscriptionDetails: [],
                  qualifiedInstitutions: "",
                  nonInstitutionalBuyers: "",
                  bNII: "",
                  sNII: "",
                  retailInvestors: "",
                  employees: "",
                  others: "",
                  total: "",
                }
          }
          // onSubmit={(values) => {
          //   if (IpoType === "Edit") {
          //     const totalOf =
          //       +values?.qualifiedInstitutions +
          //       +values?.nonInstitutionalBuyers +
          //       +values?.bNII +
          //       +values?.sNII +
          //       +values?.retailInvestors +
          //       +values?.employees +
          //       +values?.others;
          //     // const one = { ...values, ["total"]: totalOf };
          //     // let data = { ...prefillData, ...one };
          //     // setPrefillData(data);
          //     // setActiveStepIndex(activeStepIndex + 1);
          //   } else {
          //     const totalOf =
          //       +values?.qualifiedInstitutions +
          //       +values?.nonInstitutionalBuyers +
          //       +values?.bNII +
          //       +values?.sNII +
          //       +values?.retailInvestors +
          //       +values?.employees +
          //       +values?.others;
          //     // const one = { ...values, ["total"]: totalOf };
          //     // const data = { ...formData, ...one };
          //     // setFormData(data);
          //     // setActiveStepIndex(activeStepIndex + 1);
          //   }
          // }}
        >
          {({ values, setFieldValue }) => (
            <Form>
              <div className="card card-flush py-4">
                <div className="card-header">
                  <div className="card-title">
                    <h2>Subscription Details</h2>
                  </div>
                </div>

                <div className="card-body pt-0">
                  <div id="kt_subscription_repeater">
                    <div className="form-group">
                      <div className="form-group row">
                        <div className="col-md-3">
                          <label className="form-label">Date</label>
                        </div>
                        <div className="col-md-2">
                          <label className="form-label">QIB</label>
                        </div>
                        <div className="col-md-2">
                          <label className="form-label">NII</label>
                        </div>
                        <div className="col-md-2">
                          <label className="form-label">Retail</label>
                        </div>
                        <div className="col-md-2">
                          <label className="form-label">Total</label>
                        </div>
                      </div>
                      <div data-repeater-list="kt_subscription_repeater">
                        <div data-repeater-item>
                          <FieldArray
                            name="subscriptionDetails"
                            render={(arrayHelpers) => (
                              <div>
                                {values.subscriptionDetails?.map(
                                  (subscriptionDetails, index) => (
                                    <div data-repeater-item>
                                      <div
                                        key={index}
                                        className="form-group row mb-5"
                                      >
                                        <div className="form-group row mb-5">
                                          <div className="col-md-3">
                                            <DatePickerField
                                              name={`subscriptionDetails.${index}.Date`}
                                              value={subscriptionDetails?.Date}
                                              onChange={setFieldValue}
                                            />
                                          </div>
                                          <div className="col-md-2">
                                            <Field
                                              type="number"
                                              className="form-control"
                                              name={`subscriptionDetails.${index}.QIB`}
                                            />
                                          </div>
                                          <div className="col-md-2">
                                            <Field
                                              type="number"
                                              className="form-control "
                                              name={`subscriptionDetails.${index}.NII`}
                                            />
                                          </div>
                                          <div className="col-md-2">
                                            <Field
                                              type="number"
                                              className="form-control "
                                              name={`subscriptionDetails.${index}.Retail`}
                                            />
                                          </div>
                                          <div className="col-md-2">
                                            <Field
                                              type="number"
                                              className="form-control "
                                              name={`subscriptionDetails.${index}.Total`}
                                            />
                                          </div>
                                        </div>
                                        <div className="col-md-2">
                                          <button
                                            className="btn btn-sm btn-light-danger"
                                            onClick={(e) => {
                                              e.preventDefault();
                                              arrayHelpers.remove(index);
                                            }}
                                          >
                                            <i className="la la-trash-o"></i>
                                            Delete
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  )
                                )}

                                <div className="form-group mt-5">
                                  <button
                                    className="btn btn-light-primary"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      arrayHelpers.push({
                                        Date: "",
                                        QIB: "",
                                        NII: "",
                                        Retail: "",
                                        Total: "",
                                      });
                                    }}
                                  >
                                    <i className="la la-plus"></i>Add
                                  </button>
                                </div>
                              </div>
                            )}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card card-flush py-4">
                <div className="card-header">
                  <div className="card-title">
                    <h2>Live Subscription</h2>
                  </div>
                </div>

                <div className="card-body pt-0">
                  <div className="table-responsive">
                    <table className="table table-row-dashed table-row-gray-300 gy-7">
                      <thead>
                        <tr className="fw-semibold fs-6 text-gray-800 border-bottom border-gray-200">
                          <th>Investor Category</th>
                          <th>Subscription (times)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Qualified Institutions</td>
                          <td>
                            <Field
                              type="number"
                              className="form-control"
                              name="qualifiedInstitutions"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>Non-Institutional Buyers</td>
                          <td>
                            <Field
                              type="number"
                              className="form-control"
                              name="nonInstitutionalBuyers"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>bNII (bids above ₹10L)</td>
                          <td>
                            <Field
                              type="number"
                              className="form-control"
                              name="bNII"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>sNII (bids below ₹10L)</td>
                          <td>
                            <Field
                              type="number"
                              className="form-control"
                              name="sNII"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>Retail Investors</td>
                          <td>
                            <Field
                              type="number"
                              className="form-control"
                              name="retailInvestors"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>Employees</td>
                          <td>
                            <Field
                              type="number"
                              className="form-control"
                              name="employees"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>Others</td>
                          <td>
                            <Field
                              type="number"
                              className="form-control"
                              name="others"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td className="fw-bold">Total</td>
                          <td>{values.total}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-end">
                <button type="submit" className="btn btn-primary">
                  <span className="indicator-label">{"Next >>"}</span>
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default SubscriptionTab;
