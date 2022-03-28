import React from 'react';
import logo from '../../assets/Logo/logo.ico';
import Table1 from '../Dashboard/Table1';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (<div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
  <CDBSidebar textColor="#fff" backgroundColor="#333">
    <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
      <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
      <img classname = "logo" src={logo} alt="Logo" style={{height : '40px', width: '50px',paddingLeft: '3px',paddingRight: '1px',marginTop: '0px'}} />
           Institute
      </a>
    </CDBSidebarHeader>

    <CDBSidebarContent className="sidebar-content">
      <CDBSidebarMenu>
        <NavLink exact to="/Admin" activeClassName="activeClicked">
          <CDBSidebarMenuItem icon="user">Admin</CDBSidebarMenuItem>
        </NavLink>
        <NavLink exact to="/Marks" activeClassName="activeClicked">
          <CDBSidebarMenuItem icon= "bi bi-vr">Marks</CDBSidebarMenuItem>
        </NavLink>
        <NavLink exact to="/StudentList" activeClassName="activeClicked">
          <CDBSidebarMenuItem icon="bi bi-people-fill">StudentList</CDBSidebarMenuItem>
        </NavLink>
        <NavLink exact to="/Subject" activeClassName="activeClicked">
          <CDBSidebarMenuItem icon="bi bi-book-half">Subject</CDBSidebarMenuItem>
        </NavLink>
        <NavLink exact to="/Attendance" activeClassName="activeClicked">
          <CDBSidebarMenuItem icon="bi bi-journal-check">Attendance</CDBSidebarMenuItem>
        </NavLink>
        <NavLink exact to="/TimeTable" activeClassName="activeClicked">
          <CDBSidebarMenuItem icon="bi bi-calendar">TimeTable</CDBSidebarMenuItem>
        </NavLink>
      </CDBSidebarMenu>
    </CDBSidebarContent>
  </CDBSidebar>
  {/* <button type="button" class=".btn-dark" style={{backgroundColor: '#ff0000', marginLeft: '25px',marginTop: '10px',paddingTop:'5px',paddingRight: '50px',paddingLeft: '50px',paddingBottom: '5px', border: 'none'}}>Logout</button> */}
</div>
);
};


export default Sidebar;