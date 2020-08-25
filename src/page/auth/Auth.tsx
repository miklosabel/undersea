import React from 'react';
import { Route } from 'react-router-dom';
import { MappedProps, DispatchProps } from './connect';
import { MainConnected } from '../main/connect';
import { Spinner } from 'reactstrap';
import { LoginConnected } from '../login/connect';
import { mainUrlPath, loginUrlPath } from '../../urlpaths';


interface Props extends MappedProps, DispatchProps {

}

class AuthComponent extends React.Component<Props> {

  render() {
    return (
      <>
        {this.props.isLoading ? (
          <Spinner animation='border' />
        ) : (
            <>
              {/* FIgyeljük, hogy töltés után valóban be van-e jelentkezve */}
              {this.props.isConnected ? (<>

                {/* Csak ekkor jöjjön létre az ide tartozó path */}
                <Route path={mainUrlPath}>
                  <MainConnected />
                </Route></>
              ) : <>
                  <Route exact path={loginUrlPath} children={<LoginConnected></LoginConnected>}></Route>
                </>}
            </>
          )}
      </>
    );
  }
}
export default AuthComponent;
