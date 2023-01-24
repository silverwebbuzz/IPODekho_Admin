import React from "react";
import { Link } from "react-router-dom";
import AppContentLayout from "../Components/AppContentLayout";
import PageHeading from "../Components/PageHeading";
import Tabs from "../Components/TabComponent/Tabs";
import FilePreviewer from "../Components/FilePreview/FilePreviewer";
import "../Components/FilePreview/FilePreviewer.css";

const AddIpo = () => {
  return (
    <>
      <PageHeading title={"IPO Add"} />
      <AppContentLayout>
        <div
          // id="edit_ipo_form"
          className="form d-flex flex-column flex-lg-row"
          data-kt-redirect="../../demo1/dist/apps/ecommerce/catalog/products.html"
        >
          <div className="d-flex flex-column gap-7 gap-lg-10 w-100 w-lg-300px min-w-lg-300px mb-7 me-lg-10">
            <div className="card card-flush py-4">
              <div className="card-header">
                <div className="card-title">
                  <h4>Company Logo</h4>
                </div>
              </div>

              <div className="card-body text-center pt-0">
                <div
                  class="image-input image-input-empty image-input-outline image-input-placeholder mb-3"
                  data-kt-image-input="true"
                >
                  <div className="btn-container w-150px h-150px m-auto position-relative file_preview_wrapper">
                    <FilePreviewer ipoImage="ipoImage" />
                  </div>
                </div>
                <div className="text-muted fs-7">
                  Set the product thumbnail image. Only .png, .jpg and *.jpeg
                  image files are accepted
                </div>
              </div>
            </div>

            <div className="card card-flush py-4">
              <div className="card-header">
                <div className="card-title">
                  <h2>Status</h2>
                </div>

                <div className="card-toolbar">
                  <div
                    className="rounded-circle bg-danger w-15px h-15px"
                    id="kt_ipo_status"
                  ></div>
                </div>
              </div>

              <div className="card-body pt-0">
                <select
                  className="form-select mb-2"
                  data-control="select2"
                  data-hide-search="true"
                  data-placeholder="Select an option"
                  id="kt_ipo_status_select"
                >
                  <option></option>
                  <option value="live" selected="selected">
                    Live
                  </option>
                  <option value="waitingallotment">Waiting Allotment</option>
                  <option value="allotmentout">Allotment Out</option>
                  <option value="upcoming">Upcoming</option>
                  <option value="listed">Listed</option>
                </select>

                <div className="text-muted fs-7">Set the ipo status.</div>
              </div>
            </div>

            <div className="card card-flush py-4">
              <div className="card-header">
                <div className="card-title">
                  <h2>Tentative Timetable</h2>
                </div>
              </div>

              <div className="card-body pt-0">
                <div className="w-100 fv-row mb-10">
                  <label className="form-label">IPO Open Date</label>
                  <input
                    type="text"
                    name="ipo_open_date"
                    id="ipo_open_date"
                    className="form-control mb-2"
                    value="Dec 20, 2022"
                  />
                </div>

                <div className="w-100 fv-row mb-10">
                  <label className="form-label">IPO Close Date</label>
                  <input
                    type="text"
                    name="ipo_close_date"
                    id="ipo_close_date"
                    className="form-control mb-2"
                    value="Dec 22, 2022"
                  />
                </div>

                <div className="w-100 fv-row mb-10">
                  <label className="form-label">IPO Allotment Date</label>
                  <input
                    type="text"
                    name="ipo_allotment_date"
                    id="ipo_allotment_date"
                    className="form-control mb-2"
                    value="Dec 27, 2022"
                  />
                </div>

                <div className="w-100 fv-row mb-10">
                  <label className="form-label">IPO Refunds Initiation</label>
                  <input
                    type="text"
                    name="ipo_refunds_date"
                    id="ipo_refunds_date"
                    className="form-control mb-2"
                    value="Dec 28, 2022"
                  />
                </div>

                <div className="w-100 fv-row mb-10">
                  <label className="form-label">IPO Demat Transfer</label>
                  <input
                    type="text"
                    name="ipo_demat_date"
                    id="ipo_demat_date"
                    className="form-control mb-2"
                    value="Dec 29, 2022"
                  />
                </div>

                <div className="w-100 fv-row">
                  <label className="form-label">IPO Listing Date</label>
                  <input
                    type="text"
                    name="ipo_listing_date"
                    id="ipo_listing_date"
                    className="form-control mb-2"
                    value="Dec 30, 2022"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="d-flex flex-column flex-row-fluid gap-7 gap-lg-10">
            <Tabs addIpo="addIpo" />
            <div className="d-flex justify-content-end">
              {/* <Link to="/" className="btn btn-light me-5">
                Cancel
              </Link> */}
              {/* 
              <button
                type="submit"
                id="kt_ecommerce_add_product_submit"
                className="btn btn-primary"
              >
                <span className="indicator-label">Save Changes</span>
                <span className="indicator-progress">
                  Please wait...
                  <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                </span>
              </button> */}
            </div>
          </div>
        </div>
      </AppContentLayout>
    </>
  );
};

export default AddIpo;
