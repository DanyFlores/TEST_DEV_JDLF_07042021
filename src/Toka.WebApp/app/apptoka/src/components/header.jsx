import React from 'react'
import { useHistory } from "react-router-dom";

const Header = () => {
    const { push } = useHistory();

    const singOut = (e) =>{
        push({pathname: "/",});
    }
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <a class="navbar-brand">Toka CRUD</a>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <a href={`/persona-fisica`} class="nav-link">Persona Fisica</a>
                        </li>
                        <li class="nav-item">
                            <a href={`/reportes`} class="nav-link">Reportes</a>
                        </li>
                    </ul>
                </div>
                <form class="form-inline">
                        <button class="btn btn-secondary my-2 my-sm-0" type="button" onClick={singOut} >Salir</button>
                </form> 
            </nav>
        </div>
    )
}

export default Header;