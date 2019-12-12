import React, { Component } from "react";
import { createRoute } from "@lugia/lugiax-router";
import Header from "./header";
import Todo from "./todo";
import Tomato from "./tomato";
import NotAccess from "./access/NotAccess";
import route from '../config/router.config';
import logo from "./assets/logo.png";
import "./App.css";

export default () => {
  console.info("init main");

  return (
    <div className="app">
      <img src={logo} style={styles} />
      <Header />
      {createRoute(route)}
    </div>
  );
};

const styles = {
  padding: "30px"
};
