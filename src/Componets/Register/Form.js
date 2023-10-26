import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Form.css";

const Form = () => {
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    check: false,
    name: "",
    username: "",
    email: "",
    mobile: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    username: false,
    email: false,
    mobile: false,
    signUp: false,
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: type === "checkbox" ? e.target.checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;
    const newErrors = {};

    if (!formValues.name.trim().length > 0) {
      newErrors.name = true;
      valid = false;
    } else {
      newErrors.name = false;
    }

    if (!formValues.username.trim().length > 0) {
      newErrors.username = true;
      valid = false;
    } else {
      newErrors.username = false;
    }

    if (!formValues.email.trim().length > 0) {
      newErrors.email = true;
      valid = false;
    } else {
      newErrors.email = false;
    }

    if (!formValues.mobile.trim().length > 0) {
      newErrors.mobile = true;
      valid = false;
    } else {
      newErrors.mobile = false;
    }

    if (!formValues.check) {
      newErrors.signUp = true;
      valid = false;
    } else {
      newErrors.signUp = false;
    }

    setErrors(newErrors);

    if (valid) {
      window.localStorage.setItem("userData", JSON.stringify(formValues));
      navigate("/genre");
    }
};

  return (
    <>
      <div className="container">
        <p className="super">Super app</p>
        <p className="super2">Create your new Account</p>
        <form onSubmit={handleSubmit}>
          <div className="signup">
            <div>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                value={formValues.name}
                onChange={handleChange}
              />
              {errors.name && <span className="error">Name is required.</span>}
            </div>
            <div>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="UserName"
                value={formValues.username}
                onChange={handleChange}
              />
              {errors.username && (
                <span className="error">Username is required.</span>
              )}
            </div>
            <div>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                value={formValues.email}
                onChange={handleChange}
              />
              {errors.email && (
                <span className="error">Email is required.</span>
              )}
            </div>
            <div>
              <input
                type="tel"
                name="mobile"
                id="mobile"
                placeholder="Mobile"
                value={formValues.mobile}
                onChange={handleChange}
              />
              {errors.mobile && (
                <span className="error">Mobile is required.</span>
              )}
            </div>

            <div className="check">
              <label>
                <input
                  type="checkbox"
                  name="check"
                  id="checkbox"
                  checked={formValues.check}
                  onChange={handleChange}
                />
                Share my registration data with Superapp
              </label>
              {errors.signUp && (
                <span className="error">
                  Check this box if you want to proceed
                </span>
              )}
            </div>
          </div>
          <button className="btn" type="submit">
            SIGN UP
          </button>

          <div className="end">
            <p className="term">
              By clicking on Sign up. you agree to Superapp
              <span style={{ color: "#72DB73" }}>
                {" "}
                Terms and <br /> Conditions of Use
              </span>
            </p>
            <p className="policy">
              {" "}
              To learn more about how Superapp collects, uses, shares <br /> and
              protects your personal data please head Superapp
              <span style={{ color: "#72DB73" }}>
                {" "}
                Privacy <br /> Policy
              </span>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
