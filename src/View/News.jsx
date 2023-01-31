import React from "react";
import AppContentLayout from "../Components/AppContentLayout";
import CommonAddIcon from "../assets/media/Icons/CommonAddIcon";
import CommonSearchIcon from "../assets/media/Icons/CommonSearchIcon";
import PageHeading from "../Components/PageHeading";

const News = () => {
  return (
    <>
      <PageHeading title={"News"} />
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
                placeholder="Search News"
              />
            </div>
          </div>

          <div className="card-toolbar">
            <div
              className="d-flex justify-content-end"
              data-kt-user-table-toolbar="base"
            >
              <a href="news-add.html" type="button" className="btn btn-primary">
                <span className="svg-icon svg-icon-2">
                  <CommonAddIcon />
                </span>
                Add News
              </a>
            </div>

            <div
              className="d-flex justify-content-end align-items-center d-none"
              data-kt-user-table-toolbar="selected"
            >
              <div className="fw-bold me-5">
                <span
                  className="me-2"
                  data-kt-user-table-select="selected_count"
                ></span>
                Selected
              </div>
              <button
                type="button"
                className="btn btn-danger"
                data-kt-user-table-select="delete_selected"
              >
                Delete Selected
              </button>
            </div>
          </div>
        </div>

        <div className="card-body py-4">
          <table
            className="table align-middle table-row-dashed fs-6 gy-5"
            id="news_table"
          >
            <thead>
              <tr className="text-start text-muted fw-bold fs-7 text-uppercase gs-0">
                <th className="min-w-125px">Featured Image</th>
                <th className="min-w-125px mw-350px">News Title</th>
                <th className="min-w-125px">News Date</th>
                <th className="text-end min-w-100px">Actions</th>
              </tr>
            </thead>

            <tbody className="text-gray-600 fw-semibold">
              <tr>
                <td>
                  <img
                    src="assets/media/news/news1.png"
                    alt="news"
                    className="mh-75px"
                  />
                </td>
                <td className="mw-350px">
                  Sula Vineyards shares fall over 2% after a tepid listing at
                  ₹361
                </td>
                <td>DEC 22 2022, 10:39 pm</td>
                <td className="text-end">
                  <a
                    href="news-edit.html"
                    className="btn btn-light btn-active-light-primary btn-sm"
                  >
                    <span className="svg-icon svg-icon-muted svg-icon-1hx">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.3"
                          d="M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z"
                          fill="currentColor"
                        />
                        <path
                          d="M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                    Edit
                  </a>
                </td>
              </tr>

              <tr>
                <td>
                  <img
                    src="assets/media/news/news2.png"
                    alt="news"
                    className="mh-75px"
                  />
                </td>
                <td className="mw-350px">
                  Sensex, Nifty50 to open in the green amid positive global cues
                  – Reliance, Adani Enterprises, Sula Vineyards among stocks in
                  focus
                </td>
                <td>DEC 22 2022, 08:52 pm</td>
                <td className="text-end">
                  <a
                    href="news-edit.html"
                    className="btn btn-light btn-active-light-primary btn-sm"
                  >
                    <span className="svg-icon svg-icon-muted svg-icon-1hx">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.3"
                          d="M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z"
                          fill="currentColor"
                        />
                        <path
                          d="M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                    Edit
                  </a>
                </td>
              </tr>

              <tr>
                <td>
                  <img
                    src="assets/media/news/news3.png"
                    alt="news"
                    className="mh-75px"
                  />
                </td>
                <td className="mw-350px">
                  Indian economy to recover faster than developed markets
                </td>
                <td>DEC 22 2022, 07:00 pm</td>
                <td className="text-end">
                  <a
                    href="news-edit.html"
                    className="btn btn-light btn-active-light-primary btn-sm"
                  >
                    <span className="svg-icon svg-icon-muted svg-icon-1hx">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.3"
                          d="M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z"
                          fill="currentColor"
                        />
                        <path
                          d="M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                    Edit
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </AppContentLayout>
    </>
  );
};

export default News;
