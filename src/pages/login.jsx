import React from "react";
import "../styles/login.css"
import logo from "../assets/logo.jpg"
import { useState } from 'react';
import { useForm } from "react-hook-form";

function Login() {

    const { register, handleSubmit, formState: { errors }, getValues } = useForm();
    return (
        <div className="card-container">
            <div class="card">
                <div class="card-image">
                    <img src={logo} />
                </div>
                <div className="card-title">
                    <h2>Connectez-vous à Twitter</h2>
                </div>
                <div className="identify">
                    <form onSubmit={handleSubmit((data) => { console.log(data) },)}>
                        <input type="text" placeholder="FirstName"{...register("FirstName", { required: true, maxLength: 20 })}></input>
                        <input type="password" placeholder="password" {...register("password", { required: true, minLength: 8 })} ></input>
                        <input type="submit" ></input>
                    </form>
                </div>
                <div className="register">
                    <button type="button" class="btn btn-outline-info btn-rounded p-2 mb-2 mr-1" data-mdb-ripple-color="dark"><i class="fa-brands fa-twitter"></i>S'inscrire sur Twitter</button>
                    <button type="button" class="btn btn-outline-dark btn-rounded p-2 mb-2" data-mdb-ripple-color="dark"><i class="fa-brands fa-apple"></i>S'inscrire avec Apple</button>

                </div>
            </div>

        </div>
    )
}

export default Login