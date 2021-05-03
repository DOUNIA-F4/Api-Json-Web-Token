import React, { Component } from "react";

export default class SignUp extends Component {
    render() {
        return (
            <form>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" placeholder="First name" />
                </div>

               

                <div className="form-group">
                    <label>Email </label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>
                <div className="form-group">
                  <select className="browser-default custom-select">
                    <option>select client </option>
                    <option value="admin">Admin</option>
                    <option value="user">Uesr</option>
                    <option value="technicin">Technicien</option>
                  </select>
                </div>

                <button type="submit" className="btn btn-info btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="#">sign in?</a>
                </p>
            </form>
        );
    }
}