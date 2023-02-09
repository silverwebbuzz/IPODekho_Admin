import { Field, Form, Formik } from "formik";
import { auth, db } from "../../../FirebaseConfig";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { query, orderBy, onSnapshot, limit } from "firebase/firestore";
import React, { useEffect, useState } from "react";
// import { useEffect } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";

const ChatTab = () => {
  const [message, setMessage] = useState();
  const MSGS = message && message && Object.values(message);
  const sendMessage = async (values) => {
    if (values?.msg.trim() === "") {
      alert("Enter valid message");
      return;
    } else {
      signInWithEmailAndPassword(auth, "sahil@gmail.com", "Silver@123")
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
        });
      const { uid } = auth.currentUser;
      await addDoc(collection(db, "messages"), {
        msg: values.msg,
        name: "sahil",
        avatar: "",
        createdAt: serverTimestamp(),
        uid,
      });
    }
  };

  useEffect(() => {
    const q = query(
      collection(db, "messages"),
      orderBy("createdAt"),
      limit(50)
    );
    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      let messages = [];
      QuerySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessage(messages);
    });
    return () => unsubscribe;
  }, []);

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
            {MSGS?.map((msg, i) => {
              return (
                <>
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
                            {"user name"}
                            {console.log("MSGS", msg, i)}{" "}
                          </a>
                          <span className="text-muted fs-7 mb-1">2 mins</span>
                        </div>
                      </div>

                      <div
                        className="p-5 rounded bg-light-info text-dark fw-semibold mw-lg-400px text-start"
                        data-kt-element="message-text"
                      >
                        {"user message"}
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
                        {msg?.msg}
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
        <Formik
          initialValues={{ msg: "" }}
          onSubmit={(values, { resetForm }) => {
            sendMessage(values);
            resetForm();
          }}
        >
          {({ values }) => (
            <Form>
              <div className="card-footer pt-4" id="kt_chat_messenger_footer">
                <Field
                  name="msg"
                  className="form-control form-control-flush mb-3"
                  as="textarea"
                  rows="1"
                />

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
                    type="submit"
                    // data-kt-element="send"
                  >
                    Send
                  </button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default ChatTab;
