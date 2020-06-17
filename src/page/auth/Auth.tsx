import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { Main } from './Main';

interface State {
  isLoading: boolean;
  loginSuccess?: boolean;
}
interface Props {
  loginMsg: (msg: string) => void;
}

class AuthComponent extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isLoading: true,
      loginSuccess: undefined,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      // const number = Math.floor(Math.random() * 11);
      const number = 2;
      if (number > 7) {
        this.setState({ ...this.state, isLoading: false, loginSuccess: false });
        this.props.loginMsg('*Nem megfelelő felhasználónév vagy jelszó');
      } else {
        this.setState({ ...this.state, isLoading: false, loginSuccess: true });
      }
    }, 2000);
  }

  render() {
    return (
      <>
        {this.state.isLoading ? (
          <div className="gorgo">toltes</div>
        ) : (
          <>
            {this.state.loginSuccess === false && (
              <Redirect from="*" to="/login"></Redirect>
            )}
            <Route path="/main">
              <Main></Main>
            </Route>
          </>
        )}
      </>
    );
  }
}
export default AuthComponent;
