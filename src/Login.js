import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"></img>
      </Link>
      <div className="login__container">
        <h1>Sign In</h1>
        <form>
          <h5>E-mail</h5>
          <input type="text"></input>

          <h5>Password</h5>
          <input type="password"></input>
          <button className="login__SignInButton">Sign In</button>
        </form>

        <p>
          Logując się, wyrażasz zgodę na Warunki użytkowania i sprzedaży Amazon_CLONE. Zobacz
          Informację o prywatności, Informację o plikach cookie oraz Informację o reklamach
          dopasowanych do zainteresowań.
        </p>

        <button className="create__account">Create your Amazone_Clone account</button>
      </div>
    </div>
  );
}

export default Login;
