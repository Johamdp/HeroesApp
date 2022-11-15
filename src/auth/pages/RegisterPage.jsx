import { Grid } from "@chakra-ui/react";
import React, { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { AuthContext } from "../context/AuthContext";
import "./registerPage.css";

const formData = {
  email: "",
  username: "",
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
  username: [
    [(value) => value.length >= 1, "El nombre es obligatorio"],
    [(value) => value.length >= 6, "El nombre debe tener al menos 6 letras"],
  ],
  password: [
    [
      (value) => value.length > 4,
      "La contraseña debe tener mas de 4 caracteres",
    ],
  ],
};

export const RegisterPage = () => {
  const {
    formSubmited,
    setFormSubmited,
    alert,
    setAlert,
    startCreatingUserWithEmail,
  } = useContext(AuthContext);

  const {
    formState,
    email,
    username,
    password,
    onInputChange,
    onResetForm,
    isFormValid,
    emailValid,
    usernameValid,
    passwordValid,
  } = useForm(formData, formValidations);

  const onSubmit = async (e) => {
    e.preventDefault();

    setFormSubmited(true);
    
    if (!isFormValid) {
      
      onResetForm();
      return setAlert(true);
    }
   
    startCreatingUserWithEmail("checking", formState);
  };

  return (
    <>
      <section className="register_container">
      <div div className="image-background">   
            <form onSubmit={onSubmit} className="register_container_form">
                <h2>Registrarse</h2>
                <input
                    type="text"
                    placeholder={
                    (alert && formSubmited && usernameValid) ||
                    "Ingrese su nombre de usuario..."
                    }
                    name="username"
                    value={username}
                    onChange={onInputChange}
                    className={(!!usernameValid && formSubmited && "error") || ""}
                />

                <input
                    type="text"
                    placeholder={
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
                <button className="register-button" type="submit">Crear Cuenta</button>                
            </form>
        </div>
      </section>
    </>
  );
};