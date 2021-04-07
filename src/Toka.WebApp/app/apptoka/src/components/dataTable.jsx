import React, { Component } from 'react'
import MaterialTable from 'material-table'
import personaDataService from '../Services/Persona.Service'
import axios from 'axios';


export default class dataTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableInfo: {                             
                data: []               
            }          
        }
    }

    componentDidMount = async () => {
        await this.getAll();             
    }    
    getAll = async () => {
        let tableInfo = this.state.tableInfo;
        axios.get(`http://localhost:26112/api/PhysicalPerson`)
            .then(res => {
                tableInfo["data"] = res.data;
                console.log(res.data);
            })
            .catch((e) => {
                console.error(e);
            });       
        this.setState({
            tableInfo: tableInfo
        });
    };

    render() {
        return (
            <div style={{ maxWidth: '100%' }}>
                <MaterialTable
                columns={[
                    { title: 'Nombre', field: 'nombre' },
                    { title: 'Apellido Paterno', field: 'apellidoPaterno' },
                    { title: 'Apellido Materno', field: 'apellidoMaterno' },
                    { title: 'FRC', field: 'rfc' },
                    { title: 'Fecha de Nacimiento', field: 'fechaNacimiento' }
                ]}
                data={this.state.tableInfo["data"]}
                options={{
                    exportButton: true
                }}
                title="Listado de Personas"
                />
            </div>

            
        )
    }
}
