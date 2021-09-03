import React, { useLayoutEffect, useState, useEffect } from "react";
import Home from "../component/home";
import "./index.css";

const count = 5000;

export default function () {
  const [className, setClassName] = useState("red");

  // 打开先看到red，要等console输出完，才能看到green
  // useEffect(() => {
  //   for (let i = 0; i < count; i++) {
  //     console.log(i);
  //   }
  //   setClassName("green");
  // }, []);

  // 打开要等console输出完，才能看到green
  useLayoutEffect(() => {
    for (let i = 0; i < count; i++) {
      console.log(i);
    }
    setClassName("green");
  }, []);

  return (
    <div className="App">
      <h1>n: {1}</h1>
      <button onClick={()=>{}}>Click</button>
    </div>
  );
}
