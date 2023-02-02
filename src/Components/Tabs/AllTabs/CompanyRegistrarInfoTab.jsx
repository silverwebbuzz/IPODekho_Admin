import { Field, Form, Formik } from "formik";
import React from "react";
import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FormContext } from "../../../App";
import { createMainLineIpo } from "../../../redux/slice/mainLineIpoSlices";
import { TabContext } from "../Tabs";

const RegistrarInfoTab = ({ ipoEdit }) => {
  const dispatch = useDispatch();
  const { ID, getIPODataById } = useSelector(
    (state) => state?.mainLineIpoSlice
  );
  const { tabData, setTabData } = useContext(TabContext);

  const handleSubmit = (values) => {
    const payload = {
      CategoryForIPOS: "MainlineIPO",
      address: values?.address,
      companyPhone: values?.companyPhone,
      email: values?.email,
      website: values?.website,
      registerName: values?.registerName,
      registerPhone: values?.registerPhone,
      registerEmail: values?.registerEmail,
      registerWebsite: values?.registerWebsite,
      allotmentLink: values?.allotmentLink,
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
          enableReinitialize
          initialValues={
            ipoEdit
              ? {
                  address: getIPODataById?.address,
                  companyPhone: getIPODataById?.companyPhone,
                  email: getIPODataById?.email,
                  website: getIPODataById?.website,
                  registerName: getIPODataById?.registerName,
                  registerPhone: getIPODataById?.registerPhone,
                  registerEmail: getIPODataById?.registerEmail,
                  registerWebsite: getIPODataById?.registerWebsite,
                  allotmentLink: getIPODataById?.allotmentLink,
                }
              : {
                  address: tabData?.address,
                  companyPhone: tabData?.companyPhone,
                  email: tabData?.email,
                  website: tabData?.website,
                  registerName: tabData?.registerName,
                  registerPhone: tabData?.registerPhone,
                  registerEmail: tabData?.registerEmail,
                  registerWebsite: tabData?.registerWebsite,
                  allotmentLink: tabData?.allotmentLink,
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
                    />
                  </div>

                  <div className="d-flex flex-wrap gap-5 mb-10">
                    <div className="w-100 fv-row flex-md-root">
                      <label className="form-label">Phone</label>
                      <Field
                        type="text"
                        className="form-control"
                        name="registerPhone"
                      />
                    </div>

                    <div className="w-100 fv-row flex-md-root">
                      <label className="form-label">Email</label>
                      <Field
                        type="text"
                        className="form-control"
                        name="registerEmail"
                      />
                    </div>

                    <div className="w-100 fv-row flex-md-root">
                      <label className="form-label">Website</label>
                      <Field
                        type="text"
                        className="form-control"
                        name="registerWebsite"
                      />
                    </div>
                  </div>

                  <div className="fv-row">
                    <label className="form-label">Allotment Link</label>
                    <Field
                      type="text"
                      className="form-control"
                      name="allotmentLink"
                    />
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

export default RegistrarInfoTab;
