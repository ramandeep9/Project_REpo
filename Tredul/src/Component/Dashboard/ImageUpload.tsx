import React, { useState, useRef, ChangeEvent } from "react";

function ImageUpload() {
  const [image, setImage] = useState<File | null>(null);
  const hiddenFileInput = useRef<HTMLInputElement>(null);

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    const file = event.target.files[0];
    const imgname = event.target.files[0].name;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      const img = new Image();
      img.src = reader.result as string;
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const maxSize = Math.max(img.width, img.height);
        canvas.width = maxSize;
        canvas.height = maxSize;
        const ctx = canvas.getContext("2d");
        if (ctx) {
          ctx.drawImage(
            img,
            (maxSize - img.width) / 2,
            (maxSize - img.height) / 2
          );
          canvas.toBlob(
            (blob) => {
              if (!blob) return;
              const file = new File([blob], imgname, {
                type: "image/png",
                lastModified: Date.now(),
              });

              console.log(file);
              setImage(file);
            },
            "image/jpeg",
            0.8
          );
        }
      };
    };
  };

  const handleUploadButtonClick = (file: File) => {
    var myHeaders = new Headers();
    const token = "adhgsdaksdhk938742937423";
    myHeaders.append("Authorization", `Bearer ${token}`);

    var formdata = new FormData();
    formdata.append("file", file);

    var requestOptions: RequestInit = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
    };

    fetch("https://trickuweb.com/upload/profile_pic", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(JSON.parse(result));
        const profileurl = JSON.parse(result);
        setImage(profileurl.img_url);
      })
      .catch((error) => console.log("error", error));
  };

  const handleClick = () => {
    if (hiddenFileInput.current) {
      hiddenFileInput.current.click();
    }
  };

  return (
    <div className="image-upload-container">
      <div className="box-decoration">
        <label htmlFor="image-upload-input" className="image-upload-label">
          {image ? image.name : "Choose an image"}
        </label>
        <div onClick={handleClick} style={{ cursor: "pointer" }}>
          {image ? (
            <img src={URL.createObjectURL(image)} alt="upload" className="img-display-after" />
          ) : (
            <img src="./photo.png" alt="upload" className="img-display-before" />
          )}

          <input
            id="image-upload-input"
            type="file"
            onChange={handleImageChange}
            ref={hiddenFileInput}
            style={{ display: "none" }}
          />
        </div>

        <button
          className="image-upload-button"
          onClick={() => image && handleUploadButtonClick(image)}
        >
          Upload
        </button>
      </div>
    </div>
  );
}

export default ImageUpload;
