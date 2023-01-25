import React from "react";
import { useState } from "react";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import "../../assets/css/style.bundle.css";
import "../../assets/plugins/global/plugins.bundle.css";
import { modules } from "../../Constants/commonConstants";
import { Formik, Form, Field, FieldArray } from "formik";
import { createMainLineIpo } from "../../redux/slice/mainLineIpoSlices";
import { useDispatch, useSelector } from "react-redux";
import MultiSelect from "../MultiSelect";
import {
  setDescription,
  setObjectsOfIssue,
} from "../../redux/slice/textEditorSlice";
const GeneralTab = ({ IPODATA, EditIpo }) => {
  const customStyle = {
    verticalAlign: "middle",
  };
  const { companyDescription, objectsOfIssue } = useSelector(
    (state) => state.textEditorReducer
  );
  const dispatch = useDispatch();

  // const [companyDescription, setCompanyDescription] = useState(
  //   "<h1>type somthing</h1>"
  // );
  // const [objectsOfIssue, setObjectsOfIssue] = useState(
  //   "<h1>type somthing</h1>"
  // );
  // const pramotersName = [];

  const handleEditorChange = () => {
    dispatch(setDescription());
    dispatch(setObjectsOfIssue());
  };

  const handleSubmit = (values) => {
    console.log(values);
    const payload = {
      companyName: values?.company_name,
      companyDescription: companyDescription,
      ObjectOfIssue: objectsOfIssue,
      faceValue: values?.faceValue,
      fromPrice: values?.FromPrice,
      toPrice: values?.toPrice,
      lotSize: values?.lotSize,
      issueSize: values?.issueSize,
      freshIssue: values?.freshIssue,
      offerForSale: values?.OfferForSale,
      reatailQuota: values?.retailQuota,
      qibQuota: values?.qibQuota,
      nilQuota: values?.niiQuota,
      issueType: values?.issueType,
      listingAt: values?.listingAt,
      DRHPDraft: values?.drhp,
      RHPDraft: values?.rhp,
      promotersName: values?.pramotersName,
      preIssueShareHolding: values?.sharehold,
      postIssueShareHolding: values?.posthold,
    };
    dispatch(createMainLineIpo({ payload }));
  };

  return (
    <>
      <div>
        <Formik
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
          onSubmit={(values) => handleSubmit(values)}
        >
          {({ values }) => (
            <Form>
              <div className="card card-flush py-4">
                <div className="card-header">
                  <div className="card-title">
                    <h2>IPO Info</h2>
                  </div>
                </div>

                <div className="card-body pt-0">
                  <div className="mb-10 fv-row">
                    <label className="required form-label">Company Name</label>
                    <Field
                      type="text"
                      name="company_name"
                      className="form-control mb-2"
                      placeholder="Comapany Name"
                      // value="Elin Electronics Ltd."
                      required
                    />
                  </div>

                  <div className="mb-10">
                    <label className="form-label ">Comapny Description</label>
                    <ReactQuill
                      className="min-h-200px h-200px "
                      modules={modules}
                      // onChange={setCompanyDescription}
                      onChange={handleEditorChange}
                      value={companyDescription}
                    />
                  </div>
                  <br />
                  <br />
                  <div className="mt-4">
                    <label className="form-label ">Objects of the Issue</label>
                    <ReactQuill
                      className="min-h-150px h-150px mb-2 "
                      modules={modules}
                      onChange={handleEditorChange}
                      value={objectsOfIssue}
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
                        <Field
                          type="number"
                          name="faceValue"
                          className="form-control"
                          // value="₹5"
                        />
                        <span className="input-group-text">Per Share</span>
                      </div>
                    </div>

                    <div className="w-100 fv-row flex-md-root">
                      <label className="form-label">Price</label>
                      <div className="input-group">
                        <span className="input-group-text">₹</span>
                        <Field
                          type="number"
                          name="fromPrice"
                          className="form-control"
                          // value="₹234 to ₹247"
                        />
                        <span className="input-group-text">to</span>
                        <Field
                          type="number"
                          name="toPrice"
                          className="form-control"
                          // value="₹234 to ₹247"
                        />
                        <span className="input-group-text">Per Share</span>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex flex-wrap gap-5 mb-10">
                    <div className="w-100 fv-row flex-md-root">
                      <label className="form-label">Lot Size</label>
                      <div className="input-group">
                        <Field
                          type="number"
                          name="lotSize"
                          className="form-control"
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
                        <Field
                          type="number"
                          name="issueSize"
                          className="form-control"
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
                        <Field
                          type="number"
                          name="freshIssue"
                          className="form-control"
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
                        <Field
                          type="number"
                          name="OfferForSale"
                          className="form-control"
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
                        <Field
                          type="number"
                          name="retailQuota"
                          className="form-control"
                          // value="35%"
                        />
                        <span className="input-group-text">%</span>
                      </div>
                    </div>

                    <div className="w-100 fv-row flex-md-root">
                      <label className="form-label">QIB Quota</label>
                      <div className="input-group">
                        <Field
                          name="qibQuota"
                          type="number"
                          className="form-control"
                          // value="50%"
                        />
                        <span className="input-group-text">%</span>
                      </div>
                    </div>

                    <div className="w-100 fv-row flex-md-root">
                      <label className="form-label">NII Quota</label>
                      <div className="input-group">
                        <Field
                          type="number"
                          name="niiQuota"
                          className="form-control"
                          // value="15%"
                        />
                        <span className="input-group-text">%</span>
                      </div>
                    </div>
                  </div>

                  <div className="d-flex flex-wrap gap-5 mb-10">
                    <div className="w-100 fv-row flex-md-root">
                      <label className="form-label">Issue Type</label>
                      <Field
                        type="text"
                        name="issueType"
                        className="form-control"
                      />
                    </div>

                    <div className="w-100 fv-row flex-md-root">
                      <label className="form-label">Listing At</label>
                      <Field
                        name="listingAt"
                        // id="multiSelectCustom"
                        placeholder="Multi Select"
                        isMulti={true}
                        component={MultiSelect}
                        options={[
                          { value: "BSE", label: "BSE" },
                          { value: "NSE", label: "NSE" },
                        ]}
                      />
                    </div>
                  </div>
                  <div className="d-flex flex-wrap gap-5">
                    <div className="w-100 fv-row flex-md-root">
                      <label className="form-label">DRHP Draft</label>
                      <Field
                        type="text"
                        name="drhp"
                        className="form-control"
                        // value=""
                      />
                    </div>

                    <div className="w-100 fv-row flex-md-root">
                      <label className="form-label">RHP Draft</label>
                      <Field
                        type="text"
                        name="rhp"
                        className="form-control"
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
                      <label className="form-label">
                        Pre Issue Share Holding
                      </label>
                      <div className="input-group">
                        <Field
                          name="sharehold"
                          type="number"
                          className="form-control"
                        />
                        <span className="input-group-text">%</span>
                      </div>
                    </div>

                    <div className="w-100 fv-row flex-md-root">
                      <label className="form-label">
                        Post Issue Share Holding
                      </label>
                      <div className="input-group">
                        <Field
                          name="posthold"
                          type="number"
                          className="form-control"
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
                                value={Itm}
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
                        <FieldArray
                          name="pramotersName"
                          render={(arrayHelpers) => (
                            <div>
                              {values?.pramotersName?.map(
                                (pramotersName, index) => (
                                  <div key={index}>
                                    {/** both these conventions do the same */}
                                    <div className="col-md-8 d-flex">
                                      <Field
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
                                          onClick={() =>
                                            arrayHelpers.remove(index)
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
                                className="btn btn-light-primary mt-2"
                                onClick={() => arrayHelpers.push({ name: "" })}
                              >
                                <i className="la la-plus" /> Add
                              </button>
                            </div>
                          )}
                        />
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

export default GeneralTab;
