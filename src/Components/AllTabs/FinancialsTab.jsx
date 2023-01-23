import { Field, FieldArray, Form, Formik } from "formik";
import React from "react";

const FinancialsTab = ({ IPODATA, EditIpo, handleSomthing }) => {
  const handleSubmit = (values) => {
    let Payload = {
      companyFinancials: values?.companyFinancials,
      earningPerShare: values?.earningPerShare,
      earningPERatio: "",
      returnonNetWorth: "",
      netAssetValue: "",
      financialLotsize: [],
      peersComparisons: [],
    };
  };
  return (
    <>
      <div>
        <Formik
          initialValues={{
            companyFinancials: [],
            earningPerShare: "",
            earningPERatio: "",
            returnonNetWorth: "",
            netAssetValue: "",
            financialLotsize: [],
            peersComparisons: [],
          }}
          enableReinitialize
          // onSubmit={(values) => handleSubmit(values)}
          onSubmit={async (values) => {
            await new Promise((r) => setTimeout(r, 500));
            handleSomthing(values);
          }}
        >
          {({ values }) => (
            <Form>
              <div className="card card-flush py-4">
                <div className="card-header">
                  <div className="card-title">
                    <h2>Company Financials (in Crore)</h2>
                  </div>
                </div>

                <div className="card-body pt-0">
                  <div id="kt_financial_info">
                    <div className="form-group">
                      <div className="form-group row">
                        <div className="col-md-4">
                          <label className="form-label">Period</label>
                        </div>
                        <div className="col-md-2">
                          <label className="form-label">Assets</label>
                        </div>
                        <div className="col-md-2">
                          <label className="form-label">Revenue</label>
                        </div>
                        <div className="col-md-2">
                          <label className="form-label">Profit</label>
                        </div>
                      </div>
                      <div>
                        <FieldArray
                          name="companyFinancials"
                          render={(arrayHelpers) => (
                            <div>
                              {values?.companyFinancials?.map(
                                (companyFinancial, index) => (
                                  <div key={index}>
                                    <div className="form-group row mb-5">
                                      <div className="col-md-4">
                                        <Field
                                          className="form-control "
                                          name={`companyFinancials[${index}].period`}
                                        />
                                      </div>
                                      <div className="col-md-2">
                                        <Field
                                          type="text"
                                          className="form-control kt_financial_info_period"
                                          name={`companyFinancials[${index}].assets`}
                                        />
                                      </div>
                                      <div className="col-md-2">
                                        <Field
                                          type="text"
                                          className="form-control"
                                          name={`companyFinancials[${index}].profit`}
                                        />
                                      </div>
                                      <div className="col-md-2">
                                        <Field
                                          type="text"
                                          className="form-control"
                                          name={`companyFinancials[${index}].revenue`}
                                        />
                                      </div>
                                      <div className="col-md-2">
                                        <button
                                          type="button"
                                          data-repeater-delete
                                          style={{
                                            marginLeft: "10px",
                                          }}
                                          className="btn btn-sm btn-light-danger mt-2 "
                                          onClick={() =>
                                            arrayHelpers?.remove(index)
                                          }
                                        >
                                          <i className="la la-trash-o"></i>
                                          Delete
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                )
                              )}
                              <button
                                type="button"
                                className="btn btn-light-primary mt-1"
                                onClick={() =>
                                  arrayHelpers?.push({
                                    period: "",
                                    assets: "",
                                    profit: "",
                                    revenue: "",
                                  })
                                }
                              >
                                <i className="la la-plus" /> Add
                              </button>
                            </div>
                          )}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card card-flush py-4">
                <div className="card-header">
                  <div className="card-title">
                    <h2>Valuations</h2>
                  </div>
                </div>

                <div className="card-body pt-0">
                  <div className="d-flex flex-wrap gap-5">
                    <div className="w-100 fv-row flex-md-root">
                      <label className="form-label">
                        Earning Per Share (EPS)
                      </label>
                      <Field
                        name="earningPerShare"
                        type="text"
                        className="form-control"
                        // value="₹9.20"
                      />
                    </div>

                    <div className="w-100 fv-row flex-md-root">
                      <label className="form-label">
                        Price/Earning P/E Ratio
                      </label>
                      <Field
                        name="earningPERatio"
                        type="text"
                        className="form-control"
                        // value="31.33"
                      />
                    </div>

                    <div className="w-100 fv-row flex-md-root">
                      <label className="form-label">
                        Return on Net Worth (RoNW)s
                      </label>
                      <Field
                        name="returnonNetWorth"
                        type="text"
                        className="form-control"
                        // value="12.92%"
                      />
                    </div>

                    <div className="w-100 fv-row flex-md-root">
                      <label className="form-label">
                        Net Asset Value (NAV)
                      </label>
                      <Field
                        name="netAssetValue"
                        type="text"
                        className="form-control"
                        // value="₹75.20"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="card card-flush py-4">
                <div className="card-header">
                  <div className="card-title">
                    <h2>Lot Size</h2>
                  </div>
                </div>

                <div className="card-body pt-0">
                  <div id="kt_ipo_lot_size_repeater">
                    <div className="form-group">
                      <div className="form-group row">
                        <div className="col-md-4">
                          <label className="form-label">Application</label>
                        </div>
                        <div className="col-md-2">
                          <label className="form-label">Lots</label>
                        </div>
                        <div className="col-md-2">
                          <label className="form-label">Shares</label>
                        </div>
                        <div className="col-md-2">
                          <label className="form-label">Amount</label>
                        </div>
                      </div>
                      <FieldArray
                        name="financialLotsize"
                        render={(arrayHelpers) => (
                          <div>
                            {values?.financialLotsize?.map(
                              (financialLotsize, index) => (
                                <div key={index}>
                                  <div className="form-group row mb-5">
                                    <div className="col-md-4">
                                      <Field
                                        className="form-control "
                                        name={`financialLotsize[${index}].application`}
                                      />
                                    </div>
                                    <div className="col-md-2">
                                      <Field
                                        type="text"
                                        className="form-control kt_financial_info_period"
                                        name={`financialLotsize[${index}].lots`}
                                      />
                                    </div>
                                    <div className="col-md-2">
                                      <Field
                                        type="text"
                                        className="form-control"
                                        name={`financialLotsize[${index}].shares`}
                                      />
                                    </div>
                                    <div className="col-md-2">
                                      <Field
                                        type="text"
                                        className="form-control"
                                        name={`financialLotsize[${index}].amount`}
                                      />
                                    </div>
                                    <div className="col-md-2">
                                      <button
                                        type="button"
                                        style={{
                                          marginLeft: "10px",
                                        }}
                                        className="btn btn-sm btn-light-danger mt-2 "
                                        onClick={() =>
                                          arrayHelpers?.remove(index)
                                        }
                                      >
                                        <i className="la la-trash-o"></i>
                                        Delete
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              )
                            )}
                            <button
                              type="button"
                              className="btn btn-light-primary mt-1"
                              onClick={() =>
                                arrayHelpers?.push({
                                  application: "",
                                  lots: "",
                                  shares: "",
                                  amount: "",
                                })
                              }
                            >
                              <i className="la la-plus" /> Add
                            </button>
                          </div>
                        )}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="card card-flush py-4">
                <div className="card-header">
                  <div className="card-title">
                    <h2>Peers Comparison</h2>
                  </div>
                </div>

                <div className="card-body pt-0">
                  <div id="kt_ipo_peers_comparison_repeater">
                    <div className="form-group">
                      <div className="form-group row">
                        <div className="col-md-2">
                          <label className="form-label"></label>
                        </div>
                        <div className="col-md-2">
                          <label className="form-label">P/B</label>
                        </div>
                        <div className="col-md-2">
                          <label className="form-label">P/E</label>
                        </div>
                        <div className="col-md-2">
                          <label className="form-label">RoNW</label>
                        </div>
                        <div className="col-md-2">
                          <label className="form-label">Revenue</label>
                        </div>
                      </div>

                      <FieldArray
                        name="peersComparisons"
                        render={(arrayHelpers) => (
                          <div>
                            {values?.peersComparisons?.map(
                              (peersComparisons, index) => (
                                <div key={index}>
                                  <div className="form-group row mb-5">
                                    <div className="col-md-2">
                                      <Field
                                        className="form-control "
                                        name={`peersComparisons[${index}].CompanyName`}
                                      />
                                    </div>
                                    <div className="col-md-2">
                                      <Field
                                        className="form-control "
                                        name={`peersComparisons[${index}].PB`}
                                      />
                                    </div>
                                    <div className="col-md-2">
                                      <Field
                                        type="text"
                                        className="form-control kt_financial_info_period"
                                        name={`peersComparisons[${index}].PE`}
                                      />
                                    </div>
                                    <div className="col-md-2">
                                      <Field
                                        type="text"
                                        className="form-control"
                                        name={`peersComparisons[${index}].RoNW`}
                                      />
                                    </div>
                                    <div className="col-md-2">
                                      <Field
                                        type="text"
                                        className="form-control"
                                        name={`peersComparisons[${index}].Revenue`}
                                      />
                                    </div>
                                    <div className="col-md-2">
                                      <button
                                        type="button"
                                        style={{
                                          marginLeft: "10px",
                                        }}
                                        className="btn btn-sm btn-light-danger mt-2 "
                                        onClick={() =>
                                          arrayHelpers?.remove(index)
                                        }
                                      >
                                        <i className="la la-trash-o"></i>
                                        Delete
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              )
                            )}
                            <button
                              type="button"
                              className="btn btn-light-primary mt-1"
                              onClick={() =>
                                arrayHelpers?.push({
                                  CompanyName: "",
                                  PB: "",
                                  PE: "",
                                  RoNW: "",
                                  Revenue: "",
                                })
                              }
                            >
                              <i className="la la-plus" /> Add
                            </button>
                          </div>
                        )}
                      />
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-end">
                  <a href="mainlineipo.html" className="btn btn-light me-5">
                    Cancel
                  </a>
                  <button type="submit" className="btn btn-primary">
                    <span className="indicator-label">Save Changes</span>
                  </button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default FinancialsTab;
