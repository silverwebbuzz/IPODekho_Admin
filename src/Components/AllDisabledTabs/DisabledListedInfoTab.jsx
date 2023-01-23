import React from "react";

const DisabledListedInfoTab = () => {
  return (
    <>
      <div className="card card-flush py-4">
        <div className="card-header">
          <div className="card-title">
            <h2>Listing Info</h2>
          </div>
        </div>

        <div className="card-body pt-0">
          <div className="d-flex flex-wrap gap-5 mb-10">
            <div className="w-100 fv-row flex-md-root">
              <label className="form-label">Listing Date</label>
              <input
                disabled
                type="text"
                className="form-control"
                id="live_listtiing_date"
                value="Dec 30,2022"
              />
            </div>

            <div className="w-100 fv-row flex-md-root">
              <label className="form-label">Listing Price</label>
              <div className="input-group">
                <span className="input-group-text">₹</span>
                <input
                  disabled
                  type="text"
                  className="form-control"
                  value="244.00"
                />
              </div>
            </div>

            <div className="w-100 fv-row flex-md-root">
              <label className="form-label">Listing Position</label>
              <div className="d-flex">
                <div className="form-check form-check-custom form-check-success form-check-solid me-10">
                  <input
                    disabled
                    className="form-check-input"
                    type="radio"
                    value="Positive"
                    name="listing_position"
                    id="listing_Positive"
                  />
                  <label className="form-check-label" for="listing_Positive">
                    Positive
                  </label>
                </div>

                <div className="form-check form-check-custom form-check-danger form-check-solid">
                  <input
                    disabled
                    className="form-check-input"
                    type="radio"
                    value="Negative"
                    name="listing_position"
                    checked
                    id="listing_Negative"
                  />
                  <label className="form-check-label" for="listing_Negative">
                    Negative
                  </label>
                </div>
              </div>
            </div>

            <div className="w-100 fv-row flex-md-root">
              <label className="form-label">Listing Different</label>
              <div className="input-group">
                <input
                  disabled
                  type="text"
                  className="form-control"
                  value="1.21"
                />
                <span className="input-group-text">%</span>
              </div>
            </div>
          </div>
          <div className="d-flex flex-wrap gap-5 mb-10">
            <div className="w-100 fv-row flex-md-root">
              <label className="form-label">NSE Code</label>
              <input
                disabled
                type="text"
                className="form-control"
                id="live_listtiing_date"
                value="ELIN"
              />
            </div>

            <div className="w-100 fv-row flex-md-root">
              <label className="form-label">BSE Script</label>
              <input
                disabled
                type="text"
                className="form-control"
                value="543725"
              />
            </div>
          </div>
          <div className="d-flex flex-wrap gap-5 mb-10">
            <div className="w-100 fv-row flex-md-root">
              <label className="form-label">Closing Date</label>
              <input
                disabled
                type="text"
                className="form-control"
                id="live_closing_date"
                value="Jan 02,2023"
              />
            </div>

            <div className="w-100 fv-row flex-md-root">
              <label className="form-label">Closing Price</label>
              <div className="input-group">
                <span className="input-group-text">₹</span>
                <input
                  disabled
                  type="text"
                  className="form-control"
                  value="228.10"
                />
              </div>
            </div>

            <div className="w-100 fv-row flex-md-root">
              <label className="form-label">Script Position</label>
              <div className="d-flex">
                <div className="form-check form-check-custom form-check-success form-check-solid me-10">
                  <input
                    disabled
                    className="form-check-input"
                    type="radio"
                    value="Positive"
                    name="script_position"
                    id="script_Positive"
                  />
                  <label className="form-check-label" for="script_Positive">
                    Positive
                  </label>
                </div>

                <div className="form-check form-check-custom form-check-danger form-check-solid">
                  <input
                    disabled
                    className="form-check-input"
                    type="radio"
                    value="Negative"
                    name="script_position"
                    checked
                    id="script_Negative"
                  />
                  <label className="form-check-label" for="script_Negative">
                    Negative
                  </label>
                </div>
              </div>
            </div>

            <div className="w-100 fv-row flex-md-root">
              <label className="form-label">Closing Different</label>
              <div className="input-group">
                <input
                  disabled
                  type="text"
                  className="form-control"
                  value="7.7"
                />
                <span className="input-group-text">%</span>
              </div>
            </div>
          </div>
          <div className="d-flex flex-wrap gap-5 mb-10">
            <div className="w-100 fv-row flex-md-root">
              <label className="form-label">52 Week High</label>
              <div className="input-group">
                <span className="input-group-text">₹</span>
                <input
                  disabled
                  type="text"
                  className="form-control"
                  value="245.00"
                />
              </div>
            </div>

            <div className="w-100 fv-row flex-md-root">
              <label className="form-label">52 Week Low</label>
              <div className="input-group">
                <span className="input-group-text">₹</span>
                <input
                  disabled
                  type="text"
                  className="form-control"
                  value="217.70"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DisabledListedInfoTab;
