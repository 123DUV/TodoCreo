import React, { useEffect, useState } from 'react';
import FireBaseAuth from '@mui/icons-material/GitHub';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import PasswordIcon from '@mui/icons-material/Password';
import GroupIcon from '@mui/icons-material/Group';
import Header from './header/Header';
import Cookies from 'universal-cookie'
import Swal from 'sweetalert2';
import GoogleOAuth from './googleOAuth/GoogleOAuth';


const Login = () => {
    const cookies = new Cookies()
    const [errorEmail, setErrorEmail] = useState(false)
    const [errorPassword, setErrorPassword] = useState(false)
    const [showPassword, setShowPassword] = useState(false)

    const [values, setValues] = useState({
        rol: "",
        email: "",
        password: "",
    })
    const handleChange = (e) => {
        const { name, value } = e.target
        const newValues = {
            ...values,
            [name]: value,
        }
        setValues(newValues)

    }
    const handleClickPassword = (e) => {
        setErrorPassword(false)
    }
    const handleClickEmail = (e) => {
        setErrorEmail(false)
    }
    const handleClickShowPassword = (e) => {
        setShowPassword(!showPassword)
    }


    const iniciarSesion = (e) => {
        e.preventDefault()
        let select = document.getElementById('exampleFormControlSelect1');
        values.rol = select.value

        if (values.password.length === 0 && values.email.length === 0) {
            setErrorEmail(true)
            setErrorPassword(true)
            return
        }
        if (values.password.length === 0) {

            setErrorPassword(true)
            return
        }
        if (values.email.length === 0) {
            setErrorEmail(true)

            return
        }

        fetch("http://localhost:3001/login", {
            method: 'POST',
            headers: { "Content-Type": "Application/json", "Acept": "Aplication/json" },
            body: JSON.stringify(values)
        })
            .then(response => response.json())
            .then(res => {
                console.log("res-->>", res)
                if (res.title === "error") {
                    Swal.fire({
                        title: "Las credenciales ingresadas no son correctas",
                        icon: "error"
                    })
                    window.location.hash = '/login'
                    return
                }
                else {
                    cookies.set('email', res.email, {
                        secure: true,
                        sameSite: 'None',
                        path: '/'
                    })
                    cookies.set('nombres', res.nombres, {
                        secure: true,
                        sameSite: 'None',
                        path: '/'
                    })
                    cookies.set('apellidos', res.apellidos, {
                        secure: true,
                        sameSite: 'None',
                        path: '/'
                    })

                    if (values.rol === "usuario") {
                        window.location.hash = '/SesionIniciada'
                        console.log("dentro")
                    }
                    else {
                        console.log(values.rol)
                        window.location.hash = '/usuarios-registrados'
                    }

                }
            })
            .catch(() => Swal.fire({
                title: 'No se puede iniciar sesion por un problema en el servidor',
                icon: 'error'
                
            }),
                window.location.hash = '/login'
            )
    }


    const cerrarSesion = () => {
        cookies.remove('email');
        cookies.remove('nombres');
        cookies.remove('apellidos');
        
        window.location.hash = '/login';
    };


    useEffect(() => {
        if (cookies.get('email')) {
            window.location.hash = '/login'
        }
    }, [cookies]);

    return (
        <div>
            <Header/>
            <form onSubmit={iniciarSesion}>
                <section className='vh-100 '>
                    <div className='container py-5 h-100 ' >
                    <div className="text-center">
{/*                         
                    <button className="btn btn-danger" onClick={cerrarSesion}>Cerrar sesión</button> */}
                </div>
                        <div className='row d-flex justify-content-center align-items-center h-100 '>
                            <div className='col-12 col-md-8 col-lg-6 col-xl-5'>
                                <div className='card shadow-2-strong rounded'>
                                    <div className='card-body p-5 text-center '>
                                        <h3 className='mb-5'>Sign in</h3>

                                        <div class='form-group mb-4'>
                                            <div className='text-start'><label for="exampleFormControlSelect1">rol</label>   </div>

                                            <div class='input-group mb-3'>
                                                <select class="form-control" id="exampleFormControlSelect1" name="rol">
                                                    <option>Administrador</option>
                                                    <option>usuario</option>
                                                </select>
                                                <div class="input-group-append">
                                                    <span class="input-group-text" id="basic-addon2"><GroupIcon /></span>

                                                </div>
                                            </div>
                                        </div>
                                        <div className='form-outline mb-4'>
                                            <div className='tex-start'>
                                                <label className='form-label' for="typeEmailX">Email</label>
                                            </div>
                                            <div class="input-group mb-3">


                                                <input type="text" class="form-control" aria-label="Recipient's username" aria-describedby='basic-addon2' name='email' onChange={handleChange} onClick={handleClickEmail} />
                                                <div class="input-group-append">
                                                    <span class="input-group-text" id="basic-addon2"><AlternateEmailIcon /></span>
                                                </div>

                                            </div>
                                            <span className='text-start'>{errorEmail ? <p>debe ingrear un email</p> : ""}</span>
                                        </div>
                                        <div className='form-outline mb-4'>
                                            <div className='text-start'>
                                                <label className="form-label" for="typeEmailX-2">password</label>
                                            </div>
                                            <div class="input-group mb-3">
                                                <input type={showPassword ? 'password' : 'text'} class="form-control" aria-label="Recipient's username" aria-describedby='basic-addon2' name='password' onChange={handleChange} onClick={handleClickPassword} />
                                                <span class="input-group-text" id='basic-addon2' onClick={handleClickShowPassword} >
                                                    <PasswordIcon />
                                                </span>



                                            </div>
                                            <span className='text-start'>{errorPassword ? <p>debe ingresar una contraseña</p> : ""} </span>
                                        </div>
                
                                        <div class="d-grid gap-2 col-15 mx-auto">
                                            <button className="btn btn-primary btn-lg btn-block" type="submit">Login</button>
                                        </div>
                                        <hr className='my-20' />
                                        
                                        <div className='row'>
                                            <div className='col-6'>
                                            <GoogleOAuth/>

                                            </div>
                                            <div className='col-6'>

                                            <FireBaseAuth />

                                               

                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </form>
        </div >
    );
}
export default Login;