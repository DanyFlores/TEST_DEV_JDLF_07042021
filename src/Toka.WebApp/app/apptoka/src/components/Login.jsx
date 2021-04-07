import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col s12 m7">
                            <div className="card">                                                               
                                <div className="row container">
                                    <div className="input-field col s12">
                                        <input id="email" type="email" className="validate" />
                                        <label for="password">Email</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input id="password" type="password" className="validate" />
                                        <label for="password">Password</label>
                                    </div>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
