import React from "react";
import { Button } from "react-bootstrap";

/*
state ler , oop deki private lere karsilik gelir,her componentin kendine has data sidir.
rendering:ilk yuklenmede gerceklesir,dom'un olusturlumasi
re-rendering:
 1-State guncellendiginde
 2-Prop guncellendiginde
 3-Parent component re-render oldugunda
*/
const Stateless = () => {
  let mode = "light";
  let classNames = "bg-light text-dark";

  const setmode = (m) => {
    mode = m;
    
  if (mode === "dark") {
    classNames = "bg-dark text-light";
  }else{
    classNames = "bg-light text-dark";
  }

  document.getElementById("switcher").setAttribute("class",classNames);
  //Bu yontem performansli degildir
  //Bu kismi yazmayinca da render olayindan dolayi degisikliklerden component haberdar olmuyor

  // return olayı re-render olması için state -prop-ve parent component değişiklik olması gerektr unutma
  };
  return (
    <div id="switcher" className={classNames}>
      <h1 className="text-center">Dark/Light Mode Switcher</h1>
      <div className="d-flex justify-content-evenly mt-5 pb-5">

        {/* ()=> kullanmamaısın amacı hemen otomatik calışmasın basınca calışssın mantığı için  */}
        <Button onClick={() => setmode("dark")}>Dark Mode</Button>
        <Button onClick={() => setmode("light")}>Light Mode</Button>
      </div>
    </div>
  );
};

export default Stateless;
