import React from "react";
import { useState } from "react";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import "../../../assets/css/style.bundle.css";
import "../../../assets/plugins/global/plugins.bundle.css";
import { modules } from "../../../Constants/commonConstants";
import { Formik, Form, Field, FieldArray } from "formik";
import { createMainLineIpo } from "../../../redux/slice/mainLineIpoSlices";
import { useDispatch, useSelector } from "react-redux";
import MultiSelect from "../../MultiSelect";
import { useContext } from "react";
import { TabContext } from "../Tabs";

const GeneralTab = ({ ipoEdit }) => {
  const { ID, getIPODataById } = useSelector((state) => state.mainLineIpoSlice);
  const { tabData, setTabData } = useContext(TabContext);
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    const payload = {
      CategoryForIPOS: "MainlineIPO",
      companyName: values?.companyName || "",
      companyDescription: values?.companyDescription || "",
      ObjectOfIssue: values?.ObjectOfIssue || "",
      faceValue: values?.faceValue || "",
      fromPrice: values?.fromPrice || "",
      toPrice: values?.toPrice || "",
      lotSize: values?.lotSize || "",
      issueSize: values?.issueSize || "",
      freshIssue: values?.freshIssue || "",
      offerForSale: values?.OfferForSale || "",
      reatailQuota: values?.reatailQuota || "",
      qibQuota: values?.qibQuota || "",
      nilQuota: values?.nilQuota || "",
      issueType: values?.issueType || "",
      listingAt: values?.listingAt || "",
      DRHPDraft: values?.DRHPDraft || "",
      RHPDraft: values?.RHPDraft || "",
      preIssueShareHolding: values?.preIssueShareHolding || "",
      postIssueShareHolding: values?.postIssueShareHolding || "",
      promotersName: values?.promotersName || [],
    };
    if (ipoEdit) {
      payload.id = getIPODataById?.id;
      dispatch(createMainLineIpo({ payload }));
    } else {
      if (ID) {
        payload.id = ID;
        dispatch(createMainLineIpo({ payload }));
      } else {
        payload.id = null;
        dispatch(createMainLineIpo({ payload }));
      }
    }
  };
  // console.log(JSON.parse(localStorage.getItem("ID")));

  return (
    <>
      <div>
        <Formik
          enableReinitialize
          initialValues={
            ipoEdit
              ? {
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
                  promotersName: getIPODataById?.promotersName || [],
                }
              : {
                  companyName: tabData?.companyName || "",
                  companyDescription: tabData?.companyDescription || "",
                  ObjectOfIssue: tabData?.ObjectOfIssue || "",
                  faceValue: tabData?.faceValue || "",
                  fromPrice: tabData?.fromPrice || "",
                  toPrice: tabData?.toPrice || "",
                  lotSize: tabData?.lotSize || "",
                  issueSize: tabData?.issueSize || "",
                  freshIssue: tabData?.freshIssue || "",
                  offerForSale: tabData?.offerForSale || "",
                  reatailQuota: tabData?.reatailQuota || "",
                  qibQuota: tabData?.qibQuota || "",
                  nilQuota: tabData?.nilQuota || "",
                  issueType: tabData?.issueType || "",
                  listingAt: tabData?.listingAt || "",
                  DRHPDraft: tabData?.DRHPDraft || "",
                  RHPDraft: tabData?.RHPDraft || "",
                  preIssueShareHolding: tabData?.preIssueShareHolding || "",
                  postIssueShareHolding: tabData?.postIssueShareHolding || "",
                  promotersName: tabData?.promotersName || [],
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
                      placeholder="Comapny Name"
                      required
                    />
                  </div>

                  <div className="mb-10">
                    <label className="form-label ">Comapny Description</label>
                    <Field name="companyDescription">
                      {({ field }) => (
                        <ReactQuill
                          className="min-h-200px h-200px "
                          modules={modules}
                          value={field.value}
                          onChange={field.onChange(field.name)}
                        />
                      )}
                    </Field>{" "}
                  </div>
                  <br />
                  <br />
                  <div className="mt-4 mb-6">
                    <label className="form-label ">Objects of the Issue</label>
                    <Field name="ObjectOfIssue">
                      {({ field }) => (
                        <ReactQuill
                          className="min-h-200px h-200px "
                          modules={modules}
                          value={field.value}
                          onChange={field.onChange(field.name)}
                        />
                      )}
                    </Field>
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
                        />
                        <span className="input-group-text">to</span>
                        <Field
                          type="number"
                          name="toPrice"
                          className="form-control"
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
                          name="reatailQuota"
                          className="form-control"
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
                        />
                        <span className="input-group-text">%</span>
                      </div>
                    </div>

                    <div className="w-100 fv-row flex-md-root">
                      <label className="form-label">NII Quota</label>
                      <div className="input-group">
                        <Field
                          type="number"
                          name="nilQuota"
                          className="form-control"
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
                        name="DRHPDraft"
                        className="form-control"
                      />
                    </div>

                    <div className="w-100 fv-row flex-md-root">
                      <label className="form-label">RHP Draft</label>
                      <Field
                        type="text"
                        name="RHPDraft"
                        className="form-control"
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
                          name="preIssueShareHolding"
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
                          name="postIssueShareHolding"
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
                        <FieldArray
                          name="promotersName"
                          render={(arrayHelpers) => (
                            <div>
                              {values?.promotersName?.map(
                                (promotersName, index) => (
                                  <div key={index}>
                                    {/** both these conventions do the same */}
                                    <div className="col-md-8 d-flex">
                                      <Field
                                        className="form-control mt-2"
                                        name={`promotersName[${index}].name`}
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
                                onClick={(e) => {
                                  e.preventDefault();
                                  arrayHelpers.push({ name: "" });
                                }}
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
                <div className="d-flex justify-content-end">
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
