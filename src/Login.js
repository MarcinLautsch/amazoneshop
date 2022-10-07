import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const signIn = (event) => {
    event.preventDefault();
    //firebase uzywac do logowania//
  };

  cosnt register = (event) => {
    event.preventDefault();
        //firebase uzywac do rejestracja//
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"></img>
      </Link>
      <div className="login__container">
        <h1 className="wpis">Sign In:</h1>
        <form className="reszta__tabeli">
          <h5>E-mail</h5>
          <input
            className="przycisk1"
            type="text"
            value={email}
            onChange={(event) => setEmail(event.target.value)}></input>

          <h5>Password</h5>
          <input
            className="przycisk2"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}></input>
          <button type="submit" onClick={signIn} className="login__SignInButton">
            Sign In
          </button>
        </form>

        <p className="informacje">
          Logując się, wyrażasz zgodę na Warunki użytkowania i sprzedaży Amazon_CLONE. Zobacz
          Informację o prywatności, Informację o plikach cookie oraz Informację o reklamach
          dopasowanych do zainteresowań.
        </p>

        <button onClick={register} className="create__account">
          Create your Amazone_Clone Account
        </button>
      </div>
    </div>
  );
}

export default Login;
