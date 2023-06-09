import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Global.css';
import '../css/Login.css';

const Login = () => {
  const [inputs, setInputs] = useState({});

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  };

  return (
    <main className="login-container">
        <div className="container">
        <form onSubmit={handleSubmit}>

          <h1>Login</h1>
          <p>Please fill in this form to create an account.</p>
          <hr />
            <label>
              <b>Email
            <input
              type="email"
              placeholder="Enter Email"
              name="email"
              onChange={handleInput}
              required
              autoComplete='on'
            />
            </b>
            </label>
            <label>
              <b>Password
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleInput}
              required
            />
            </b>
            </label>
          <hr />
          <button type="submit" className="register-button">
            Login
          </button>
          </form>

        </div>
      <div className="container signin">
        <p>
          Don't have an account?{' '}
          <Link className="input-link" to="/register">
            Register Account
          </Link>
          .
        </p>
      </div>
    </main>
  );
};

export default Login;
