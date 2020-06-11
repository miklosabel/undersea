import React from 'react';
import { Link } from 'react-router-dom';

interface State {
  username: string;
  password: string;
}

export class Login extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }
  // handlechange == changes the state
  handleChange(value: string, type: string) {
    this.setState({
      ...this.state,
      [type]: value,
    });
  }
  // handlesubmit == submits the data -- this posts data to backend -- in this case logs the data
  handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }
  render() {
    return (
      <div>
        <header>
          <h1 className="login-title">UNDERSEA</h1>
        </header>
        <div className="form-container">
          <h2 className="form-title">Belépés</h2>
          <form onSubmit={(event) => this.handleSubmit(event)}>
            <input
              type="text"
              name="username"
              placeholder="Felhasználónév"
              onChange={(event) =>
                this.handleChange(event.target.value, 'username')
              }
            />
            <br />
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

          <div className="no-bg-button">
            <Link className="no-bg-button" to="./register">
              Regisztráció
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
