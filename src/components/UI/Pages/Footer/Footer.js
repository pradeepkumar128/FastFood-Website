import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footerArea">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <h5>Address</h5>
              <p className="infotxt">Surat, Gujarat India</p>
              <h5>Contact Info.</h5>
              <p className="infotxt">abc@gmail.com</p>
            </div>
            <div className="col-lg-8">
              <h5>About </h5>
              <h5>Service</h5>
              <p className="infotxt">
                Imperdiet at dictumst laoreet libero duis congue. Quis senectus
                montes condimentum suscipit lectus efficitur nec velit. Dui
                mollis fames sem rhoncus faucibus mus nascetur nisi velit
                nostra.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
