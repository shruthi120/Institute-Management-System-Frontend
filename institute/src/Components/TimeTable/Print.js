import React, { Component } from 'react'
import Sidebar from "../Dashboard/SideMenu";
import Tophead from "./../Dashboard/Tophead.js";
import "../../Styles/header.css";

class Print extends Component {
  render() {
    return (
        <div className="align-row">
        <Sidebar />
        <div>
          <div className="tophead1">
            <Tophead name="Print Details"/>
          </div>
          <br/>
      <div className='print'>
        <button class="btn btn-success" onClick={() => window.print()}>PRINT</button>
        <p>Click above button opens print preview</p>
      </div>
      </div>
      </div>
    )
  }
}

export default Print