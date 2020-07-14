import React from 'react';
import { Route } from 'react-router-dom';
import { MappedProps, DispatchProps } from './connect';
import { MainConnected } from '../main/connect';
import { Spinner } from 'reactstrap';

interface State {
  isLoading: boolean;
  loginSuccess?: boolean;
}
interface Props extends MappedProps, DispatchProps {
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
    //ennek nem itt kéne lenni, de mivel Nincs Backendünk, nincs ami megmondaná, hogy be vagyunk jelentkezve ezért, ha konkrétan nem a logintól indulunk el, akkor el fog irányítani
    //loginresponse állítja isConnected true-ra
    //TODO Esetleg csinálhtasz olyat, hogy localstoreba kimented be van-e jelentkezve
    if (!this.props.isConnected) {
      this.props.pushState('/login');
    }
  }

  render() {
    return (
      <>
        {this.props.isLoading ? (
          <Spinner animation='border' />
        ) : (
          <>
            {this.props.isConnected && (
              <Route path="/main">
                <MainConnected />
              </Route>
            )}
          </>
        )}
      </>
    );
  }
}
export default AuthComponent;
