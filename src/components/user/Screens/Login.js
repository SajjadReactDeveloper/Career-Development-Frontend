import React from 'react';
import './login.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';

export default function Login() {
    const [email, setEmail] = React.useState();
    const [password, setPassword] = React.useState();

    const auth = useSelector(state => state.authReducer);
    const {isLogged, isAdmin} = auth;

    const history = useNavigate();

    const handleSubmit = async(e) => {
      e.preventDefault();
      try {
          const res = await axios.post('/user/login', {email, password});
          if(res.data.msg === "Login Successfull!") {
            localStorage.setItem("firstLogin", true);
            console.log(res.data.admin);
            history('/')
          }
          else {
            alert(res.data)
          }
          
      } catch (error) {
          
      }
    };
  return (
    <div className="login">
      <div className="container d-flex justify-content-center align-items-center">
        <div className="w-50 loginContainer">
          <form onSubmit={handleSubmit}>
            <p className="text-center loginText">Login</p>
            <div class="mb-3 mt-3">
              <label for="exampleFormControlInput1" class="form-label">
                Email address
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter Email Address"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div class="mb-3 mt-3">
              <label for="exampleFormControlInput1" class="form-label">
                Password
              </label>
              <input
                type="password"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <Link to="/forgot" style={{ textDecoration: "none" }}>
              <div className="mb-3 mt-3">
                <p className="text-right">Forgot Password?</p>
              </div>
            </Link>
            <div className="mb-3 mt-3 text-center">
              <button className="btn btn-success loginButton" type="submit">
                Login
              </button>
            </div>
            <Link to="/signup" style={{ textDecoration: "none" }}>
              <div className="mb-3 mt-3 text-center">
                <p>Don't have an account? Sign Up</p>
              </div>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
