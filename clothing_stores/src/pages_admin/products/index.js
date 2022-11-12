/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";
import { Component } from "react";
import { memo } from "react";
// import AdminHeader from "./common/admin.header";
import AdminSearch from "../common/admin.search";
import Create from "./create";
import AdminProduct from "./table.products";
import Update from "./update";

class Admin extends Component {

  render() {
    console.log(window.location.search);
    return (
      <div id="wrapper">
        {/* <AdminHeader/> */}
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <AdminSearch />
            {!window.location.search ? (
              <AdminProduct />
            ) : window.location.search.split("=")[1] === "create" ? (
              <>
              <Create/>
              </>
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

export default memo(Admin);
