import React from 'react';
import { Link } from 'react-router-dom';

interface State {
  username: string;
  password: string;
  passwordConfirmation: string;
  cityName: string;
  successMessage: string;
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
      successMessage: '',
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
    if (this.validateForm()) {
      this.setState({
        ...this.state,
        successMessage: 'Sikeresen regisztráltál. Most már bejelentkezhetsz.',
      });
    }
  }

  validateForm() {
    let formIsValid = true;
    this.setState({
      ...this.state,
      error: {
        ...this.state.error,
        username: !this.state.username ? '*Kötelező mező' : '',
        password: !this.state.password
          ? '*Kötelező mező'
          : !this.state.password.match(
              /^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#?!.$%&]).*$/
            )
          ? 'Legalább 8 karakter, kis- és nagybetű, szám, speciális karakter legyen a jelszóban'
          : '',
        passwordConfirmation: !this.state.passwordConfirmation
          ? '*Kötelező mező'
          : this.state.password !== this.state.passwordConfirmation
          ? '*A két jelszó nem egyezik'
          : '',
        cityName: !this.state.cityName ? '*Kötelező mező' : '',
      },
    });
    return formIsValid;
  }

  render() {
    return (
      <div className="login-register-container">
        <header>
          <div className="header-line"></div>
          <h1 className="login-title">undersea</h1>
        </header>
        <div className="form-container">
          <h2 className="form-title">Regisztráció</h2>
          <form onSubmit={(event) => this.handleSubmit(event)}>
            <div className="error-message">{this.state.error.username}</div>
            <input
              name="username"
              placeholder="Felhasználónév"
              value={this.state.username}
              onChange={(event) =>
                this.handleChange(event.target.value, 'username')
              }
            />
            {/* br semmit nem csinál itt, helyette inputnak margin adni */}
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
            {/* br semmit nem csinál itt, helyette inputnak margin adni */}
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
            {/* br semmit nem csinál itt, helyette inputnak margin adni */}
            <br />
            <div className="error-message">{this.state.error.cityName}</div>
            <input
              name="cityName"
              placeholder="A városod neve, amit építesz"
              value={this.state.cityName}
              onChange={(event) =>
                this.handleChange(event.target.value, 'cityName')
              }
            />
            <button className="submit-button">Regisztráció</button>
          </form>
          {this.state.successMessage}
          <Link to="./login">Bejelentkezés</Link>
        </div>
      </div>
    );
  }
}
