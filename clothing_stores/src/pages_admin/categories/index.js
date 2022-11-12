/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";
import { Component } from "react";
// import AdminHeader from "./common/admin.header";
import AdminSearch from "../common/admin.search";
import RetrieveCategory from "./category";
import Create from "./create";
import Update from "./update";

class Admin_Category extends Component {
  render() {
    console.log(window.location.search);
    return (
      <div id="wrapper">
        {/* <AdminHeader/> */}
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <AdminSearch />
            {!window.location.search ? (
              <RetrieveCategory/>
            ) : window.location.search.split("=")[1] === "create" ? (
              <Create/>
            ) : window.location.search.split("=")[1] === "update&&Id" ? (
              <Update/>
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Admin_Category;
