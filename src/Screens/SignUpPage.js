import "bootstrap/dist/css/bootstrap.min.css";
import Sign from "../Images/imgsignin.png";
import { useNavigate } from "react-router-dom";

import React from "react";
import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBRow,
  MDBCol,
  MDBInput,
} from "mdb-react-ui-kit";
import { Button } from "antd";

const SignUp = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/jobpage"); // Replace '/register' with the actual destination page path
  };

  return (
    <MDBContainer className="my-5">
      <MDBCard>
        <MDBRow className="g-0">
          <MDBCol md="6">
            <img alt="img" className="w-75" src={Sign} />
          </MDBCol>

          <MDBCol md="6">
            <MDBCardBody
              className="d-flex flex-column "
              style={{ marginRight: "20%" }}
            >
              <div className="d-flex flex-row mt-2  ">
                <span
                  className="h1 fw-bold mb-0 pb-5  "
                  style={{ marginLeft: "10%", color: "#0F4596" }}
                >
                  Welcome To Job Host
                </span>
              </div>

              <h5
                className="fw-normal my-4 pb-3 text-center"
                style={{ letterSpacing: "1px" }}
              >
                Sign into your account
              </h5>

              <MDBInput
                wrapperClass="mb-4"
                placeholder="Email address"
                label=""
                id="formControlLg"
                type="email"
                size="lg"
              />
              <MDBInput
                wrapperClass="mb-4"
                placeholder="Password"
                label=""
                id="formControlLg"
                type="password"
                size="lg"
              />

              <Button
                className="mb-4 px-5"
                onClick={handleButtonClick}
                type="primary"
                size="large"
              >
                Login
              </Button>

              <div className="pb-3"></div>
              <a className="small text-muted text-center" href="#!">
                Forgot password?
              </a>
              <p
                className="mb-5 pb-lg-2 text-center "
                style={{ color: "#393f81" }}
              >
                Don't have an account?
                <Button type='link' onClick={() => navigate("/signin")}>
                  Register here
                </Button>
              </p>

              <div className="pb-5"></div>
              <div className="d-flex flex-row justify-content-center ">
                <a href="#!" className="small text-muted me-1 ">
                  Terms of use.
                </a>
                <a href="#!" className="small text-muted ">
                  Privacy policy
                </a>
              </div>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </MDBContainer>
  );
};

export default SignUp;
