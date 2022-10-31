import React, { useEffect, useState } from 'react'
import axios from "axios";
import {Link, useParams} from "react-router-dom"
export default function Home() {

    const [branches, setBranches]=useState([])
    useEffect(()=>{
        loadBranches();
    }, []);

    const {id}=useParams()

    //load/list branch offices
    const loadBranches=async()=>{
        const result =await axios.get("http://localhost:8090/getBranches");
        console.log(result.data)
        setBranches(result.data);
    }

    //delete a branch office
    const  deleteBranch=async(id)=>{
      await axios.delete(`http://localhost:8090/deleteBranch/${id}`)
      loadBranches()
    }

  return (
    <div className='container'>
      <div className='py-4'>
      <table className="table border shadow ">
        <thead>
        <tr>
            <th scope="col">No.</th>
            <th scope="col">Nombre</th>
            <th scope="col">Administrador</th>
            <th scope="col">Acción</th>

        </tr>
        </thead>
        <tbody>
            {
                branches.map((branch, index)=>(
                    <tr>
                    <th scope="row" key={index}>{index+1}</th>
                    <td>{branch.name}</td>
                    <td>{branch.manager}</td>
                    
                    <td>
                        <Link className="btn btn-primary mx-1"
                          to={`/viewBranch/${branch.id}`}>Ver</Link>
                        <Link className="btn btn-outline-primary mx-1'"
                          to={`/editBranch/${branch.id}`}>Editar</Link>
                        <button className="btn btn-danger mx-1"
                          onClick={()=>deleteBranch(branch.id)}>Borrar</button>
                    </td>
                </tr>
            ))
            }
        
  </tbody>
</table>

      </div>
    
    </div>
  )
}
