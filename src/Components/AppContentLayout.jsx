import React from "react";

const AppContentLayout = ({ children }) => {
  return (
    <div id="kt_app_content" className="app-content flex-column-fluid">
      <div
        id="kt_app_content_container"
        className="app-container container-xxl"
      >
        <div className="card">{children}</div>
      </div>
    </div>
  );
};

export default AppContentLayout;
