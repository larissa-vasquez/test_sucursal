import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {Link, useNavigate, useParams } from 'react-router-dom';

export default function EditBranch() {

    let navigate=useNavigate();
    let today= new Date();
    const {id}=useParams()

    const [branch, addbranch]=useState({
        name:"",
        manager:"",
        phone_number:"",
        address:"",
        fax:"",
        orders: null,
        creation_date: "",
        modification_date: ""
    })

    const {name, manager, phone_number, address, fax, orders, creation_date, modification_date}=branch

    const onInputChange=(e)=>{
        addbranch({...branch,[e.target.name]:e.target.value});
    };

    const addDate=()=>{
        branch.modification_date=today.toLocaleString()
    }
    useEffect(()=>{
        loadBranch();
    }, []);

    const onSubmit=async(e)=>{
        e.preventDefault();
        await axios.put(`http://localhost:8090/updateBranch/${id}`, branch)
        navigate("/")
    };

    const loadBranch=async()=>{
        const result=await axios.get(`http://localhost:8090/branch/${id}`)
        addbranch(result.data)
    }

  return  (
  <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Editar Sucursal</h2>
                    <form onSubmit={(e)=>onSubmit(e)}>
                    <div className="mb-3">
                        <input 
                            type={"text"} 
                            className="form-control"
                            placeholder="Nombre de la sucursal"
                            name="name"
                            value={name}
                            onChange={(e)=>onInputChange(e)}
                            ></input>
                    </div>
                    <div className="mb-3">
                        <input 
                            type={"text"} 
                            className="form-control"
                            placeholder="Nombre del administrador"
                            name="manager"
                            value={manager}
                            onChange={(e)=>onInputChange(e)}
                            ></input>
                    </div>

                    <div className='mb-3'>
                        <input 
                            type={"text"} 
                            className="form-control"
                            placeholder="Teléfono"
                            name="phone_number"
                            value={phone_number}
                            onChange={(e)=>onInputChange(e)}
                            ></input>
                    </div>

                    <div className="mb-3">
                        <input 
                            type={"text"} 
                            className="form-control"
                            placeholder="Dirección: ciudad, barrio o colonia, descripción"
                            name="address"
                            value={address}
                            onChange={(e)=>onInputChange(e)}
                            ></input>
                    </div>

                    <div className="mb-3">
                        <input 
                            type={"text"} 
                            className="form-control"
                            placeholder="Fax"
                            name="fax"
                            value={fax}
                            onChange={(e)=>onInputChange(e)}
                            ></input>
                    </div>

                    <div className="mb-3">
                        <input 
                            type={"text"} 
                            className="form-control"
                            placeholder="Pedidos al mes"
                            name="orders"
                            value={orders}
                            onChange={(e)=>onInputChange(e)}
                            ></input>
                    </div>

                    <div className="mb-3">
                        <input 
                            type={"text"} 
                            className="form-control"
                            placeholder="Fecha de creación"
                            name="creation_date"
                            value={creation_date}
                            disabled={true}
                            onChange={(e)=>onInputChange(e)}
                            ></input>
                    </div>

                    <div className="mb-3">
                        <input 
                            type={"text"} 
                            className="form-control"
                            placeholder="Fecha de modificación"
                            name="modification_date"
                            value={modification_date}
                            disabled={true}
                            onChange={(e)=>onInputChange(e)}
                            ></input>
                    </div>

                    <button type="submit" className="btn btn-outline-primary" onClick={addDate()}>Guardar</button>
                    <Link className="btn btn-outline-danger mx-2" to="/">Cancelar</Link>
                    </form>
                </div>
            </div>
        </div>
    
  )
  
}
