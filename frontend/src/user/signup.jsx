import React, { useState } from "react";
import Layout from "./../core/Layout";
import toastr from 'toastr';
import "toastr/build/toastr.css";

import { API_URL } from "./../config";

const SignUp = (props) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    role: ""
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    //console.log(user);
  };

  const submitSignup = (e) => {
    e.preventDefault();
    fetch(`${API_URL}/signup`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then(res => {
        if(res.error) {
              toastr.warning(res.error, 'please check form !', {
                positionClass: "toast-bottom-left",
              })
        }
        else{
        toastr.success(res.error, 'user is created Successfully', 'New Accont', {
          positionClass: "toast-bottom-left",
        })

        props.hystory.push('/signin')
      }
      })
      .catch(err => toastr.error(err, 'server error', {
        positionClass: "toast-bottom-left",
      })
      );
  };
  const form = () => (
    <form onSubmit={submitSignup}>
      <div className="form-group">
        <label htmlFor="name" className="text-muted">
          name
        </label>
        <input
          onChange={handleChange}
          type="text"
          className="form-control"
          name="name"
        />
      </div>

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

      <div className="form-group">
        <select
          name="role"
          onChange={handleChange}
          className="browser-default custom-select"
        >
          <option>select client </option>
          <option value="Admin">Admin</option>
          <option value="User">Uesr</option>
          <option value="Technicin">Technicien</option>
        </select>
      </div>

      <button className="btn btn-lg btn-block btn-outline-success">
        Sign Up
      </button>

      {JSON.stringify(user)}
    </form>
  );
  return (
    <div>
      <Layout
        title="Sign-Up"
        description="Sign Up Auth jwt"
        className="container"
      >
        <div className="row">
          <div className="col-md-6 mx-auto">{form()}</div>
        </div>
      </Layout>
    </div>
  );
};
export default SignUp;
