import React from "react";
import PageHeading from "../Components/PageHeading";
import CommonAddIcon from "../assets/media/Icons/CommonAddIcon";
import AppContentLayout from "../Components/AppContentLayout";
import {
  getAllMainLineIpo,
  setClearId,
  updateIPO,
} from "../redux/slice/mainLineIpoSlices";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import "../assets/css/style.bundle.css";
import "../assets/plugins/global/plugins.bundle.css";
import CommonFilterIcon from "../assets/media/Icons/CommonFilterIcon";
import CommonSearchIcon from "../assets/media/Icons/CommonSearchIcon";
import { Link } from "react-router-dom";
import CommonEditIcon from "../assets/media/Icons/CommonEditIcon";
import "../assets/plugins/custom/datatables/datatables.bundle.css";
import blankImage from "../assets/media/offer/blank-image.svg";
import { useState } from "react";
import moment from "moment/moment";
import ReactPaginate from "react-paginate";
const SmeIpo = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(10);
  const [limit, setLimit] = useState(10);

  const [GMPStatus, setGMPStatus] = useState();
  const [GMP, setGMP] = useState("");
  const { getAllMainLineIpoData, updatedIpo, createIpo } = useSelector(
    (state) => state?.mainLineIpoSlice
  );

  const handleGMPNumber = (e, ID) => {
    setGMP(e?.target?.value);
    let payload = {
      CategoryForIPOS: "SmeIPO",
      id: ID,
      GMP: e?.target?.value,
    };
    dispatch(updateIPO({ payload }));
  };
  const handlePageClick = (e) => {
    console.log(e.selected);
    setCurrentPage(e.selected + 1);
  };
  const handleGmp = (e, ID) => {
    setGMPStatus(e.target?.checked);
    let payload = {
      CategoryForIPOS: "SmeIPO",
      id: ID,
      GMPStatus: e.target?.checked === true ? "ON" : "OFF",
    };
    dispatch(updateIPO({ payload }));
  };

  useEffect(() => {
    let payload = {
      CategoryForIPOS: "SmeIPO",
      page: currentPage,
      limit: 10,
    };
    dispatch(getAllMainLineIpo({ payload }));
    dispatch(setClearId(""));
  }, [dispatch, updatedIpo, createIpo, currentPage, GMP]);
  useEffect(() => {
    if (getAllMainLineIpoData?.Total !== undefined) {
      let totalCount = Math.ceil(getAllMainLineIpoData?.Total / 10);
      setTotalPage(totalCount);
    }
  }, [getAllMainLineIpoData?.Total]);
  return (
    <>
      <PageHeading title={"SME IPOs"} />
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
                  placeholder="Search IPO"
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
                  className="btn btn-light-primary me-3"
                  data-kt-menu-trigger="click"
                  data-kt-menu-placement="bottom-end"
                >
                  <span className="svg-icon svg-icon-2">
                    <CommonFilterIcon />
                  </span>
                  Filter
                </button>

                <div
                  className="menu menu-sub menu-sub-dropdown w-300px w-md-325px"
                  data-kt-menu="true"
                >
                  <div className="px-7 py-5">
                    <div className="fs-5 text-dark fw-bold">Filter Options</div>
                  </div>

                  <div className="separator border-gray-200"></div>

                  <div className="px-7 py-5" data-kt-user-table-filter="form">
                    <div className="mb-10">
                      <label className="form-label fs-6 fw-semibold">
                        IPO Status:
                      </label>
                      <select
                        className="form-select form-select-solid fw-bold"
                        data-kt-select2="true"
                        data-placeholder="Select option"
                        data-allow-clear="true"
                        data-kt-user-table-filter="status"
                        data-hide-search="true"
                      >
                        <option></option>
                        <option value="Live">Live</option>
                        <option value="WaitingAllotment">
                          Waiting Allotment
                        </option>
                        <option value="AllotmentOut">Allotment Out</option>
                        <option value="Upcoming">Upcoming</option>
                        <option value="Listed">Listed</option>
                      </select>
                    </div>

                    <div className="d-flex justify-content-end">
                      <button
                        type="reset"
                        className="btn btn-light btn-active-light-primary fw-semibold me-2 px-6"
                        data-kt-menu-dismiss="true"
                        data-kt-user-table-filter="reset"
                      >
                        Reset
                      </button>
                      <button
                        type="submit"
                        className="btn btn-primary fw-semibold px-6"
                        data-kt-menu-dismiss="true"
                        data-kt-user-table-filter="filter"
                      >
                        Apply
                      </button>
                    </div>
                  </div>
                </div>

                <Link
                  to="/sme_ipo/add_ipo"
                  state={{ data: "SmeIPO", type: "ipoAdd" }}
                >
                  <button type="button" className="btn btn-primary">
                    <span className="svg-icon svg-icon-2">
                      <CommonAddIcon />
                    </span>
                    Add IPO
                  </button>
                  {/* <!--end::Svg Icon-->Add IPO */}
                </Link>
              </div>
            </div>
          </div>

          <div className="card-body py-4">
            <table
              className="table align-middle table-row-dashed fs-6 gy-5"
              id="mainlineipo_table"
            >
              <thead>
                <tr className="text-start text-muted fw-bold fs-7 text-uppercase gs-0">
                  <th className="mw-300px w-300px">Company</th>
                  <th className="w-150px mw-150px">Offer Date</th>
                  <th className="w-100px mw-100px">Offer Price</th>
                  <th className="min-w-125px">Lot Size</th>
                  <th className="min-w-125px">GMP</th>
                  <th className="min-w-125px">Status</th>
                  <th className="text-end min-w-100px w-200px">Actions</th>
                </tr>
              </thead>

              <tbody className="text-gray-600 fw-semibold">
                {getAllMainLineIpoData?.IPOS?.map((Itm) => {
                  return (
                    <tr>
                      <td className="d-flex align-items-center mw-230px w-230px">
                        <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                          <Link
                            to="/sme_ipo/ipo_edit"
                            state={{ data: Itm, type: "ipoEdit" }}
                          >
                            <div className="symbol-label">
                              <img
                                src={Itm?.file ? Itm?.file : blankImage}
                                alt="Elin Electronics"
                                className="w-100"
                              />
                            </div>
                          </Link>
                        </div>
                        <div className="d-flex flex-column">
                          <Link
                            to="/sme_ipo/ipo_edit"
                            state={{ data: Itm, type: "ipoEdit" }}
                            className="text-gray-800 text-hover-primary mb-1"
                          >
                            {Itm?.companyName}
                          </Link>
                        </div>
                      </td>
                      {console.log(Itm?.IPOOpenDate)}
                      {(Itm?.IPOOpenDate === undefined ||
                        Itm?.IPOOpenDate === "" ||
                        Itm?.IPOOpenDate === null) &&
                      (Itm?.IPOCloseDate === undefined ||
                        Itm?.IPOCloseDate === "" ||
                        Itm?.IPOCloseDate === null) ? (
                        <td className="w-150px mw-150px">N/A</td>
                      ) : (
                        <td className="w-150px mw-150px">
                          {Itm?.IPOOpenDate === undefined ||
                          Itm?.IPOOpenDate === "" ||
                          Itm?.IPOOpenDate === null
                            ? "N/A"
                            : moment(Itm?.IPOOpenDate).format(
                                "MMM d, yyyy"
                              )}{" "}
                          to{" "}
                          {Itm?.IPOCloseDate === undefined ||
                          Itm?.IPOCloseDate === "" ||
                          Itm?.IPOCloseDate === null
                            ? "N/A"
                            : moment(Itm?.IPOCloseDate).format("MMM d, yyyy")}
                        </td>
                      )}
                      {(Itm?.toPrice === "" ||
                        Itm?.toPrice === undefined ||
                        Itm?.toPrice === null) &&
                      (Itm?.fromPrice === "" ||
                        Itm?.fromPrice === undefined ||
                        Itm?.fromPrice === null) ? (
                        <td className="w-100px mw-100px">N/A</td>
                      ) : (
                        <td className="w-100px mw-100px">
                          ₹
                          {Itm?.fromPrice === "" ||
                          Itm?.fromPrice === undefined ||
                          Itm?.fromPrice === null
                            ? "N/A"
                            : Itm?.fromPrice}{" "}
                          to ₹
                          {Itm?.toPrice === "" ||
                          Itm?.toPrice === undefined ||
                          Itm?.toPrice === null
                            ? "N/A"
                            : Itm?.toPrice}
                        </td>
                      )}
                      <td>{Itm?.lotSize} Shares</td>
                      <td className="text-center">
                        <div className="gmp_radio form-check form-switch form-check-custom form-check-danger form-check-solid">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            checked={Itm?.GMPStatus === "ON" ? true : false}
                            onChange={(e) => handleGmp(e, Itm?.id)}
                          />
                        </div>
                        <input
                          type="number"
                          className="form-control w-70px mt-3"
                          // defaultValue={Itm?.GMP}
                          value={Itm?.GMP}
                          onChange={(e) => handleGMPNumber(e, Itm?.id)}
                        />
                      </td>
                      <td>
                        {Itm?.IPOStatus === "Live" ? (
                          <div className="badge badge-light-danger fw-bold">
                            Live
                          </div>
                        ) : Itm?.IPOStatus === "Upcoming" ? (
                          <div className="badge badge-light-info fw-bold">
                            Upcoming
                          </div>
                        ) : Itm?.IPOStatus === "Listed" ? (
                          <div className="badge badge-light-success fw-bold">
                            Listed
                          </div>
                        ) : Itm?.IPOStatus === "AllotmentOut" ? (
                          <div className="badge badge-light-primary fw-bold">
                            Allotment Out
                          </div>
                        ) : Itm?.IPOStatus === "WaitingAllotment" ? (
                          <div className="badge badge-light-warning fw-bold">
                            Waiting Allotment
                          </div>
                        ) : null}
                      </td>
                      <td className="text-end w-200px">
                        <div className="menu-item px-3">
                          <Link
                            to="/sme_ipo/ipo_edit"
                            state={{ data: Itm, type: "ipoEdit" }}
                            className="btn btn-light btn-primary btn-sm"
                          >
                            <span className="svg-icon svg-icon-muted svg-icon-size-3 me-0">
                              <CommonEditIcon />{" "}
                            </span>
                          </Link>

                          <Link
                            to="/sme_ipo/ipo_detail"
                            state={{ data: Itm }}
                            className="btn btn-light btn-light-primary btn-sm px-3"
                          >
                            <i className="bi bi-eye fs-2 pe-0"></i>
                          </Link>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className="pagination">
              <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={totalPage}
                previousLabel="<"
                renderOnZeroPageCount={null}
              />
            </div>
          </div>
        </div>
      </AppContentLayout>
    </>
  );
};

export default SmeIpo;
