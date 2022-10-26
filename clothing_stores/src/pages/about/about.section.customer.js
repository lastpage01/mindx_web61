import React, { Component } from "react";

import person_1 from "../../images/person_1.jpg";
import person_2 from "../../images/person_2.jpg";
import person_3 from "../../images/person_3.jpg";
import person_4 from "../../images/person_4.jpg";

class Customer extends Component {
  render() {
    return (
      <>
        <section className="ftco-section testimony-section">
          <div className="container">
            <div className="row justify-content-center mb-5 pb-3">
              <div className="col-md-7 heading-section ">
                <h2 className="mb-4">Our satisfied customer says</h2>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in
                </p>
              </div>
            </div>
            <div className="row " style={{display : 'flex', flexDirection: "row"}}>
              <div className="col-md-12">
                <div className="carousel-testimony ">
                  <div className="item">
                    <div className="testimony-wrap p-4 pb-5">
                      <div
                        className="user-img mb-5"
                        style={{ backgroundImage: `url(${person_1})` }}
                      >
                        <span className="quote d-flex align-items-center justify-content-center">
                          <i className="icon-quote-left"></i>
                        </span>
                      </div>
                      <div className="text">
                        <p className="mb-5 pl-4 line">
                          Far far away, behind the word mountains, far from the
                          countries Vokalia and Consonantia, there live the
                          blind texts.
                        </p>
                        <p className="name">Garreth Smith</p>
                        <span className="position">Marketing Manager</span>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="testimony-wrap p-4 pb-5">
                      <div
                        className="user-img mb-5"
                        style={{ backgroundImage: `url(${person_2})` }}
                      >
                        <span className="quote d-flex align-items-center justify-content-center">
                          <i className="icon-quote-left"></i>
                        </span>
                      </div>
                      <div className="text">
                        <p className="mb-5 pl-4 line">
                          Far far away, behind the word mountains, far from the
                          countries Vokalia and Consonantia, there live the
                          blind texts.
                        </p>
                        <p className="name">Garreth Smith</p>
                        <span className="position">Interface Designer</span>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="testimony-wrap p-4 pb-5">
                      <div
                        className="user-img mb-5"
                        style={{ backgroundImage: `url(${person_3})` }}
                      >
                        <span className="quote d-flex align-items-center justify-content-center">
                          <i className="icon-quote-left"></i>
                        </span>
                      </div>
                      <div className="text">
                        <p className="mb-5 pl-4 line">
                          Far far away, behind the word mountains, far from the
                          countries Vokalia and Consonantia, there live the
                          blind texts.
                        </p>
                        <p className="name">Garreth Smith</p>
                        <span className="position">UI Designer</span>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="testimony-wrap p-4 pb-5">
                      <div
                        className="user-img mb-5"
                        style={{ backgroundImage: `url(${person_4})` }}
                      >
                        <span className="quote d-flex align-items-center justify-content-center">
                          <i className="icon-quote-left"></i>
                        </span>
                      </div>
                      <div className="text">
                        <p className="mb-5 pl-4 line">
                          Far far away, behind the word mountains, far from the
                          countries Vokalia and Consonantia, there live the
                          blind texts.
                        </p>
                        <p className="name">Garreth Smith</p>
                        <span className="position">Web Developer</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <hr></hr>
      </>
    );
  }
}

export default Customer;
