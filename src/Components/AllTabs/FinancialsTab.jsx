import React from "react";

const FinancialsTab = () => {
  return (
    <>
      <div className="card card-flush py-4">
        <div className="card-header">
          <div className="card-title">
            <h2>Company Financials (in Crore)</h2>
          </div>
        </div>

        <div className="card-body pt-0">
          <div id="kt_financial_info">
            <div className="form-group">
              <div className="form-group row">
                <div className="col-md-4">
                  <label className="form-label">Period</label>
                </div>
                <div className="col-md-2">
                  <label className="form-label">Assets</label>
                </div>
                <div className="col-md-2">
                  <label className="form-label">Revenue</label>
                </div>
                <div className="col-md-2">
                  <label className="form-label">Profit</label>
                </div>
              </div>
              <div data-repeater-list="kt_financial_info">
                <div data-repeater-item>
                  <div className="form-group row mb-5">
                    <div className="col-md-4">
                      <input
                        type="text"
                        className="form-control kt_financial_info_period"
                        value="Sep 30, 2022"
                      />
                    </div>
                    <div className="col-md-2">
                      <input
                        type="text"
                        className="form-control"
                        value="589.24"
                      />
                    </div>
                    <div className="col-md-2">
                      <input
                        type="text"
                        className="form-control"
                        value="604.74"
                      />
                    </div>
                    <div className="col-md-2">
                      <input
                        type="text"
                        className="form-control"
                        value="20.67"
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
                    <div className="col-md-4">
                      <input
                        type="text"
                        className="form-control kt_financial_info_period"
                        value="Mar 31, 2022"
                      />
                    </div>
                    <div className="col-md-2">
                      <input
                        type="text"
                        className="form-control"
                        value="532.61"
                      />
                    </div>
                    <div className="col-md-2">
                      <input
                        type="text"
                        className="form-control"
                        value="1094.67"
                      />
                    </div>
                    <div className="col-md-2">
                      <input
                        type="text"
                        className="form-control"
                        value="39.15"
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
                    <div className="col-md-4">
                      <input
                        type="text"
                        className="form-control kt_financial_info_period"
                        value="Mar 31, 2021"
                      />
                    </div>
                    <div className="col-md-2">
                      <input
                        type="text"
                        className="form-control"
                        value="508.31"
                      />
                    </div>
                    <div className="col-md-2">
                      <input
                        type="text"
                        className="form-control"
                        value="864.9"
                      />
                    </div>
                    <div className="col-md-2">
                      <input
                        type="text"
                        className="form-control"
                        value="34.86"
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
                    <div className="col-md-4">
                      <input
                        type="text"
                        className="form-control kt_financial_info_period"
                        value="Mar 31, 2020"
                      />
                    </div>
                    <div className="col-md-2">
                      <input
                        type="text"
                        className="form-control"
                        value="387.63"
                      />
                    </div>
                    <div className="col-md-2">
                      <input
                        type="text"
                        className="form-control"
                        value="786.37"
                      />
                    </div>
                    <div className="col-md-2">
                      <input
                        type="text"
                        className="form-control"
                        value="27.49"
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
                    <div className="col-md-4">
                      <input
                        type="text"
                        className="form-control kt_financial_info_period"
                        value="Mar 31, 2019"
                      />
                    </div>
                    <div className="col-md-2">
                      <input
                        type="text"
                        className="form-control"
                        value="397.73"
                      />
                    </div>
                    <div className="col-md-2">
                      <input
                        type="text"
                        className="form-control"
                        value="829.74"
                      />
                    </div>
                    <div className="col-md-2">
                      <input
                        type="text"
                        className="form-control"
                        value="29.07"
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
            <h2>Valuations</h2>
          </div>
        </div>

        <div className="card-body pt-0">
          <div className="d-flex flex-wrap gap-5">
            <div className="w-100 fv-row flex-md-root">
              <label className="form-label">Earning Per Share (EPS)</label>
              <input type="text" className="form-control" value="₹9.20" />
            </div>

            <div className="w-100 fv-row flex-md-root">
              <label className="form-label">Price/Earning P/E Ratio</label>
              <input type="text" className="form-control" value="31.33" />
            </div>

            <div className="w-100 fv-row flex-md-root">
              <label className="form-label">Return on Net Worth (RoNW)s</label>
              <input type="text" className="form-control" value="12.92%" />
            </div>

            <div className="w-100 fv-row flex-md-root">
              <label className="form-label">Net Asset Value (NAV)</label>
              <input type="text" className="form-control" value="₹75.20" />
            </div>
          </div>
        </div>
      </div>

      <div className="card card-flush py-4">
        <div className="card-header">
          <div className="card-title">
            <h2>Lot Size</h2>
          </div>
        </div>

        <div className="card-body pt-0">
          <div id="kt_ipo_lot_size_repeater">
            <div className="form-group">
              <div className="form-group row">
                <div className="col-md-4">
                  <label className="form-label">Application</label>
                </div>
                <div className="col-md-2">
                  <label className="form-label">Lots</label>
                </div>
                <div className="col-md-2">
                  <label className="form-label">Shares</label>
                </div>
                <div className="col-md-2">
                  <label className="form-label">Amount</label>
                </div>
              </div>
              <div data-repeater-list="kt_ipo_lot_size_repeater">
                <div data-repeater-item>
                  <div className="form-group row mb-5">
                    <div className="col-md-4">
                      <input
                        type="text"
                        className="form-control"
                        value="Retail (Min)"
                      />
                    </div>
                    <div className="col-md-2">
                      <input type="text" className="form-control" value="1" />
                    </div>
                    <div className="col-md-2">
                      <input type="text" className="form-control" value="60" />
                    </div>
                    <div className="col-md-2">
                      <div className="input-group">
                        <span className="input-group-text">₹</span>
                        <input
                          type="text"
                          className="form-control"
                          value="14,820"
                        />
                      </div>
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
                    <div className="col-md-4">
                      <input
                        type="text"
                        className="form-control"
                        value="Retail (Max)"
                      />
                    </div>
                    <div className="col-md-2">
                      <input type="text" className="form-control" value="13" />
                    </div>
                    <div className="col-md-2">
                      <input type="text" className="form-control" value="780" />
                    </div>
                    <div className="col-md-2">
                      <div className="input-group">
                        <span className="input-group-text">₹</span>
                        <input
                          type="text"
                          className="form-control"
                          value="192,660"
                        />
                      </div>
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
                    <div className="col-md-4">
                      <input
                        type="text"
                        className="form-control"
                        value="S-HNI (Min)"
                      />
                    </div>
                    <div className="col-md-2">
                      <input type="text" className="form-control" value="14" />
                    </div>
                    <div className="col-md-2">
                      <input type="text" className="form-control" value="840" />
                    </div>
                    <div className="col-md-2">
                      <div className="input-group">
                        <span className="input-group-text">₹</span>
                        <input
                          type="text"
                          className="form-control"
                          value="207,480"
                        />
                      </div>
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
                    <div className="col-md-4">
                      <input
                        type="text"
                        className="form-control"
                        value="B-HNI (Min)"
                      />
                    </div>
                    <div className="col-md-2">
                      <input type="text" className="form-control" value="68" />
                    </div>
                    <div className="col-md-2">
                      <input
                        type="text"
                        className="form-control"
                        value="4,080"
                      />
                    </div>
                    <div className="col-md-2">
                      <div className="input-group">
                        <span className="input-group-text">₹</span>
                        <input
                          type="text"
                          className="form-control"
                          value="1,007,760"
                        />
                      </div>
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
            <h2>Peers Comparison</h2>
          </div>
        </div>

        <div className="card-body pt-0">
          <div id="kt_ipo_peers_comparison_repeater">
            <div className="form-group">
              <div className="form-group row">
                <div className="col-md-2">
                  <label className="form-label"></label>
                </div>
                <div className="col-md-2">
                  <label className="form-label">P/B</label>
                </div>
                <div className="col-md-2">
                  <label className="form-label">P/E</label>
                </div>
                <div className="col-md-2">
                  <label className="form-label">RoNW</label>
                </div>
                <div className="col-md-2">
                  <label className="form-label">Revenue</label>
                </div>
              </div>
              <div data-repeater-list="kt_ipo_peers_comparison_repeater">
                <div data-repeater-item>
                  <div className="form-group row mb-5">
                    <div className="col-md-2">
                      <input
                        type="text"
                        className="form-control"
                        value="Elin Electronics"
                      />
                    </div>
                    <div className="col-md-2">
                      <input
                        type="text"
                        className="form-control"
                        value="3.28"
                      />
                    </div>
                    <div className="col-md-2">
                      <input
                        type="text"
                        className="form-control"
                        value="31.3"
                      />
                    </div>
                    <div className="col-md-2">
                      <input
                        type="text"
                        className="form-control"
                        value="12.92%"
                      />
                    </div>
                    <div className="col-md-2">
                      <input
                        type="text"
                        className="form-control"
                        value="1,095 Cr."
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
                        type="text"
                        className="form-control"
                        value="Dixon Tech"
                      />
                    </div>
                    <div className="col-md-2">
                      <input
                        type="text"
                        className="form-control"
                        value="21.83"
                      />
                    </div>
                    <div className="col-md-2">
                      <input type="text" className="form-control" value="105" />
                    </div>
                    <div className="col-md-2">
                      <input
                        type="text"
                        className="form-control"
                        value="21.9%"
                      />
                    </div>
                    <div className="col-md-2">
                      <input
                        type="text"
                        className="form-control"
                        value="10,697 Cr."
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
                        type="text"
                        className="form-control"
                        value="Amber Ent."
                      />
                    </div>
                    <div className="col-md-2">
                      <input
                        type="text"
                        className="form-control"
                        value="3.76"
                      />
                    </div>
                    <div className="col-md-2">
                      <input
                        type="text"
                        className="form-control"
                        value="52.2"
                      />
                    </div>
                    <div className="col-md-2">
                      <input
                        type="text"
                        className="form-control"
                        value="6.67%"
                      />
                    </div>
                    <div className="col-md-2">
                      <input
                        type="text"
                        className="form-control"
                        value="4,206 Cr."
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
    </>
  );
};

export default FinancialsTab;
