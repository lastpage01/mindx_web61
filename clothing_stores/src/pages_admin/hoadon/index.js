/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { Component } from "react";
// import AdminHeader from "./common/admin.header";
import AdminSearch from "../common/admin.search";


class Admin_HoaDon extends Component {
  render() {
    return (
      <div id="wrapper">
        {/* <AdminHeader/> */}
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <AdminSearch/>
          </div>
        </div>
      </div>
     
    );
  }
}

export default Admin_HoaDon;
