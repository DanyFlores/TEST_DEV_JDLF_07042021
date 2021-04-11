import React from 'react';
import {Route,Redirect} from 'react-router-dom';
import AuthLogin from '../Utils/AuthLogin';

const auth = new AuthLogin();

function PrivateRoute({ Component: Component, ...rest }) {    
    return (
        <Route 
            {...rest} 
            render={(props) =>{
                // if (true){
                //     return <Component/>
                // }else{
                //     return (<Redirect to={{pathname: "/", state:{from: props.location}}} />);
                // }
                auth.useAuth ? <Component/> : <Redirect to={{ pathname: '/', state: { from: props } }} />
            }}
        />
    );
}
export default PrivateRoute;      