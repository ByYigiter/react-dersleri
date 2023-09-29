import React from 'react'
import { Alert } from 'react-bootstrap'

const Events = () => {


    //Evenet handler
    const sayHello =() =>{
        alert("Onclick işlemi yapıldı");
    }

    const sayHello2 =(name) =>{
        alert(`SayHello2  işlemi yapıldı  ${name}`);
        return `Hello ${name}`
    }

    // console.log(sayHello2("Recep "))
  return (
    <div>
            {/* parametresiz cağırma işllemi için asağıdaki fonksıyon kullanır */}
            <button onClick={sayHello}> Click </button> 
            {/* Eger parametere gonderecek isek arrow function kullanılması zorunludur  yoksa click işlemini beklemeden çalışır  */}
            <button onClick={()=> sayHello2("Recep")}> Click 2 </button> 

    </div>
  )
}

export default Events