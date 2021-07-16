
import React, { useState, useEffect } from "react";
import axios from "axios";
import LabTags from "./LabTags"



function LabTabela ({escolhaData, valor}){
  const [ciclo, setCiclo] = useState([])

    

    const [status, setStatus] = useState("Todos")

    useEffect(() => {
        axios.get(`/${escolhaData.key}`, {
            auth: { username: '', password: '', }
        })
        .then(res => {
            console.log(res.data);
            setCiclo(res.data)
        })
        .catch(error => {
            console.log(`Deu erro =>  ${error}`);
        })
    }, [escolhaData])

    

    function filtraStatus(valor) {
        setStatus(valor)
    }

    useEffect(() => {
        console.log('Effect do status ' + status);
    })

   
return(
    <div className="card mb-4 ">
        <div className="card-header">
          
    {escolhaData.key} 

    
        
       
        </div>
        <div className="card-body ">
        <div className="table-responsive">
         
            <table className="table table-bordered"
             id="dataTable"s
             width="100%"
             cellspacing="0"
            >
                <thead className="table-responsive sb-sidenav-light">
                  <tr className="table-responsive">
                    <th className=""><input type="checkbox"/></th>
                    <th className="campo-testecase">Teste</th>
                    <th className="campo-id">id</th>
                    <th className="campo-endate">Data inicio</th>
                    <th className="campo-endate">Data fim</th>
                    <th className="campo-status">Status</th>
                  </tr>
                </thead>
      
              
                      
              <LabTags cicloDeTeste={escolhaData.key} escolhaData={ciclo} status={valor} />

              
            </table>
            </div>
            
          </div>
      </div>

)
 }

export default LabTabela;