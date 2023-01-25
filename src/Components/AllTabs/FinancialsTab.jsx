import React, { useState } from "react";

const FinancialsTab = ({ nextStep, prevStep, handleChange, values }) => {
  // const [counter, setCounter] = useState(0);
  // const company_Finacials = [];
  // const deleteCF = (ind) => {
  //   company_Finacials?.pop(ind);
  // };
  // const addCF = () => {
  //   setCounter(counter + 1);
  //   console.log(counter);
  //   company_Finacials?.push("");
  // };
  // console.log(company_Finacials);
  console.log("Finacialvalues", values);
  const [inputFields, setInputFields] = useState([
    {
      period: "",
      assets: "",
      revenue: "",
      profit: "",
    },
  ]);
  const [inputFieldsForLotSize, setInputFieldsForLotSize] = useState([
    {
      application: "",
      lots: "",
      shares: "",
      amount: "",
    },
  ]);
  const [inputFieldsForPeers, setInputFieldsForPeers] = useState([
    {
      company_name: "",
      PB: "",
      PE: "",
      RoNW: "",
      Revenue: "",
    },
  ]);
  const addInputFieldForPeers = (e) => {
    setInputFieldsForPeers([
      ...inputFieldsForPeers,
      {
        company_name: "",
        PB: "",
        PE: "",
        RoNW: "",
        Revenue: "",
      },
    ]);
  };
  const addInputFieldForLotSize = (e) => {
    e.preventDefault();
    setInputFieldsForLotSize([
      ...inputFieldsForLotSize,
      {
        application: "",
        lots: "",
        shares: "",
        amount: "",
      },
    ]);
  };
  const addInputField = (e) => {
    e.preventDefault();

    setInputFields([
      ...inputFields,
      {
        period: "",
        assets: "",
        revenue: "",
        profit: "",
      },
    ]);
  };
  const removeInputFieldsForPeers = (index) => {
    const rowsForPeers = [...inputFieldsForPeers];
    rowsForPeers.splice(index, 1);
    setInputFieldsForPeers(rowsForPeers);
  };
  const removeInputFieldsForLotSize = (index) => {
    const rowsForLot = [...inputFieldsForLotSize];
    rowsForLot.splice(index, 1);
    setInputFieldsForLotSize(rowsForLot);
  };
  const removeInputFields = (index) => {
    const rows = [...inputFields];
    rows.splice(index, 1);
    setInputFields(rows);
  };

  const handleChangePeers = (index, evnt) => {
    let { name, value } = evnt.target;
    let list = [...inputFieldsForPeers];
    list[index][name] = value;
    setInputFieldsForPeers(list);
  };

  const handleChangeLot = (index, evnt) => {
    let { name, value } = evnt.target;
    let list = [...inputFieldsForLotSize];
    list[index][name] = value;
    setInputFieldsForLotSize(list);
  };
  const handleChangeCF = (index, evnt) => {
    let { name, value } = evnt.target;
    let list = [...inputFields];
    list[index][name] = value;
    setInputFields(list);
  };
  console.log(inputFieldsForLotSize);

  const submitFormData = (e) => {
    e.preventDefault();
    nextStep();
  };
  console.log(inputFields);
  return (
    <>
      <div>
        <form onSubmit={submitFormData}>
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
                  <div data-repeater-list="kt_financial_info">
                    {inputFields.map((data, index) => {
                      const { period, assets, revenue, profit } = data;
                      return (
                        <div className="row my-3" key={index}>
                          <div className="col">
                            <div className="form-group">
                              <input
                                type="text"
                                onChange={(evnt) => handleChangeCF(index, evnt)}
                                value={period}
                                name="period"
                                className="form-control kt_financial_info_period"
                                placeholder="Period"
                              />
                            </div>
                          </div>
                          <div className="col">
                            <input
                              type="text"
                              onChange={(evnt) => handleChangeCF(index, evnt)}
                              value={assets}
                              name="assets"
                              className="form-control"
                              placeholder="Assets"
                            />
                          </div>
                          <div className="col">
                            <input
                              type="text"
                              onChange={(evnt) => handleChangeCF(index, evnt)}
                              value={revenue}
                              name="revenue"
                              className="form-control"
                              placeholder="Revenue"
                            />
                          </div>
                          <div className="col">
                            <input
                              type="text"
                              onChange={(evnt) => handleChangeCF(index, evnt)}
                              value={profit}
                              name="profit"
                              className="form-control"
                              placeholder="Profit"
                            />
                          </div>
                          {inputFields?.length !== 1 ? (
                            <div className="col-md-2">
                              <button
                                className="btn btn-sm btn-light-danger"
                                onClick={(e) => {
                                  e.preventDefault();
                                  removeInputFields();
                                }}
                              >
                                <i className="la la-trash-o"></i>Delete
                              </button>
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="form-group mt-5">
                  <button
                    onClick={(e) => addInputField(e)}
                    className="btn btn-light-primary"
                  >
                    <i className="la la-plus"></i>Add
                  </button>
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
                  <label className="form-label">Earning Per Share (EPS)</label>
                  <input
                    type="text"
                    className="form-control"
                    name="epshare"
                    onChange={(e) => handleChange("epshare", e.target.value)}
                    Value={values?.epshare}
                  />
                </div>

                <div className="w-100 fv-row flex-md-root">
                  <label className="form-label">Price/Earning P/E Ratio</label>
                  <input
                    type="text"
                    className="form-control"
                    name="peRatio"
                    onChange={(e) => handleChange("peRatio", e.target.value)}
                    Value={values?.peRatio}
                  />
                </div>

                <div className="w-100 fv-row flex-md-root">
                  <label className="form-label">
                    Return on Net Worth (RoNW)s
                  </label>
                  <input
                    type="text"
                    name="RoNWReturn"
                    className="form-control"
                    onChange={(e) => handleChange("RoNWReturn", e.target.value)}
                    Value={values?.RoNWReturn}
                  />
                </div>

                <div className="w-100 fv-row flex-md-root">
                  <label className="form-label">Net Asset Value (NAV)</label>
                  <input
                    type="text"
                    name="netAssetValue"
                    className="form-control"
                    onChange={(e) =>
                      handleChange("netAssetValue", e.target.value)
                    }
                    Value={values?.netAssetValue}
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

                  <div data-repeater-list="kt_ipo_lot_size_repeater">
                    {inputFieldsForLotSize.map((data, index) => {
                      const { application, lots, shares, amount } = data;
                      return (
                        <div key={index}>
                          <div className="form-group row mb-5">
                            <div className="col-md-4">
                              <input
                                type="text"
                                name="application"
                                className="form-control"
                                onChange={(evnt) =>
                                  handleChangeLot(index, evnt)
                                }
                                value={application}
                              />
                            </div>
                            <div className="col-md-2">
                              <input
                                type="text"
                                className="form-control"
                                onChange={(evnt) =>
                                  handleChangeLot(index, evnt)
                                }
                                value={lots}
                                name="lots"
                              />
                            </div>
                            <div className="col-md-2">
                              <input
                                type="text"
                                className="form-control"
                                onChange={(evnt) =>
                                  handleChangeLot(index, evnt)
                                }
                                value={shares}
                                name="shares"
                              />
                            </div>
                            <div className="col-md-2">
                              <div className="input-group">
                                <span className="input-group-text">₹</span>
                                <input
                                  type="text"
                                  className="form-control"
                                  onChange={(evnt) =>
                                    handleChangeLot(index, evnt)
                                  }
                                  value={amount}
                                  name="amount"
                                />
                              </div>
                            </div>
                            {inputFieldsForLotSize?.length !== 1 ? (
                              <div className="col-md-2">
                                <button
                                  className="btn btn-sm btn-light-danger"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    removeInputFieldsForLotSize();
                                  }}
                                >
                                  <i className="la la-trash-o"></i>Delete
                                </button>
                              </div>
                            ) : (
                              ""
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="form-group mt-5">
                  <button
                    className="btn btn-light-primary"
                    onClick={(e) => addInputFieldForLotSize(e)}
                  >
                    <i className="la la-plus"></i>Add
                  </button>
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
                  <div data-repeater-list="kt_ipo_peers_comparison_repeater">
                    {inputFieldsForPeers.map((data, index) => {
                      const { company_name, PB, PE, RoNW, Revenue } = data;
                      return (
                        <div>
                          <div className="form-group row mb-5">
                            <div className="col-md-2">
                              <input
                                type="text"
                                className="form-control"
                                onChange={(evnt) =>
                                  handleChangePeers(index, evnt)
                                }
                                value={company_name}
                                name="company_name"
                              />
                            </div>
                            <div className="col-md-2">
                              <input
                                type="text"
                                className="form-control"
                                onChange={(evnt) =>
                                  handleChangePeers(index, evnt)
                                }
                                value={PB}
                                name="PB"
                              />
                            </div>
                            <div className="col-md-2">
                              <input
                                type="text"
                                className="form-control"
                                onChange={(evnt) =>
                                  handleChangePeers(index, evnt)
                                }
                                value={PE}
                                name="PE"
                              />
                            </div>
                            <div className="col-md-2">
                              <input
                                type="text"
                                className="form-control"
                                onChange={(evnt) =>
                                  handleChangePeers(index, evnt)
                                }
                                value={RoNW}
                                name="RoNW"
                              />
                            </div>
                            <div className="col-md-2">
                              <input
                                type="text"
                                className="form-control"
                                name="Revenue"
                                onChange={(evnt) =>
                                  handleChangePeers(index, evnt)
                                }
                                value={Revenue}
                              />
                            </div>
                            {inputFieldsForPeers?.length !== 1 ? (
                              <div className="col-md-2">
                                <button
                                  className="btn btn-sm btn-light-danger"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    removeInputFieldsForPeers();
                                  }}
                                >
                                  <i className="la la-trash-o"></i>Delete
                                </button>
                              </div>
                            ) : (
                              ""
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="form-group mt-5">
                  <button
                    className="btn btn-light-primary"
                    onClick={(e) => {
                      e.preventDefault();
                      addInputFieldForPeers();
                    }}
                  >
                    <i className="la la-plus"></i>Add
                  </button>
                </div>
              </div>
            </div>

            <div className="d-flex justify-content-end">
              <button className="btn btn-primary" onClick={() => prevStep()}>
                {"<< previous"}
              </button>
              <button
                className="btn btn-primary ml-2"
                type="submit"
                style={{ marginLeft: "5px" }}
              >
                {/* onClick={() => nextStep()} */}
                {"Next >>"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default FinancialsTab;
