import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {  InputGroup,  } from 'react-bootstrap'
import LabTestesDois from './LabTestesDois';


function LabDois(props) {

    const [escolha, setEscolha] = useState('Nenhum escolhido')
    const [indice, setIndice] = useState('')
    const [escolhaData, setEscolhaData] = useState(null)
    const [ciclos, setCiclos] = useState([])
    const [fabricantes, setFabricante] = useState([])

    useEffect(() => {
        axios.get('http', {
            auth: { username: '', password: '', }
        })
        .then(res => {
            setCiclos(res.data.reverse())
        })
        .catch(error => {
            console.log(`Deu erro =>  ${error}`);
        })
    }, [])

    useEffect(() => {
        console.log('Effect ' + escolha);
        console.log('Effect ' + indice);
        console.log('Effect ' + escolhaData);
    })



    function consultaTestes(index) {
        var escolhaBusca = 'LABPOS-C' + index
        for (var i = 0; i < ciclos.length; i++) {
            if (escolhaBusca === ciclos[i].key) {
              
                setEscolha(escolhaBusca)
                setIndice(i)
                setEscolhaData(ciclos[i])
                console.log('Mostrar dados da ' + escolhaBusca);
                return
            } else if (i === ciclos.length-1) {
                alert('Valor não encontrado!')
                return
            } else {
                console.log('Diferente');
                continue
            }
        }


    }

    return (
        <div className="">
            <div className="container-fluid float-md-right col-md-10">
            <div className="container-fluid">
            <h1 className="mt-4">Labpos</h1>
            <ol className="breadcrumb mb-2">
            <li className="breadcrumb-item">
              
            </li>
            <li className="breadcrumb-item active">Lab</li>
          </ol>
          

            <form
            className="col-md-12 d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-4"
            inline
            onSubmit={(e) => {
              e.preventDefault();
              consultaTestes(e.target[0].value);
            }}
          >
            <div className="input-group">
              <InputGroup.Prepend>
                <InputGroup.Text>LABPOS-C</InputGroup.Text>
              </InputGroup.Prepend>
              <input className="form-control" />

              <div className="input-group-append">
                <button className="btn btn-secondary" type="submit">
                  Consultar
                  <i className="fas fa-search"></i>
                </button>
              </div>
            </div>
          </form>
          </div>    

            {
                escolhaData !== null
                    ? <LabTestesDois escolhaData={escolhaData} />
                    : <p>Escolha data é null</p>
            }

           



         </div>
        </div>
    );
};

export default LabDois;