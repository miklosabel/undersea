import React from 'react';
import { Route } from 'react-router-dom';
import Main from '../main/Main';
import { MappedProps, DispatchProps } from './connect';
import { MainConnected } from '../main/connect';

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
          //TODO gorgo
          <div className="gorgo">toltes</div>
        ) : (
          <>
            {this.props.isConnected && (
              <Route path="/main">
                <MainConnected />
                <Route path="/main/buildings">
                  {/* TODO buildings */}
                </Route>
              </Route>

            )}
          </>
        )}
      </>
    );
  }
}
export default AuthComponent;
