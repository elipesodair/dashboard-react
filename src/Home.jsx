import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { InputGroup, Nav, Form } from "react-bootstrap";
import LabTestesDois from "./LabTestesDois";
import LabFiltro from "./LabFiltro";
import Menu from "./components/Menu";





// import LabCiclos from '../LabCiclos'
// import { api } from '../../api/api'

function Home(props) {
  const [escolha, setEscolha] = useState("Nenhum escolhido");
  const [indice, setIndice] = useState("");
  const [escolhaData, setEscolhaData] = useState(null);
  const [ciclos, setCiclos] = useState([]);
  const [fabricante, setFabricante] = useState([]);
  const [modelo, setModelo] = useState([]);
  const [cliente, setCliente] = useState([]);
  const [filtro, setFiltro] = useState(null);
  const [filtroEscolha, setFiltroEscolha] = useState(null);



  useEffect(() => {
    axios
      .get('/rest/atm/1.0/testrun/search?query=projectKey="LABPOS"', {
        auth: { username: "elipes", password: "1=N" },
      })
      
      .then((res) => {
        setCiclos(res.data.reverse());
        const clientes = res.data.reverse();
        const listFabricante = []
        const listModelo = []
        const listClientes = []
        for (let index = 0; index < clientes.length; index++) {
          const element = clientes[index];

          if (!listFabricante.includes(element.customFields["Fabricante"])) {
            listFabricante.push(element.customFields["Fabricante"]);
          }
          if (!listModelo.includes(element.customFields["Modelo"])) {
            listModelo.push(element.customFields["Modelo"]);
          }

          if (!listClientes.includes(element.customFields["Cliente"])) {
            listClientes.push(element.customFields["Cliente"]);
          }
        }
        setFabricante(listFabricante);
        setModelo(listModelo);
        setCliente(listClientes);
      })
      .catch((error) => {
        console.log(`Deu erro =>  ${error}`);
      });
  }, []);

  useEffect(() => {
    console.log("Effect " + escolha);
    console.log("Effect " + indice);
    console.log("Effect " + escolhaData);
    console.log("Effect " + filtro);

  });

  function mostraTestes(escolhaBusca) {
    console.log(escolhaBusca);
    buscarTestes(escolhaBusca);
  }

  function consultaTestes(index) {
    var escolhaBusca = 'LABPOS-C' + index
    console.log(escolhaBusca);
    buscarTestes(escolhaBusca);
  }

  function buscarTestes(escolhaBusca) {
    for (var i = 0; i < ciclos.length; i++) {
      if (escolhaBusca === ciclos[i].key) {
        setEscolha(escolhaBusca)
        setIndice(i)
        setEscolhaData(ciclos[i])
        console.log('Mostrar dados da ' + escolhaBusca);
        return
      } else if (i === ciclos.length - 1) {
        alert('Valor não encontrado!')
        return
      } else {
        console.log('Diferente');
        continue
      }
    }
  }

  function buscarCiclos(escolhaBusca, valor) {
    setEscolhaData(null)
    setFiltroEscolha(escolhaBusca)
    const lista = []
    for (var i = 0; i < ciclos.length; i++) {
      if (escolhaBusca === ciclos[i].customFields[valor]) {

        console.log('Mostrar dados da ' + ciclos[i].key);

        lista.push(ciclos[i])

      } else if (i === ciclos.length - 1) {
        setFiltro(lista);
        return

      } else {
        console.log('Diferente');
        continue
      }
    }
    setFiltro(lista);
  }





  return (
    <div>
      <Menu/>
      <Nav>
            <div className="sb-nav-fixed " >
                <div id="layoutSidenav">
                    <div id="layoutSidenav_nav">
                        <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                            <div className="sb-sidenav-menu">
                                <div className="nav">
                                    <div className="sb-sidenav-menu-heading"></div>
                                    <div className="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-parent="#sidenavAccordion">
                                        <nav className="sb-sidenav-menu-nested nav">
                                            <Nav.Link className="nav-link" href="layout-static.html">Static Navigation</Nav.Link>
                                            <Nav.Link className="nav-link" href="layout-sidenav-light.html">Light Sidenav</Nav.Link>
                                        </nav>
                                    </div>
                                   
                                    
                                    <Form.Group className="campo-menu-lat">
                                 
                                    <select
                                        class="form-select form-control form-select-lg mb-3 table-bordered col-md-10"
                                        aria-label=".form-select-lg example"
                                        onChange={(e) => {
                                            mostraTestes(e.target.value);
                                        }}
                                    >
                                        <option>Escolha a opção</option>
                                        {ciclos.map((c, index,) => (
                                              <option className="table-bordered">{c.key}</option>
                                        ))}
                                    </select>
                                    
                                        <select
                                            class="form-select form-control form-select-lg mb-3 table-bordered col-md-10"
                                            aria-label=".form-select-lg example"
                                            onChange={(e) => {
                                                buscarCiclos(e.target.value, "Cliente");
                                            }}
                                        >
                                            <option>Cliente</option>
                                            {cliente.map((c, index,) => (
                                                <option className="table-bordered">{c}</option>
                                            ))}
                                        </select>

                                        <select
                                            class="form-select form-control form-select-lg mb-3  table-bordered col-md-10 "
                                            aria-label=".form-select-lg example"
                                            onChange={(e) => {
                                                buscarCiclos(e.target.value, "Fabricante");
                                            }}
                                        >
                                            <option>Fabricante</option>
                                            {fabricante.map((c, index,) => (
                                                <option className="table-bordered">{c}</option>
                                            ))}
                                        </select>

                                        <select
                                            class="form-select form-control form-select-lg mb-3 table-bordered col-md-10  "
                                            aria-label=".form-select-lg example"
                                            onChange={(e) => {
                                                buscarCiclos(e.target.value, "Modelo");
                                            }}
                                        >
                                            <option>Modelo</option>
                                            {modelo.map((c, index,) => (
                                                <option className="table-bordered">{c}</option>
                                            ))}
                                        </select>
                                       
                                    </Form.Group>
                                   
                                    
                                </div>
                            </div>


                        </nav>
                    </div>

                </div>


                <div className="content-pagina">
                    <slot name="slot-pagina"></slot>
                </div>
            </div>
        </Nav>
      <nav className="container-fluid float-md-right col-md-10">
        <div className="container-fluid">
          <h1 className="mt-2">Labpos</h1>
          <ol className="breadcrumb mb-2">
            <li className="breadcrumb-item">
              <Link to="/home">Dashboard</Link>
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
                <button className="btn btn-primary" type="submit">
                  Consultar
                  <i className="fas fa-search"></i>
                </button>
              </div>
            </div>
          </form>

          {/* <LabCiclos /> */}
        
          {
            filtro !== null
              ? <LabFiltro ciclos={ciclos} filtroescolha={filtroEscolha} filtro={filtro} escolha={setEscolha} indice={setIndice} data={setEscolhaData} />

              : <></>
          }

          {escolhaData !== null ? (
            <LabTestesDois escolhaData={escolhaData} escolha={escolha} />
          ) : (
            <p>Escolha data é null</p>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Home;
