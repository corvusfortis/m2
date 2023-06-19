import React, {useEffect, useState} from "react";



const Effects = () => {

    console.log("render1"); //1 выполняется код в теле функции /
    const [x, setX] = useState(0);
  
    useEffect(() => {
      console.log("e1" + x); //3 выполняются рендеры в теле хука
      return () => console.log("e1r" + x); //6 выполняются рендеры, возвращаемые хуками, после того, как выполнились в теле
    }, [x]); // 9 повторный рендер при изменении зависимостей
  
    useEffect(() => {
      console.log("e2" + x); //4 выполняются рендеры в теле хука
      return () => console.log("e2r" + x); //7 выполняются рендеры, возвращаемые хуками, после того, как выполнились в теле
    }, []); //10 повторный рендер??
  
    useEffect(() => {
      console.log("e3" + x); //5 выполняются рендеры в теле хука
      return () => console.log("e3r" + x); //8 выполняются рендеры, возвращаемые хуками, после того, как выполнились в теле
    }); //11 повторный рендер??
  
    const y = x + 1;
  
    console.log("render2", y); //2 выполняется код в теле функции

  return (
    <button>log</button>
  )
}

export default Effects;
