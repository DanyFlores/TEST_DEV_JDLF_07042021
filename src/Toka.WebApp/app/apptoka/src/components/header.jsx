import React, { Component } from 'react'

function header () {    
        return (
            <div>
                <nav>
                    <div className="nav-wrapper">                    
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="#">Persona Fisica</a></li>
                        <li><a href="#">Reporte</a></li>
                    </ul>
                    </div>
                </nav>
            </div>
        )    
}

export default header;