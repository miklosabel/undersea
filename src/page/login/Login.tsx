import React from 'react';
import { Link } from 'react-router-dom';

interface State {
  username: string;
  password: string;
  errors: {
    username: string;
    password: string;
  };
}

export class Login extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      username: '',
      password: '',
      errors: {
        username: '',
        password: '',
      },
    };
  }
  // handlechange == changes the state
  handleChange(value: string, type: string) {
    this.setState({
      //TODO miert nme jo ha csak a value-t adom at es azt egyenlove teszem?
      //      mert a igazabol nem nagy masolas, de biztonsagosabb, a react igy tud rola, amugy meg nem
      ...this.state,
      [type]: value,
    });
  }
  // handlesubmit == submits the data -- this posts data to backend -- in this case logs the data
  handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    this.validateForm();
    console.log(this);
  }

  validateForm() {
    let formIsValid = true;

    // setting error msg for username
    this.setState({
      ...this.state,
      errors: {
        ...this.state.errors,
        username: !this.state.username ? '*Kötelező mező' : '',
        password: !this.state.password ? '*Kötelező mező' : ''
      },
    });

    return formIsValid;
  }

  render() {
    return (
      <div className="login-register-container">
        <header>
          <div className="header-line"></div>
          <h1 className="login-title">UNDERSEA</h1>
        </header>
        <div className="form-container">
          <h2 className="form-title">Belépés</h2>
          <form onSubmit={(event) => this.handleSubmit(event)}>
            <div className="error-message">{this.state.errors.username}</div>
            <input
              type="text"
              name="username"
              placeholder="Felhasználónév"
              onChange={(event) =>
                this.handleChange(event.target.value, 'username')
              }
            />
            <br />
            <div className="error-message">{this.state.errors.password}</div>
            <input
              type="password"
              name="password"
              placeholder="Jelszó"
              onChange={(event) =>
                this.handleChange(event.target.value, 'password')
              }
            />
            <br />
            <button className="submit-button" type="submit" value="Belépés">
              Belépés
            </button>
          </form>
          <Link to="./register">Regisztráció</Link>
        </div>
      </div>
    );
  }
}
