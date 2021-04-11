import React from 'react';
import {Route,Redirect} from 'react-router-dom';
import AuthLogin from '../Utils/AuthLogin';

const auth = new AuthLogin();

function PrivateRoute({ Component: Component, ...rest }) {        
    return (
        <Route {...rest} 
            render={(props) =>{auth.seAuth() ? <Component/> : <Redirect to={{ pathname: '/', state: { from: props } }} />}}
        />
    );
}
export default PrivateRoute;      