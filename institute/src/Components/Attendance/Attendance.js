import React, { Component } from "react";
import "../../Styles/admin.css";
import { Table, Row, Col } from "reactstrap";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import Tophead from "./../Dashboard/Tophead.js";
import Sidebar from "../Dashboard/SideMenu";

const user = [
  {
    first_name: "deepa",
    phone_number: "123456789",
  },
  {
    first_name: "deepa",
    phone_number: "123456789",
  },
  {
    first_name: "deepa",
    phone_number: "123456789",
  },
  {
    first_name: "deepa",
    phone_number: "123456789",
  },
  {
    first_name: "deepa",
    phone_number: "123456789",
  },
  {
    first_name: "deepa",
    phone_number: "123456789",
  },
];
class Attendance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      present: "P",
      present1: "P",
      present2: "P",
      present3: "P",
      present4: "P",
      absent: "A",
      absent1: "A",
      absent2: "A",
      absent3: "A",
      absent4: "A",
      filtermodal: false,
      firstname: "",
      phno: "",
      filter_firstname: "",
      firstnameErr: "",
      phnoErr: "",
      date: ""
    };

  }
  toggle = () => {
    const { modal } = this.state;
    this.setState({ modal: !modal });
  };
  togglefilter = () => {
    this.setState({ filtermodal: !this.state.filtermodal });
  };
  date = () => {
    this.setState({date: this.state.date})
    console.log(this.state.date)
  }
  present = () => {
    this.setState({ present: "Present" });
  };
  present1 = () => {
    this.setState({ present1: "Present" });
  };
  present2 = () => {
    this.setState({ present2: "Present" });
  };
  present3 = () => {
    this.setState({ present3: "Present" });
  };
  present4 = () => {
    this.setState({ present4: "Present" });
  };
  absent = () => {
    this.setState({ absent: "Absent" });
  };
  absent1 = () => {
    this.setState({ absent1: "Absent" });
  };
  absent2 = () => {
    this.setState({ absent2: "Absent" });
  };
  absent3 = () => {
    this.setState({ absent3: "Absent" });
  };
  absent4 = () => {
    this.setState({ absent4: "Absent" });
  };
  render() {
    return (
      <div className="align-row">
        <Sidebar />
        <div>
          <div className="tophead">
            <Tophead name="Attendance" />
          </div>
          <br></br>
          <div className="align-row items">
            <button className="filterbtn" onClick={this.togglefilter}>
              Filter
            </button>
            <button className="adduserbtn" onClick={this.toggle}>
              Create Student
            </button>
            <Input onClick={this.date}
              className="calender"
              type="date"
              value={this.state.date}
              onChange={(e) =>
                this.setState({
                  date: e.target.value,
                })
              }
            />
            <br />
          </div>

          <div className="box" ref={(el) => (this.componentRef = el)}>
            <Table
              striped
              bordered
              hover
              style={{ marginTop: "5%", width: "80%", marginRight: '90%'}}
            >
              <thead>
                <tr>
                  <th style={{width: '5%'}}>ID</th>
                  <th style={{width: '5%'}}>Name</th>

                  <th style={{width: '5%'}}>Date</th>

                  <th style={{width: '5%'}}>Attendance</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Anu</td>

                  <td>{this.state.date}</td>

                  <td>
                    <button class="btn btn-success" onClick={this.present}>
                      {this.state.present}
                    </button>
                    <button
                      class="btn btn-danger"
                      style={{ marginLeft: "2%" }}
                      onClick={this.absent}
                    >
                      {this.state.absent}
                    </button>
                  </td>
                </tr>

                <tr>
                  <td>2</td>
                  <td>Bhuvana</td>

                  <td>{this.state.date}</td>

                  <td>
                    <button class="btn btn-success" onClick={this.present1}>
                      {this.state.present1}
                    </button>
                    <button
                      class="btn btn-danger"
                      style={{ marginLeft: "2%" }}
                      onClick={this.absent1}
                    >
                      {this.state.absent1}
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Dhanya</td>

                  <td>{this.state.date}</td>

                  <td>
                    <button class="btn btn-success" onClick={this.present2}>
                      {this.state.present2}
                    </button>
                    <button
                      class="btn btn-danger"
                      style={{ marginLeft: "2%" }}
                      onClick={this.absent2}
                    >
                      {this.state.absent2}
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Hanaya</td>

                  <td>{this.state.date}</td>

                  <td>
                    <button class="btn btn-success" onClick={this.present3}>
                      {this.state.present3}
                    </button>
                    <button
                      class="btn btn-danger"
                      style={{ marginLeft: "2%" }}
                      onClick={this.absent3}
                    >
                      {this.state.absent3}
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Abinaya</td>

                  <td>{this.state.date}</td>

                  <td>
                    <button class="btn btn-success" onClick={this.present4}>
                      {this.state.present4}
                    </button>
                    <button
                      class="btn btn-danger"
                      style={{ marginLeft: "2%" }}
                      onClick={this.absent4}
                    >
                      {this.state.absent4}
                    </button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>

          {this.state.modal && (
            <Modal
              style={{ width: "30%" }}
              isOpen={this.state.modal}
              onHide={this.toggle}
              onExit={this.reset}
              centered
            >
              <ModalHeader toggle={this.toggle}>Create Student</ModalHeader>
              <ModalBody>
                <Form>
                  <Row>
                    <Col>
                      <FormGroup>
                        <Label>Name</Label>
                        <Input
                          type="text"
                          required
                          value={this.state.firstname}
                          onChange={(e) =>
                            this.setState({
                              firstname: e.target.value,
                              firstnameErr: "",
                            })
                          }
                        />
                        <div style={{ fontSize: 16, color: "red" }}>
                          {this.state.firstnameErr}
                        </div>
                      </FormGroup>
                    </Col>
                  </Row>
                  <br />

                  <Row>
                    <Col>
                      <FormGroup>
                        <Label>Date</Label>
                        <Input
                          type="date"
                          required
                          value={this.state.email}
                          onChange={(e) =>
                            this.setState({
                              email: e.target.value,
                              emailErr: "",
                            })
                          }
                        />
                        <div style={{ fontSize: 16, color: "red" }}>
                          {this.state.emailErr}
                        </div>
                      </FormGroup>
                    </Col>
                  </Row>
                  <br />
                  <Row>
                    <Col>
                      <FormGroup>
                        <Label>Mobile Number</Label>
                        <Row>
                          <Col>
                            <Input
                              type="text"
                              required
                              value={this.state.phno}
                              onChange={(e) =>
                                this.setState({
                                  phno: e.target.value,
                                  phnoErr: "",
                                })
                              }
                            />
                          </Col>
                        </Row>
                        <div style={{ fontSize: 16, color: "red" }}>
                          {this.state.phnoErr}
                        </div>
                      </FormGroup>
                    </Col>
                  </Row>
                  <br />
                </Form>
              </ModalBody>
              <ModalFooter>
                <Button
                  style={{
                    border: "1px solid grey",
                    color: "black",
                    backgroundColor: "#fff",
                  }}
                  onClick={() => {
                    this.toggle();
                    this.reset();
                  }}
                >
                  Cancel
                </Button>
                <Button
                  style={{ backgroundColor: "black", color: "white" }}
                  onClick={this.handleSubmit}
                >
                  Create
                </Button>
              </ModalFooter>
            </Modal>
          )}

          {this.state.filtermodal && (
            <Modal
              style={{ width: "50%" }}
              isOpen={this.state.filtermodal}
              onHide={this.togglefilter}
              onExit={this.reset}
              centered
            >
              <ModalHeader toggle={this.togglefilter}>Filter</ModalHeader>
              <ModalBody>
                <Form>
                  <Row>
                    <Col>
                      <FormGroup>
                        <Label>First Name</Label>
                        <Input
                          type="text"
                          required
                          value={this.state.filter_firstname}
                          placeholder="Enter first name"
                          onChange={(e) =>
                            this.setState({
                              filter_firstname: e.target.value,
                            })
                          }
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <br />
                </Form>
              </ModalBody>
              <ModalFooter>
                <Button
                  style={{
                    border: "1px solid grey",
                    color: "black",
                    backgroundColor: "#fff",
                  }}
                  onClick={() => {
                    this.togglefilter();
                    this.reset();
                  }}
                >
                  Cancel
                </Button>
                <Button
                  style={{ backgroundColor: "black", color: "white" }}
                  onClick={this.filterdata}
                >
                  Apply
                </Button>
              </ModalFooter>
            </Modal>
          )}
        </div>
      </div>
    );
  }
}
export default Attendance;
