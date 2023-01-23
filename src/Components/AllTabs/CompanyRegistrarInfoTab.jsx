import React from "react";

const RegistrarInfoTab = () => {
  return (
    <>
      <div className="card card-flush py-4">
        <div className="card-header">
          <div className="card-title">
            <h2>Comapny Contact Info</h2>
          </div>
        </div>

        <div className="card-body pt-0">
          <div className="mb-10 fv-row">
            <label className="form-label">Address</label>
            <textarea className="form-control min-h-100px">
              143, Cotton Street,&#13;&#10;Kolkata – 700 007,&#13;&#10;West
              Bengal, India
            </textarea>
          </div>

          <div className="d-flex flex-wrap gap-5">
            <div className="w-100 fv-row flex-md-root">
              <label className="form-label">Phone</label>
              <input
                type="text"
                className="form-control"
                value="+91 011 43000400"
              />
            </div>

            <div className="w-100 fv-row flex-md-root">
              <label className="form-label">Email</label>
              <input
                type="text"
                className="form-control"
                value="cs@elinindia.com"
              />
            </div>

            <div className="w-100 fv-row flex-md-root">
              <label className="form-label">Website</label>
              <input
                type="text"
                className="form-control"
                value="https://www.elinindia.com/"
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
              value="KFin Technologies Limited"
            />
          </div>

          <div className="d-flex flex-wrap gap-5 mb-10">
            <div className="w-100 fv-row flex-md-root">
              <label className="form-label">Phone</label>
              <input
                type="text"
                className="form-control"
                value="04067162222, 04079611000"
              />
            </div>

            <div className="w-100 fv-row flex-md-root">
              <label className="form-label">Email</label>
              <input
                type="text"
                className="form-control"
                value="elinindia.ipo@kfintech.com"
              />
            </div>

            <div className="w-100 fv-row flex-md-root">
              <label className="form-label">Website</label>
              <input
                type="text"
                className="form-control"
                value="https://karisma.kfintech.com/"
              />
            </div>
          </div>

          <div className="fv-row">
            <label className="form-label">Allotment Link</label>
            <input
              type="text"
              className="form-control"
              value="https://kosmic.kfintech.com/ipostatus/"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default RegistrarInfoTab;
