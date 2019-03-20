import React, { Component } from "react";
import {
  Row,
  Col
} from "reactstrap";

class UploadForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      <h1>Upload</h1>
      <form action="/upload" method="POST"> {/* TODO Django needs to handle upload at this endpoint */}
      <label>
      Upload File:
      <input type="file" name="form_upload" />
      <br/>
      <input type="submit" value="Submit"/>
      </label>
      </form>
      </div>
    );
  }
}

export default UploadForm;
