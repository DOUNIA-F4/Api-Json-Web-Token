import React, { useState } from "react";
import Layout from "./../core/Layout";
import toastr from "toastr";
import "toastr/build/toastr.css";

import { API_URL } from "./../config";

const SignIn = (props) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };

  const submitSignin = (e) => {
    e.preventDefault();
    fetch(`${API_URL}/signin`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          toastr.warning(res.error, "please check form !", {
            positionClass: "toast-bottom-left",
          });
        } else {
          toastr.info(
            res.error,
            "user is Authentificated Successfully",
            "Welcome",
            {
              positionClass: "toast-bottom-left",
            }
          );
          localStorage.setItem("jwt_info", JSON.stringify(res));
          console.log(res);
          if (res) {
            if (res.user.role === "Admin") props.history.push("/Admin");
            if (res.user.role === "User") props.history.push("/User");
            if (res.user.role === "Technicien") props.history.push("/Technicien");
          }
        }
      })
      .catch((err) =>
        toastr.error(err, "server error", {
          positionClass: "toast-bottom-left",
        })
      );
  };
  const form = () => (
    <form onSubmit={submitSignin}>
      <div className="form-group">
        <label htmlFor="email" className="text-muted">
          email
        </label>
        <input
          onChange={handleChange}
          type="email"
          className="form-control"
          name="email"
        />
      </div>

      <div className="form-group">
        <label htmlFor="password" className="text-muted">
          password
        </label>
        <input
          onChange={handleChange}
          type="password"
          className="form-control"
          name="password"
        />
      </div>

      <button className="btn btn-lg btn-block btn-outline-info">Sign In</button>
    </form>
  );
  return (
    <div>
      <Layout
        title="Sign-In"
        description="Sign In Auth jwt"
        className="container"
      >
        <div className="row">
          <div className="col-md-6 mx-auto">{form()}</div>
        </div>
      </Layout>
    </div>
  );
};
export default SignIn;
