import React, { Component } from "react";
import axios from "axios";
import { v4 as randomString } from "uuid";
import Dropzone from "react-dropzone";
import { GridLoader } from "react-spinners";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import "./S3.css";

class S3 extends Component {
  constructor() {
    super();
    this.state = {
      isUploading: false,
      crop: {
        width: 200,
        aspect: 1
      },
      imageToCrop: "",
      cropping: false,
      croppedImage: null,
      imageName: "",
      imageType: ""
    };
  }

  getSignedRequest = ([file]) => {
    this.setState({ isUploading: true });
    const fileName = `${randomString()}-${file.name.replace(/\s/g, "-")}`;
    axios
      .get("/api/signs3", {
        params: {
          "file-name": fileName,
          "file-type": file.type
        }
      })
      .then(response => {
        const { signedRequest, url } = response.data;
        this.uploadFile(file, signedRequest, url);
      })
      .catch(err => {
        console.log(err);
      });
  };

  uploadFile = (file, signedRequest, url) => {
    const options = {
      headers: {
        "Content-Type": file.type
      }
    };

    axios
      .put(signedRequest, file, options)
      .then(() => {
        this.setState({ isUploading: false });
        this.props.onUploadComplete(url);
      })
      .catch(err => {
        this.setState({
          isUploading: false
        });
        console.log(err);
      });
  };

  startCrop = ([file]) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.setState({
        cropping: true,
        imageToCrop: reader.result,
        imageName: file.name,
        imageType: file.type
      });
    };
  };

  changeCrop = crop => {
    this.setState({ crop });
  };

  getCroppedImg = () => {
    const { imageToCrop, crop, imageName, imageType } = this.state;
    const canvas = document.createElement("canvas");
    const image = new Image();
    image.src = imageToCrop;

    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext("2d");

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );

    canvas.toBlob(blob => {
      blob.name = imageName;
      const newFile = new File([blob], imageName);
      this.getSignedRequest([newFile]);
    }, imageType);
  };

  render() {
    const { isUploading, cropping, imageToCrop, crop } = this.state;
    const { filetype, cropFirst = false } = this.props;
    if (cropping) {
      return (
        <div id="S3-imageCrop">
          <ReactCrop src={imageToCrop} crop={crop} onChange={this.changeCrop} />
          <button onClick={this.getCroppedImg}>Crop</button>
        </div>
      );
    }
    return (
      <Dropzone
        onDrop={cropFirst ? this.startCrop : this.getSignedRequest}
        style={{
          position: "relative",
          width: 200,
          height: 200,
          borderWidth: 7,
          marginTop: 100,
          borderColor: "rgb(102, 102, 102)",
          borderStyle: "dashed",
          borderRadius: 5,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: 28
        }}
        accept={filetype}
        multiple={false}
      >
        {({ getRootProps, getInputProps }) => (
          <section id="S3-section">
            <div id="S3-dropWrapper" {...getRootProps()}>
              <input {...getInputProps()} />
              {/* <p>Drag 'n' drop some files here, or click to select files</p> */}
              {isUploading ? (
                <GridLoader />
              ) : (
                <p id="S3-Drop">
                  Drop File <br></br>or <br></br>Click Here
                </p>
              )}
            </div>
          </section>
        )}
      </Dropzone>
    );
  }
}

export default S3;
