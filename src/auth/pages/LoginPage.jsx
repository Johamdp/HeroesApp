import React, { useContext, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useForm } from "../../hooks/useForm";
import { FaGoogle } from "react-icons/fa";
import comic from '../../image/comic.jpg';
import "./loginPage.css";


const formData = {
  email: "",
  password: "",
};

const formValidations = {
  email: [
    [(value) => value.includes("@"), "El correo debe tener un @"],
    [
      (value) =>
        value.match(
          /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/
        ),
      "El correo debe tener un formato valido",
    ],
  ],
  password: [
    [
      (value) => value.length > 4,
      "La contraseña debe tener mas de 4 caracteres",
    ],
  ],
};

export const LoginPage = () => {

  const navigate = useNavigate();

  const { 
    formSubmited,
    setFormSubmited,
    alert,
    setAlert,
    checkingAuthentication,
    startGoogleSignIn,
    logged,
    startLoginWithEmailPassword,
  } = useContext(AuthContext);

  const isChecking = useMemo(() => {
    if (logged === "checking") {
      return true;
    }
    return false;
  }, [logged]);

  const {
    email,
    password,
    onInputChange,
    onResetForm,
    isFormValid,
    emailValid,
    passwordValid,
  } = useForm(formData, formValidations);

  const onLogin = (e) => {
    e.preventDefault();
    setFormSubmited(true);
    if (!isFormValid) {
      onResetForm();
      checkingAuthentication("not-authenticated");
      return setAlert(true);
    }
    console.log(email);
    console.log(password);
    debugger;
    startLoginWithEmailPassword("checking", email, password);
  };

  const onGoogleSignIn = () => {
    startGoogleSignIn("checking");
  };

  return (
      <section className="login_container">     
        < div className="image-background">          
            <form onSubmit={onLogin} className="login_container_form">
            <h2>Inicia Sesion</h2>
            <hr />
            <input
                type="text"
                placeholder= {
                  (alert && formSubmited && emailValid) || "Ingrese su email..."
                }
                name="email"
                value={email}
                onChange={onInputChange}
                className={(!!emailValid && formSubmited && "error") || ""}
            />
            <input
              type="password"
              placeholder={
                (alert && formSubmited && passwordValid) ||
                "Ingrese su contraseña..."
              }
              name="password"
              value={password}
              onChange={onInputChange}
              className={(!!passwordValid && formSubmited && "error") || ""}
            />
            <button 
              type="submit" 
              className="login-button" 
              disabled={isChecking}              
            >
              Ingresar
            </button>
            {!isChecking && (
              <Link to="/register" className="login-button" disabled={isChecking}>
                Registrarse
              </Link>
            )}
            <button
              type="submit"
              className="login-button"
              onClick={onGoogleSignIn}
              disabled={isChecking}
            >
              <FaGoogle/>
            </button>
          </form>
        </div>   
     </section>  
  );
};

