import React, { Component } from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col
} from "reactstrap";
import classnames from "classnames";
import FileHolder from "./FileHolder";

class TabDash extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: "1"
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "1" })}
              onClick={() => {
                this.toggle("1");
              }}
            >
              Files
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "2" })}
              onClick={() => {
                this.toggle("2");
              }}
            >
              Folders
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col xs="3">
                <FileHolder
                  formName="Kidney Donor Form"
                  fileDescription="This is a blank form for Kidney Donors"
                />
              </Col>
              <Col xs="3">
                <FileHolder
                  formName="Form 2"
                  fileDescription="This is a blank form for Non-profit Organizations"
                />
              </Col>
              <Col xs="3">
                <FileHolder
                  formName="Form 3"
                  fileDescription="This is a blank form for Non-profit Organizations"
                />
              </Col>
              <Col xs="3">
                <FileHolder
                  formName="Form 4"
                  fileDescription="This is a blank form for Non-profit Organizations"
                />
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col xs="3">
                <FileHolder formName="Folder 1" />
              </Col>
              <Col xs="3">
                <FileHolder formName="Folder 2" />
              </Col>
              <Col xs="3">
                <FileHolder formName="Folder 3" />
              </Col>
              <Col xs="3">
                <FileHolder formName="Folder 4" />
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}

export default TabDash;
