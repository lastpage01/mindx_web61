/* eslint-disable react/jsx-pascal-case */
import React, { Component } from "react";
import Section_2 from "../home/section_2";
import Section_5 from "../home/section_5";
import Subscribe from "./abou.section.subscribe";
import About_Header from "./about.header";
import Customer from "./about.section.customer";

class About extends Component {
  render() {
    return (
      <>
        <About_Header />
        <Section_2 />
        <Section_5 />
        <Customer />
        <Subscribe/>
      </>
    );
  }
}

export default About;
