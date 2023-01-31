import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import "../assets/css/FilePreviewer.css";
import blankImage from "../assets/media/offer/blank-image.svg";
import { uploadIMG } from "../redux/slice/mainLineIpoSlices";

const FilePreviewer = ({ ipoImage, newsImage, offerModal }) => {
  const [imagePreview, setImagePreview] = useState();
  const dispatch = useDispatch();
  const filePicekerRef = useRef(null);

  const previewFile = (e) => {
    console.log(" e?.target?.files[0]", e?.target?.files[0]);
    let formData = new FormData();
    formData.append("file", e?.target?.files[0]);
    let payload = formData;
    dispatch(uploadIMG({ payload }));
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
