import axios from 'axios';
import React, {useEffect, useState} from 'react'
import { Link, useParams } from 'react-router-dom'

export default function ViewBranches() {

    const [branch, addbranch]=useState({
        name:"",
        manager:"",
        phone_number:"",
        address:"",
        fax:"",
        orders: null,
        creation_date: "",
        modification_date:""
    })

    const {id}=useParams();

    useEffect(()=>{
        loadBranch();
    }, [])

    const loadBranch=async()=>{
        const result=await axios.get(`http://localhost:8090/branch/${id}`);
        addbranch (result.data);
    }

  return (
    <div className="container">
        <div className="row">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                <h2 className="text-center m-4">Información de la Sucursal</h2>
                <div className="card">
                    <div className="card-header">
                        <ul className="list-group list-group-flush">
                           
                            <li className="list-group-item">
                                <b>Nombre: </b>
                                {branch.name}
                            </li>
                            <li className="list-group-item">
                                <b>Administrador: </b>
                                {branch.manager}
                            </li>
                            <li className="list-group-item">
                                <b>Teléfono: </b>
                                {branch.phone_number}
                            </li>
                            <li className="list-group-item">
                                <b>Dirreción: </b>
                                {branch.address}
                            </li>
                            <li className="list-group-item">
                                <b>Fax: </b>
                                {branch.fax}
                            </li>
                            <li className="list-group-item">
                                <b>Pedidos mensuales: </b>
                                {branch.orders}
                            </li>
                            <li className="list-group-item">
                                <b>Fecha de creación: </b>
                                {branch.creation_date}
                            </li>
                            <li className="list-group-item">
                                <b>Fecha de modificación: </b>
                                {branch.modification_date}
                            </li>

                        </ul>
                    </div>
                </div>
                <Link className=" btn btn-primary my-2" to={"/"}>Volver</Link>
                </div>
        </div>
    </div>

  )
}
