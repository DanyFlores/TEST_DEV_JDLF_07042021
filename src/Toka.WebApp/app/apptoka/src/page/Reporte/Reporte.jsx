import React,{useEffect,useState} from 'react';
import Header from '../../components/header';
import MaterialTable from 'material-table';
import axios from 'axios';
import {withRouter} from  'react-router-dom'

const api = axios.create({
    baseURL: `https://api.toka.com.mx/candidato/api/customers`,
    headers: {
        'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6InVjYW5kMDAyMSIsInJvbGUiOiJEZXZlbG9wZXIiLCJuYmYiOjE2MTc5ODUzNDIsImV4cCI6MTYxNzk4NjU0MiwiaWF0IjoxNjE3OTg1MzQyLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjQ5MjIwIiwiYXVkIjoiaHR0cDovL2xvY2FsaG9zdDo0OTIyMCJ9.9HSQIVVRV1OEzpSziQ4cFv3zs1UJ1hUO2x6hepeaBPQ',        
        'Content-Type': 'multipart/form-data'
    }
})
const Reporte = () => {

    const [data, setData] = useState([]);

    // useEffect(async () => {
    //     await api.get()
    //         .then(res => {
    //             setData(res.data);
    //             console.log(res.data);
    //         })
    //         .catch((e) => {
    //             console.error(e);
    //         });
    // }, [])

    const data1 = [
        {
            "IdCliente": 1,
            "FechaRegistroEmpresa": "2021-03-10T19:41:26.057",
            "RazonSocial": "EMPRESA 1 ",
            "RFC": "XAXX010101XA1",
            "Sucursal": "SUCURSAL  1",
            "IdEmpleado": 1,
            "Nombre": "NOMBRE 1",
            "Paterno": "PATERNO 1",
            "Materno": "MATERNO 1",
            "IdViaje": 1
        },
        {
            "IdCliente": 1,
            "FechaRegistroEmpresa": "2021-03-10T19:41:26.057",
            "RazonSocial": "EMPRESA 1 ",
            "RFC": "XAXX010101XA1",
            "Sucursal": "SUCURSAL  1",
            "IdEmpleado": 1,
            "Nombre": "NOMBRE 1",
            "Paterno": "PATERNO 1",
            "Materno": "MATERNO 1",
            "IdViaje": 250
        },
        {
            "IdCliente": 1,
            "FechaRegistroEmpresa": "2021-03-10T19:41:26.057",
            "RazonSocial": "EMPRESA 1 ",
            "RFC": "XAXX010101XA1",
            "Sucursal": "SUCURSAL  1",
            "IdEmpleado": 1,
            "Nombre": "NOMBRE 1",
            "Paterno": "PATERNO 1",
            "Materno": "MATERNO 1",
            "IdViaje": 383
        },
        {
            "IdCliente": 1,
            "FechaRegistroEmpresa": "2021-03-10T19:41:26.057",
            "RazonSocial": "EMPRESA 1 ",
            "RFC": "XAXX010101XA1",
            "Sucursal": "SUCURSAL  1",
            "IdEmpleado": 2,
            "Nombre": "NOMBRE 2",
            "Paterno": "PATERNO 2",
            "Materno": "MATERNO 2",
            "IdViaje": 384
        },
        {
            "IdCliente": 1,
            "FechaRegistroEmpresa": "2021-03-10T19:41:26.057",
            "RazonSocial": "EMPRESA 1 ",
            "RFC": "XAXX010101XA1",
            "Sucursal": "SUCURSAL  1",
            "IdEmpleado": 2,
            "Nombre": "NOMBRE 2",
            "Paterno": "PATERNO 2",
            "Materno": "MATERNO 2",
            "IdViaje": 251
        },
        {
            "IdCliente": 1,
            "FechaRegistroEmpresa": "2021-03-10T19:41:26.057",
            "RazonSocial": "EMPRESA 1 ",
            "RFC": "XAXX010101XA1",
            "Sucursal": "SUCURSAL  1",
            "IdEmpleado": 2,
            "Nombre": "NOMBRE 2",
            "Paterno": "PATERNO 2",
            "Materno": "MATERNO 2",
            "IdViaje": 2
        },
        {
            "IdCliente": 1,
            "FechaRegistroEmpresa": "2021-03-10T19:41:26.057",
            "RazonSocial": "EMPRESA 1 ",
            "RFC": "XAXX010101XA1",
            "Sucursal": "SUCURSAL  1",
            "IdEmpleado": 3,
            "Nombre": "NOMBRE 3",
            "Paterno": "PATERNO 3",
            "Materno": "MATERNO 3",
            "IdViaje": 3
        },
        {
            "IdCliente": 1,
            "FechaRegistroEmpresa": "2021-03-10T19:41:26.057",
            "RazonSocial": "EMPRESA 1 ",
            "RFC": "XAXX010101XA1",
            "Sucursal": "SUCURSAL  1",
            "IdEmpleado": 3,
            "Nombre": "NOMBRE 3",
            "Paterno": "PATERNO 3",
            "Materno": "MATERNO 3",
            "IdViaje": 252,
        },
        {
            "IdCliente": 1,
            "FechaRegistroEmpresa": "2021-03-10T19:41:26.057",
            "RazonSocial": "EMPRESA 1 ",
            "RFC": "XAXX010101XA1",
            "Sucursal": "SUCURSAL  1",
            "IdEmpleado": 3,
            "Nombre": "NOMBRE 3",
            "Paterno": "PATERNO 3",
            "Materno": "MATERNO 3",
            "IdViaje": 385,
        },
        {
            "IdCliente": 1,
            "FechaRegistroEmpresa": "2021-03-10T19:41:26.057",
            "RazonSocial": "EMPRESA 1 ",
            "RFC": "XAXX010101XA1",
            "Sucursal": "SUCURSAL  1",
            "IdEmpleado": 4,
            "Nombre": "NOMBRE 4",
            "Paterno": "PATERNO 4",
            "Materno": "MATERNO 4",
            "IdViaje": 386,
        },
        {
            "IdCliente": 1,
            "FechaRegistroEmpresa": "2021-03-10T19:41:26.057",
            "RazonSocial": "EMPRESA 1 ",
            "RFC": "XAXX010101XA1",
            "Sucursal": "SUCURSAL  1",
            "IdEmpleado": 4,
            "Nombre": "NOMBRE 4",
            "Paterno": "PATERNO 4",
            "Materno": "MATERNO 4",
            "IdViaje": 253,
        },
        {
            "IdCliente": 1,
            "FechaRegistroEmpresa": "2021-03-10T19:41:26.057",
            "RazonSocial": "EMPRESA 1 ",
            "RFC": "XAXX010101XA1",
            "Sucursal": "SUCURSAL  1",
            "IdEmpleado": 4,
            "Nombre": "NOMBRE 4",
            "Paterno": "PATERNO 4",
            "Materno": "MATERNO 4",
            "IdViaje": 4,
        },
        {
            "IdCliente": 1,
            "FechaRegistroEmpresa": "2021-03-10T19:41:26.057",
            "RazonSocial": "EMPRESA 1 ",
            "RFC": "XAXX010101XA1",
            "Sucursal": "SUCURSAL  1",
            "IdEmpleado": 5,
            "Nombre": "NOMBRE 5",
            "Paterno": "PATERNO 5",
            "Materno": "MATERNO 5",
            "IdViaje": 5,
        },
        {
            "IdCliente": 1,
            "FechaRegistroEmpresa": "2021-03-10T19:41:26.057",
            "RazonSocial": "EMPRESA 1 ",
            "RFC": "XAXX010101XA1",
            "Sucursal": "SUCURSAL  1",
            "IdEmpleado": 5,
            "Nombre": "NOMBRE 5",
            "Paterno": "PATERNO 5",
            "Materno": "MATERNO 5",
            "IdViaje": 387,
        },
        {
            "IdCliente": 1,
            "FechaRegistroEmpresa": "2021-03-10T19:41:26.057",
            "RazonSocial": "EMPRESA 1 ",
            "RFC": "XAXX010101XA1",
            "Sucursal": "SUCURSAL  1",
            "IdEmpleado": 6,
            "Nombre": "NOMBRE 6",
            "Paterno": "PATERNO 6",
            "Materno": "MATERNO 6",
            "IdViaje": 388,
        },
        {
            "IdCliente": 1,
            "FechaRegistroEmpresa": "2021-03-10T19:41:26.057",
            "RazonSocial": "EMPRESA 1 ",
            "RFC": "XAXX010101XA1",
            "Sucursal": "SUCURSAL  1",
            "IdEmpleado": 6,
            "Nombre": "NOMBRE 6",
            "Paterno": "PATERNO 6",
            "Materno": "MATERNO 6",
            "IdViaje": 255,
        },
        {
            "IdCliente": 1,
            "FechaRegistroEmpresa": "2021-03-10T19:41:26.057",
            "RazonSocial": "EMPRESA 1 ",
            "RFC": "XAXX010101XA1",
            "Sucursal": "SUCURSAL  1",
            "IdEmpleado": 6,
            "Nombre": "NOMBRE 6",
            "Paterno": "PATERNO 6",
            "Materno": "MATERNO 6",
            "IdViaje": 6,
        },
        {
            "IdCliente": 1,
            "FechaRegistroEmpresa": "2021-03-10T19:41:26.057",
            "RazonSocial": "EMPRESA 1 ",
            "RFC": "XAXX010101XA1",
            "Sucursal": "SUCURSAL  1",
            "IdEmpleado": 7,
            "Nombre": "NOMBRE 7",
            "Paterno": "PATERNO 7",
            "Materno": "MATERNO 7",
            "IdViaje": 7,
        },
        {
            "IdCliente": 1,
            "FechaRegistroEmpresa": "2021-03-10T19:41:26.057",
            "RazonSocial": "EMPRESA 1 ",
            "RFC": "XAXX010101XA1",
            "Sucursal": "SUCURSAL  1",
            "IdEmpleado": 7,
            "Nombre": "NOMBRE 7",
            "Paterno": "PATERNO 7",
            "Materno": "MATERNO 7",
            "IdViaje": 256,
        },
        {
            "IdCliente": 1,
            "FechaRegistroEmpresa": "2021-03-10T19:41:26.057",
            "RazonSocial": "EMPRESA 1 ",
            "RFC": "XAXX010101XA1",
            "Sucursal": "SUCURSAL  1",
            "IdEmpleado": 7,
            "Nombre": "NOMBRE 7",
            "Paterno": "PATERNO 7",
            "Materno": "MATERNO 7",
            "IdViaje": 389,
        },
        {
            "IdCliente": 1,
            "FechaRegistroEmpresa": "2021-03-10T19:41:26.057",
            "RazonSocial": "EMPRESA 1 ",
            "RFC": "XAXX010101XA1",
            "Sucursal": "SUCURSAL  1",
            "IdEmpleado": 8,
            "Nombre": "NOMBRE 8",
            "Paterno": "PATERNO 8",
            "Materno": "MATERNO 8",
            "IdViaje": 390,
        },
        {
            "IdCliente": 1,
            "FechaRegistroEmpresa": "2021-03-10T19:41:26.057",
            "RazonSocial": "EMPRESA 1 ",
            "RFC": "XAXX010101XA1",
            "Sucursal": "SUCURSAL  1",
            "IdEmpleado": 8,
            "Nombre": "NOMBRE 8",
            "Paterno": "PATERNO 8",
            "Materno": "MATERNO 8",
            "IdViaje": 257
        },
        {
            "IdCliente": 1,
            "FechaRegistroEmpresa": "2021-03-10T19:41:26.057",
            "RazonSocial": "EMPRESA 1 ",
            "RFC": "XAXX010101XA1",
            "Sucursal": "SUCURSAL  1",
            "IdEmpleado": 8,
            "Nombre": "NOMBRE 8",
            "Paterno": "PATERNO 8",
            "Materno": "MATERNO 8",
            "IdViaje": 8
        },
        {
            "IdCliente": 1,
            "FechaRegistroEmpresa": "2021-03-10T19:41:26.057",
            "RazonSocial": "EMPRESA 1 ",
            "RFC": "XAXX010101XA1",
            "Sucursal": "SUCURSAL  1",
            "IdEmpleado": 9,
            "Nombre": "NOMBRE 9",
            "Paterno": "PATERNO 9",
            "Materno": "MATERNO 9",
            "IdViaje": 9
        },
        {
            "IdCliente": 1,
            "FechaRegistroEmpresa": "2021-03-10T19:41:26.057",
            "RazonSocial": "EMPRESA 1 ",
            "RFC": "XAXX010101XA1",
            "Sucursal": "SUCURSAL  1",
            "IdEmpleado": 9,
            "Nombre": "NOMBRE 9",
            "Paterno": "PATERNO 9",
            "Materno": "MATERNO 9",
            "IdViaje": 258
        },
        {
            "IdCliente": 1,
            "FechaRegistroEmpresa": "2021-03-10T19:41:26.057",
            "RazonSocial": "EMPRESA 1 ",
            "RFC": "XAXX010101XA1",
            "Sucursal": "SUCURSAL  1",
            "IdEmpleado": 9,
            "Nombre": "NOMBRE 9",
            "Paterno": "PATERNO 9",
            "Materno": "MATERNO 9",
            "IdViaje": 391
        },
        {
            "IdCliente": 1,
            "FechaRegistroEmpresa": "2021-03-10T19:41:26.057",
            "RazonSocial": "EMPRESA 1 ",
            "RFC": "XAXX010101XA1",
            "Sucursal": "SUCURSAL  1",
            "IdEmpleado": 10,
            "Nombre": "NOMBRE 10",
            "Paterno": "PATERNO 10",
            "Materno": "MATERNO 10",
            "IdViaje": 392
        },
        {
            "IdCliente": 1,
            "FechaRegistroEmpresa": "2021-03-10T19:41:26.057",
            "RazonSocial": "EMPRESA 1 ",
            "RFC": "XAXX010101XA1",
            "Sucursal": "SUCURSAL  1",
            "IdEmpleado": 10,
            "Nombre": "NOMBRE 10",
            "Paterno": "PATERNO 10",
            "Materno": "MATERNO 10",
            "IdViaje": 259
        },
        {
            "IdCliente": 1,
            "FechaRegistroEmpresa": "2021-03-10T19:41:26.057",
            "RazonSocial": "EMPRESA 1 ",
            "RFC": "XAXX010101XA1",
            "Sucursal": "SUCURSAL  1",
            "IdEmpleado": 10,
            "Nombre": "NOMBRE 10",
            "Paterno": "PATERNO 10",
            "Materno": "MATERNO 10",
            "IdViaje": 10
        },
        {
            "IdCliente": 1,
            "FechaRegistroEmpresa": "2021-03-10T19:41:26.057",
            "RazonSocial": "EMPRESA 1 ",
            "RFC": "XAXX010101XA1",
            "Sucursal": "SUCURSAL  1",
            "IdEmpleado": 11,
            "Nombre": "NOMBRE 11",
            "Paterno": "PATERNO 11",
            "Materno": "MATERNO 11",
            "IdViaje": 11
        },
        {
            "IdCliente": 1,
            "FechaRegistroEmpresa": "2021-03-10T19:41:26.057",
            "RazonSocial": "EMPRESA 1 ",
            "RFC": "XAXX010101XA1",
            "Sucursal": "SUCURSAL  1",
            "IdEmpleado": 11,
            "Nombre": "NOMBRE 11",
            "Paterno": "PATERNO 11",
            "Materno": "MATERNO 11",
            "IdViaje": 260
        },
        {
            "IdCliente": 1,
            "FechaRegistroEmpresa": "2021-03-10T19:41:26.057",
            "RazonSocial": "EMPRESA 1 ",
            "RFC": "XAXX010101XA1",
            "Sucursal": "SUCURSAL  1",
            "IdEmpleado": 11,
            "Nombre": "NOMBRE 11",
            "Paterno": "PATERNO 11",
            "Materno": "MATERNO 11",
            "IdViaje": 393
        },
        {
            "IdCliente": 1,
            "FechaRegistroEmpresa": "2021-03-10T19:41:26.057",
            "RazonSocial": "EMPRESA 1 ",
            "RFC": "XAXX010101XA1",
            "Sucursal": "SUCURSAL  1",
            "IdEmpleado": 12,
            "Nombre": "NOMBRE 12",
            "Paterno": "PATERNO 12",
            "Materno": "MATERNO 12",
            "IdViaje": 394
        },
        {
            "IdCliente": 1,
            "FechaRegistroEmpresa": "2021-03-10T19:41:26.057",
            "RazonSocial": "EMPRESA 1 ",
            "RFC": "XAXX010101XA1",
            "Sucursal": "SUCURSAL  1",
            "IdEmpleado": 12,
            "Nombre": "NOMBRE 12",
            "Paterno": "PATERNO 12",
            "Materno": "MATERNO 12",
            "IdViaje": 261
        },
        {
            "IdCliente": 1,
            "FechaRegistroEmpresa": "2021-03-10T19:41:26.057",
            "RazonSocial": "EMPRESA 1 ",
            "RFC": "XAXX010101XA1",
            "Sucursal": "SUCURSAL  1",
            "IdEmpleado": 12,
            "Nombre": "NOMBRE 12",
            "Paterno": "PATERNO 12",
            "Materno": "MATERNO 12",
            "IdViaje": 12
        },
        {
            "IdCliente": 1,
            "FechaRegistroEmpresa": "2021-03-10T19:41:26.057",
            "RazonSocial": "EMPRESA 1 ",
            "RFC": "XAXX010101XA1",
            "Sucursal": "SUCURSAL  1",
            "IdEmpleado": 13,
            "Nombre": "NOMBRE 13",
            "Paterno": "PATERNO 13",
            "Materno": "MATERNO 13",
            "IdViaje": 13
        },
        {
            "IdCliente": 1,
            "FechaRegistroEmpresa": "2021-03-10T19:41:26.057",
            "RazonSocial": "EMPRESA 1 ",
            "RFC": "XAXX010101XA1",
            "Sucursal": "SUCURSAL  1",
            "IdEmpleado": 13,
            "Nombre": "NOMBRE 13",
            "Paterno": "PATERNO 13",
            "Materno": "MATERNO 13",
            "IdViaje": 262
        },
        {
            "IdCliente": 1,
            "FechaRegistroEmpresa": "2021-03-10T19:41:26.057",
            "RazonSocial": "EMPRESA 1 ",
            "RFC": "XAXX010101XA1",
            "Sucursal": "SUCURSAL  1",
            "IdEmpleado": 13,
            "Nombre": "NOMBRE 13",
            "Paterno": "PATERNO 13",
            "Materno": "MATERNO 13",
            "IdViaje": 395
        },
        {
            "IdCliente": 1,
            "FechaRegistroEmpresa": "2021-03-10T19:41:26.057",
            "RazonSocial": "EMPRESA 1 ",
            "RFC": "XAXX010101XA1",
            "Sucursal": "SUCURSAL  1",
            "IdEmpleado": 14,
            "Nombre": "NOMBRE 14",
            "Paterno": "PATERNO 14",
            "Materno": "MATERNO 14",
            "IdViaje": 396
        },
        {
            "IdCliente": 1,
            "FechaRegistroEmpresa": "2021-03-10T19:41:26.057",
            "RazonSocial": "EMPRESA 1 ",
            "RFC": "XAXX010101XA1",
            "Sucursal": "SUCURSAL  1",
            "IdEmpleado": 14,
            "Nombre": "NOMBRE 14",
            "Paterno": "PATERNO 14",
            "Materno": "MATERNO 14",
            "IdViaje": 263
        },
        {
            "IdCliente": 1,
            "FechaRegistroEmpresa": "2021-03-10T19:41:26.057",
            "RazonSocial": "EMPRESA 1 ",
            "RFC": "XAXX010101XA1",
            "Sucursal": "SUCURSAL  1",
            "IdEmpleado": 14,
            "Nombre": "NOMBRE 14",
            "Paterno": "PATERNO 14",
            "Materno": "MATERNO 14",
            "IdViaje": 14
        },
        {
            "IdCliente": 1,
            "FechaRegistroEmpresa": "2021-03-10T19:41:26.057",
            "RazonSocial": "EMPRESA 1 ",
            "RFC": "XAXX010101XA1",
            "Sucursal": "SUCURSAL  1",
            "IdEmpleado": 15,
            "Nombre": "NOMBRE 15",
            "Paterno": "PATERNO 15",
            "Materno": "MATERNO 15",
            "IdViaje": 15
        },
        {
            "IdCliente": 1,
            "FechaRegistroEmpresa": "2021-03-10T19:41:26.057",
            "RazonSocial": "EMPRESA 1 ",
            "RFC": "XAXX010101XA1",
            "Sucursal": "SUCURSAL  1",
            "IdEmpleado": 15,
            "Nombre": "NOMBRE 15",
            "Paterno": "PATERNO 15",
            "Materno": "MATERNO 15",
            "IdViaje": 264
        },
        {
            "IdCliente": 1,
            "FechaRegistroEmpresa": "2021-03-10T19:41:26.057",
            "RazonSocial": "EMPRESA 1 ",
            "RFC": "XAXX010101XA1",
            "Sucursal": "SUCURSAL  1",
            "IdEmpleado": 15,
            "Nombre": "NOMBRE 15",
            "Paterno": "PATERNO 15",
            "Materno": "MATERNO 15",
            "IdViaje": 397
        },
        {
            "IdCliente": 1,
            "FechaRegistroEmpresa": "2021-03-10T19:41:26.057",
            "RazonSocial": "EMPRESA 1 ",
            "RFC": "XAXX010101XA1",
            "Sucursal": "SUCURSAL  1",
            "IdEmpleado": 16,
            "Nombre": "NOMBRE 16",
            "Paterno": "PATERNO 16",
            "Materno": "MATERNO 16",
            "IdViaje": 398
        },
        {
            "IdCliente": 1,
            "FechaRegistroEmpresa": "2021-03-10T19:41:26.057",
            "RazonSocial": "EMPRESA 1 ",
            "RFC": "XAXX010101XA1",
            "Sucursal": "SUCURSAL  1",
            "IdEmpleado": 16,
            "Nombre": "NOMBRE 16",
            "Paterno": "PATERNO 16",
            "Materno": "MATERNO 16",
            "IdViaje": 265
        },
        {
            "IdCliente": 1,
            "FechaRegistroEmpresa": "2021-03-10T19:41:26.057",
            "RazonSocial": "EMPRESA 1 ",
            "RFC": "XAXX010101XA1",
            "Sucursal": "SUCURSAL  1",
            "IdEmpleado": 16,
            "Nombre": "NOMBRE 16",
            "Paterno": "PATERNO 16",
            "Materno": "MATERNO 16",
            "IdViaje": 16
        },
        {
            "IdCliente": 1,
            "FechaRegistroEmpresa": "2021-03-10T19:41:26.057",
            "RazonSocial": "EMPRESA 1 ",
            "RFC": "XAXX010101XA1",
            "Sucursal": "SUCURSAL  1",
            "IdEmpleado": 17,
            "Nombre": "NOMBRE 17",
            "Paterno": "PATERNO 17",
            "Materno": "MATERNO 17",
            "IdViaje": 17
        },
        {
            "IdCliente": 1,
            "FechaRegistroEmpresa": "2021-03-10T19:41:26.057",
            "RazonSocial": "EMPRESA 1 ",
            "RFC": "XAXX010101XA1",
            "Sucursal": "SUCURSAL  1",
            "IdEmpleado": 17,
            "Nombre": "NOMBRE 17",
            "Paterno": "PATERNO 17",
            "Materno": "MATERNO 17",
            "IdViaje": 266
        },
    ]; 

    // const exporExcel = (JSONData, ReportTitle, ShowLabel) => {
    //     //If JSONData is not an object then JSON.parse will parse the JSON string in an Object
    //     var arrData = typeof JSONData != 'object' ? JSON.parse(JSONData) : JSONData;
    
    //     var CSV = '';
    //     //Set Report title in first row or line
    
    //     CSV += ReportTitle + '\r\n\n';
    
    //     //This condition will generate the Label/Header
    //     if (ShowLabel) {
    //         var row = "";
    
    //         //This loop will extract the label from 1st index of on array
    //         for (var index in arrData[0]) {
    
    //             //Now convert each value to string and comma-seprated
    //             row += index + ',';
    //         }
    
    //         row = row.slice(0, -1);
    
    //         //append Label row with line break
    //         CSV += row + '\r\n';
    //     }
    
    //     //1st loop is to extract each row
    //     for (var i = 0; i < arrData.length; i++) {
    //         var row = "";
    
    //         //2nd loop will extract each column and convert it in string comma-seprated
    //         for (var index in arrData[i]) {
    //             row += '"' + arrData[i][index] + '",';
    //         }
    
    //         row.slice(0, row.length - 1);
    
    //         //add a line break after each row
    //         CSV += row + '\r\n';
    //     }
    
    //     if (CSV == '') {
    //         alert("No hay datos para exportar");
    //         return;
    //     }
    
    //     //Generate a file name
    //     var fileName = "Reporte_";
    //     //this will remove the blank-spaces from the title and replace it with an underscore
    //     fileName += ReportTitle.replace(/ /g,"_");
    
    //     //Initialize file format you want csv or xls
    //     var uri = 'data:text/xlsx;charset=utf-8,' + escape(CSV);
    
    //     // Now the little tricky part.
    //     // you can use either>> window.open(uri);
    //     // but this will not work in some browsers
    //     // or you will not get the correct file extension
    
    //     //this trick will generate a temp <a /> tag
    //     var link = document.createElement("a");
    //     link.href = uri;
    
    //     //set the visibility hidden so it will not effect on your web-layout
    //     link.style = "visibility:hidden";
    //     link.download = fileName + ".xlsx";
    
    //     //this part will append the anchor tag and remove it after automatic click
    //     document.body.appendChild(link);
    //     link.click();
    //     document.body.removeChild(link);
    // }


    const columns = [
        { title: "IdCliente", field: "IdCliente", hidden: true },
        { title: 'Fecha de Regitro', field: 'FechaRegistroEmpresa',type: "date"},
        { title: 'Razon Social', field: 'RazonSocial'},
        { title: 'RFC', field: 'RFC'},
        { title: 'IdEmpleado', field: 'IdEmpleado' , hidden:true},//, type: "date"
        { title: 'Nombre', field: 'Nombre'},
        { title: 'Apellido Paterno', field: 'Paterno'},
        { title: 'Apellido Materno ', field: 'Materno'},
        { title: 'IdViaje', field: 'IdViaje', hidden: true}
    ];  

    return (
        <div>
            <Header/>
            <MaterialTable
                title="Listado de Clientes"
                columns={columns}
                data={data1}
                options={{        
                    exportButton: true,
                    // exportCsv: (columns, data) => {
                    //     alert('You should develop a code to export ' + data.length + ' rows');
                    //     exporExcel(data,"test",true);
                    // },
                    pageSize: 20,
                    pageSizeOptions: [20]
                }}               
            />
        </div>
    )
}
export default withRouter(Reporte);