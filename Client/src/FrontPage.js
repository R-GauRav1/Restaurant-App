import "./App.css";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
} from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { Button, Col, Container, Row } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Menus from "./Menus";
import Home from "./components/Home";
import Header from "./components/Header";
import MainsPage from "./components/MainsPage";
import ApetizerPage from "./components/ApetizerPage";
import DessertPage from "./components/DessertPage";
import ClonePage from "./components/ClonePage";
import WeiredPage from "./components/WeiredPage";



function FrontPage() {
  
  return (
      <div>
        <Router>
          <Container>
          <Header />
            <Row>
              <Col lg={3}>
                <Menus></Menus>
              </Col>

              <Col lg={9}>
                <Route path="/home" exact>
                  <Home></Home>
                </Route>

                <Route path="/mains" exact>
                  <MainsPage></MainsPage>
                </Route>
                
                <Route path="/apetizer" exact>
                  <ApetizerPage></ApetizerPage>
                </Route>

                <Route path="/dessert" exact>
                  <DessertPage></DessertPage>
                </Route>

                <Route path="/clone" exact>
                  <ClonePage></ClonePage>
                </Route>

                <Route path="/weired" exact>
                  <WeiredPage></WeiredPage>
                </Route>

              </Col>
            </Row>

          </Container>
        </Router>
      </div>
  );
}

export default FrontPage;