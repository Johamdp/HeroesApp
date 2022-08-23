import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useForm } from "../../hooks/useForm";

import comic from '../../image/comic.jpg';

import "./loginPage.css";

export const LoginPage = () => {

  const navigate = useNavigate();

  const { login } = useContext(AuthContext)

  const { formState, onInputChange } = useForm({
    username: "",
  });
  const { username } = formState;

  const onLogin = () => {

    if (username.trim().length <= 1) return;
    login(username);   
    navigate("/", {
      replace: true,
    });
  };

  return (
      <section className="login_container">     
        < div className="image-background">          
            <form onSubmit={() => onLogin()} className="login_container_form">
            <h2>Inicia Sesion</h2>
            <hr />
            <input
                type="text"
                placeholder="Ingrese usuario..."
                name="username"
                value={username}
                onChange={onInputChange}
            ></input>
            <button 
              className="btn btn-primary" 
              onClick={onLogin}
            >
              Ingresar
            </button>
          </form>
        </div>   
     </section>  
  );
};

