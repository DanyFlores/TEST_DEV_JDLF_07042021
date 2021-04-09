import React, { useEffect, useState } from 'react'
import MaterialTable from 'material-table';
import axios from 'axios';
import Header from '../../components/header';
import { NotificationContainer, NotificationManager } from 'react-notifications';



const url = `http://localhost:26112/api/PhysicalPerson`;
// const api = axios.create({
//     baseURL: `http://localhost:26112/api`
// })
const dateCalendar = (e) => {
    return e.year + "-" + (e.month < 10 ? "0" + e.month : e.month) + "-" + (e.day < 10 ? "0" + e.day : e.day)
}
const DataTable = () => {

    const [data, setData] = useState([]);
    const [iserror, setIserror] = useState(false)
    const [errorMessages, setErrorMessages] = useState([])

    useEffect(async () => {
        await axios.get(url)
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
        { title: 'Nombre', field: 'nombre', validate: rowData => (rowData.nombre === '' || rowData.nombre === undefined) ? 'Este campo es obligatorio' : '', },
        { title: 'Apellido Paterno', field: 'apellidoPaterno', validate: rowData => (rowData.apellidoPaterno === '' || rowData.apellidoPaterno === undefined) ? 'Este campo es obligatorio' : '' },
        { title: 'Apellido Materno', field: 'apellidoMaterno', validate: rowData => (rowData.apellidoMaterno === '' || rowData.apellidoMaterno === undefined) ? 'Este campo es obligatorio' : '' },
        { title: 'FRC', field: 'rfc', validate: rowData => (rowData.rfc === '' || rowData.rfc === undefined) ? 'Este campo es obligatorio' : '' },
        { title: 'Fecha de Nacimiento', field: 'fechaNacimiento', type: "date", validate: rowData => (rowData.rfc === '' || rowData.rfc === undefined) ? 'Este campo es obligatorio' : '' }// type: "date"
    ];
    const acciones = [
        {
            icon: 'edit',
            tooltip: 'Editar Persona',
            // onClick: (event, rowData) => alert("You saved " + rowData.name)
        },
        rowData => ({
            icon: 'delete',
            tooltip: 'Eliminar Persona',
            // onClick: (event, rowData) => alert("You want to delete " + rowData.name),
            disabled: rowData.birthYear < 2000
        })
    ];
    //notificaciones
    const createNotification = (type) => {
        return () => {
            switch (type) {
                case 'info':
                    NotificationManager.info('Info message');
                    break;
                case 'success':
                    NotificationManager.success('Success message', 'Title here');
                    break;
                case 'warning':
                    NotificationManager.warning('Upss, Ocurrio un error!', 3000);
                    break;
                case 'error':
                    NotificationManager.error('Error message', 'Click me!', 5000, () => {
                        alert('callback');
                    });
                    break;
            }
        };
    };
    // handlers
    const handleRowAdd = (newData, resolve) => {
        axios.post(url, newData)
            .then(res => {
                let dataToAdd = [...data];
                dataToAdd.push(newData);
                setData(dataToAdd);
                resolve()
                setErrorMessages([])
                setIserror(false)
                console.log(res.data);
            })
            .catch((e) => {
                createNotification('warning');
                // alert("Error al intentar agregar nuevo registro!")
                setIserror(true)
                resolve()
                console.error(e);
            });
    }
    const handleRowUpdate = (newData, oldData, resolve) => {
        //Validacion
        console.log("update", newData, oldData);
        // let FechaNacimiento = dateCalendar(newData.fechaNacimiento);
        // console.log(FechaNacimiento);
        let errorList = [];
        if (newData.nombre === "") {
            errorList.push("Ingrese Nombre de la persona");
        }
        if (newData.apellidoPaterno === "") {
            errorList.push("Ingrese Apellido Paterno de la persona");
        }
        if (newData.apellidoMaterno === "") {
            errorList.push("Ingrese Apellido Materno de la persona");
        }
        if (newData.rfc === "") {
            errorList.push("Ingrese FRC de la persona");
        }
        if (newData.fechaNacimiento === "") {
            errorList.push("Seleccione Fecha Valida");
        }
        if (errorList.length < 1) {
            axios.put(`${url}/${newData.idPersonaFisica}`, newData)
                .then(res => {
                    let dataUpdate = [...data];
                    const index = oldData.tableData.id;
                    dataUpdate[index] = newData;
                    setData([...dataUpdate]);
                    resolve();
                    setIserror(false);
                    setErrorMessages([]);
                })
                .catch((e) => {
                    setErrorMessages(["Error al intentar modificar el registro!"])
                    setIserror(true)
                    resolve()
                    console.error(e);
                });
        } else {
            setErrorMessages(errorList)
            setIserror(true)
            resolve()
        }
    }
    const handleRowDelete = (oldData, resolve) => {
        axios.delete(`${url}/${oldData.idPersonaFisica}`)
            .then(res => {
                const dataDelete = [...data];
                const index = oldData.tableData.idPersonaFisica;
                dataDelete.splice(index, 1);
                setData([...dataDelete]);
                resolve();
            })
            .catch((e) => {
                setErrorMessages(["Error al intentar eliminar registro!"]);
                setIserror(true);
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
export default DataTable;