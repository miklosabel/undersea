import React from 'react';
import { Route, Redirect } from 'react-router';

interface State {
    isLoading: boolean;
    result?: boolean;
}

export class AuthComponent extends React.Component {

    state: State = {
        isLoading: true,
        result: undefined
    }

    componentDidMount() {
        console.log('itt vagyok')
        setTimeout(() => {
            const number = Math.floor(Math.random() * 11);
            if (number > 7) {
                this.setState({ ...this.state, isLoading: false, result: false })

            } else {

                this.setState({ ...this.state, isLoading: false, result: true })
            }
        }, 2000)
    }

    render() {
        return (
            <>
                {this.state.result === false &&
                    <Redirect from="*" to="/login"></Redirect>}
                <Route path="/auth/alma">alma</Route>
                <Route path="/auth/:id">alma</Route>
                <Route path="/auth">alma</Route>
            </>
        )
    }
}