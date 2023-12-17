import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <h3 className="text">LogIn Form</h3>
      <div className="container">
        <div className="row mt-5 boxform">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Name
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter Name..."
            />
          </div>

          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <div className="subBtm mb-4 mt-2">
            <input type="submit" class="btn btn-success" value="Login" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
