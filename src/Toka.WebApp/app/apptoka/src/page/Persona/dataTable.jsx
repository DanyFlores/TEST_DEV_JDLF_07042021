
import React, { useEffect, useState } from 'react'
import MaterialTable from 'material-table';
import axios from 'axios';
import Header from '../../components/header';
import AuthLogin from '../../Utils/AuthLogin';
import {withRouter} from 'react-router-dom';

const auth = new AuthLogin();
// const url = 'http://localhost:26112/api/PhysicalPerson'
const api = axios.create({
    baseURL: `http://localhost:26112/api`,
    headers: {
        Authorization: 'Bearer ' + auth.token()
    }    
})
const DataTable = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        api.get(`/PhysicalPerson`)
            .then(res => {
                setData(res.data);
                console.log(res.data);
            })
            .catch((e) => {
                console.error(e);
            });
    }, [])

    const columns = [
        { title: "id", field: "idPersonaFisica", hidden: true },
        { title: 'Nombre', field: 'nombre', validate: rowData => rowData.nombre === ''  ? 'Este campo es obligatorio' : '', },
        { title: 'Apellido Paterno', field: 'apellidoPaterno', validate: rowData => rowData.apellidoPaterno === '' ? 'Este campo es obligatorio' : '' },
        { title: 'Apellido Materno', field: 'apellidoMaterno', validate: rowData => rowData.apellidoMaterno === ''  ? 'Este campo es obligatorio' : '' },
        { title: 'FRC', field: 'rfc', validate: rowData => rowData.rfc === ''  ? 'Este campo es obligatorio' : '' },
        { title: 'Fecha de Nacimiento', field: 'fechaNacimiento', type: "date", validate: rowData => rowData.rfc === '' ? 'Este campo es obligatorio' : '' }// type: "date"
    ];  
    // handlers
    const handleRowAdd = (newData, resolve) => {
        api.post(`/PhysicalPerson`,newData)
            .then(res => {
                let dataToAdd = [...data];
                dataToAdd.push(newData);
                setData(dataToAdd);
                resolve();
                console.log(res.data);
            })
            .catch((e) => {
                // alert(e.response.data.message);     
                resolve();
            });
    }
    const handleRowUpdate = (newData, oldData, resolve) => {       
            api.put(`/PhysicalPerson/${newData.idPersonaFisica}`, newData)
                .then(res => {
                    let dataUpdate = [...data];
                    const index = oldData.tableData.id;
                    dataUpdate[index] = newData;
                    setData([...dataUpdate]);
                    resolve();
                })
                .catch((e) => {               
                    // setErrorMessages(["Error al intentar modificar el registro!"])
                    // alert(e.response.data.message); 
                    resolve()
                    console.error(e);
                });       
    }
    const handleRowDelete = (oldData, resolve) => {
        api.delete(`/PhysicalPerson/${oldData.idPersonaFisica}`)
            .then(res => {
                const dataDelete = [...data];

                const index = oldData.idPersonaFisica;   

                let newarray = dataDelete.filter((X) =>{
                    return X.idPersonaFisica !== index; 
                });              
                setData([...newarray]);
                resolve();
            })
            .catch((e) => {
                // alert(e.response.data.message);        
                resolve();
                console.error(e);
            });
    }
    return (
        <div style={{ maxWidth: '100%' }}>
            <Header />
            <MaterialTable
                title="Listado de Personas"
                columns={columns}
                data={data}
                options={{
                    exportButton: true,
                    actionsColumnIndex: -1,
                    pageSize: 5,
                    // pageSizeOptions: [5,10,20]
                }}
                editable={{
                    onRowUpdate: (newData, oldData) =>
                        new Promise((resolve) => {
                            handleRowUpdate(newData, oldData, resolve);
                        }),
                    onRowAdd: (newData) =>
                        new Promise((resolve) => {
                            handleRowAdd(newData, resolve);
                        }),
                    onRowDelete: (oldData) =>
                        new Promise((resolve) => {
                            handleRowDelete(oldData, resolve);
                        }),
                }}
            />
        </div>
    )
}
export default withRouter(DataTable);