import React from 'react';
import { useNavigate } from 'react-router-dom';

const SignUpForm = () => {

    const nav = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:8080/api/signup',{
            method:'POST',
            body:JSON.stringify({
                name: e.target.name.value,
                email: e.target.email.value,
                password: e.target.password.value,
                phone: e.target.phone.value,
                adress: e.target.adress.value,
                age: e.target.age.value
            }),
            headers:{
                "Content-Type": "application/json",
            },
            redirect:'follow'
        }).then(res => res.json()).then(data => {
            if(data.msg == 'signup successful'){
                nav('/')
            }
        }).catch()
    }

    return (
        <div className='containerFormSignup'>
            <h2 className='crearCuentaTitle'>Crear cuenta </h2>
            <form className='signUpForm' onSubmit={onSubmit}>
                <label htmlFor="name">Nombre</label>
                <input type="text" name='name' id='name' required/>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" required/>
                <label htmlFor="password">Contraseña</label>
                <input type="text" name='password' id='password' required/>
                <label htmlFor="phone">Número de teléfono +</label>
                <input type="text" name='phone' id='phone' required/>
                <label htmlFor="adress">Dirección</label>
                <input type="text" name="adress" id="adress" required/>
                <label htmlFor="age">Edad</label>
                <input type="number" name="age" id="age" required/>
                <label htmlFor="avatar">Sube un avatar</label>
                <input type="file" name="avatar" id="avatar" accept='image/png, image/gif, image/jpeg' />
                <div></div>
                <input className='loginBtn' type="submit" value="Signup" />
            </form>
        </div>
    )
}

export default SignUpForm;