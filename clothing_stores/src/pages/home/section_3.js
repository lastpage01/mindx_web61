/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import about_1 from "../../images/about-1.jpg";
import about_2 from "../../images/about-2.jpg";
class Section_3 extends Component {
  render() {
    return (
      <section className="ftco-section ftco-choose ftco-no-pb ftco-no-pt">
        <div className="container">
          <div className="row">
            <div className="col-md-8 d-flex align-items-stretch">
              <div
                className="img"
                style={{ backgroundImage: `url(${about_1})` }}
              ></div>
            </div>
            <div className="col-md-4 py-md-5 ">
              <div className="text py-3 py-md-5">
                <h2 className="mb-4">
                  New Women's Clothing Summer Collection 2019
                </h2>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove right at the coast of
                  the Semantics, a large language ocean.
                </p>
                <p>
                  <a href="#" className="btn btn-white px-4 py-3">
                    Shop now
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-5 order-md-last d-flex align-items-stretch">
              <div
                className="img img-2"
                style={{ backgroundImage: `url(${about_2})` }}
              ></div>
            </div>
            <div className="col-md-7 py-3 py-md-5 ">
              <div className="text text-2 py-md-5">
                <h2 className="mb-4">
                  New Men's Clothing Summer Collection 2019
                </h2>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove right at the coast of
                  the Semantics, a large language ocean.
                </p>
                <p>
                  <a href="#" className="btn btn-white px-4 py-3">
                    Shop now
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Section_3;
