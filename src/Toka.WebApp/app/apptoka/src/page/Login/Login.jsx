import React, { useState, useEffect } from 'react'
import axios from 'axios';

const url = `http://localhost:26112/api/User`;

const Login = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // useEffect(async () => {
    //     loginSubmit();
    // }, [])
    const loginSubmit = async (e) => {
        e.preventDefault();
        let data = {email,password};
        await axios.post(`${url}/${email}/${password}`)
        .then(res =>{
            console.log(res.data);
            props.history.push('/persona-fisica');
        })
        .catch((e)=>{
            console.error(e);
        });
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
                                        <input id="email" type="email" className="form-control" placeholder="Ingrese su Email" name="email" onChange={(e)=>setEmail(e.target.value)} required autofocus></input>
                                    </div>
                                    <div classNameName="form-group">
                                        <label for="password">Contraseña</label>
                                        <input id="password" type="password" className="form-control" placeholder="Ingrese su Password" name="password" onChange={(e)=>setPassword(e.target.value)} required data-eye></input>
                                    </div>
                                    <div className="form-group mt-5">
                                        <button type="submit" className="btn btn-dark btn-block">Login</button>
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