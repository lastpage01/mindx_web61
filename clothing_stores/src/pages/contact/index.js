/* eslint-disable react/jsx-pascal-case */
import React, { Component } from "react";
import Contact_Header from "./contact.header";
import Contact_Section from "./contact.section";

class Contact extends Component {
  render() {
    return (
      <>
        <Contact_Header/>
        <Contact_Section/>
      </>
    );
  }
}

export default Contact;
