import React from "react";
import { useEffect } from "react";
import ReactModal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import CommonAddIcon from "../assets/media/Icons/CommonAddIcon";
import CommonSearchIcon from "../assets/media/Icons/CommonSearchIcon";
import AppContentLayout from "../Components/AppContentLayout";
import PageHeading from "../Components/PageHeading";
import { setModalIsOpen, setModalType } from "../redux/slice/modalSlice";
import { getAllNotifications } from "../redux/slice/notificationsSlice";

const Notifications = () => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "50%",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      zIndex: "200",
      maxWidth: "650px",
    },
  };
  const { createData, getAllData } = useSelector(
    (state) => state.notificationReducer
  );
  const { modalIsOpen } = useSelector((state) => state.modalReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllNotifications());
  }, [createData]);
  return (
    <>
      <PageHeading title={"Notification Entries"} />
      <AppContentLayout>
        <div class="card">
          <div className="card-header border-0 pt-6">
            <div className="card-title">
              <div className="d-flex align-items-center position-relative my-1">
                <span className="svg-icon svg-icon-1 position-absolute ms-6">
                  <CommonSearchIcon />
                </span>

                <input
                  type="text"
                  data-kt-news-table-filter="search"
                  className="form-control form-control-solid w-250px ps-14"
                  placeholder="Search Offers"
                />
              </div>
            </div>

            <div className="card-toolbar">
              <div
                className="d-flex justify-content-end"
                data-kt-user-table-toolbar="base"
              >
                <div className="d-flex align-items-center position-relative my-1">
                  <span className="svg-icon svg-icon-1 position-absolute ms-6">
                    <CommonSearchIcon />
                  </span>

                  <input
                    type="text"
                    data-kt-news-table-filter="search"
                    className="form-control form-control-solid w-250px ps-14"
                    placeholder="Search Offers"
                  />
                </div>
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#kt_modal_add_offer"
                  onClick={() => {
                    dispatch(setModalIsOpen(true));
                    dispatch(setModalType("addOffer"));
                  }}
                >
                  <span className="svg-icon svg-icon-2">
                    <CommonAddIcon />
                    <span style={{ marginLeft: "0.5rem" }}>Add Offers</span>
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div class="card-body">
            <table
              class="table table-striped table-row-bordered gy-5 gs-7 border rounded"
              id="contact_entries_table"
            >
              <thead>
                <tr class="text-start text-gray-400 fw-bold fs-7 text-uppercase gs-0">
                  <th class="min-w-125px">Sr No.</th>
                  <th class="min-w-125px">Title</th>
                  <th class="min-w-125px mw-350px">Description</th>
                  <th class="min-w-125px">Redirect</th>
                  <th class="min-w-125px">Date</th>
                </tr>
              </thead>

              <tbody class="fw-semibold text-gray-600">
                {getAllData.map((data, index) => {
                  return (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{data?.notificationTitle}</td>
                      <td class="mw-350px">{data?.notificationDescription}</td>
                      <td>{data?.Redirect}</td>
                      <td>May 05 2022, 6:45 am</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </AppContentLayout>
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={() => {
          dispatch(setModalIsOpen(false));
          dispatch(setModalType(""));
        }}
        style={customStyles}
        contentLabel="Example Modal"
      ></ReactModal>
    </>
  );
};

export default Notifications;
