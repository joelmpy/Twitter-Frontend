import React from "react";
import "../styles/login.css"
import logo from "../assets/logo.jpg"
import { useForm } from "react-hook-form";

function Login() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:3003/users/login', {
            method: 'POST',
            credentials: 'include', 
            headers: new Headers({ 'content-type': 'application/json' }),
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(json => {
                console.log(json)
                alert('You are Logged')
            })
    };

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

                    <form onSubmit={handleSubmit(onSubmit)}>
                        
                        <input type="text"  placeholder="username" {...register("username", { required: true })}></input>
                        {errors.username && <span>This field is required</span>}
                        
                        <input type="password" placeholder="password" {...register("password", { required: true, minLength: 8})} ></input>
                        {errors.password && <span>This field is required</span>}
                        {errors.password?.type === 'minLength' && <span>This field needs to be more than 8 characters </span>}
                        
                        <input type="submit" ></input>

                    </form>

                </div>
                <div className="register">
                    <button type="button" class="btn btn-outline-info btn-rounded p-2 mb-2 mr-1" data-mdb-ripple-color="dark"><i class="fa-brands fa-twitter"></i> S'inscrire sur Twitter</button>
                    <button type="button" class="btn btn-outline-dark btn-rounded p-2 mb-2" data-mdb-ripple-color="dark"><i class="fa-brands fa-apple"></i> S'inscrire avec Apple</button>

                </div>
            </div>

        </div>
    )
}

export default Login