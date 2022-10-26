/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
class Contact_Section extends Component {
  render() {
    return (
      <>
        <section className="ftco-section contact-section bg-light">
          <div className="container">
            <div className="row d-flex mb-5 contact-info">
              <div className="w-100"></div>
              <div className="col-md-3 d-flex">
                <div className="info bg-white p-4">
                  <p>
                    <span>Address:</span> 198 West 21th Street, Suite 721 New
                    York NY 10016
                  </p>
                </div>
              </div>
              <div className="col-md-3 d-flex">
                <div className="info bg-white p-4">
                  <p>
                    <span>Phone:</span>{" "}
                    <a href="tel://1234567920">+ 1235 2355 98</a>
                  </p>
                </div>
              </div>
              <div className="col-md-3 d-flex">
                <div className="info bg-white p-4">
                  <p>
                    <span>Email:</span>{" "}
                    <a href="mailto:info@yoursite.com">info@yoursite.com</a>
                  </p>
                </div>
              </div>
              <div className="col-md-3 d-flex">
                <div className="info bg-white p-4">
                  <p>
                    <span>Website</span> <a href="#">yoursite.com</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="row block-9">
              <div className="col-md-6 order-md-last d-flex">
                <form action="#" className="bg-white p-5 contact-form">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Email"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Subject"
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="7"
                      className="form-control"
                      placeholder="Message"
                    ></textarea>
                  </div>
                  <div className="form-group">
                    <input
                      type="submit"
                      value="Send Message"
                      className="btn btn-primary py-3 px-5"
                    />
                  </div>
                </form>
              </div>

              <div className="col-md-6 d-flex">
                <div id="map" className="bg-white">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15089.676617963438!2d105.46324612453158!3d19.00124298267287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3137612f7820fbd5%3A0x82cb20cd36797105!2zdHQuIFnDqm4gVGjDoG5oLCBZw6puIFRow6BuaCwgTmdo4buHIEFuLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1666031066067!5m2!1svi!2s"
                    width="600"
                    height="450"
                    style={{border:"0"}}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Contact_Section;
