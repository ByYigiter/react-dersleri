import React from 'react'
import Welcome from './Welcome'


const Greetings = () => {
  return (
    <div>
        <Welcome firstName="Recep" lastName="Yigiter"></Welcome>
        <Welcome firstName="Veli" lastName="Can"></Welcome>
        <Welcome firstName="ayse" lastName="Yilmaz"></Welcome>

    </div>
  )
}

export default Greetings