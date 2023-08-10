import React, { useState } from "react";
import { FiEye } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const UserRegistration = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [values, setValues] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    alternatePhoneNumber: "",
    streetAddress: "",
    city: "",
    state: "",
    pincode: "",
    dob: "",
    companyName: "",
    idCardNumber: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValues((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const [mobValid, setMobValid] = useState(false);
  const handleMobileCheck = (numb) => {
    if (/^[\d]{10}$/.test(numb)) {
      setMobValid(true);
    } else setMobValid(false);
  };

  const [altmobValid, setaltMobValid] = useState(false);
  const handlealtMobileCheck = (numb) => {
    if (/^[\d]{10}$/.test(numb)) {
      setaltMobValid(true);
    } else setaltMobValid(false);
  };

  const [pinValid, setPinValid] = useState(false);
  const handlePinValid = (numb) => {
    if (/^[\d]{6}$/.test(numb)) {
      setPinValid(true);
    } else setPinValid(false);
  };

  const [confPass, setConfPass] = useState(false);
  const handleConfPass = (pass) => {
    if (pass === values.password) {
      setConfPass(true);
    } else setConfPass(false);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div
          className="col-sm-12 col-md-3"
          style={{
            minHeight: "100vh",
            objectFit: "cover",
            padding: "0px",
            overflow: "hidden",
          }}
        >
          <img
            style={{ width: "100%", height: "100%" }}
            src="http://174.138.101.222:2100/images/phot%20new.jpg"
            alt="Dummy"
          />
        </div>
        <div className="col-sm-12 col-md-9" style={{ minHeight: "100vh" }}>
          <div
            className="row "
            style={{
              height: "4rem",
              backgroundColor: "#dfdfdf",
              fontFamily: "ubuntu",
              display: "flex",
              alignItems: "center",
              position: "sticky",
              top: "0px",
              zIndex: "5",
            }}
          >
            <h1>
              User Registration Form{" "}
              <span
                title="Click to go to User Profile Page"
                style={{ float: "right", cursor: "pointer" }}
                onClick={() => navigate("/UserProfile")}
              >
                <img
                  src="https://img.freepik.com/free-icon/user_318-159711.jpg"
                  height={"50px"}
                  width={"50px"}
                  alt="User Profile Page"
                />
              </span>
            </h1>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (mobValid && altmobValid && pinValid && confPass) {
                alert("User Registration Successfull");
                setValues({
                  name: "",
                  email: "",
                  phoneNumber: "",
                  alternatePhoneNumber: "",
                  streetAddress: "",
                  city: "",
                  state: "",
                  pincode: "",
                  dob: "",
                  companyName: "",
                  idCardNumber: "",
                  password: "",
                  confirmPassword: "",
                });
              } else
                alert(
                  "Please fill all fields marked with * with correct input."
                );
            }}
            className="row"
            style={{ padding: "8px" }}
          >
            <div className="mb-3 col-sm-12 col-md-6">
              <label htmlFor="Name" className="form-label ">
                Name*
              </label>
              <input
                type="text"
                className="form-control"
                id="Name"
                required
                value={values.name}
                name="name"
                onChange={handleInputChange}
              />
              <div className="invalid-feedback">Please choose a username.</div>
            </div>
            <div className="mb-3 col-sm-12 col-md-6">
              <label htmlFor="Email" className="form-label">
                Email address*
              </label>
              <input
                type="email"
                name="email"
                className="form-control"
                id="Email"
                required
                value={values.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3 col-sm-12 col-md-6">
              <label htmlFor="Contact" className="form-label">
                Contact Number*
              </label>
              <input
                type="text"
                className="form-control"
                id="Contact"
                value={values.phoneNumber}
                name="phoneNumber"
                required
                onChange={(e) => {
                  handleMobileCheck(e.target.value);
                  handleInputChange(e);
                }}
              />
              {!mobValid && (
                <div id="emailHelp" className="form-text text-danger">
                  Enter a valid Mobile Number of 10 digits.
                </div>
              )}
            </div>
            <div className="mb-3 col-sm-12 col-md-6">
              <label htmlFor="Contact2" className="form-label">
                Alternate Contact Number*
              </label>
              <input
                type="text"
                className="form-control"
                id="Contact2"
                required
                value={values.alternatePhoneNumber}
                name="alternatePhoneNumber"
                onChange={(e) => {
                  handlealtMobileCheck(e.target.value);
                  handleInputChange(e);
                }}
              />
              {!altmobValid && (
                <div id="emailHelp" className="form-text text-danger">
                  Enter a valid Mobile Number of 10 digits.
                </div>
              )}
            </div>
            <div className="mb-3 col-sm-12 col-md-6">
              <label htmlFor="Address" className="form-label">
                Street address
              </label>
              <input
                type="text"
                className="form-control"
                id="Address"
                value={values.streetAddress}
                name="streetAddress"
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3 col-sm-12 col-md-6">
              <label htmlFor="City" className="form-label">
                City
              </label>
              <input
                type="text"
                className="form-control"
                id="City"
                name="city"
                value={values.city}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3 col-sm-12 col-md-6">
              <label htmlFor="State" className="form-label">
                State*
              </label>
              <input
                type="text"
                className="form-control"
                id="State"
                name="state"
                value={values.state}
                required
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3 col-sm-12 col-md-6">
              <label htmlFor="Pincode" className="form-label">
                Pincode*
              </label>
              <input
                type="text"
                className="form-control"
                id="Pincode"
                value={values.pincode}
                required
                name="pincode"
                onChange={(e) => {
                  handlePinValid(e.target.value);
                  handleInputChange(e);
                }}
              />
              {!pinValid && (
                <div id="emailHelp" className="form-text text-danger">
                  Enter a valid Pincode (number) of 6 digits.
                </div>
              )}
            </div>
            <div className="mb-3 col-sm-12 col-md-6">
              <label htmlFor="DOB" className="form-label">
                Date of Birth
              </label>
              <input
                type="date"
                className="form-control"
                id="DOB"
                value={values.dob}
                name="dob"
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3 col-sm-12 col-md-6">
              <label htmlFor="Company" className="form-label">
                Company Name
              </label>
              <input
                type="text"
                className="form-control"
                id="Company"
                value={values.companyName}
                name="companyName"
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3 col-sm-12 col-md-6">
              <label htmlFor="ID" className="form-label">
                ID Card Number
              </label>
              <input
                type="text"
                className="form-control"
                id="ID"
                value={values.idCardNumber}
                name="idCardNumber"
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3 col-sm-12 col-md-6">
              <label htmlFor="Password" className="form-label">
                Password*
              </label>
              <div className="input-group">
                <input
                  type={showPassword ? "text" : "password"}
                  className="form-control"
                  name="password"
                  value={values.password}
                  required
                  onChange={handleInputChange}
                />
                <span
                  className="input-group-text"
                  onClick={() => {
                    setShowPassword(!showPassword);
                  }}
                >
                  <FiEye />
                </span>
              </div>
            </div>
            <div className="mb-3 col-sm-12 col-md-6">
              <label htmlFor="CPassword" className="form-label">
                Confirm Password*
              </label>
              <input
                type="password"
                value={values.confirmPassword}
                className="form-control"
                id="CPassword"
                name="confirmPassword"
                required
                onChange={(e) => {
                  handleConfPass(e.target.value);
                  handleInputChange(e);
                }}
              />
              {!confPass && (
                <div id="emailHelp" className="form-text text-danger">
                  Password and confirm Password doesn't match.
                </div>
              )}
            </div>
            <div className="row mb-4">
              <button
                type="submit"
                className="col-md-9 mx-auto btn btn-primary"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserRegistration;
