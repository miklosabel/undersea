import React from 'react';
import { Link } from 'react-router-dom';

import { DispatchProps, MappedProps } from './connect';

interface State {
  username: string;
  password: string;
  errors: {
    username: string;
    password: string;
  };
}

interface Props extends MappedProps, DispatchProps {}

class Login extends React.Component<Props, State> {
  constructor(props: Props) {
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

  handleChange(value: string, type: string) {
    this.setState({
      ...this.state,
      [type]: value,
    });
  }

  handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const { password, username } = this.state;
    if (password && username) {
      this.props.loginRequest({
        name: this.state.username,
        password: this.state.password,
      });
    } else {
      this.setState({
        ...this.state,
        errors: {
          password: !password ? 'Kötelező mező' : '',
          username: !username ? 'Kötelező mező' : '',
        },
      });
    }
  }

  render() {
    return (
      <div className="login-register-container">
        <header>
          <div className="header-line"></div>
          {/* Itt felesleges a classname */}
          <h1 className="login-title">undersea</h1>
        </header>
        <div className="form-container">
          <h2 className="form-title">Belépés</h2>
          <form onSubmit={(event) => this.handleSubmit(event)}>
            {/* Rossz az error szöveg, nincs zárójel */}
            {this.state.errors.username ? (
              <p className="error-message">this.state.errors.username</p>
            ) : (
              <br />
            )}
            <input
              name="username"
              placeholder="Felhasználónév"
              onChange={(event) =>
                this.handleChange(event.target.value, 'username')
              }
            />
            {/* br semmit nem csinál itt, helyette inputnak margin adni */}
            <br />
            {/* Rossz az error szöveg, nincs zárójel */}
            {this.state.errors.password ? (
              <div className="error-message">this.state.errors.password</div>
            ) : (
              <br />
            )}
            <input
              type="password"
              name="password"
              placeholder="Jelszó"
              onChange={(event) =>
                this.handleChange(event.target.value, 'password')
              }
            />
            {/* br semmit nem csinál itt, helyette inputnak margin adni */}
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

export default Login;
