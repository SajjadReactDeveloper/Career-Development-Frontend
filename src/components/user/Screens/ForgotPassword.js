import React from 'react';
import './forgotPassword.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function ForgotPassword() {
    const [email, setEmail] = React.useState();
    const [password, setPassword] = React.useState();

    const history = useNavigate();

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
          const res = await axios.post('/user/forgot', {email, password});
            alert(res.data.msg);
            history('/login');
      } catch (error) {
          
      }
    }
  return (
    <div className="login">
      <div className="container d-flex justify-content-center align-items-center">
        <div className="w-50 forgotContainer">
          <form onSubmit={handleSubmit}>
              <p className="text-center loginText">Reset Password</p>
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
                  setEmail(e.target.value)
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
            />
          </div>
          <div class="mb-3 mt-3">
            <label for="exampleFormControlInput1" class="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Confirm Password"
              onChange={(e) => {
                  setPassword(e.target.value)
              }}
            />
          </div>
          <div className="mb-3 mt-3 text-center">
            <button className="btn btn-success loginButton" type='submit'>Reset Password</button>
          </div>
          </form>
        </div>
      </div>
    </div>
  );
}
