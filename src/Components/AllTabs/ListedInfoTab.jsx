import { Field, Form, Formik } from "formik";
import React from "react";
import { useContext } from "react";
import { FormContext } from "../../App";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  createMainLineIpo,
  updateIPO,
} from "../../redux/slice/mainLineIpoSlices";
import moment from "moment/moment";
const ListedInfoTab = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const form = new FormData();
  const handleAllDataSubmit = () => {
    // console.log(JSON.stringify(JSON.stringify(formData?.financialLotsize)));
    if (IpoType === "Edit") {
      let payloadEditData = {
        // id: prefillData?.id,
        // companyName: prefillData?.companyName || "",
        // companyDescription: prefillData?.companyDescription || "",
        // ObjectOfIssue: prefillData?.ObjectOfIssue || "",
        // faceValue: prefillData?.faceValue || "",
        // fromPrice: prefillData?.fromPrice || "",
        // toPrice: prefillData?.toPrice || "",
        // lotSize: prefillData?.lotSize || "",
        // issueSize: prefillData?.issueSize || "",
        // freshIssue: prefillData?.freshIssue || "",
        // offerForSale: prefillData?.OfferForSale || "",
        // reatailQuota: prefillData?.reatailQuota || "",
        // qibQuota: prefillData?.qibQuota || "",
        // nilQuota: prefillData?.nilQuota || "",
        // issueType: prefillData?.issueType || "",
        // listingAt: prefillData?.listingAt || "",
        // DRHPDraft: prefillData?.DRHPDraft || "",
        // RHPDraft: prefillData?.RHPDraft || "",
        // preIssueShareHolding: prefillData?.preIssueShareHolding || "",
        // postIssueShareHolding: prefillData?.postIssueShareHolding || "",
        // earningPerShare: prefillData?.earningPerShare || "",
        // earningPERatio: prefillData?.earningPERatio || "",
        // returnonNetWorth: prefillData?.returnonNetWorth || "",
        // netAssetValue: prefillData?.netAssetValue || "",
        // address: prefillData?.address || "",
        // companyPhone: prefillData?.companyPhone || "",
        // email: prefillData?.email || "",
        // website: prefillData?.website || "",
        // registerName: prefillData?.registerName || "",
        // registerPhone: prefillData?.registerPhone || "",
        // registerEmail: prefillData?.registerEmail || "",
        // registerWebsite: prefillData?.registerWebsite || "",
        // allotmentLink: prefillData?.allotmentLink || "",
        // qualifiedInstitutions: prefillData?.qualifiedInstitutions || "",
        // nonInstitutionalBuyers: prefillData?.nonInstitutionalBuyers || "",
        // bNII: prefillData?.bNII || "",
        // sNII: prefillData?.sNII || "",
        // retailInvestors: prefillData?.retailInvestors || "",
        // employees: prefillData?.employees || "",
        // others: prefillData?.others || "",
        // total: prefillData?.total || "",
        // listingDate:
        //   moment(prefillData?.listingDate).format("MMMM Do YYYY") || "",
        // listingPrice: prefillData?.listingPrice || "",
        // listingPosition: prefillData?.listingPosition || "",
        // listingDifferent: prefillData?.listingDifferent || "",
        // NSECode: prefillData?.NSECode || "",
        // BSEScript: prefillData?.BSEScript || "",
        // closingDate:
        //   moment(prefillData?.closingDate).format("MMMM Do YYYY") || "",
        // closingPrice: prefillData?.closingPrice || "",
        // scriptPosition: prefillData?.scriptPosition || "",
        // closingDifferent: prefillData?.closingDifferent || "",
        // weekHigh: prefillData?.weekHigh || "",
        // weekLow: prefillData?.weekLow || "",
        // IPOStatus: prefillData?.IPOStatus || "",
        // file: prefillData?.file,
        // IPOOpenDate: prefillData?.IPOOpenDate || "",
        // IPOCloseDate: prefillData?.IPOCloseDate || "",
        // IPOAllotmentDate: prefillData?.IPOAllotmentDate || "",
        // IPORefundsInitiation: prefillData?.IPORefundsInitiation || "",
        // IPODematTransfer: prefillData?.IPODematTransfer || "",
        // IPOListingDate: prefillData?.IPOListingDate || "",
        // IPOOpenDate:
        //   moment(prefillData?.IPOOpenDate).format("MMMM Do YYYY") || "",
        // IPOCloseDate:
        //   moment(prefillData?.IPOCloseDate).format("MMMM Do YYYY") || "",
        // IPOAllotmentDate:
        //   moment(prefillData?.IPOAllotmentDate).format("MMMM Do YYYY") || "",
        // IPORefundsInitiation:
        //   moment(prefillData?.IPORefundsInitiation).format("MMMM Do YYYY") ||
        //   "",
        // IPODematTransfer:
        //   moment(prefillData?.IPODematTransfer).format("MMMM Do YYYY") || "",
        // IPOListingDate:
        //   moment(prefillData?.IPOListingDate).format("MMMM Do YYYY") || "",
      };

      const payload = form;
      dispatch(updateIPO({ payload }));
      navigate("/");
    } else {
    }
  };
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
          enableReinitialize
          initialValues={
            IpoType === "Edit"
              ? {
                  listingDate: "",
                  listingPrice: "",
                  listingPosition: "",
                  listingDifferent: "",
                  NSECode: "",
                  BSEScript: "",
                  closingDate: "",
                  closingPrice: "",
                  scriptPosition: "",
                  closingDifferent: "",
                  weekHigh: "",
                  weekLow: "",
                }
              : {
                  listingDate: "",
                  listingPrice: "",
                  listingPosition: "",
                  listingDifferent: "",
                  NSECode: "",
                  BSEScript: "",
                  closingDate: "",
                  closingPrice: "",
                  scriptPosition: "",
                  closingDifferent: "",
                  weekHigh: "",
                  weekLow: "",
                }
          }
          onSubmit={(values) => {
            // handleAllDataSubmit(values);
            if (IpoType === "Edit") {
              // let data = { ...prefillData, ...values };
              // setPrefillData(data);
              // handleAllDataSubmit();
              // setActiveStepIndex(activeStepIndex + 1);
            } else {
              // let data = { ...formData, ...values };
              // setFormData(data);
              // handleAllDataSubmit();
              // setTimeout(() => {
              //   handleAllDataSubmit();
              // }, 3000);
            }
          }}
        >
          {({ values, setFieldValue }) => (
            <Form>
              <div className="card card-flush py-4">
                <div className="card-header">
                  <div className="card-title">
                    <h2>Listing Info</h2>
                  </div>
                </div>

                <div className="card-body pt-0">
                  <div className="d-flex flex-wrap gap-5 mb-10">
                    <div className="w-100 fv-row flex-md-root">
                      <label className="form-label">Listing Date</label>
                      <DatePickerField
                        name="listingDate"
                        value={values?.listingDate}
                        onChange={setFieldValue}
                      />
                      {console.log(values?.listingDate)}
                    </div>

                    <div className="w-100 fv-row flex-md-root">
                      <label className="form-label">Listing Price</label>
                      <div className="input-group">
                        <span className="input-group-text">₹</span>
                        <Field
                          type="number"
                          className="form-control"
                          name="listingPrice"
                        />
                      </div>
                    </div>

                    <div className="w-100 fv-row flex-md-root">
                      <label className="form-label">Listing Position</label>
                      <div className="d-flex">
                        <div className="form-check form-check-custom form-check-success form-check-solid me-10">
                          <Field
                            className="form-check-input"
                            type="radio"
                            value="Positive"
                            name="listingPosition"
                          />
                          <label className="form-check-label">Positive</label>
                        </div>

                        <div className="form-check form-check-custom form-check-danger form-check-solid">
                          <Field
                            className="form-check-input"
                            type="radio"
                            value="Negative"
                            name="listingPosition"
                          />
                          <label className="form-check-label">Negative</label>
                        </div>
                      </div>
                    </div>

                    <div className="w-100 fv-row flex-md-root">
                      <label className="form-label">Listing Different</label>
                      <div className="input-group">
                        <Field
                          type="number"
                          className="form-control"
                          name="listingDifferent"
                        />
                        <span className="input-group-text">%</span>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex flex-wrap gap-5 mb-10">
                    <div className="w-100 fv-row flex-md-root">
                      <label className="form-label">NSE Code</label>
                      <Field
                        type="number"
                        className="form-control"
                        name="NSECode"
                      />
                    </div>

                    <div className="w-100 fv-row flex-md-root">
                      <label className="form-label">BSE Script</label>
                      <Field
                        type="text"
                        className="form-control"
                        name="BSEScript"
                      />
                    </div>
                  </div>
                  <div className="d-flex flex-wrap gap-5 mb-10">
                    <div className="w-100 fv-row flex-md-root">
                      <label className="form-label">Closing Date</label>
                      <DatePickerField
                        name="closingDate"
                        value={values?.closingDate}
                        onChange={setFieldValue}
                      />
                    </div>
                    <div className="w-100 fv-row flex-md-root">
                      <label className="form-label">Closing Price</label>
                      <div className="input-group">
                        <span className="input-group-text">₹</span>
                        <Field
                          type="number"
                          className="form-control"
                          name="closingPrice"
                        />
                      </div>
                    </div>

                    <div className="w-100 fv-row flex-md-root">
                      <label className="form-label">Script Position</label>
                      <div className="d-flex">
                        <div className="form-check form-check-custom form-check-success form-check-solid me-10">
                          <Field
                            className="form-check-input"
                            type="radio"
                            value="Positive"
                            name="scriptPosition"
                          />
                          <label className="form-check-label">Positive</label>
                        </div>

                        <div className="form-check form-check-custom form-check-danger form-check-solid">
                          <Field
                            className="form-check-input"
                            type="radio"
                            value="Negative"
                            name="scriptPosition"
                          />
                          <label className="form-check-label">Negative</label>
                        </div>
                      </div>
                    </div>

                    <div className="w-100 fv-row flex-md-root">
                      <label className="form-label">Closing Different</label>
                      <div className="input-group">
                        <Field
                          type="text"
                          className="form-control"
                          name="closingDifferent"
                        />
                        <span className="input-group-text">%</span>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex flex-wrap gap-5 mb-10">
                    <div className="w-100 fv-row flex-md-root">
                      <label className="form-label">52 Week High</label>
                      <div className="input-group">
                        <span className="input-group-text">₹</span>
                        <Field
                          type="number"
                          className="form-control"
                          name="weekHigh"
                        />
                      </div>
                    </div>

                    <div className="w-100 fv-row flex-md-root">
                      <label className="form-label">52 Week Low</label>
                      <div className="input-group">
                        <span className="input-group-text">₹</span>
                        <Field
                          type="number"
                          className="form-control"
                          name="weekLow"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-end">
                <button type="submit" className="btn btn-primary">
                  <span className="indicator-label">Save All Data</span>
                </button>
              </div>
            </Form>
          )}
        </Formik>
        {/* <div className="d-flex justify-content-end mt-4">
          <button
            className="btn btn btn-primary"
            onClick={() => handleAllDataSubmit()}
          >
            Submit
          </button>
        </div> */}
      </div>
    </>
  );
};

export default ListedInfoTab;
