import {React, useState} from "react"

const Hello = ()=>{

  const [count, setCount] = useState()

  function counter(){
    setCount (count + 1)
  }

  return<div>
    <div>{`${count}Befor increment`}</div>
    <button onClick={counter()}></button>
    <div>{`${count}After increment`}</div>

  </div>
}
export default Hello