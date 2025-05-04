import { useState } from "react";
import { LuConstruction } from "react-icons/lu";
import style from './popup.module.css'
export default function AlertPopup() {
  const [show, setShow] = useState(false);

  return (
    <div className={style.container}>
      <button
        onClick={() => setShow(true)}
        className={style.container__boton}
      >
        Login
      </button>

      {show && (
        <div className={style.container__poput}>
          <div className={style.poput__contenido}>

              <LuConstruction
                className={style.container__svg}
                />
                <p className="">
                
                  Componente en contruccion
                </p>
                
            <button
              onClick={() => setShow(false)}
              className={style.container__boton}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}