import React, { useState } from 'react'
import { Button, ButtonGroup } from 'react-bootstrap'
import {AiOutlineMinusCircle, AiOutlinePlusCircle}  from "react-icons/ai"
import {GrPowerReset}  from "react-icons/gr"
// *** useState hem getter hem setter ayni anda cagilinca garanti veremiyor conter=>conter+1 i tavsiye ediyor
const Counter = () => {
    const [counter, setCounter] = useState(0)

    const hadleClick = (val)=>{ if(val<0) val=0;
         setCounter(val)};
  return (
    <ButtonGroup style={{textAlign: "center", margin:"20px"}}>
    <Button variant="info" onClick={()=>setCounter(counter=>counter+1)}><AiOutlinePlusCircle/></Button>
    <Button variant="light" disabled>{counter}</Button>
    <Button  disabled={!counter} variant="warning" onClick={()=>hadleClick(counter-1)} ><AiOutlineMinusCircle/></Button>
    <Button disabled={!counter} variant="danger" onClick={()=>setCounter(0)}><GrPowerReset/></Button>
  </ButtonGroup>
  )
}

export default Counter