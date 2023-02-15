import React, { useEffect, useState } from "react";
import ReactModal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import CommonEditIcon from "../assets/media/Icons/CommonEditIcon";
import CommonSearchIcon from "../assets/media/Icons/CommonSearchIcon";
import AppContentLayout from "../Components/AppContentLayout";
import PageHeading from "../Components/PageHeading";
import UserModal from "../Components/UserModal";
import { setModalIsOpen } from "../redux/slice/modalSlice";
import { getAllUsers, getUserById } from "../redux/slice/usersSlice";

const Users = () => {
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
  const [userId, setUserId] = useState("");
  const { updateData, getAllData, getUserById } = useSelector(
    (state) => state.userReducer
  );
  const { modalIsOpen } = useSelector((state) => state.modalReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
  }, [updateData]);

  return (
    <>
      <PageHeading title={"Users"} />
      <AppContentLayout>
        <div className="card">
          <div className="card-header border-0 pt-6">
            <div className="card-title">
              <div className="d-flex align-items-center position-relative my-1">
                <span className="svg-icon svg-icon-1 position-absolute ms-6">
                  <CommonSearchIcon />
                </span>

                <input
                  type="text"
                  data-kt-user-table-filter="search"
                  className="form-control form-control-solid w-250px ps-14"
                  placeholder="Search user"
                />
              </div>
            </div>
          </div>

          <div className="card-body py-4">
            <table
              className="table align-middle table-row-dashed fs-6 gy-5"
              id="kt_table_users"
            >
              <thead>
                <tr className="text-start text-muted fw-bold fs-7 text-uppercase gs-0">
                  <th className="min-w-125px">User</th>
                  <th className="min-w-125px">Phone</th>
                  <th className="min-w-125px">Joined Date</th>
                  <th className="text-end min-w-100px">Actions</th>
                </tr>
              </thead>

              <tbody className="text-gray-600 fw-semibold">
                {getAllData.map((userInfo) => {
                  return (
                    <tr key={userInfo?.id}>
                      <td className="d-flex align-items-center">
                        <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                          <div className="symbol-label">
                            <img
                              src={userInfo?.photoURL}
                              alt="Emma Smith"
                              className="w-100"
                            />
                          </div>
                        </div>
                        <div className="d-flex flex-column">
                          <span className="text-gray-800 mb-1">
                            {userInfo?.displayName}
                          </span>
                          <span>{userInfo?.email}</span>
                        </div>
                      </td>
                      <td>{userInfo?.phoneNumber}</td>
                      <td>05 May 2022, 6:43 am</td>
                      <td className="text-end">
                        <button
                          onClick={() => {
                            dispatch(setModalIsOpen(true));
                            setUserId(userInfo?.id);
                          }}
                          type="button"
                          className="btn btn-light btn-light-primary btn-sm"
                          data-bs-toggle="modal"
                          data-bs-target=".kt_modal_edit_user"
                        >
                          <span className="svg-icon svg-icon-muted svg-icon-size-3">
                            <CommonEditIcon />
                          </span>
                          Edit
                        </button>
                      </td>
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
          // dispatch(getUserById(""));
        }}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <UserModal userID={userId} />
      </ReactModal>
    </>
  );
};

export default Users;
