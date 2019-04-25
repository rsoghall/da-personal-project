import React, { Component } from "react";
import logo from "../../images/logo2.jpg";
import "./Login.css";
import axios from "axios";
import store from "../../ducks/store";
import { setUser } from "../../ducks/store";

export class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }

  // getting back {role, centerId}
  // redux
  // endpoint responds with director centerId

   login = async (e) => {
    e.preventDefault()
    try {
      const { email, password } = this.state;
      const res = await axios.post("/auth/login", { email, password });
      const { centerId, role } = res.data;
      if (role === "director") {
        store.dispatch(setUser(res.data));
        this.props.history.push(`/centers/centersdashboard/${centerId}`);
      } else {
        this.props.history.push("/");
      }
    } catch (error) {
      alert("login");
    }
  }

  render() {
    console.log(this.props);
    return (
      <div className="login-container">
        <h1>Login</h1>
        <img className="loginlogo" src={logo} alt="Dianne Adair Logo" />
        <form onSubmit={this.login}>
          <div>
            <span>Email:</span>
            <input
              onChange={e => this.setState({ email: e.target.value })}
              value={this.state.email}
              type="text"
            />
          </div>
          <div>
            <span>Password:</span>
            <input
              onChange={e => this.setState({ password: e.target.value })}
              value={this.state.password}
              type="password"
            />
          </div>
        <button type="submit">Log in</button>
        </form>
      </div>
    );
  }
}

export default Login;
