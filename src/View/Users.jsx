import moment from "moment/moment";
import React, { useEffect, useState } from "react";
import ReactModal from "react-modal";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import CommonEditIcon from "../assets/media/Icons/CommonEditIcon";
import CommonMultiplyIcon from "../assets/media/Icons/CommonMultiplyIcon";
import CommonSearchIcon from "../assets/media/Icons/CommonSearchIcon";
import AppContentLayout from "../Components/AppContentLayout";
import PageHeading from "../Components/PageHeading";
import SpinnerLoader from "../Components/SpinnerLoader";
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
      maxWidth: "650px",
      zIndex: 200,
    },
  };
  const [userId, setUserId] = useState("");
  const [showModal, setShowModal] = useState({
    showClass: "",
    displayClass: "",
    modalBackdrop: "",
  });
  const { modalIsOpen } = useSelector((state) => state.modalReducer);
  const { updateData, getAllData, getUserById, isLoading } = useSelector(
    (state) => state.userReducer
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [query, setQuery] = useState("");

  const [recordsPerPage, setRecordsPerPage] = useState(10);
  const userRecord = getAllData && getAllData ? getAllData : [];
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = userRecord.slice(
    indexOfFirstRecord,
    indexOfLastRecord
  );
  const totalPage = Math.ceil(userRecord.length / recordsPerPage);

  const dispatch = useDispatch();
  const handleModalOpen = (ID) => {
    setUserId(ID);
    if (ID) {
      setShowModal({
        ...showModal,
        showClass: "show",
        displayClass: "block",
        modalBackdrop: "modal-backdrop",
      });
    }
  };
  const handlePageClick = (e) => {
    setCurrentPage(e.selected + 1);
  };
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
                  onChange={(e) => setQuery(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="card-body py-4">
            {isLoading ? (
              <SpinnerLoader />
            ) : (
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
                  {currentRecords.map((userInfo) => {
                    return (
                      <tr key={userInfo?.id}>
                        <td className="d-flex align-items-center">
                          <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                            <div className="symbol-label">
                              <img
                                src={userInfo?.photoURL}
                                alt="user image"
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
                        <td>
                          {moment(userInfo?.metadata?.creationTime).format(
                            "MMM d yyyy LT"
                          )
                            ? moment(userInfo?.metadata?.creationTime).format(
                                "MMM d yyyy LT"
                              )
                            : "N/A"}
                        </td>
                        <td className="text-end">
                          <button
                            onClick={() => {
                              handleModalOpen(userInfo?.uid);
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
            )}
            <div className="d-flex">
              <div className="dataTables_length d-flex w-auto align-items-center">
                <select
                  style={{
                    minWidth: "fit-content",
                  }}
                  className="form-select form-select-sm form-select-solid"
                  onChange={(e) => setRecordsPerPage(e.target.value)}
                >
                  {" "}
                  <option value="10">10</option>
                  <option value="25">25</option>
                  <option value="50">50</option>
                  <option value="100">100</option>
                </select>
                <span
                  style={{
                    minWidth: "fit-content",
                  }}
                >
                  Showing 1 to {currentRecords.length} of
                  {getAllData?.length} records
                </span>
              </div>
              <div className="pagination">
                <ReactPaginate
                  breakLabel="..."
                  nextLabel=">"
                  onPageChange={(e) => handlePageClick(e)}
                  pageRangeDisplayed={0}
                  pageCount={totalPage ? totalPage : 10}
                  previousLabel="<"
                  renderOnZeroPageCount={1}
                />
              </div>
            </div>
          </div>
        </div>
      </AppContentLayout>
      <div
        className={`${showModal.modalBackdrop} fade ${showModal.showClass}`}
      ></div>
      <div
        className={`modal fade kt_modal_edit_user ${showModal.showClass}`}
        id="kt_modal_edit_user"
        tabindex="-1"
        aria-hidden="true"
        style={{ display: `${showModal.displayClass}` }}
        role="dialog"
      >
        <UserModal
          userID={userId}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      </div>
    </>
  );
};

export default Users;
