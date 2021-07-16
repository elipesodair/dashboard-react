import React from 'react';
import App from './App';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function Main(){
    return(
       <> 
        <App/>
        <BrowserRouter/>
        <Switch/> 
        <Route/>
        </>
    );
};

export default Main;