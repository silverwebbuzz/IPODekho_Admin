import React from "react";

const ChatTab = () => {
  return (
    <>
      <div className="card" id="kt_chat_messenger">
        <div className="card-header" id="kt_chat_messenger_header">
          <div className="card-title">
            <div className="d-flex justify-content-center flex-column me-3">
              <a
                href="#"
                className="fs-4 fw-bold text-gray-900 text-hover-primary me-1 mb-2 lh-1"
              >
                Discussion - Elin Electronics Ltd.
              </a>
            </div>
          </div>
        </div>

        <div className="card-body" id="kt_chat_messenger_body">
          <div
            className="scroll-y me-n5 pe-5 h-300px h-lg-auto"
            data-kt-element="messages"
            data-kt-scroll="true"
            data-kt-scroll-activate="{default: false, lg: true}"
            data-kt-scroll-max-height="auto"
            data-kt-scroll-dependencies="#kt_header, #kt_app_header, #kt_app_toolbar, #kt_toolbar, #kt_footer, #kt_app_footer, #kt_chat_messenger_header, #kt_chat_messenger_footer"
            data-kt-scroll-wrappers="#kt_content, #kt_app_content, #kt_chat_messenger_body"
            data-kt-scroll-offset="5px"
          >
            <div className="d-flex justify-content-start mb-10">
              <div className="d-flex flex-column align-items-start">
                <div className="d-flex align-items-center mb-2">
                  <div className="symbol symbol-35px symbol-circle">
                    <img alt="Pic" src="assets/media/user/300-25.jpg" />
                  </div>

                  <div className="ms-3">
                    <a
                      href="#"
                      className="fs-5 fw-bold text-gray-900 text-hover-primary me-1"
                    >
                      Brian Cox
                    </a>
                    <span className="text-muted fs-7 mb-1">2 mins</span>
                  </div>
                </div>

                <div
                  className="p-5 rounded bg-light-info text-dark fw-semibold mw-lg-400px text-start"
                  data-kt-element="message-text"
                >
                  How likely are you to recommend our company to your friends
                  and family ?
                </div>
              </div>
            </div>

            <div className="d-flex justify-content-end mb-10">
              <div className="d-flex flex-column align-items-end">
                <div className="d-flex align-items-center mb-2">
                  <div className="me-3">
                    <span className="text-muted fs-7 mb-1">5 mins</span>
                    <a
                      href="#"
                      className="fs-5 fw-bold text-gray-900 text-hover-primary ms-1"
                    >
                      You
                    </a>
                  </div>

                  <div className="symbol symbol-35px symbol-circle">
                    <img alt="Pic" src="assets/media/user/300-1.jpg" />
                  </div>
                </div>

                <div
                  className="p-5 rounded bg-light-primary text-dark fw-semibold mw-lg-400px text-end"
                  data-kt-element="message-text"
                >
                  Hey there, we’re just writing to let you know that you’ve been
                  subscribed to a repository on GitHub.
                </div>
              </div>
            </div>

            <div className="d-flex justify-content-start mb-10">
              <div className="d-flex flex-column align-items-start">
                <div className="d-flex align-items-center mb-2">
                  <div className="symbol symbol-35px symbol-circle">
                    <img alt="Pic" src="assets/media/user/300-25.jpg" />
                  </div>

                  <div className="ms-3">
                    <a
                      href="#"
                      className="fs-5 fw-bold text-gray-900 text-hover-primary me-1"
                    >
                      Brian Cox
                    </a>
                    <span className="text-muted fs-7 mb-1">1 Hour</span>
                  </div>
                </div>

                <div
                  className="p-5 rounded bg-light-info text-dark fw-semibold mw-lg-400px text-start"
                  data-kt-element="message-text"
                >
                  Ok, Understood!
                </div>
              </div>
            </div>

            <div className="d-flex justify-content-end mb-10">
              <div className="d-flex flex-column align-items-end">
                <div className="d-flex align-items-center mb-2">
                  <div className="me-3">
                    <span className="text-muted fs-7 mb-1">2 Hours</span>
                    <a
                      href="#"
                      className="fs-5 fw-bold text-gray-900 text-hover-primary ms-1"
                    >
                      You
                    </a>
                  </div>

                  <div className="symbol symbol-35px symbol-circle">
                    <img alt="Pic" src="assets/media/user/300-1.jpg" />
                  </div>
                </div>

                <div
                  className="p-5 rounded bg-light-primary text-dark fw-semibold mw-lg-400px text-end"
                  data-kt-element="message-text"
                >
                  You’ll receive notifications for all issues, pull requests!
                </div>
              </div>
            </div>

            <div className="d-flex justify-content-start mb-10">
              <div className="d-flex flex-column align-items-start">
                <div className="d-flex align-items-center mb-2">
                  <div className="symbol symbol-35px symbol-circle">
                    <img alt="Pic" src="assets/media/user/300-25.jpg" />
                  </div>

                  <div className="ms-3">
                    <a
                      href="#"
                      className="fs-5 fw-bold text-gray-900 text-hover-primary me-1"
                    >
                      Brian Cox
                    </a>
                    <span className="text-muted fs-7 mb-1">3 Hours</span>
                  </div>
                </div>

                <div
                  className="p-5 rounded bg-light-info text-dark fw-semibold mw-lg-400px text-start"
                  data-kt-element="message-text"
                >
                  You can unwatch this repository immediately by clicking here:
                  <a href="https://keenthemes.com">Keenthemes.com</a>
                </div>
              </div>
            </div>

            <div className="d-flex justify-content-end mb-10">
              <div className="d-flex flex-column align-items-end">
                <div className="d-flex align-items-center mb-2">
                  <div className="me-3">
                    <span className="text-muted fs-7 mb-1">4 Hours</span>
                    <a
                      href="#"
                      className="fs-5 fw-bold text-gray-900 text-hover-primary ms-1"
                    >
                      You
                    </a>
                  </div>

                  <div className="symbol symbol-35px symbol-circle">
                    <img alt="Pic" src="assets/media/user/300-1.jpg" />
                  </div>
                </div>

                <div
                  className="p-5 rounded bg-light-primary text-dark fw-semibold mw-lg-400px text-end"
                  data-kt-element="message-text"
                >
                  Most purchased Business courses during this sale!
                </div>
              </div>
            </div>

            <div className="d-flex justify-content-start mb-10">
              <div className="d-flex flex-column align-items-start">
                <div className="d-flex align-items-center mb-2">
                  <div className="symbol symbol-35px symbol-circle">
                    <img alt="Pic" src="assets/media/user/300-25.jpg" />
                  </div>

                  <div className="ms-3">
                    <a
                      href="#"
                      className="fs-5 fw-bold text-gray-900 text-hover-primary me-1"
                    >
                      Brian Cox
                    </a>
                    <span className="text-muted fs-7 mb-1">5 Hours</span>
                  </div>
                </div>

                <div
                  className="p-5 rounded bg-light-info text-dark fw-semibold mw-lg-400px text-start"
                  data-kt-element="message-text"
                >
                  Company BBQ to celebrate the last quater achievements and
                  goals. Food and drinks provided
                </div>
              </div>
            </div>

            <div
              className="d-flex justify-content-end mb-10 d-none"
              data-kt-element="template-out"
            >
              <div className="d-flex flex-column align-items-end">
                <div className="d-flex align-items-center mb-2">
                  <div className="me-3">
                    <span className="text-muted fs-7 mb-1">Just now</span>
                    <a
                      href="#"
                      className="fs-5 fw-bold text-gray-900 text-hover-primary ms-1"
                    >
                      You
                    </a>
                  </div>

                  <div className="symbol symbol-35px symbol-circle">
                    <img alt="Pic" src="assets/media/user/300-1.jpg" />
                  </div>
                </div>

                <div
                  className="p-5 rounded bg-light-primary text-dark fw-semibold mw-lg-400px text-end"
                  data-kt-element="message-text"
                ></div>
              </div>
            </div>

            <div
              className="d-flex justify-content-start mb-10 d-none"
              data-kt-element="template-in"
            >
              <div className="d-flex flex-column align-items-start">
                <div className="d-flex align-items-center mb-2">
                  <div className="symbol symbol-35px symbol-circle">
                    <img alt="Pic" src="assets/media/user/300-25.jpg" />
                  </div>

                  <div className="ms-3">
                    <a
                      href="#"
                      className="fs-5 fw-bold text-gray-900 text-hover-primary me-1"
                    >
                      Brian Cox
                    </a>
                    <span className="text-muted fs-7 mb-1">Just now</span>
                  </div>
                </div>

                <div
                  className="p-5 rounded bg-light-info text-dark fw-semibold mw-lg-400px text-start"
                  data-kt-element="message-text"
                >
                  Right before vacation season we have the next Big Deal for
                  you.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card-footer pt-4" id="kt_chat_messenger_footer">
          <textarea
            className="form-control form-control-flush mb-3"
            rows="1"
            data-kt-element="input"
            placeholder="Type a message"
          ></textarea>

          <div className="d-flex flex-stack">
            <div className="d-flex align-items-center me-2">
              <button
                className="btn btn-sm btn-icon btn-active-light-primary me-1"
                type="button"
                data-bs-toggle="tooltip"
                title="Coming soon"
              >
                <i className="bi bi-paperclip fs-3"></i>
              </button>
              <button
                className="btn btn-sm btn-icon btn-active-light-primary me-1"
                type="button"
                data-bs-toggle="tooltip"
                title="Coming soon"
              >
                <i className="bi bi-upload fs-3"></i>
              </button>
            </div>

            <button
              className="btn btn-primary"
              type="button"
              data-kt-element="send"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatTab;
