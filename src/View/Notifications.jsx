import React from "react";
import { useEffect } from "react";
import ReactModal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import CommonAddIcon from "../assets/media/Icons/CommonAddIcon";
import AppContentLayout from "../Components/AppContentLayout";
import NotificationModal from "../Components/NotificationModal";
import PageHeading from "../Components/PageHeading";
import { setModalIsOpen } from "../redux/slice/modalSlice";
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
        <div className="card">
          <div className="card-header border-0 pt-6">
            <div className="card-title">
              <div className="d-flex align-items-center position-relative my-1">
                {/* dropdown here */}
              </div>
            </div>

            <div className="card-toolbar">
              <div
                className="d-flex justify-content-end"
                data-kt-user-table-toolbar="base"
              >
                <div className="d-flex align-items-center position-relative">
                  <span>Search:</span>
                  <input
                    type="text"
                    data-kt-news-table-filter="search"
                    className="form-control form-control-sm form-control-solid w-180px mx-2"
                  />
                </div>
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#kt_modal_add_offer"
                  onClick={() => {
                    dispatch(setModalIsOpen(true));
                  }}
                >
                  <span className="svg-icon svg-icon-2">
                    <CommonAddIcon />
                    <span style={{ marginLeft: "0.5rem" }}>
                      Add Notification
                    </span>
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="card-body">
            <table
              className="table table-striped table-row-bordered gy-5 gs-7 border rounded"
              id="contact_entries_table"
            >
              <thead>
                <tr className="text-start text-gray-400 fw-bold fs-7 text-uppercase gs-0">
                  <th className="min-w-125px">Sr No.</th>
                  <th className="min-w-125px">Title</th>
                  <th className="min-w-125px mw-350px">Description</th>
                  <th className="min-w-125px">Redirect</th>
                  <th className="min-w-125px">Date</th>
                </tr>
              </thead>

              <tbody className="fw-semibold text-gray-600">
                {getAllData.map((data, index) => {
                  return (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{data?.notificationTitle}</td>
                      <td className="mw-350px">
                        {data?.notificationDescription}
                      </td>
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
        }}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <NotificationModal />
      </ReactModal>
    </>
  );
};

export default Notifications;
