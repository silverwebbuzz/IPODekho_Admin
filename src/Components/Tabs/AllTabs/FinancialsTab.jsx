import { Field, FieldArray, Form, Formik } from "formik";
import React from "react";
import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createMainLineIpo } from "../../../redux/slice/mainLineIpoSlices";
import { TabContext } from "../Tabs";

const FinancialsTab = ({ ipoEdit }) => {
  const dispatch = useDispatch();
  const { tabData, setTabData } = useContext(TabContext);
  const { ID, getIPODataById } = useSelector((state) => state.mainLineIpoSlice);
  const handleSubmit = (values) => {
    const payload = {
      CategoryForIPOS: "MainlineIPO",
      earningPerShare: values?.earningPerShare || "",
      earningPERatio: values?.earningPERatio || "",
      returnonNetWorth: values?.returnonNetWorth || "",
      netAssetValue: values?.netAssetValue || "",
      companyFinancials: values?.companyFinancials || [],
      financialLotsize: values?.financialLotsize || [],
      peersComparison: values?.peersComparison || [],
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
      <div>
        <Formik
          initialValues={
            ipoEdit
              ? {
                  companyFinancials: [],
                  earningPerShare: getIPODataById?.earningPerShare,
                  financialLotsize: [],
                  peersComparison: [],
                  earningPERatio: getIPODataById?.earningPERatio,
                  returnonNetWorth: getIPODataById?.returnonNetWorth,
                  netAssetValue: getIPODataById?.netAssetValue,
                }
              : {
                  companyFinancials: tabData?.companyFinancials || [],
                  earningPerShare: tabData?.earningPerShare || "",
                  financialLotsize: tabData?.financialLotsize || [],
                  peersComparison: tabData?.peersComparison || [],
                  earningPERatio: tabData?.earningPERatio || "",
                  returnonNetWorth: tabData?.returnonNetWorth || "",
                  netAssetValue: tabData?.netAssetValue || "",
                }
          }
          onSubmit={(values) => {
            let Data = { ...tabData, ...values };
            setTabData(Data);
            handleSubmit(values);
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
                              {values.companyFinancials?.map(
                                (companyFinacials, index) => (
                                  <div data-repeater-item>
                                    <div
                                      key={index}
                                      className="form-group row mb-5"
                                    >
                                      <div className="form-group row mb-5">
                                        <div className="col-md-4">
                                          <Field
                                            type="text"
                                            className="form-control"
                                            name={`companyFinancials.${index}.period`}
                                          />
                                        </div>
                                        <div className="col-md-2">
                                          <Field
                                            className="form-control "
                                            name={`companyFinancials.${index}.assets`}
                                          />
                                        </div>
                                        <div className="col-md-2">
                                          <Field
                                            className="form-control "
                                            name={`companyFinancials.${index}.revenue`}
                                          />
                                        </div>
                                        <div className="col-md-2">
                                          <Field
                                            className="form-control "
                                            name={`companyFinancials.${index}.profit`}
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
                                      period: "",
                                      assets: "",
                                      revenue: "",
                                      profit: "",
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
                        type="text"
                        name="earningPerShare"
                        className="form-control"
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
                      />
                    </div>

                    <div className="w-100 fv-row flex-md-root">
                      <label className="form-label">
                        Return on Net Worth (RoNW)s
                      </label>
                      <Field
                        type="text"
                        name="returnonNetWorth"
                        className="form-control"
                      />
                    </div>

                    <div className="w-100 fv-row flex-md-root">
                      <label className="form-label">
                        Net Asset Value (NAV)
                      </label>
                      <Field
                        type="text"
                        name="netAssetValue"
                        className="form-control"
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
                      <div>
                        <FieldArray
                          name="financialLotsize"
                          render={(arrayHelpers) => (
                            <div>
                              {values?.financialLotsize?.map(
                                (financialLotsize, index) => (
                                  <div data-repeater-item>
                                    <div
                                      key={index}
                                      className="form-group row mb-5"
                                    >
                                      <div className="form-group row mb-5">
                                        <div className="col-md-4">
                                          <Field
                                            type="text"
                                            className="form-control"
                                            name={`financialLotsize.${index}.application`}
                                          />
                                        </div>
                                        <div className="col-md-2">
                                          <Field
                                            className="form-control "
                                            name={`financialLotsize.${index}.lots`}
                                          />
                                        </div>
                                        <div className="col-md-2">
                                          <Field
                                            className="form-control "
                                            name={`financialLotsize.${index}.shares`}
                                          />
                                        </div>
                                        <div className="col-md-2">
                                          <Field
                                            className="form-control "
                                            name={`financialLotsize.${index}.amount`}
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
                                      application: "",
                                      lots: "",
                                      shares: "",
                                      amount: "",
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
                      <div>
                        <FieldArray
                          name="peersComparison"
                          render={(arrayHelpers) => (
                            <div>
                              {values.peersComparison?.map(
                                (peersComparison, index) => (
                                  <div data-repeater-item>
                                    <div
                                      key={index}
                                      className="form-group row mb-5"
                                    >
                                      <div className="form-group row mb-5">
                                        <div className="col-md-2">
                                          <Field
                                            type="text"
                                            className="form-control"
                                            name={`peersComparison.${index}.company_name`}
                                          />
                                        </div>
                                        <div className="col-md-2">
                                          <Field
                                            type="text"
                                            className="form-control"
                                            name={`peersComparison.${index}.PB`}
                                          />
                                        </div>
                                        <div className="col-md-2">
                                          <Field
                                            className="form-control "
                                            name={`peersComparison.${index}.PE`}
                                          />
                                        </div>
                                        <div className="col-md-2">
                                          <Field
                                            className="form-control "
                                            name={`peersComparison.${index}.RoNW`}
                                          />
                                        </div>
                                        <div className="col-md-2">
                                          <Field
                                            className="form-control "
                                            name={`peersComparison.${index}.Revenue`}
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
                                      company_name: "",
                                      PB: "",
                                      PE: "",
                                      RoNW: "",
                                      Revenue: "",
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

export default FinancialsTab;
