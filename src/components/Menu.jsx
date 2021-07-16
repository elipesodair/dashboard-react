import React from 'react';
import { Nav, Button } from 'react-bootstrap';
import { Link, } from 'react-router-dom';





function Menu() {
  return (

    <Nav>
      <div className="sb-nav-fixed " >
        <Nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark ">
          <Link className="navbar-brand " to="/">Dashboard</Link>
          <form className="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">

            <Button variant="primary" href="/">Sair</Button>{' '}
          </form>

        </Nav>

        <div className="content-pagina">
          <slot name="slot-pagina"></slot>
        </div>
      </div>
    </Nav>

  );
};

export default Menu;
