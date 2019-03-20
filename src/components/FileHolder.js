import React, { Component } from "react";

import { Button, Card, CardImg, CardText, CardTitle } from "reactstrap";

class FileHolder extends Component {

  navigateToForm(formId) {
    window.location.assign('/form/'+formId);
  }

  render() {
    return (
      <Card body>
        <CardImg
          top
          width="100%"
          src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
          alt="Card image cap"
        />
        <CardTitle>{this.props.formName}</CardTitle>
        <CardText>{this.props.fileDescription}</CardText>
        <Button color="primary" onClick={() => this.navigateToForm(this.props.formId)}>Edit</Button>
      </Card>
    );
  }
}

export default FileHolder;
