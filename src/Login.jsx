import React, { useState, useEffect } from "react";
import axios from "axios";
import { Nav, Button } from 'react-bootstrap';
import { Link, } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState("");
    const [verUsername, setVerUsername] = useState("");
    const [password, setPassword] = useState("");
    const [verPassword, setVerPassword] = useState("");
   
   function efefuaLogin(username, password) {
       console.log(username, password);
     axios.get('',{
        auth: { username: username, password: password }
      })
       
    
    .then(res => {
        if (res.status==200) {
            salvarUsuario(username, password)
            console.log(res.status);
            console.log(res.data);
            window.location.href='/home'
  
        }else{
            console.log(res.status);
            console.log(res.data);           
        }

    })
    .catch(error => {
        console.log(`Deu erro =>  ${error}`);
        alert ('Username ou Password invalido!')

    })

   }

   function salvarUsuario(username, password){
       setUsername(username);
       setPassword(password);
      
   }



    



        return (
<>
         <Nav>
      <div className="sb-nav-fixed " >
        <Nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark ">
          <Link className="navbar-brand " to="/">Dashboard</Link>
          <form className="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">

            
           
          </form>

        </Nav>

        <div className="content-pagina">
          <slot name="slot-pagina"></slot>
        </div>
      </div>
    </Nav>
   
            <div className="container campo-top">
                <div class="row justify-content-center align-items-center">
            <form className="col-4" onSubmit={(e)=>{
                e.preventDefault();
                efefuaLogin(verUsername, verPassword)

            }}>
                <h3 className="text-center">Sistema Labpos</h3>

                <div className="form-group">
                    <label>Nome</label>
                    <input type="text" className="form-control" placeholder="username"
                    required
                    value={verUsername} 
                    onChange={(e)=>{
                        setVerUsername(e.target.value)
                    }}/>
                </div>

                <div className="form-group ">
                    <label>Senha</label>
                    <input type="password" className="form-control" placeholder="password"
                    required
                     value={verPassword} 
                     onChange={(e)=>{
                         setVerPassword(e.target.value)
                     }}/>
                </div>

                <Button className="btn btn-primary btn-block" type="submit" >Entrar</Button>{''}
                <Link to="/home"></Link>
            </form>
          
            </div>
            </div>
            </>
        );
    }

export default Login;