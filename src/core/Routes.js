import React , { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Application from "../modules/Application/Application";
import {connect} from "react-redux";
import Template from "../modules/Template/Template";

/**
 * Componente para escrita das rotas
 */
class Routes extends Component
{

    render() {
        return(
            <Template>
                { this.getRoutes() }
            </Template>
        );
    }

    getRoutes = () =>{
        return (
            <Router>
                <Route path="/" exact component={Application} />
            </Router>
        )
    }
}

export default connect( null , null )( Routes );