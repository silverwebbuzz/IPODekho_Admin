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
import { tabIsactivateForFinacial } from "../../redux/slice/stapperSlice";
const GeneralTab = ({ EditIpo, IPODATA, handleChange, next, values }) => {
  console.log("valuesvaluesvaluesvaluesvaluesvalues", values);
  const customStyle = {
    verticalAlign: "middle",
  };
  const [companyDescription, setCompanyDescription] = useState(
    "<h1>type somthing</h1>"
  );
  const [objectsOfIssue, setObjectsOfIssue] = useState(
    "<h1>type somthing</h1>"
  );
  const pramotersName = [];
  const dispatch = useDispatch();

  // const handleSubmit = (values) => {
  //   console.log(values);
  //   const payload = {
  //     companyName: values?.company_name,
  //     companyDescription: companyDescription,
  //     ObjectOfIssue: objectsOfIssue,
  //     faceValue: values?.faceValue,
  //     fromPrice: values?.FromPrice,
  //     toPrice: values?.toPrice,
  //     lotSize: values?.lotSize,
  //     issueSize: values?.issueSize,
  //     freshIssue: values?.freshIssue,
  //     offerForSale: values?.OfferForSale,
  //     reatailQuota: values?.retailQuota,
  //     qibQuota: values?.qibQuota,
  //     nilQuota: values?.niiQuota,
  //     issueType: values?.issueType,
  //     listingAt: values?.listingAt,
  //     DRHPDraft: values?.drhp,
  //     RHPDraft: values?.rhp,
  //     promotersName: values?.pramotersName,
  //     preIssueShareHolding: values?.sharehold,
  //     postIssueShareHolding: values?.posthold,
  //   };
  //   dispatch(createMainLineIpo({ payload }));
  // };

  return (
    <>
      <div>
        {/* <Formik
          initialValues={
            EditIpo
              ? {
                  company_name: IPODATA?.companyName,
                  faceValue: IPODATA?.faceValue,
                  FromPrice: IPODATA?.fromPrice,
                  toPrice: IPODATA?.toPrice,
                  lotSize: IPODATA?.lotSize,
                  issueSize: IPODATA?.issueSize,
                  freshIssue: IPODATA?.freshIssue,
                  OfferForSale: IPODATA?.offerForSale,
                  retailQuota: IPODATA?.General?.reatailQuota,
                  qibQuota: IPODATA?.qibQuota,
                  niiQuota: IPODATA?.nilQuota,
                  issueType: IPODATA?.issueType,
                  listingAt: IPODATA?.listingAt,
                  drhp: IPODATA?.DRHPDraft,
                  rhp: IPODATA?.RHPDraft,
                  pramotersName: IPODATA?.promotersName,
                  sharehold: IPODATA?.preIssueShareHolding,
                  posthold: IPODATA?.postIssueShareHolding,
                }
              : {
                  company_name: "",
                  faceValue: "",
                  FromPrice: "",
                  toPrice: "",
                  lotSize: "",
                  issueSize: "",
                  freshIssue: "",
                  OfferForSale: "",
                  retailQuota: "",
                  qibQuota: "",
                  niiQuota: "",
                  issueType: "",
                  listingAt: "",
                  drhp: "",
                  rhp: "",
                  pramotersName: [],
                  sharehold: "",
                  posthold: "",
                }
          }
          onSubmit={(values) => {
            handleChange(values);
          }}
        >
          {({ values }) => (
            <Form> */}
        <form>
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
                  onChange={setCompanyDescription}
                  Value={companyDescription}
                />
              </div>
              <br />
              <br />
              <div className="mt-4">
                <label className="form-label ">Objects of the Issue</label>
                <ReactQuill
                  className="min-h-150px h-150px mb-2 "
                  modules={modules}
                  onChange={setObjectsOfIssue}
                  Value={objectsOfIssue}
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

                      // value="₹5"
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
                      // value="₹234 to ₹247"
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
                      // value="₹234 to ₹247"
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

                      // value="60"
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

                      // value="₹475 Crores"
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

                      // value="₹175 Crores"
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

                      // value="₹300 Crores"
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

                      // value="35%"
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

                      // value="50%"
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

                      // value="15%"
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
                  {/* <input
                    name="listingAt"
                    // id="multiSelectCustom"
                    placeholder="Multi Select"
                    isMulti={true}
                    component={MultiSelect}
                    options={[
                      { value: "BSE", label: "BSE" },
                      { value: "NSE", label: "NSE" },
                    ]}
                    onChange={(e) =>handleChange("issueType")}
                  /> */}
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

                    // value=""
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

                    // value=""
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

                <div className="form-group mt-5">
                  {/* <button
                        // href="javascript:;"
                        data-repeater-create
                        className="btn btn-light-primary"
                      >
                        <i className="la la-plus"></i>Add
                      </button> */}
                </div>
              </div>
            </div>
          </div>
        </form>
        {/* </Form>
          )}
        </Formik> */}
        <div>
          <button onClick={(e) => next(e)}>next</button>
        </div>
      </div>
    </>
  );
};

export default GeneralTab;
