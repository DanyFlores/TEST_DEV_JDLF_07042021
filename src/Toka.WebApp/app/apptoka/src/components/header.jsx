import React from 'react'
import { useHistory , Link} from "react-router-dom";
import AuthLogin from '../Utils/AuthLogin';
// import {Link} from 'react-router-dom'

const auth = new AuthLogin();

const Header = () => {
    const { push } = useHistory();

    const singOut = (e) =>{
        auth.logout();
        push({pathname: "/",});
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand">Toka CRUD</a>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link to="/persona-fisica" className="nav-link"> Persona Fisica</Link>
                            {/* <a href={`/persona-fisica`} className="nav-link">Persona Fisica</a> */}
                        </li>
                        <li className="nav-item">
                            <Link to="/reportes" className="nav-link" > Reportes </Link>
                            {/* <a href={`/reportes`} className="nav-link" >Reportes</a> */}
                        </li>
                    </ul>
                </div>
                <form className="form-inline">
                        <button className="btn btn-secondary my-2 my-sm-0" type="button" onClick={singOut} >Salir</button>
                </form> 
            </nav>
        </div>
    )
}

export default Header;