import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const UserRL = () => {
  
    const nav = useNavigate()

    const onSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:8080/api/login',{
            method:'POST',
            body:JSON.stringify({
                email: e.target.email.value,
                password: e.target.password.value
            }),
            headers:{
                "Content-Type": "application/json",
            },
            redirect:'follow'
        }).then(res => res.json()).then(info => console.log(info)).catch(err => console.log(err))
    }

    return (
    <div className='userRL'>
        <form className='userRL__form' onSubmit={onSubmit}>
            <input className='loginInput' type="email" name="email" id="email" placeholder='email'/>
            <input className='loginInput' type="text" name='password' id='password' placeholder='contraseña'/>
            <input className='loginBtn' type="submit" value="Login" />
            <p>No tienes una cuenta? <Link to="/crearCuenta" >crear cuenta</Link></p>
            <p><Link  to="/recuperarPass">Recuperar contraseña</Link></p>
        </form>
    </div>
  )
}

export default UserRL