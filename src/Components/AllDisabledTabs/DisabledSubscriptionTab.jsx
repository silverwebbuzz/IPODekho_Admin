import React from "react";

const DisabledSubscriptionTab = () => {
  return (
    <>
      <div className="card card-flush py-4">
        <div className="card-header">
          <div className="card-title">
            <h2>Subscription Details</h2>
          </div>
        </div>

        <div className="card-body pt-0">
          <div id="kt_subscription_repeater">
            <div className="form-group">
              <div className="form-group row">
                <div className="col-md-2">
                  <label className="form-label">Date</label>
                </div>
                <div className="col-md-2">
                  <label className="form-label">QIB</label>
                </div>
                <div className="col-md-2">
                  <label className="form-label">NII</label>
                </div>
                <div className="col-md-2">
                  <label className="form-label">Retail</label>
                </div>
                <div className="col-md-2">
                  <label className="form-label">Total</label>
                </div>
              </div>
              <div data-repeater-list="kt_subscription_repeater">
                <div data-repeater-item>
                  <div className="form-group row mb-5">
                    <div className="col-md-2">
                      <input
                        disabled
                        type="text"
                        className="form-control kt_subscription_date"
                        value="Dec 20, 2022"
                      />
                    </div>
                    <div className="col-md-2">
                      <input
                        disabled
                        type="text"
                        className="form-control"
                        value="0.01x"
                      />
                    </div>
                    <div className="col-md-2">
                      <input
                        disabled
                        type="text"
                        className="form-control"
                        value="0.43x"
                      />
                    </div>
                    <div className="col-md-2">
                      <input
                        disabled
                        type="text"
                        className="form-control"
                        value="0.55x"
                      />
                    </div>
                    <div className="col-md-2">
                      <input
                        disabled
                        type="text"
                        className="form-control"
                        value="0.37x"
                      />
                    </div>
                    <div className="col-md-2">
                      <a
                        href="javascript:;"
                        data-repeater-delete
                        className="btn btn-sm btn-light-danger"
                      >
                        <i className="la la-trash-o"></i>Delete
                      </a>
                    </div>
                  </div>
                </div>
                <div data-repeater-item>
                  <div className="form-group row mb-5">
                    <div className="col-md-2">
                      <input
                        disabled
                        type="text"
                        className="form-control kt_subscription_date"
                        value="Dec 21, 2022"
                      />
                    </div>
                    <div className="col-md-2">
                      <input
                        disabled
                        type="text"
                        className="form-control"
                        value="0.01x"
                      />
                    </div>
                    <div className="col-md-2">
                      <input
                        disabled
                        type="text"
                        className="form-control"
                        value="1.29x"
                      />
                    </div>
                    <div className="col-md-2">
                      <input
                        disabled
                        type="text"
                        className="form-control"
                        value="1.33x"
                      />
                    </div>
                    <div className="col-md-2">
                      <input
                        disabled
                        type="text"
                        className="form-control"
                        value="0.95x"
                      />
                    </div>
                    <div className="col-md-2">
                      <a
                        href="javascript:;"
                        data-repeater-delete
                        className="btn btn-sm btn-light-danger"
                      >
                        <i className="la la-trash-o"></i>Delete
                      </a>
                    </div>
                  </div>
                </div>
                <div data-repeater-item>
                  <div className="form-group row mb-5">
                    <div className="col-md-2">
                      <input
                        disabled
                        type="text"
                        className="form-control kt_subscription_date"
                        value="Dec 22, 2022"
                      />
                    </div>
                    <div className="col-md-2">
                      <input
                        disabled
                        type="text"
                        className="form-control"
                        value="-"
                      />
                    </div>
                    <div className="col-md-2">
                      <input
                        disabled
                        type="text"
                        className="form-control"
                        value="-"
                      />
                    </div>
                    <div className="col-md-2">
                      <input
                        disabled
                        type="text"
                        className="form-control"
                        value="-"
                      />
                    </div>
                    <div className="col-md-2">
                      <input
                        disabled
                        type="text"
                        className="form-control"
                        value="-"
                      />
                    </div>
                    <div className="col-md-2">
                      <a
                        href="javascript:;"
                        data-repeater-delete
                        className="btn btn-sm btn-light-danger"
                      >
                        <i className="la la-trash-o"></i>Delete
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="form-group mt-5">
              <a
                href="javascript:;"
                data-repeater-create
                className="btn btn-light-primary"
              >
                <i className="la la-plus"></i>Add
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="card card-flush py-4">
        <div className="card-header">
          <div className="card-title">
            <h2>Live Subscription</h2>
          </div>
        </div>

        <div className="card-body pt-0">
          <div className="table-responsive">
            <table className="table table-row-dashed table-row-gray-300 gy-7">
              <thead>
                <tr className="fw-semibold fs-6 text-gray-800 border-bottom border-gray-200">
                  <th>Investor Category</th>
                  <th>Subscription (times)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Qualified Institutions</td>
                  <td>
                    <input
                      disabled
                      type="text"
                      className="form-control"
                      value="4.51"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Non-Institutional Buyers</td>
                  <td>
                    <input
                      disabled
                      type="text"
                      className="form-control"
                      value="3.29"
                    />
                  </td>
                </tr>
                <tr>
                  <td>bNII (bids above ₹10L)</td>
                  <td>
                    <input
                      disabled
                      type="text"
                      className="form-control"
                      value="2.99"
                    />
                  </td>
                </tr>
                <tr>
                  <td>sNII (bids below ₹10L)</td>
                  <td>
                    <input
                      disabled
                      type="text"
                      className="form-control"
                      value="3.89"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Retail Investors</td>
                  <td>
                    <input
                      disabled
                      type="text"
                      className="form-control"
                      value="2.20"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Employees</td>
                  <td>
                    <input
                      disabled
                      type="text"
                      className="form-control"
                      value="-"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Others</td>
                  <td>
                    <input
                      disabled
                      type="text"
                      className="form-control"
                      value="-"
                    />
                  </td>
                </tr>
                <tr>
                  <td className="fw-bold">Total</td>
                  <td>
                    <input
                      disabled
                      type="text"
                      className="form-control fw-bold"
                      value="3.09"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default DisabledSubscriptionTab;
