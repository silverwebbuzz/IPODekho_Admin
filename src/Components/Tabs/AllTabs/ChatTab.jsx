import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  onSnapshot,
  orderBy,
  query,
  where,
  doc,
} from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import moment from "moment/moment";
import { Field, Form, Formik } from "formik";
import { useSelector } from "react-redux";
import { useRef } from "react";

const firebaseConfig = {
  // Your Firebase config
  apiKey: "AIzaSyCcmb_bZiVnFwzGw3vRlGpSdikk72ZCbf4",
  authDomain: "ipodekho-19fc1.firebaseapp.com",
  projectId: "ipodekho-19fc1",
  storageBucket: "ipodekho-19fc1.appspot.com",
  messagingSenderId: "931102543499",
  appId: "1:931102543499:web:01c01b8e86983e8ccf4e8e",
  measurementId: "G-02SPCQPKDD",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

function ChatTab() {
  const [messages, setMessages] = useState([]);
  const { getIPODataById } = useSelector((state) => state?.mainLineIpoSlice);

  const messageEnd = useRef();
  const adminId = "RSgguExRRwSbkqY2KWKFc41Idbs1";
  const timeFormat = (secs) => {
    let output = new Date(secs * 1000);
    let formatTime = moment(output).format("D MMM LT");
    console.log(formatTime);
    return formatTime;
  };

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(
        collection(
          db,
          `messageCollection/${getIPODataById.id}/messageCollection`
        ),
        orderBy("createdAt")
      ),
      (snapshot) => {
        setMessages(snapshot.docs.map((doc) => doc.data()));
      }
    );
    return unsubscribe;
  }, []);

  const handleSendMessage = async (values) => {
    await addDoc(
      collection(
        db,
        `messageCollection/${getIPODataById.id}/messageCollection`
      ),
      {
        text: values.msg,
        createdAt: new Date(),
        userId: "RSgguExRRwSbkqY2KWKFc41Idbs1",
        companyid: getIPODataById.id,
        name: "admin", // need to add dynamic name
        Avatar:
          "https://thumbs.dreamstime.com/b/male-avatar-icon-flat-style-male-user-icon-cartoon-man-avatar-hipster-vector-stock-91462914.jpg",
      }
    );
  };

  useEffect(() => {
    // messageEnd.current.style.backgroundColor = "black";
    const scrollToBottom = async () => {
      // ans?.scrollIntoView({ behavior: "smooth" });
      messageEnd?.current?.scrollIntoView({ behavior: "smooth" });
    };
    return scrollToBottom;
  }, [messages]);
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
                {getIPODataById?.companyName}
              </a>
            </div>
          </div>
        </div>

        <div
          className="card-body chatScroll"
          id="kt_chat_messenger_body"
          style={{ height: "600px", overflow: "scroll" }}
        >
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
            {messages &&
              messages.map((messege) => (
                <div>
                  {messege.userId !== adminId ? (
                    <div className="d-flex justify-content-start mb-10">
                      <div className="d-flex flex-column align-items-start">
                        <div className="d-flex align-items-center mb-2">
                          <div className="symbol symbol-35px symbol-circle">
                            <img alt="Pic" src={messege?.Avatar} />
                          </div>

                          <div className="ms-3">
                            <a className="fs-5 fw-bold text-gray-900 text-hover-primary me-1"></a>
                            <span className="text-muted fs-7 mb-1">
                              {" "}
                              {timeFormat(
                                messege?.createdAt?.seconds
                              ).toString()}
                            </span>
                          </div>
                        </div>

                        <div
                          className="p-5 rounded bg-light-info text-dark fw-semibold mw-lg-400px text-start"
                          data-kt-element="message-text"
                        >
                          {messege.text}
                        </div>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}

                  {messege.userId === adminId ? (
                    <div className="d-flex justify-content-end mb-10">
                      <div className="d-flex flex-column align-items-end">
                        <div className="d-flex align-items-center mb-2">
                          <div className="me-3">
                            <span className="text-muted fs-7 mb-1">
                              {timeFormat(
                                messege?.createdAt?.seconds
                              ).toString()}
                            </span>
                            <a
                              href="#"
                              className="fs-5 fw-bold text-gray-900 text-hover-primary ms-1"
                            >
                              You
                            </a>
                          </div>

                          <div className="symbol symbol-35px symbol-circle">
                            <img alt="Pic" src={messege?.Avatar} />
                          </div>
                        </div>

                        <div
                          className="p-5 rounded bg-light-primary text-dark fw-semibold mw-lg-400px text-end"
                          data-kt-element="message-text"
                        >
                          {messege?.text}
                        </div>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              ))}
            <div className="chatScroll"></div>
          </div>
          <div ref={messageEnd} />
        </div>

        <Formik
          initialValues={{ msg: "" }}
          onSubmit={(values, { resetForm }) => {
            handleSendMessage(values);
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

                  {values.msg.length !== 0 ? (
                    <button
                      className="btn btn-primary"
                      type="submit"
                      // onClick={handleScroll}
                    >
                      Send
                    </button>
                  ) : (
                    <button className="btn btn-primary" type="submit" disabled>
                      Send
                    </button>
                  )}
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
}

export default ChatTab;
