import React, { Component } from "react";
import about from "../../images/about.jpg";

class Section_2 extends Component {
  render() {
    return (
      <section className="ftco-section ftco-no-pb ftco-no-pt bg-light">
        <div className="container">
          <div className="row">
            <div
              className="col-md-5 p-md-5 img img-2 d-flex justify-content-center align-items-center"
              style={{ backgroundImage: `url(${about})` }}
            >
              <a
                href="https://vimeo.com/45830194"
                className="icon popup-vimeo d-flex justify-content-center align-items-center"
              >
                <span className="icon-play"></span>
              </a>
            </div>
            <div className="col-md-7 py-5 wrap-about pb-md-5 ">
              <div className="heading-section-bold mb-4 mt-md-5">
                <div className="ml-md-0">
                  <h2 className="mb-4">Better Way to Ship Your Products</h2>
                </div>
              </div>
              <div className="pb-md-5">
                <p>
                  But nothing the copy said could convince her and so it didn’t
                  take long until a few insidious Copy Writers ambushed her,
                  made her drunk with Longe and Parole and dragged her into
                  their agency, where they abused her for their.
                </p>
                <div className="row ftco-services">
                  <div className="col-lg-4 text-center d-flex align-self-stretch ">
                    <div className="media block-6 services">
                      <div className="icon d-flex justify-content-center align-items-center mb-4">
                        <span className="flaticon-002-recommended"></span>
                      </div>
                      <div className="media-body">
                        <h3 className="heading">Refund Policy</h3>
                        <p>
                          Even the all-powerful Pointing has no control about
                          the blind texts it is an almost unorthographic.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 text-center d-flex align-self-stretch ">
                    <div className="media block-6 services">
                      <div className="icon d-flex justify-content-center align-items-center mb-4">
                        <span className="flaticon-001-box"></span>
                      </div>
                      <div className="media-body">
                        <h3 className="heading">Premium Packaging</h3>
                        <p>
                          Even the all-powerful Pointing has no control about
                          the blind texts it is an almost unorthographic.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 text-center d-flex align-self-stretch ">
                    <div className="media block-6 services">
                      <div className="icon d-flex justify-content-center align-items-center mb-4">
                        <span className="flaticon-003-medal"></span>
                      </div>
                      <div className="media-body">
                        <h3 className="heading">Superior Quality</h3>
                        <p>
                          Even the all-powerful Pointing has no control about
                          the blind texts it is an almost unorthographic.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Section_2;
