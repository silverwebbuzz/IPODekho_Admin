import { Field, Form, Formik } from "formik";
import React from "react";
import { useContext } from "react";
import { FormContext } from "../../App";

const RegistrarInfoTab = () => {
  const {
    activeStepIndex,
    setActiveStepIndex,
    formData,
    setFormData,
    prefillData,
    setPrefillData,
    IpoType,
  } = useContext(FormContext);
  const handlePrevious = () => {
    setActiveStepIndex(activeStepIndex - 1);
  };
  return (
    <>
      <div>
        <Formik
          initialValues={
            IpoType === "Edit"
              ? {
                  address: prefillData?.address || "",
                  companyPhone: prefillData?.companyPhone || "",
                  email: prefillData?.email || "",
                  website: prefillData?.website || "",
                  registerName: prefillData?.registerName || "",
                  registerPhone: prefillData?.registerPhone || "",
                  registerEmail: prefillData?.registerEmail || "",
                  registerWebsite: prefillData?.registerWebsite || "",
                  allotmentLink: prefillData?.allotmentLink || "",
                }
              : {
                  address: formData?.address || "",
                  companyPhone: formData?.companyPhone || "",
                  email: formData?.email || "",
                  website: formData?.website || "",
                  registerName: formData?.registerName || "",
                  registerPhone: formData?.registerPhone || "",
                  companyRegisterEmail: formData?.companyRegisterEmail || "",
                  registerWebsite: formData?.registerWebsite || "",
                  allotmentLink: formData?.allotmentLink || "",
                }
          }
          onSubmit={(values) => {
            if (IpoType === "Edit") {
              let data = { ...prefillData, ...values };
              setPrefillData(data);
              setActiveStepIndex(activeStepIndex + 1);
            } else {
              let data = { ...formData, ...values };
              setFormData(data);
              setActiveStepIndex(activeStepIndex + 1);
            }
          }}
        >
          {({ values }) => (
            <Form>
              <div className="card card-flush py-4">
                <div className="card-header">
                  <div className="card-title">
                    <h2>Comapny Contact Info</h2>
                  </div>
                </div>

                <div className="card-body pt-0">
                  <div className="mb-10 fv-row">
                    <label className="form-label">Address</label>
                    <Field
                      name="address"
                      className="form-control"
                      as="textarea"
                    />
                  </div>

                  <div className="d-flex flex-wrap gap-5">
                    <div className="w-100 fv-row flex-md-root">
                      <label className="form-label">Phone</label>
                      <Field
                        type="tel"
                        name="companyPhone"
                        className="form-control"
                      />
                    </div>

                    <div className="w-100 fv-row flex-md-root">
                      <label className="form-label">Email</label>
                      <Field
                        name="email"
                        type="email"
                        className="form-control"
                      />
                    </div>

                    <div className="w-100 fv-row flex-md-root">
                      <label className="form-label">Website</label>
                      <Field
                        name="website"
                        type="text"
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="card card-flush py-4">
                <div className="card-header">
                  <div className="card-title">
                    <h2>Registrar Contact Info</h2>
                  </div>
                </div>

                <div className="card-body pt-0">
                  <div className="mb-10 fv-row">
                    <label className="form-label">Registrar Name</label>
                    <Field
                      type="text"
                      name="registerName"
                      className="form-control"
                      //value="KFin Technologies Limited"
                    />
                  </div>

                  <div className="d-flex flex-wrap gap-5 mb-10">
                    <div className="w-100 fv-row flex-md-root">
                      <label className="form-label">Phone</label>
                      <Field
                        type="text"
                        className="form-control"
                        name="registerPhone"
                        //value="04067162222, 04079611000"
                      />
                    </div>

                    <div className="w-100 fv-row flex-md-root">
                      <label className="form-label">Email</label>
                      <Field
                        type="text"
                        className="form-control"
                        name="registerEmail"
                        ////value="elinindia.ipo@kfintech.com"
                      />
                    </div>

                    <div className="w-100 fv-row flex-md-root">
                      <label className="form-label">Website</label>
                      <Field
                        type="text"
                        className="form-control"
                        name="registerWebsite"
                        ////value="https://karisma.kfintech.com/"
                      />
                    </div>
                  </div>

                  <div className="fv-row">
                    <label className="form-label">Allotment Link</label>
                    <Field
                      type="text"
                      className="form-control"
                      name="allotmentLink"
                      ////value="https://kosmic.kfintech.com/ipostatus/"
                    />
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-end">
                <button className="btn btn-light me-5" onClick={handlePrevious}>
                  {"<< Previous"}
                </button>
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

export default RegistrarInfoTab;
