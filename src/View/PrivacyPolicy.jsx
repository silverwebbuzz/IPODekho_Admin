import React from "react";
import AppContentLayout from "../Components/AppContentLayout";
import PageHeading from "../Components/PageHeading";
import "../assets/css/style.bundle.css";
import "../assets/plugins/global/plugins.bundle.css";

import { useState } from "react";
import ReactQuill from "react-quill";
import { modules } from "../Constants/commonConstants";
import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { createPrivacyPolicy } from "../redux/slice/privacyPolicySlice";
const PrivacyPolicy = () => {
  const [companyDescription, setCompanyDescription] =
    useState("<h1>HEllO</h1>");
  const dispatch = useDispatch();
  return (
    <>
      <PageHeading title={"Privacy Policy"} />
      <AppContentLayout>
        <div id="kt_app_content" className="app-content flex-column-fluid">
          <div
            id="kt_app_content_container"
            className="app-container container-xxl"
          >
            <div className="card">
              <div className="card-body">
                {/* <div className="min-h-500px h-500px mb-2"></div> */}
                <Formik
                  initialValues={{
                    PrivacyPolicy: "",
                  }}
                  onSubmit={(values) => {
                    const payload = {
                      PrivacyPolicy: values?.PrivacyPolicy,
                    };
                    dispatch(createPrivacyPolicy({ payload }));
                  }}
                >
                  <Form>
                    <Field name="PrivacyPolicy">
                      {({ field }) => (
                        <ReactQuill
                          className="min-h-200px h-200px"
                          modules={modules}
                          value={field.value}
                          onChange={field.onChange(field.name)}
                        />
                      )}
                    </Field>
                    <div className="d-flex justify-content-end mt-15">
                      <button className="btn btn-primary">Save Changes</button>
                    </div>
                  </Form>
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </AppContentLayout>
    </>
  );
};

export default PrivacyPolicy;
