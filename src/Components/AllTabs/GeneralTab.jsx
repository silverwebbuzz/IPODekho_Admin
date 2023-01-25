import React from "react";
import { useState } from "react";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import "../../assets/css/style.bundle.css";
import "../../assets/plugins/global/plugins.bundle.css";
import { modules } from "../../Constants/commonConstants";
import { Formik, Form, Field, FieldArray } from "formik";
import { createMainLineIpo } from "../../redux/slice/mainLineIpoSlices";
import { useDispatch } from "react-redux";
import MultiSelect from "../MultiSelect";
// import { tabIsactivateForFinacial } from "../../redux/slice/stapperSlice";
const GeneralTab = ({ EditIpo, IPODATA, handleChange, nextStep, values }) => {
  const customStyle = {
    verticalAlign: "middle",
  };
  const [inputFields, setInputFields] = useState([
    {
      name: "",
    },
  ]);
  const pramotersName = [];
  const dispatch = useDispatch();
  const submitFormData = (e) => {
    e.preventDefault();
    nextStep();
  };
  const handleChangeCF = (index, evnt) => {
    let { name, value } = evnt.target;
    let list = [...inputFields];
    list[index][name] = value;
    setInputFields(list);
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
  const removeInputFields = (index) => {
    const rows = [...inputFields];
    rows.splice(index, 1);
    setInputFields(rows);
  };
  return (
    <>
      <div>
        <form onSubmit={submitFormData}>
          <div className="card card-flush py-4">
            <div className="card-header">
              <div className="card-title">
                <h2>IPO Info</h2>
              </div>
            </div>

            <div className="card-body pt-0">
              <div className="mb-10 fv-row">
                <label className="required form-label">Company Name</label>
                <input
                  type="text"
                  name="company_name"
                  className="form-control mb-2"
                  placeholder="Comapny Name"
                  Value={values?.company_name}
                  onChange={(e) => handleChange("company_name", e.target.value)}
                  required
                />
              </div>

              <div className="mb-10">
                <label className="form-label ">Comapny Description</label>
                <ReactQuill
                  className="min-h-200px h-200px "
                  modules={modules}
                  onChange={(e) => handleChange("companyDescription", e)}
                  value={values?.companyDescription?.toString()}
                />
              </div>
              <br />
              <br />
              <div className="mt-4">
                <label className="form-label ">Objects of the Issue</label>
                <ReactQuill
                  className="min-h-150px h-150px mb-2 "
                  modules={modules}
                  onChange={(e) => handleChange("objectsOfIssue", e)}
                  value={values?.objectsOfIssue?.toString()}
                />
              </div>
            </div>
          </div>
          <br />

          <div className="card card-flush py-4">
            <div className="card-header">
              <div className="card-title">
                <h2>IPO Details</h2>
              </div>
            </div>

            <div className="card-body pt-0">
              <div className="d-flex flex-wrap gap-5 mb-10">
                <div className="w-100 fv-row flex-md-root">
                  <label className="form-label">Face Value</label>
                  <div className="input-group">
                    <span className="input-group-text">₹</span>
                    <input
                      type="number"
                      name="faceValue"
                      className="form-control"
                      onChange={(e) =>
                        handleChange("faceValue", e.target.value)
                      }
                      Value={values?.faceValue}
                    />
                    <span className="input-group-text">Per Share</span>
                  </div>
                </div>

                <div className="w-100 fv-row flex-md-root">
                  <label className="form-label">Price</label>
                  <div className="input-group">
                    <span className="input-group-text">₹</span>
                    <input
                      type="number"
                      name="fromPrice"
                      className="form-control"
                      Value={values?.fromPrice}
                      onChange={(e) =>
                        handleChange("fromPrice", e.target.value)
                      }
                    />
                    <span className="input-group-text">to</span>
                    <input
                      type="number"
                      name="toPrice"
                      className="form-control"
                      Value={values?.toPrice}
                      onChange={(e) => handleChange("toPrice", e.target.value)}
                    />
                    <span className="input-group-text">Per Share</span>
                  </div>
                </div>
              </div>
              <div className="d-flex flex-wrap gap-5 mb-10">
                <div className="w-100 fv-row flex-md-root">
                  <label className="form-label">Lot Size</label>
                  <div className="input-group">
                    <input
                      type="number"
                      name="lotSize"
                      className="form-control"
                      onChange={(e) => handleChange("lotSize", e.target.value)}
                      Value={values?.lotSize}
                    />
                    <span className="input-group-text">Share</span>
                  </div>
                </div>

                <div className="w-100 fv-row flex-md-root">
                  <label className="form-label">Issue Size</label>
                  <div className="input-group">
                    <span className="input-group-text">Approx</span>
                    <span className="input-group-text">₹</span>
                    <input
                      type="number"
                      name="issueSize"
                      className="form-control"
                      onChange={(e) =>
                        handleChange("issueSize", e.target.value)
                      }
                      Value={values?.issueSize}
                    />
                    <span className="input-group-text">Crores</span>
                  </div>
                </div>
              </div>
              <div className="d-flex flex-wrap gap-5 mb-10">
                <div className="w-100 fv-row flex-md-root">
                  <label className="form-label">Fresh Issue</label>
                  <div className="input-group">
                    <span className="input-group-text">Approx</span>
                    <span className="input-group-text">₹</span>
                    <input
                      type="number"
                      name="freshIssue"
                      className="form-control"
                      onChange={(e) =>
                        handleChange("freshIssue", e.target.value)
                      }
                      Value={values?.freshIssue}
                    />
                    <span className="input-group-text">Crores</span>
                  </div>
                </div>

                <div className="w-100 fv-row flex-md-root">
                  <label className="form-label">Offer for Sale</label>
                  <div className="input-group">
                    <span className="input-group-text">Approx</span>
                    <span className="input-group-text">₹</span>
                    <input
                      type="number"
                      name="OfferForSale"
                      className="form-control"
                      onChange={(e) =>
                        handleChange("OfferForSale", e.target.value)
                      }
                      Value={values?.OfferForSale}
                    />
                    <span className="input-group-text">Crores</span>
                  </div>
                </div>
              </div>
              <div className="d-flex flex-wrap gap-5 mb-10">
                <div className="w-100 fv-row flex-md-root">
                  <label className="form-label">Retail Quota</label>
                  <div className="input-group">
                    <input
                      type="number"
                      name="retailQuota"
                      className="form-control"
                      onChange={(e) =>
                        handleChange("retailQuota", e.target.value)
                      }
                      Value={values?.retailQuota}
                    />
                    <span className="input-group-text">%</span>
                  </div>
                </div>

                <div className="w-100 fv-row flex-md-root">
                  <label className="form-label">QIB Quota</label>
                  <div className="input-group">
                    <input
                      name="qibQuota"
                      type="number"
                      className="form-control"
                      onChange={(e) => handleChange("qibQuota", e.target.value)}
                      Value={values?.qibQuota}
                    />
                    <span className="input-group-text">%</span>
                  </div>
                </div>

                <div className="w-100 fv-row flex-md-root">
                  <label className="form-label">NII Quota</label>
                  <div className="input-group">
                    <input
                      type="number"
                      name="niiQuota"
                      className="form-control"
                      onChange={(e) => handleChange("niiQuota", e.target.value)}
                      Value={values?.niiQuota}
                    />
                    <span className="input-group-text">%</span>
                  </div>
                </div>
              </div>

              <div className="d-flex flex-wrap gap-5 mb-10">
                <div className="w-100 fv-row flex-md-root">
                  <label className="form-label">Issue Type</label>
                  <input
                    type="text"
                    name="issueType"
                    className="form-control"
                    onChange={(e) => handleChange("issueType", e.target.value)}
                    Value={values?.issueType}
                  />
                </div>

                <div className="w-100 fv-row flex-md-root">
                  <label className="form-label">Listing At</label>
                  <input
                    name="listingAt"
                    // id="multiSelectCustom"
                    placeholder="Multi Select"
                    isMulti={true}
                    component={MultiSelect}
                    options={[
                      { value: "BSE", label: "BSE" },
                      { value: "NSE", label: "NSE" },
                    ]}
                    //onChange={(e) =>handleChange("issueType")}
                  />
                </div>
              </div>
              <div className="d-flex flex-wrap gap-5">
                <div className="w-100 fv-row flex-md-root">
                  <label className="form-label">DRHP Draft</label>
                  <input
                    type="text"
                    name="drhp"
                    className="form-control"
                    onChange={(e) => handleChange("drhp", e.target.value)}
                    Value={values?.drhp}
                  />
                </div>

                <div className="w-100 fv-row flex-md-root">
                  <label className="form-label">RHP Draft</label>
                  <input
                    type="text"
                    name="rhp"
                    className="form-control"
                    onChange={(e) => handleChange("rhp", e.target.value)}
                    Value={values?.rhp}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="card card-flush py-4">
            <div className="card-header">
              <div className="card-title">
                <h2>Promoters</h2>
              </div>
            </div>

            <div className="card-body pt-0">
              <div className="d-flex flex-wrap gap-5 mb-10">
                <div className="w-100 fv-row flex-md-root">
                  <label className="form-label">Pre Issue Share Holding</label>
                  <div className="input-group">
                    <input
                      name="sharehold"
                      type="number"
                      className="form-control"
                      onChange={(e) =>
                        handleChange("sharehold", e.target.value)
                      }
                      Value={values?.sharehold}
                    />
                    <span className="input-group-text">%</span>
                  </div>
                </div>

                <div className="w-100 fv-row flex-md-root">
                  <label className="form-label">Post Issue Share Holding</label>
                  <div className="input-group">
                    <input
                      name="posthold"
                      type="number"
                      className="form-control"
                      onChange={(e) => handleChange("posthold", e.target.value)}
                      Value={values?.posthold}
                    />
                    <span className="input-group-text">%</span>
                  </div>
                </div>
              </div>

              <div id="kt_promoters_list">
                <div className="form-group">
                  <label className="form-label">Promoters Name</label>
                  <div data-repeater-list="kt_promoters_list">
                    {inputFields.map((data, index) => {
                      const { name } = data;
                      return (
                        <div className="row my-3" key={index}>
                          <div className="col">
                            <div className="form-group">
                              <input
                                type="text"
                                onChange={(evnt) => handleChangeCF(index, evnt)}
                                value={name}
                                name="name"
                                className="form-control kt_financial_info_period"
                                placeholder="Pramoters Name"
                              />
                            </div>
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
                    <div className="form-group mt-5">
                      <button
                        onClick={(e) => addInputField(e)}
                        className="btn btn-light-primary"
                      >
                        <i className="la la-plus"></i>Add
                      </button>
                    </div>
                    {/* {/ map array /} */}
                    {/* {pramotersName?.map((i,Itm) => {
                        <div data-repeater-item>
                          <div className="form-group row mb-5">
                            <div className="col-md-8">
                              <input
                                type="text"
                                className="form-control"
                                Value={Itm}
                              />
                            </div>
                            <div className="col-md-4">
                              <a
                                href="javascript:;"
                                data-repeater-delete
                                className="btn btn-sm btn-light-danger"
                              >
                                <i className="la la-trash-o"></i>Delete
                              </a>
                            </div>
                          </div>
                        </div>;
                      })} */}
                    {/* <inputArray
                      name="pramotersName"
                      render={(arrayHelpers) => (
                        <div>
                          {values?.pramotersName?.map(
                            (pramotersName, index) => (
                              <div key={index}>
                              
                                <div className="col-md-8 d-flex">
                                  <input
                                    className="form-control mt-2"
                                    name={`pramotersName[${index}].name`}
                                  />
                                  <div className="col-md-4">
                                    <button
                                      type="button"
                                      data-repeater-delete
                                      style={{
                                        marginLeft: "20px",
                                      }}
                                      className="btn btn-sm btn-light-danger mb-2 mt-3 "
                                      onClick={() => arrayHelpers.remove(index)}
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
                            className="btn btn-light-primary mt-2"
                            onClick={() => arrayHelpers.push({ name: "" })}
                          >
                            <i className="la la-plus" /> Add
                          </button>
                        </div>
                      )}
                    /> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-end">
              <button type="submit" className="btn btn-primary">
                {/* onClick={() => handleNext()} */}
                {"Next >>"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default GeneralTab;
