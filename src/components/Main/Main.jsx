import Cards from "../Cards/Cards";
import data from "../../helper/data";
import "./Main.css";
import { useState } from "react";
const Main = () => {
  return (
    <div className="container">
      {data.map((item) => (
        <Cards {...item} />
      ))}
    </div>
  );
};

export default Main;
