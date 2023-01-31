import { useState, useRef } from "react";
import "./FilePreviewer.css";
import blankImage from "../../assets/media/offer/blank-image.svg";
import { useContext } from "react";
import { FormContext } from "../../App";

const FilePreviewer = ({ ipoImage, newsImage, offerModal }) => {
  const [imagePreview, setImagePreview] = useState();
  const { formData, setFormData } = useContext(FormContext);

  const filePicekerRef = useRef(null);

  const previewFile = (e) => {
    // const reader = new FileReader();
    // const selectedFile = e.target.files[0];
    // if (selectedFile) {
    //   reader.readAsDataURL(selectedFile);
    // }
    // reader.onload = (readerEvent) => {
    //   if (selectedFile.type.includes("image")) {
    //     setImagePreview(readerEvent.target.result);
    //     if (ipoImage) {
    //       const data = { ...formData, ["file"]: readerEvent.target.result };
    //       setFormData(data);
    //     }
    //   }
    // };
    if (ipoImage) {
      const data = { ...formData, ["file"]: e.target.files[0] };
      setFormData(data);
    }
  };

  function clearFiles() {
    setImagePreview(blankImage);
  }

  return (
    <>
      <input
        ref={filePicekerRef}
        accept="image/*, video/*"
        onChange={previewFile}
        type="file"
        hidden
      />
      <button
        className="btn position-absolute edit_btn btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
        onClick={() => filePicekerRef.current.click()}
      >
        <i class="bi bi-pencil-fill fs-7"></i>
      </button>
      {imagePreview && (
        <button
          className="btn btn_delete btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
          onClick={clearFiles}
        >
          <i class="bi bi-x fs-2"></i>
        </button>
      )}
      {ipoImage ? (
        <div className="preview w-150px h-150px">
          {imagePreview != null && (
            <img className="image_position" src={imagePreview} alt="" />
          )}
        </div>
      ) : newsImage ? (
        <div className="preview w-400px h-400px">
          {imagePreview != null && (
            <img className="image_position" src={imagePreview} alt="" />
          )}
        </div>
      ) : offerModal ? (
        <div className="preview w-125px h-125px">
          {imagePreview != null && (
            <img className="image_position" src={imagePreview} alt="" />
          )}
        </div>
      ) : null}
    </>
  );
};

export default FilePreviewer;
