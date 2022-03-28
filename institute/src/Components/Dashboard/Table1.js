import React, { Component } from "react";
// Table from react-bootstrap
import { Table } from "react-bootstrap";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// To make rows collapsible
import "bootstrap/js/src/collapse.js";

function add() {
    alert('You added new data')
}
function present() {
    //<script>document.getElementById('buttonName').innerText = 'Present';</script>
    alert('Marked present!');
  }
  function absent() {
    alert('Marked absent!');
  }
export class Example1 extends Component {
    constructor(props){
        super(props)
         
        // Set initial state
        this.state = {
            present : 'P',
            absent: 'A'}
         
        // Binding this keyword
        this.handlePresent = this.handlePresent.bind(this)
        this.handleAbsent = this.handleAbsent.bind(this)
      }
     
      handlePresent(){
       
        // Changing state
        this.setState({present : 'Present'})
      }
      handleAbsent(){
       
        // Changing state
        this.setState({absent : 'Absent'})
      }
    render() {
        return (
            <>
                <button style={{marginTop:'100px',marginLeft: '850px',backgroundColor:'black',color: 'white'}} onClick={add}>ADD</button>
                <Table striped bordered hover style={{marginLeft: '90px', marginRight:'100px',marginTop:'50px', width: '820px'}}>
                    <thead>
                        <tr>
                            <th>S.NO</th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Attendance</th> 
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>XXX</td>
                            <td>March 1/2022</td>
                            <td><button id="buttonName" style={{marginRight: '10px',backgroundColor: 'green', border:'none'}} onClick={this.handlePresent}>{this.state.present}</button> 
                            <button style={{backgroundColor: 'red', border:'none'}} onClick={this.handleAbsent}>{this.state.absent}</button>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>YYY</td>
                            <td>March 2/2022</td>
                            <td><button style={{marginRight: '10px',backgroundColor: 'green', border:'none'}} onClick={this.handlePresent}>{this.state.present}</button> 
                            <button style={{backgroundColor: 'red', border:'none'}} onClick={this.handleAbsent}>{this.state.absent}</button>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </>
        );
    }
}

export default Example1;