import React from "react";

const RegistrarInfoTab = ({ nextStep, prevStep, values, handleChange }) => {
  console.log(values);
  const submitFormData = (e) => {
    e.preventDefault();
    nextStep();
  };
  return (
    <>
      <div>
        <form onSubmit={submitFormData}>
          <div className="card card-flush py-4">
            <div className="card-header">
              <div className="card-title">
                <h2>Comapny Contact Info</h2>
              </div>
            </div>

            <div className="card-body pt-0">
              <div className="mb-10 fv-row">
                <label className="form-label">Address</label>
                <textarea
                  className="form-control min-h-100px"
                  name="companyAddress"
                  value={values?.companyAddress}
                  onChange={(e) =>
                    handleChange("companyAddress", e.target.value)
                  }
                />
                {console.log("values?.companyAddress", values?.companyAddress)}
              </div>

              <div className="d-flex flex-wrap gap-5">
                <div className="w-100 fv-row flex-md-root">
                  <label className="form-label">Phone</label>
                  <input
                    type="tel"
                    className="form-control"
                    name="companyPhone"
                    Value={values?.companyPhone}
                    onChange={(e) =>
                      handleChange("companyPhone", e.target.value)
                    }
                  />
                </div>

                <div className="w-100 fv-row flex-md-root">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="companyEmail"
                    Value={values?.companyEmail}
                    onChange={(e) =>
                      handleChange("companyEmail", e.target.value)
                    }
                  />
                </div>

                <div className="w-100 fv-row flex-md-root">
                  <label className="form-label">Website</label>
                  <input
                    type="text"
                    className="form-control"
                    name="companyWebsite"
                    Value={values?.companyWebsite}
                    onChange={(e) =>
                      handleChange("companyWebsite", e.target.value)
                    }
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="card card-flush py-4">
            <div className="card-header">
              <div className="card-title">
                <h2>Registrar Contact Info</h2>
              </div>
            </div>

            <div className="card-body pt-0">
              <div className="mb-10 fv-row">
                <label className="form-label">Registrar Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="companyRegisterName"
                  Value={values?.companyRegisterName}
                  onChange={(e) =>
                    handleChange("companyRegisterName", e.target.value)
                  }
                />
              </div>

              <div className="d-flex flex-wrap gap-5 mb-10">
                <div className="w-100 fv-row flex-md-root">
                  <label className="form-label">Phone</label>
                  <input
                    type="tel"
                    className="form-control"
                    name="companyRegisterPhone"
                    Value={values?.companyRegisterPhone}
                    onChange={(e) =>
                      handleChange("companyRegisterPhone", e.target.value)
                    }
                  />
                </div>

                <div className="w-100 fv-row flex-md-root">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="companyRegisterEmail"
                    Value={values?.companyRegisterEmail}
                    onChange={(e) =>
                      handleChange("companyRegisterEmail", e.target.value)
                    }
                  />
                </div>

                <div className="w-100 fv-row flex-md-root">
                  <label className="form-label">Website</label>
                  <input
                    type="text"
                    className="form-control"
                    name="companyRegisterWebsite"
                    Value={values?.companyRegisterWebsite}
                    onChange={(e) =>
                      handleChange("companyRegisterWebsite", e.target.value)
                    }
                  />
                </div>
              </div>

              <div className="fv-row">
                <label className="form-label">Allotment Link</label>
                <input
                  type="text"
                  className="form-control"
                  name="companyRegisterAllotmentLink"
                  Value={values?.companyRegisterAllotmentLink}
                  onChange={(e) =>
                    handleChange("companyRegisterAllotmentLink", e.target.value)
                  }
                />
              </div>
            </div>
            <div className="d-flex justify-content-end">
              <button className="btn btn-primary" onClick={() => prevStep()}>
                {"<< previous"}
              </button>
              <button
                className="btn btn-primary ml-2"
                type="submit"
                style={{ marginLeft: "5px" }}
              >
                {/* onClick={() => nextStep()} */}
                {"Next >>"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default RegistrarInfoTab;
