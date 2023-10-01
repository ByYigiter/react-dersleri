import React from 'react'
import { Button } from 'react-bootstrap'
import {BsMoonStarsFill,BsSunFill}  from "react-icons/bs"
const State = () => {
    const [mode, setMode] = React.useState("light");
    let classNames = "bg-light text-dark";

    if (mode === "dark") {
        classNames = "bg-dark text-light";
      }
  return (
    <div className={classNames}>
      <h1 className="text-center">Dark/Light Mode Switcher</h1>
      <div className="d-flex justify-content-evenly mt-5">
        <Button onClick={() => setMode("dark")}><BsMoonStarsFill/></Button>
        <Button onClick={() => setMode("light")}><BsSunFill/></Button>
      </div>
    </div>
  )
}

export default State