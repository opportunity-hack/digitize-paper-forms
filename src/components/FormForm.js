import React, { Component } from "react";
import {
  Row,
  Col
} from "reactstrap";

class FormForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      <h1>Title</h1>
      <form action="/save" method="POST"> {/* TODO Django needs to handle upload at this endpoint */}
      <label>
      First Name:
      <input type="text" name="fname" />
      <br/>
      Last Name:
      <input type="text" name="lname" />
      <br/>
      <textarea name="bodyOfText"/>

      <input type="submit" value="Submit Form"/>
      </label>
      </form>
      </div>
    );
  }
}

export default FormForm;
