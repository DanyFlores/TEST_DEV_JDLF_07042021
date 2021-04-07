import React, { Component } from 'react'
import MaterialTable from 'material-table'
import personaDataService from '../Services/Persona.Service'
import axios from 'axios';


export default class dataTable extends Component {
    constructor(props) {
        super(props);
        this.state = {                                     
            data: []                            
        }
    }

    componentDidMount = async () => {
        await this.getAll();             
    }    
    getAll = async () => {
        let data = this.state.data;
        axios.get(`http://localhost:26112/api/PhysicalPerson`)
            .then(res => {
                this.setState({
                    data:res.data
                });
                // data = res.data;             
                console.log(res.data);
            })
            .catch((e) => {
                console.error(e);
            });             
    };

    render() {
        return (
            <div style={{ maxWidth: '100%' }}>
                <MaterialTable
                title="Listado de Personas"
                columns={[
                    { title: 'Nombre', field: 'nombre' },
                    { title: 'Apellido Paterno', field: 'apellidoPaterno' },
                    { title: 'Apellido Materno', field: 'apellidoMaterno' },
                    { title: 'FRC', field: 'rfc' },
                    { title: 'Fecha de Nacimiento', field: 'fechaNacimiento' }
                ]}
                data={this.state.data}                
                actions={[
                    {
                        icon: 'edit',
                        tooltip: 'Editar Persona',
                        // onClick: (event, rowData) => alert("You saved " + rowData.name)
                        },
                        rowData => ({
                        icon: 'delete',
                        tooltip: 'Eliminar Persona',
                        // onClick: (event, rowData) => confirm("You want to delete " + rowData.name),
                        disabled: rowData.birthYear < 2000
                        })
                    ]}
                    options={{
                        exportButton: true,
                        actionsColumnIndex: -1
                    }}
                />
            </div>

            
        )
    }
}
