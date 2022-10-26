/* eslint-disable react/jsx-pascal-case */


import React, { Component } from "react";

import Section_2 from "./section_2";
import Section_3 from "./section_3";
import Section_4 from "./section_4";
import Section_5 from "./section_5";
class Home extends Component {
  render() {
    return (
      <>
        <Section_3 />
        <Section_2 />
        <Section_4 />
        <Section_5 />
      </>
    );
  }
}

export default Home;
