import React from 'react';
import { Link } from 'react-router-dom';

interface State {
  username: string;
  password: string;
  passwordConfirmation: string;
  cityName: string;
  //   formIsValid: boolean;
  error: {
    username: string;
    password: string;
    passwordConfirmation: string;
    cityName: string;
  };
}

export class Register extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      username: '',
      password: '',
      passwordConfirmation: '',
      cityName: '',
      error: {
        username: '',
        password: '',
        passwordConfirmation: '',
        cityName: '',
      },
    };
  }

  handleChange(value: string, key: string) {
    this.setState({
      ...this.state,
      [key]: value,
    });
  }

  handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    this.validateForm();
    console.log(this);
  }

  validateForm() {
    const username = this.state.username;
    const password = this.state.password;
    const passwordConfirmation = this.state.passwordConfirmation;
    const cityName = this.state.cityName;
    //   let error = this.state.error;
    let error = {
      username: '',
      password: '',
      passwordConfirmation: '',
      cityName: '',
    };
    let formIsValid = true;
    if (!username) {
      formIsValid = false;
      error.username = 'Kötelező mező';
    }
    if (!password) {
      formIsValid = false;
      error.password = 'Kötelező mező';
    } else if (
      !password.match(
        /^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#?!.$%&]).*$/
      )
    ) {
      formIsValid = false;
      error.password =
        'Legalább 8 karakter, kis-nagybetű, szám, speciális karakter legyen a jelszóban';
    }
    if (!passwordConfirmation) {
      formIsValid = false;
      error.passwordConfirmation = 'Kötelező mező';
    }
    if (!cityName) {
      formIsValid = false;
      error.cityName = 'Kötelező mező';
    }
    if (password !== passwordConfirmation) {
      formIsValid = false;
      error.passwordConfirmation = 'A két jelszó nem egyezik meg';
    }

    this.setState({
      error: error,
    });
    return formIsValid;
  }

  render() {
    return (
      <div className="container">
        <header>
          <div className="header-line"></div>
          <h1 className="login-title">UNDERSEA</h1>
        </header>
        <div className="form-container">
          <h2 className="form-title">Regisztráció</h2>
          <form onSubmit={(event) => this.handleSubmit(event)}>
            <div className="error-message">{this.state.error.username}</div>
            <input
              type="text"
              name="username"
              placeholder="Felhasználónév"
              value={this.state.username}
              onChange={(event) =>
                this.handleChange(event.target.value, 'username')
              }
            />
            <br />
            <div className="error-message">{this.state.error.password}</div>
            <input
              type="password"
              name="password"
              placeholder="Jelszó"
              value={this.state.password}
              onChange={(event) =>
                this.handleChange(event.target.value, 'password')
              }
            />
            <br />
            <div className="error-message">
              {this.state.error.passwordConfirmation}
            </div>
            <input
              type="password"
              name="passwordConfirmation"
              placeholder="Jelszó megerősítése"
              value={this.state.passwordConfirmation}
              onChange={(event) =>
                this.handleChange(event.target.value, 'passwordConfirmation')
              }
            />
            <br />
            <div className="error-message">{this.state.error.cityName}</div>
            <input
              type="text"
              name="cityName"
              placeholder="A városod neve, amit építesz"
              value={this.state.cityName}
              onChange={(event) =>
                this.handleChange(event.target.value, 'cityName')
              }
            />
            <button className="submit-button">Regisztráció</button>
          </form>
          <Link to="./login">Bejelentkezés</Link>
        </div>
      </div>
    );
  }
}
