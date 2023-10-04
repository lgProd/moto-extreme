import React from 'react'
import logo from "../Img/extreme-logo-trans.png"
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
              
                <li><Link to={`/Category/Repuestos`}>Repuestos</Link></li>
                <li><Link to={`/Category/Accesorios`}>Accesorios</Link></li>
                <li><Link to={`/Category/Indumentaria`}>Indumentaria</Link></li>
            </ul>
            <CartWidget/>
        </nav>






    )
}


