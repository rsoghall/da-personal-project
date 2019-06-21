import React, { Component } from "react";
import axios from "axios";
import { v4 as randomString } from "uuid";
import Dropzone from "react-dropzone";
import { GridLoader } from "react-spinners";

class S3 extends Component {
  constructor() {
    super();
    this.state = {
      isUploading: false
    };
  }

  getSignedRequest = ([file])=> {
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

  render() {
    const { isUploading } = this.state;
    return (
      <Dropzone
        onDrop={this.getSignedRequest}
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
        accept={this.props.filetype}
        multiple={false}
      >
        {({ getRootProps, getInputProps }) => (
          <section>
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              {/* <p>Drag 'n' drop some files here, or click to select files</p> */}
              {isUploading ? <GridLoader /> : <p>Drop File or Click Here</p>}
            </div>
          </section>
        )}
      </Dropzone>
    );
  }
}

export default S3;
