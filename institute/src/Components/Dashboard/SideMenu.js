import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FaGem, FaHeart, FaUser,FaRegCalendar,FaUserFriends, FaRegEdit,FaLayerGroup,FaGripLinesVertical,FaChalkboardTeacher,FaPencilAlt } from "react-icons/fa";
import logo from '../../assets/Logo/logo.ico';
import {
  Menu,
  MenuItem,
  ProSidebar,
  SidebarHeader,
  SubMenu,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { Link } from "react-router-dom";
const SideNavigation = () => {
  const [collapsed, setCollapsed] = useState(false);
  // added styles 
  const styles = {
    sideBarHeight: {
      height: "100vh",
    },
    menuIcon: {
      float: "right",
      margin: "10px",
    },
  };
  const onClickMenuIcon = () => {
    setCollapsed(!collapsed);
  };
  return (
  <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
    <ProSidebar style={styles.sideBarHeight}  collapsed={collapsed} >
      <SidebarHeader>
      {/* <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
      <img classname = "logo" src={logo} alt="Logo" style={{height : '40px', width: '50px',paddingLeft: '3px',paddingRight: '1px',marginTop: '10px',marginBottom: '10px'}} />
            Institute
      </a> */}
        <div style={styles.menuIcon} onClick={onClickMenuIcon}>
          <AiOutlineMenu style={{fontSize: '150%'}}/>
        </div>
      </SidebarHeader>
      <Menu iconShape="square">
        <MenuItem icon={<FaUser/>}>Admin</MenuItem>
        <SubMenu title="Branch" icon={<FaGripLinesVertical/>}>
          <MenuItem>M1</MenuItem>
          <MenuItem>M2</MenuItem>
          <MenuItem>E1</MenuItem>
          <MenuItem>E2</MenuItem>
        </SubMenu>
        <MenuItem icon={<FaUserFriends/>}>StudentList</MenuItem>
        <MenuItem icon={<FaLayerGroup />}>Subject</MenuItem>
        <MenuItem icon={<FaChalkboardTeacher/>}>Staff</MenuItem>
        <MenuItem icon={<FaPencilAlt />}>Marks</MenuItem>
        <MenuItem icon={<FaRegEdit/>}>Attendance</MenuItem>
        <MenuItem icon={<FaRegCalendar/>}>TimeTable</MenuItem>
      </Menu>
    </ProSidebar>
    </div>
  );
};
export default SideNavigation;