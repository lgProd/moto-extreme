import React from 'react'
import logo from "../img/extreme-logo-trans.png"
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'


export const Navbar = () => {


    return (

        <nav>
            <div>
        
                <Link to={`/`}>
                    <img src={logo} alt="Logo" className='logo' />
                </Link>

            </div>
            <ul>
              
                <li><Link className='nav-link' to={`/Category/Repuestos`}>Repuestos</Link></li>
                <li><Link className='nav-link' to={`/Category/Accesorios`}>Accesorios</Link></li>
                <li><Link className='nav-link' to={`/Category/Indumentaria`}>Indumentaria</Link></li>
            </ul>
            <CartWidget/>
        </nav>


    )
}


