import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { contexto } from '../UserContext';

const UserRL = ({func}) => {
  
    const UserContext = useContext(contexto)
    const [ errorLogin, setErrorLogin] = useState(false);
    const nav = useNavigate()

    const onSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:8080/api/users/login',{
            method:'POST',
            body:JSON.stringify({
                email: e.target.email.value,
                password: e.target.password.value
            }),
            headers:{
                "Content-Type": "application/json",
            },
            redirect:'follow'
        }).then(res => res.json()).then(info => {
            console.log(info)
            if(info.data == 'ok'){
                func();
                UserContext.changeLogin(true);
                nav('/');
            }
            else if(info.data == 'Invalid email or password'){
                setErrorLogin(true);
                setTimeout(()=>{
                    setErrorLogin(false)
                }, 2000 )
            }
        }).catch(err => console.log(err))
    }

    const onClick = () => {
        func();
    }

    const logOut= () => {
        UserContext.changeLogin(false);
        fetch('http://localhost:8080/api/users/logout',{
            method:'POST',
            headers:{
                "Content-Type": "application/json",
            },
            redirect:'follow'
        }).then().then().catch(err => console.log(err))
        nav('/');
    }

    if(UserContext.loggedIn){
        return(
            <div className='logRL'>
                <button className='loginBtn' onClick={logOut}>Log out</button>
            </div>
        )
    }

    return (
    <div className='userRL'>
        <form className='userRL__form' onSubmit={onSubmit}>
            <input className='loginInput' type="email" name="email" id="email" placeholder='email' autoComplete={false}/>
            <input className='loginInput' type="text" name='password' id='password' placeholder='contraseña'/>
            <input className='loginBtn' type="submit" value="Login" />
            <p>No tienes una cuenta? <Link to="/crearCuenta" onClick={onClick}>crear cuenta</Link></p>
            <p><Link  to="/recuperarPass" onClick={onClick}>Recuperar contraseña</Link></p>
            {!errorLogin ? <></> : <span className='errorLogin'>Invalid email or password</span>}
        </form>
    </div>
  )
}

export default UserRL