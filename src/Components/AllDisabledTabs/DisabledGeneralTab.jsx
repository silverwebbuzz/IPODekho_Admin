import React from "react";
import { useState } from "react";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import "../../assets/css/style.bundle.css";
import "../../assets/plugins/global/plugins.bundle.css";
import { modules } from "../../Constants/commonConstants";
import { Formik, Form, Field, FieldArray } from "formik";
import MultiSelect from "../MultiSelect";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const DisabledGeneralTab = () => {
  const { getIPODataById } = useSelector((state) => state?.mainLineIpoSlice);

  return (
    <>
      <Formik
        enableReinitialize
        initialValues={{
          companyName: getIPODataById?.companyName,
          companyDescription: getIPODataById?.companyDescription,
          ObjectOfIssue: getIPODataById?.ObjectOfIssue,
          faceValue: getIPODataById?.faceValue,
          fromPrice: getIPODataById?.fromPrice,
          toPrice: getIPODataById?.toPrice,
          lotSize: getIPODataById?.lotSize,
          issueSize: getIPODataById?.issueSize,
          freshIssue: getIPODataById?.freshIssue,
          offerForSale: getIPODataById?.offerForSale,
          reatailQuota: getIPODataById?.reatailQuota,
          qibQuota: getIPODataById?.qibQuota,
          nilQuota: getIPODataById?.nilQuota,
          issueType: getIPODataById?.issueType,
          listingAt: getIPODataById?.listingAt,
          DRHPDraft: getIPODataById?.DRHPDraft,
          RHPDraft: getIPODataById?.RHPDraft,
          preIssueShareHolding: getIPODataById?.preIssueShareHolding,
          postIssueShareHolding: getIPODataById?.postIssueShareHolding,
          promotersName: [],
        }}
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
                    name="companyName"
                    className="form-control mb-2"
                    disabled
                  />
                </div>

                <div className="mb-10">
                  <label className="form-label ">Comapny Description</label>
                  <ReactQuill
                    readOnly
                    className="min-h-200px h-200px "
                    modules={modules}
                    value={values?.companyDescription}
                  />
                </div>
                <br />
                <br />
                <div className="mt-4 mb-16">
                  <label className="form-label ">Objects of the Issue</label>
                  <ReactQuill
                    readOnly
                    className="min-h-150px h-150px mb-2 "
                    modules={modules}
                    value={values?.ObjectOfIssue}
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

                  <div className="w-100 fv-row flex-md-root">
                    <label className="form-label">Price</label>
                    <div className="input-group">
                      <Field
                        type="number"
                        name="fromPrice"
                        className="form-control"
                        disabled
                      />
                      <span className="input-group-text">to</span>
                      <Field
                        type="number"
                        name="toPrice"
                        className="form-control"
                        disabled
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
                        name="offerForSale"
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
                      name="reatailQuota"
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
                      name="nilQuota"
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
                    <Field
                      disabled
                      name="listingAt"
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
                      name="DRHPDraft"
                      className="form-control"
                      disabled
                      // value=""
                    />
                  </div>

                  <div className="w-100 fv-row flex-md-root">
                    <label className="form-label">RHP Draft</label>
                    <Field
                      type="text"
                      name="RHPDraft"
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
                      name="preIssueShareHolding"
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
                      name="postIssueShareHolding"
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
                      <FieldArray
                        name="promotersName"
                        render={(arrayHelpers) => (
                          <div>
                            {values?.promotersName?.map(
                              (promotersName, index) => (
                                <div key={index}>
                                  <div className="col-md-8 d-flex">
                                    <Field
                                      disabled
                                      className="form-control mt-2"
                                      name={`promotersName[${index}].name`}
                                    />
                                  </div>
                                </div>
                              )
                            )}
                          </div>
                        )}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default DisabledGeneralTab;
