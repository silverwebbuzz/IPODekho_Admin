import React from "react";
import "../assets/css/style.bundle.css";
import "../assets/plugins/global/plugins.bundle.css";
import CommonAddIcon from "../Components/CommonAddIcon";
import CommonFilterIcon from "../Components/CommonFilterIcon";
import CommonSearchIcon from "../Components/CommonSearchIcon";
import PageHeading from "../Components/PageHeading";
import { Link, NavLink } from "react-router-dom";
import CommonEditIcon from "../Components/CommonEditIcon";
import AppContentLayout from "../Components/AppContentLayout";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllMainLineIpo } from "../redux/slice/mainLineIpoSlices";
import "../assets/plugins/custom/datatables/datatables.bundle.css";

const MainLineIPO = () => {
  const dispatch = useDispatch();
  const { getAllMainLineIpoData } = useSelector(
    (state) => state?.mainLineIpoSlice
  );
  useEffect(() => {
    dispatch(getAllMainLineIpo());
  }, [dispatch]);
  return (
    <>
      <PageHeading title={"Mainline IPOs"} />
      <AppContentLayout>
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
                {/* <!--end::Svg Icon-->Filter */}
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
                      <option value="Waiting Allotment">
                        Waiting Allotment
                      </option>
                      <option value="Allotment Out">Allotment Out</option>
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

              <NavLink to="/add_ipo">
                <button type="button" className="btn btn-primary">
                  <span className="svg-icon svg-icon-2">
                    <CommonAddIcon />
                  </span>
                  Add IPO
                </button>
                {/* <!--end::Svg Icon-->Add IPO */}
              </NavLink>
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
              {getAllMainLineIpoData?.map((Itm) => {
                return (
                  <tr>
                    <td className="d-flex align-items-center mw-230px w-230px">
                      <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                        <a href="ipo-detail.html">
                          <div className="symbol-label">
                            <img
                              src="assets/media/ipo/Elin-Electronics-logo.jpeg"
                              alt="Elin Electronics"
                              className="w-100"
                            />
                          </div>
                        </a>
                      </div>
                      <div className="d-flex flex-column">
                        <a
                          href="ipo-detail.html"
                          className="text-gray-800 text-hover-primary mb-1"
                        >
                          {Itm?.companyName}
                        </a>
                      </div>
                    </td>
                    <td className="w-150px mw-150px">{Itm?.offerDate}</td>
                    <td className="w-100px mw-100px">
                      ₹{Itm?.offerPriceFrom} to ₹{Itm?.offerPriceTo}
                    </td>
                    <td>{Itm?.lotSize} Shares</td>
                    <td className="text-center">
                      <div className="gmp_radio form-check form-switch form-check-custom form-check-danger form-check-solid">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          checked
                        />
                      </div>
                      <input
                        type="text"
                        className="form-control w-70px mt-3"
                        value="780"
                      />
                    </td>
                    <td>
                      <div className={"badge badge-light-danger fw-bold"}>
                        {Itm?.IPOStatus}
                      </div>
                      {() => {
                        if (Itm?.IPOStatus === "live")
                          return (
                            <div className={"badge badge-light-danger fw-bold"}>
                              Live
                            </div>
                          );
                        if (Itm?.IPOStatus === "waitingAllotment")
                          return (
                            <div
                              className={"badge badge-light-warning fw-bold"}
                            >
                              Waiting Allotment
                            </div>
                          );
                        if (Itm?.IPOStatus === "allotmentOut")
                          return (
                            <div
                              className={"badge badge-light-primary fw-bold"}
                            >
                              Allotment Out
                            </div>
                          );
                        if (Itm?.IPOStatus === "upcoming")
                          return (
                            <div className={"badge badge-light-info fw-bold"}>
                              Upcoming
                            </div>
                          );
                        if (Itm?.IPOStatus === "listed")
                          return (
                            <div
                              className={"badge badge-light-success fw-bold"}
                            >
                              Listed
                            </div>
                          );
                      }}
                    </td>
                    <td className="text-end w-200px">
                      <div className="menu-item px-3">
                        <Link
                          to="/ipo_edit"
                          state={{ data: Itm }}
                          className="btn btn-light btn-primary btn-sm"
                        >
                          <span className="svg-icon svg-icon-muted svg-icon-size-3 me-0">
                            <CommonEditIcon />{" "}
                          </span>
                        </Link>

                        <Link
                          // to="/ipo_detail"
                          to="/ipo_detail"
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
        </div>
      </AppContentLayout>
    </>
  );
};

export default MainLineIPO;
