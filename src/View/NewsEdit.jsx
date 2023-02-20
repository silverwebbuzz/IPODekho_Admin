import { Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { modules } from "../Constants/commonConstants";
import DatePicker from "react-datepicker";
import { useDispatch, useSelector } from "react-redux";
import {
  createNews,
  getNewsById,
  updateNews,
  updateNewsImage,
} from "../redux/slice/newsSlice";
import AppContentLayout from "../Components/AppContentLayout";
import PageHeading from "../Components/PageHeading";
import blankImage from "../assets/media/offer/blank-image.svg";
import "react-datepicker/dist/react-datepicker.css";
const NewsEdit = () => {
  const { getDataById } = useSelector((state) => state.newsReducer);
  const params = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  //   const formData = new FormData();
  const formDataImg = new FormData();

  const imageMimeType = /image\/(png|jpg|jpeg)/i;
  const [file, setFile] = useState(null);
  const [fileDataURL, setFileDataURL] = useState(getNewsById?.file);

  const changeHandler = (e) => {
    const imageFile = e.target.files[0];

    if (!imageFile.type.match(imageMimeType)) {
      alert("Image mime type is not valid");
      return;
    }
    setFile(imageFile);
  };

  useEffect(() => {
    let fileReader,
      isCancel = false;

    if (file) {
      fileReader = new FileReader();
      fileReader.onload = (e) => {
        const { result } = e.target;
        if (result && !isCancel) {
          setFileDataURL(result);
        }
      };
      fileReader.readAsDataURL(file);
    }
    return () => {
      isCancel = true;
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort();
      }
    };
  }, [file]);

  const DatePickerField = ({ name, value, onChange }) => {
    return (
      <DatePicker
        selected={(value && new Date(value)) || null}
        className="form-control"
        dateFormat="MMM d, yyyy"
        onChange={(val) => {
          onChange(name, val);
        }}
      />
    );
  };
  const handleRemoveImage = () => {
    setFile("");
    setFileDataURL("");
  };

  const handleSubmit = (values) => {
    let payload = {
      id: getDataById?.id,
      Content: values?.Content,
      Title: values?.Title,
      Date: values?.newsDate,
    };
    formDataImg.append("file", file);
    let payloadImage = {
      payload: formDataImg,
      payloadId: { id: getDataById?.id },
    };
    dispatch(updateNewsImage({ payloadImage }));
    dispatch(updateNews({ payload }));
    navigate("/news");
  };

  useEffect(() => {
    const payload = {
      id: params?.newsId,
    };
    setFileDataURL(getDataById?.file);
    dispatch(getNewsById({ payload }));
  }, [getDataById?.file]);

  return (
    <>
      <PageHeading title={"News Edit"} />
      <AppContentLayout>
        <div className="card">
          <div className="card-body">
            <Formik
              enableReinitialize
              initialValues={{
                file: getDataById?.file,
                Content: getDataById?.Content,
                Title: getDataById?.Title,
                newsDate: getDataById?.Date,
              }}
              onSubmit={(values) => handleSubmit(values)}
            >
              {({ values, setFieldValue }) => (
                <Form>
                  <label className="form-label d-block">News Image</label>

                  <div
                    className="image-input image-input-empty image-input-outline image-input-placeholder mb-3"
                    data-kt-image-input="true"
                    style={{ position: "relative" }}
                  >
                    <div
                      style={{
                        backgroundSize: "contain",
                        backgroundPosition: "center",
                      }}
                    >
                      <img
                        className="image-input-wrapper w-400px h-400px"
                        src={fileDataURL ? fileDataURL : blankImage}
                        alt="preview"
                      />
                    </div>

                    <label
                      htmlFor="image"
                      data-kt-image-input-action="change"
                      className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                    >
                      <i className="bi bi-pencil-fill fs-7" />

                      <input
                        name="file"
                        type="file"
                        id="image"
                        onChange={changeHandler}
                        hidden
                        accept=".png, .jpg, .jpeg"
                        //   value={values?.file}
                      />
                    </label>

                    {fileDataURL && (
                      <div
                        style={{
                          position: "absolute",
                          right: "-12px",
                          bottom: "-12px",
                        }}
                        onClick={handleRemoveImage}
                        className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                      >
                        <i class="bi bi-x fs-2"></i>
                      </div>
                    )}
                  </div>

                  <div className="text-muted fs-7">
                    Set the News image. Only .png, .jpg and *.jpeg image files
                    are accepted
                  </div>

                  <div className="w-100 fv-row mt-10">
                    <label className="form-label">Date</label>
                    <DatePickerField
                      name="newsDate"
                      // className="form-control mb-2"
                      value={values?.newsDate}
                      onChange={setFieldValue}
                    />
                  </div>

                  <div className="w-100 fv-row mt-10">
                    <label className="form-label">Title</label>
                    <Field
                      name="Title"
                      type="text"
                      className="form-control mb-2"
                    />
                  </div>

                  <div className="mt-10">
                    <label className="form-label">Content</label>
                    <Field name="Content">
                      {({ field }) => (
                        <ReactQuill
                          className="min-h-500px h-500px mb-2"
                          modules={modules}
                          value={field.value}
                          onChange={field.onChange(field.name)}
                        />
                      )}
                    </Field>
                  </div>

                  <div className="d-flex justify-content-end mt-15">
                    <Link to="/news" className="btn btn-light me-5">
                      Back to List
                    </Link>
                    <button type="submit" className="btn btn-primary">
                      Save Changes
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </AppContentLayout>
    </>
  );
};

export default NewsEdit;
