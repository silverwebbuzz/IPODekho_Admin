import React from "react";
import { useState } from "react";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import "../../assets/css/style.bundle.css";
import "../../assets/plugins/global/plugins.bundle.css";
import { modules } from "../../Constants/commonConstants";
import { Formik, Form, Field } from "formik";
const GeneralTab = ({ IPODATA }) => {
  const [companyDescription, setCompanyDescription] =
    useState("<h1>HEllO</h1>");
  console.log(IPODATA);

  // company_name: values.company_name,
  // faceValue: values.faceValue,
  // price: values.price,
  // lotSize: values.lotSize,
  // issueSize: values.issueSize,
  // freshIssue: values.freshIssue,
  // OfferForSale: values.OfferForSale,
  // retailQuota: values.retailQuota,
  // qibQuota: values.qibQuota,
  // niiQuota: values.niiQuota,
  // issueType: values.issueType,
  // listingAt: values.listingAt,
  // drhp: values.drhp,
  // rhp: values.rhp,
  // sharehold: values.sharehold,
  // posthold: values.posthold,
  const initialValues = {
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
    sharehold: IPODATA?.preIssueShareHolding,
    posthold: IPODATA?.postIssueShareHolding,
  };
  const handleSubmit = (values) => {
    console.log(values);
  };
  return (
    <>
      <div>
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => handleSubmit(values)}
        >
          {({ values, errors, touched, isSubmitting }) => (
            <Form>
              <div className="card card-flush py-4">
                <div className="card-header">
                  <div className="card-title">
                    <h2>IPO Info</h2>
                  </div>
                </div>

                <div className="card-body pt-0">
                  <div className="mb-10 fv-row">
                    <label className="required form-label">Comapny Name</label>
                    <Field
                      type="text"
                      name="company_name"
                      className="form-control mb-2"
                      placeholder="Comapny Name"
                      // value="Elin Electronics Ltd."
                      required
                      disabled
                    />
                  </div>

                  <div className="mb-10">
                    <label className="form-label ">Comapny Description</label>
                    <ReactQuill
                      readOnly
                      className="min-h-200px h-200px "
                      modules={modules}
                      onChange={setCompanyDescription}
                      value={companyDescription}
                    />
                  </div>
                  <br />
                  <br />
                  <div className="mt-4">
                    <label className="form-label ">Objects of the Issue</label>
                    <ReactQuill
                      readOnly
                      className="min-h-150px h-150px mb-2 "
                      modules={modules}
                      onChange={setCompanyDescription}
                      value={companyDescription}
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
                        <Field
                          type="text"
                          name="faceValue"
                          className="form-control"
                          // value="₹5"
                          disabled
                        />
                        <span className="input-group-text">Per Share</span>
                      </div>
                    </div>

                    <div className="input-group">
                      <Field
                        type="number"
                        name="FromPrice"
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
                  <div className="d-flex flex-wrap gap-5 mb-10">
                    <div className="w-100 fv-row flex-md-root">
                      <label className="form-label">Lot Size</label>
                      <div className="input-group">
                        <Field
                          type="text"
                          name="lotSize"
                          className="form-control"
                          // value="60"
                          disabled
                        />
                        <span className="input-group-text">Share</span>
                      </div>
                    </div>

                    <div className="w-100 fv-row flex-md-root">
                      <label className="form-label">Issue Size</label>
                      <div className="input-group">
                        <span className="input-group-text">Approx</span>
                        <Field
                          type="text"
                          name="issueSize"
                          className="form-control"
                          disabled
                          // value="₹475 Crores"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="d-flex flex-wrap gap-5 mb-10">
                    <div className="w-100 fv-row flex-md-root">
                      <label className="form-label">Fresh Issue</label>
                      <div className="input-group">
                        <span className="input-group-text">Approx</span>
                        <Field
                          type="text"
                          name="freshIssue"
                          className="form-control"
                          disabled
                          // value="₹175 Crores"
                        />
                      </div>
                    </div>

                    <div className="w-100 fv-row flex-md-root">
                      <label className="form-label">Offer for Sale</label>
                      <div className="input-group">
                        <span className="input-group-text">Approx</span>
                        <Field
                          type="text"
                          name="OfferForSale"
                          className="form-control"
                          disabled
                          // value="₹300 Crores"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="d-flex flex-wrap gap-5 mb-10">
                    <div className="w-100 fv-row flex-md-root">
                      <label className="form-label">Retail Quota</label>
                      <Field
                        type="text"
                        name="retailQuota"
                        className="form-control"
                        disabled
                        // value="35%"
                      />
                    </div>

                    <div className="w-100 fv-row flex-md-root">
                      <label className="form-label">QIB Quota</label>
                      <Field
                        name="qibQuota"
                        type="text"
                        className="form-control"
                        disabled
                        // value="50%"
                      />
                    </div>

                    <div className="w-100 fv-row flex-md-root">
                      <label className="form-label">NII Quota</label>
                      <Field
                        type="text"
                        name="niiQuota"
                        className="form-control"
                        disabled
                        // value="15%"
                      />
                    </div>
                  </div>
                  <div className="d-flex flex-wrap gap-5 mb-10">
                    <div className="w-100 fv-row flex-md-root">
                      <label className="form-label">Issue Type</label>
                      <Field
                        type="text"
                        name="issueType"
                        className="form-control"
                        // value="Book Built Issue IPO"
                        disabled
                      />
                    </div>

                    <div className="w-100 fv-row flex-md-root">
                      <label className="form-label">Listing At</label>
                      {/* <Field
                      name="listingAt"
                      className="form-select mb-2"
                      data-control="select2"
                      data-placeholder="Select an option"
                      data-allow-clear="true"
                      multiple="multiple"
                    >
                      <option value="BSE" selected>
                        BSE
                      </option>
                      <option value="NSE" selected>
                        NSE
                      </option>
                    </Field> */}
                    </div>
                  </div>
                  <div className="d-flex flex-wrap gap-5">
                    <div className="w-100 fv-row flex-md-root">
                      <label className="form-label">DRHP Draft</label>
                      <Field
                        type="text"
                        name="drhp"
                        className="form-control"
                        disabled
                        // value=""
                      />
                    </div>

                    <div className="w-100 fv-row flex-md-root">
                      <label className="form-label">RHP Draft</label>
                      <Field
                        type="text"
                        name="rhp"
                        className="form-control"
                        disabled
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
                      <Field
                        name="sharehold"
                        type="text"
                        className="form-control"
                        // value="53.98%"
                        disabled
                      />
                    </div>

                    <div className="w-100 fv-row flex-md-root">
                      <label className="form-label">
                        Post Issue Share Holding
                      </label>
                      <Field
                        name="posthold"
                        type="text"
                        className="form-control"
                        // value="32.93%"
                        disabled
                      />
                    </div>
                  </div>

                  <div id="kt_promoters_list">
                    <div className="form-group">
                      <label className="form-label">Promoters Name</label>
                      <div data-repeater-list="kt_promoters_list">
                        {/* map array */}
                        {IPODATA?.General?.promotersName?.map((Itm) => {
                          return (
                            <div data-repeater-item>
                              <div className="form-group row mb-5">
                                <div className="col-md-8">
                                  <input
                                    type="text"
                                    className="form-control"
                                    value={Itm}
                                    disabled
                                  />
                                </div>
                                <div className="col-md-4">
                                  <a
                                    href="javascript:;"
                                    data-repeater-delete
                                    className="btn btn-sm btn-light-danger"
                                    disabled
                                  >
                                    <i className="la la-trash-o"></i>Delete
                                  </a>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    <div className="form-group mt-5">
                      <a
                        href="javascript:;"
                        data-repeater-create
                        className="btn btn-light-primary"
                      >
                        <i className="la la-plus"></i>Add
                      </a>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-end">
                  {/* <a href="mainlineipo.html" className="btn btn-light me-5">
                    Cancel
                  </a>
                  <button
                    type="submit"
                    // id="kt_ecommerce_add_product_submit"
                    className="btn btn-primary"
                  >
                    <span className="indicator-label">Save Changes</span>
                  </button> */}
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
