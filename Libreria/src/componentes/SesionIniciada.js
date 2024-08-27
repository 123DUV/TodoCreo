// import LoginIcon from '@mui/icons-material/Login';
// import HomeIcon from '@mui/icons-material/Home';
// import ArticleIcon from '@mui/icons-material/Article';
// import ClearAllIcon from '@mui/icons-material/ClearAll';
// import FilePresentIcon from '@mui/icons-material/FilePresent';
// import ContactsIcon from '@mui/icons-material/Contacts';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
// import { Link } from 'react-router-dom'
// import ExitToAppIcon from '@mui/icons-material/ExitToApp';
// import React, { useState } from 'react';
// import Cookies from 'universal-cookie'
// import Footer from './footer/Footer';
// import CardList from './body/CardList';
// import Header from './header/Header';
// import Carrusel from './carrusel/Carrusel';
// import Swal from 'sweetalert2';


// export default function SesionIniciada() {
//     const cookies = new Cookies();
//     const cerrarSesion = (e) => {
//         e.preventDefault();
        
//         Swal.fire({
//             title: '¿Seguro que quieres cerrar sesion?',
//             icon: 'warning',
//             showCancelButton: true,
//             confirmButtonText: 'Sí, salir',
//             cancelButtonText: 'Cancelar',
//         }).then((result) => {
//             if (result.isConfirmed) {
//                 cookies.remove('email');
//         cookies.remove('nombres');
//         cookies.remove('apellidos');
        
//         window.location.hash = '/';
//             } else {
                
//                 return false;
//             }
//         });
        
//     };

//   return (
//     <div>
//          <div className='contenedor'>
//             <nav className="navbar navbar-expand-lg bg-body-tertiary">
//                 <div className="container-fluid">
//                     <img src='logo.webp' className='logo' alt='logo'/>
//                     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                             <li className="nav-item">
//                                 <HomeIcon/>
//                                 <a className="nav-link active" aria-current="page" href="#">Inicio</a>
//                             </li>
//                             <li className="nav-item">
//                                 <ArticleIcon/>
//                                 <a className="nav-link" href="#">Tutoriales</a>
//                             </li>

//                             <li className="nav-item">
//                                 <ClearAllIcon/>
//                                 <a className="nav-link disabled" aria-disabled="true">Referencias</a>
//                             </li>

//                             <li className="nav-item">
//                                 <FilePresentIcon/>
//                                 <a className="nav-link disabled" aria-disabled="true">Recursos</a>
//                             </li>

//                             <li className="nav-item">
//                                 <ContactsIcon/>
//                                 <a className="nav-link disabled" aria-disabled="true">Contacto</a>
//                             </li>
//                             <li className="nav-item">
//                                 <AccountCircleIcon/>
//                                 <h2 className="nav-link">{cookies.get('nombres')}</h2>
                                
//                             </li>
//                             <li className="nav-item">
//                             <AlternateEmailIcon/>
//                             <h2 className="nav-link">{cookies.get('email')}</h2>
//                             </li>
                            
//                             <li className="nav-item">
//                                 <ExitToAppIcon onClick={cerrarSesion} /> {/* Usamos ExitToAppIcon para representar el botón de cerrar sesión */}
//                                 <a className="nav-link" >Cerrar Sesión</a>
//                             </li>
                          
                            
//                         </ul>
                         
                        
//                         <form className="d-flex" role="search">
                            
//                             <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
//                             <button className="btn btn-outline-success" type="submit">Search</button>
//                         </form>
//                     </div>
//                 </div>
//             </nav>
//         </div>
//       <Carrusel/>
//       <CardList/>
//       <Footer/>
      
//     </div>
//   )
// }
import React from 'react';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';
import Footer from './footer/Footer';
import CardList from './body/CardList';
import Header from './header/Header';
import Carrusel from './carrusel/Carrusel';
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import ClearAllIcon from '@mui/icons-material/ClearAll';
import FilePresentIcon from '@mui/icons-material/FilePresent';
import ContactsIcon from '@mui/icons-material/Contacts';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import SesionExpired from './sesionExpired/SesionExpired';

export default function SesionIniciada() {
    const cookies = new Cookies();
    const cerrarSesion = (e) => {
        e.preventDefault();
        console.log("Cerrando sesión...");
        Swal.fire({
            title: '¿Seguro que quieres cerrar sesión?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sí, salir',
            cancelButtonText: 'Cancelar',
        }).then((result) => {
            if (result.isConfirmed) {
                cookies.remove('email');
                cookies.remove('nombres');
                cookies.remove('apellidos');
                console.log("Cookies eliminados:", cookies.getAll());
                window.location.hash = '/';
            } else {
                return false;
            }
        });
    };

    return (
        <div>
            <div className='contenedor'>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <img src='logo.webp' className='logo' alt='logo' />
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <HomeIcon />
                                    <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                                </li>
                                <li className="nav-item">
                                    <ArticleIcon />
                                    <a className="nav-link" href="#">Tutoriales</a>
                                </li>

                                <li className="nav-item">
                                    <ClearAllIcon />
                                    <a className="nav-link disabled" aria-disabled="true">Referencias</a>
                                </li>

                                <li className="nav-item">
                                    <FilePresentIcon />
                                    <a className="nav-link disabled" aria-disabled="true">Recursos</a>
                                </li>

                                <li className="nav-item">
                                    <ContactsIcon />
                                    <a className="nav-link disabled" aria-disabled="true">Contacto</a>
                                </li>
                                <li className="nav-item">
                                    <AccountCircleIcon />
                                    <h2 className="nav-link">{cookies.get('nombres')}</h2>
                                </li>
                                <li className="nav-item">
                                    <AlternateEmailIcon />
                                    <h2 className="nav-link">{cookies.get('email')}</h2>
                                </li>
                                <li className="nav-item">
                                    <ExitToAppIcon onClick={cerrarSesion} /> {/* Usamos ExitToAppIcon para representar el botón de cerrar sesión */}
                                    <a className="nav-link" onClick={cerrarSesion}>Cerrar Sesión</a>
                                </li>
                            </ul>
                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
            <Carrusel />
            <CardList />
            <Footer />
            <SesionExpired />
        </div>
    );
}

