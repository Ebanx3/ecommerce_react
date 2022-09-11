import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUpForm = () => {

    const nav = useNavigate();

    const [emailUsed, setemailUsed] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:8080/api/users/signup',{
            method:'POST',
            body:JSON.stringify({
                name: e.target.name.value,
                email: e.target.email.value,
                password: e.target.password.value,
                phone: e.target.phone.value,
                adress: e.target.adress.value,
            }),
            headers:{
                "Content-Type": "application/json",
            },
            redirect:'follow'
        }).then(res => res.json()).then(data => {
            console.log(data)
            if(data.data == 'signup successful'){
                nav('/')
            }
            else if(data.data == 'Email already used'){
                setemailUsed(true);
                e.target.email.value = '';
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
                <div></div>
                <input className='loginBtn' type="submit" value="Signup" />
            </form>
            {!emailUsed ? <></> : <span className='emailUsedError'>Email already used</span>}
        </div>
    )
}

export default SignUpForm;