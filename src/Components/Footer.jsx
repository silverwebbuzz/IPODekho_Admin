import React from "react";

const Footer = () => {
  return (
    <div id="kt_app_footer" class="app-footer">
      <div class="app-container container-fluid d-flex flex-column flex-md-row flex-center flex-md-stack py-3">
        <div class="text-dark order-2 order-md-1">
          <span class="text-muted fw-semibold me-1">2022 &copy;</span>
          <a
            href="https://cipherbrains.com"
            target="_blank"
            class="text-gray-800 text-hover-primary"
          >
            Cipherbrains Technologies
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
