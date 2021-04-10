import React, { useState, useEffect } from 'react'
import axios from 'axios';
import AuthLogin from '../../Utils/AuthLogin'
const url = `http://localhost:26112/api/User`;

const auth = new AuthLogin();
const Login = (props) => {

    const [correo, setCorreo] = useState('');
    const [password, setPassword] = useState('');
    const [loadin, setLoadin] = useState(false);

    useEffect(() => {
        if(auth.token() !== null)
            props.history.push('/persona-fisica');
    }, [])

    const loginSubmit = async (e) => {
        e.preventDefault();   
        setLoadin(true);
        let data = {correo,password};   
        await axios.post(url,data)
            .then(res =>{
                let responseData = res.data;
                console.log(responseData);
                auth.handleAuthentication(responseData);             
                props.history.push('/persona-fisica');
            })
            .catch((e)=>{                  
                alert(e.response.data.message);                
                setLoadin(false);
            });    
        setLoadin(false);
    }

    return (
        <div>
            <div className="container mt-5 login">
                <div className="row justify-content-center">
                    <div className="card-wrapper" style={{ width: '35%' }}>
                        <div className="card fat">
                            <form action="" style={{background:'darkgrey'}} onSubmit={loginSubmit}>
                                <div className="card-body">
                                    <h4 className="card-title text-center">Inicio de Sesion</h4>
                                    <div className="form-group mt-5">
                                        <label for="email">Correo</label>
                                        <input id="email" type="email" className="form-control" placeholder="Ingrese su Email" name="email" onChange={(e)=>setCorreo(e.target.value)} required autofocus></input>
                                    </div>
                                    <div classNameName="form-group">
                                        <label for="password">Contraseña</label>
                                        <input id="password" type="password" className="form-control" placeholder="Ingrese su Password" name="password" onChange={(e)=>setPassword(e.target.value)} required data-eye></input>
                                    </div>                                    
                                    <div className="form-group mt-5">
                                        <button type="submit" className="btn btn-dark btn-block"> 
                                        {
                                            loadin ? <span className="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true" /> : ''
                                        }
                                        Login</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;