import React from "react";
import AppContentLayout from "../Components/AppContentLayout";
import CommonAddIcon from "../assets/media/Icons/CommonAddIcon";
import CommonSearchIcon from "../assets/media/Icons/CommonSearchIcon";
import PageHeading from "../Components/PageHeading";
import CommonEditIcon from "../assets/media/Icons/CommonEditIcon";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  getAllOffers,
  setModalIsOpen,
  setModalType,
  setOfferData,
} from "../redux/slice/offersSlice";
import OffersModal from "../Components/OffersModal";
import ReactModal from "react-modal";

const Offers = () => {
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
  const {
    getAllOffersData,
    modalIsOpen,
    addOfferData,
    editOfferData,
    offerImage,
  } = useSelector((state) => state.offersReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllOffers());
  }, [addOfferData, editOfferData, offerImage]);

  console.log(getAllOffersData);
  return (
    <>
      <PageHeading title={"Offers"} />
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

              {/* <OffersModal /> */}

              <ReactModal
                isOpen={modalIsOpen}
                // onAfterOpen={() => subtitle.style.color = "#f00"}
                onRequestClose={() => {
                  dispatch(setModalIsOpen(false));
                  dispatch(setModalType(""));
                }}
                style={customStyles}
                contentLabel="Example Modal"
              >
                <OffersModal />
              </ReactModal>
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
                        <img
                          src={offer?.file}
                          alt="offer"
                          className="mh-75px"
                        />
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
                          onClick={() => {
                            dispatch(setModalIsOpen(true));
                            dispatch(setModalType("editOffer"));
                            dispatch(setOfferData(offer));
                          }}
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
        </div>
      </AppContentLayout>
    </>
  );
};

export default Offers;
