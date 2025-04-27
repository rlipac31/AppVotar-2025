
// components/Login.js

import { useState } from 'react';
import style from './login.module.css';

const Login = () => {
 
  return (
    <div className={style.Login__container}>
      <form className={style.login__form}>
        <h2>Iniciar Sesión</h2>
        <input type="email" placeholder="Correo electrónico" />
        <input type="password" placeholder="Contraseña" />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );  
};

export default Login;