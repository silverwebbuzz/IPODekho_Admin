import { Field, Form, Formik } from "formik";
import React from "react";
import FilePreviewer from "../Components/FilePreview/FilePreviewer";

const AddNews = () => {
  return (
    <div className="app-main flex-column flex-row-fluid" id="kt_app_main">
      <div className="d-flex flex-column flex-column-fluid">
        <div id="kt_app_toolbar" className="app-toolbar py-3 py-lg-6">
          <div
            id="kt_app_toolbar_container"
            className="app-container container-xxl d-flex flex-stack"
          >
            <div className="page-title d-flex flex-column justify-content-center flex-wrap me-3">
              <h1 className="page-heading d-flex text-dark fw-bold fs-3 flex-column justify-content-center my-0">
                News Edit
              </h1>
            </div>
          </div>
        </div>

        <div id="kt_app_content" className="app-content flex-column-fluid">
          <div
            id="kt_app_content_container"
            className="app-container container-xxl"
          >
            <div className="card">
              <div className="card-body">
                <Formik
                  initialValues={{ newsImage: "", newsDate: "", newsTitle: "" }}
                >
                  <Form>
                    <label className="form-label d-block">News Image</label>

                    <div
                      className="image-input image-input-empty image-input-outline image-input-placeholder mb-3"
                      data-kt-image-input="true"
                    >
                      {/* <div className="image-input-wrapper image-input-placeholder w-400px h-400px"> */}
                      <div className="btn-container w-400px h-400px m-auto position-relative file_preview_wrapper">
                        <FilePreviewer newsImage="newsImage" />
                      </div>
                    </div>

                    <div className="text-muted fs-7">
                      Set the News image. Only *.png, *.jpg and *.jpeg image
                      files are accepted
                    </div>

                    <div className="w-100 fv-row mt-10">
                      <label className="form-label">Date</label>
                      <Field
                        type="date"
                        name="newsDate"
                        id="news_add_date"
                        className="form-control mb-2"
                      />
                    </div>

                    <div className="w-100 fv-row mt-10">
                      <label className="form-label">Title</label>
                      <Field
                        type="text"
                        name="newsTitle"
                        className="form-control mb-2"
                      />
                    </div>

                    <div className="mt-10">
                      <label className="form-label">Content</label>
                      <div
                        id="kt_add_news_content"
                        name="kt_add_news_content"
                        className="min-h-500px h-500px mb-2"
                      ></div>
                    </div>

                    <div className="d-flex justify-content-end mt-15">
                      <a href="news.html" className="btn btn-light me-5">
                        Back to List
                      </a>
                      <a className="btn btn-primary">Save Changes</a>
                    </div>
                  </Form>
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNews;
