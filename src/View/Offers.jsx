import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AppContentLayout from "../Components/AppContentLayout";
import CommonAddIcon from "../Components/CommonAddIcon";
import CommonEditIcon from "../Components/CommonEditIcon";
import CommonSearchIcon from "../Components/CommonSearchIcon";
import OffersModal from "../Components/Modals/OffersModal";
import PageHeading from "../Components/PageHeading";
import { commonModalType, setModalIsOpen } from "../redux/slice/modalSlice";
import { getAllOffers } from "../redux/slice/offersSlice";

const Offers = () => {
  const { getAllOffersData } = useSelector((state) => state?.offersReducer);
  const { modalIsOpen } = useSelector((state) => state?.modalReducer);
  const [rowData, setRowData] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllOffers());
  }, []);

  const handleEdit = (offer) => {
    dispatch(setModalIsOpen(true));
    dispatch(commonModalType("EDIT"));
    setRowData(offer);
  };

  if (modalIsOpen) {
    document.body.setAttribute(
      "style",
      "overflow: hidden; padding-right: 19px"
    );
    document.body.className = "app-default modal-open";
  } else {
    document.body.removeAttribute("style");
    document.body.className = "app-default";
  }

  return (
    <>
      <PageHeading title={"Offers"} />
      <AppContentLayout>
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
              <button
                onClick={() => {
                  dispatch(setModalIsOpen(true));
                  dispatch(setModalIsOpen(!"EDIT"));
                }}
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#kt_modal_add_offer"
              >
                <span className="svg-icon svg-icon-2">
                  <CommonAddIcon />
                </span>
                Add Offers
              </button>
            </div>
            {/* MODAL */}
            <OffersModal data={rowData} />
          </div>
        </div>

        <div className="card-body py-4">
          <table
            className="table align-middle table-row-dashed fs-6 gy-5"
            id="offer_table"
          >
            <thead>
              <tr className="text-start text-muted fw-bold fs-7 text-uppercase gs-0">
                <th className="min-w-125px">Image</th>
                <th className="min-w-125px">Offer Title</th>
                <th className="min-w-125px mw-350px">Offer Description</th>
                <th className="min-w-125px">Offer Sequence</th>
                <th className="min-w-125px">Status</th>
                <th className="text-end min-w-100px">Actions</th>
              </tr>
            </thead>

            <tbody className="text-gray-600 fw-semibold">
              {getAllOffersData?.map((offer) => {
                return (
                  <tr>
                    <td>
                      <img src={offer?.file} alt="offer" className="mh-75px" />
                    </td>
                    <td>{offer?.offerTitle}</td>
                    <td className="mw-350px">{offer.offerDescription}</td>
                    <td>{offer?.offerSequence}</td>
                    <td>
                      <span
                        className={`${
                          offer?.offerStatus === "Deactive"
                            ? "badge badge-light-danger"
                            : "badge badge-light-primary"
                        }`}
                      >
                        {offer?.offerStatus}
                      </span>
                    </td>
                    <td className="text-end">
                      <button
                        onClick={() => handleEdit(offer)}
                        type="button"
                        className="btn btn-light btn-active-light-primary btn-sm"
                        data-bs-toggle="modal"
                        data-bs-target=".kt_modal_edit_offer"
                      >
                        <span className="svg-icon svg-icon-muted svg-icon-1hx">
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
      </AppContentLayout>
    </>
  );
};

export default Offers;
