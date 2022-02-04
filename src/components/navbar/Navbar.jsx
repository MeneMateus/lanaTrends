import React, {useEffect, useState} from 'react';
import './navbar.css'
import { RiUser3Line } from 'react-icons/ri'
import { FiShoppingBag } from 'react-icons/fi'
const logo = require("../../assets/logo.png")

const Navbar = () => {
    const [show, setShow] = useState(true)
    const controlNavbar = () => {
        if (window.scrollY > 100) {
            setShow(false)
        } else {
            setShow(true)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', controlNavbar)
        return () => {
            window.removeEventListener('scroll', controlNavbar)
        }
    }, [])

    return (<div className='riachuelo__Navbar'>
        <div className='riachuelo__Navbar-links_logo'>
            <div className="riachuelo__Navbar-links_containerA">
            <input type="text" id="search" name="search" placeholder="Pesquisar" />
            </div>
            <div className='riachuelo__Navbar-links_containerB'>
                <img src={logo} alt="" />
            </div>
            <div className="riachuelo__Navbar-links_containerC">
                <p><a href="#home">Entrar <RiUser3Line size={25} />
                <FiShoppingBag size={25} /></a></p>
            </div>
        </div>
        <div className='riachuelo__Navbar-links_navbar'>
            <p>SALE</p>
            <p>VOLTA ÀS AULA</p>
            <p>VERÃO</p>
            <p>BEBÊS</p>
            <p>CRESCIDINHOS</p>
            <p>ROUPAS</p>
            <p>CALÇADOS</p>
            <p>ACESSÓRIOS</p>
            <p>PRAIA</p>
            <p>PARA BRINCAR</p>
            <p>CASA</p>
            <p>BLOG</p>
            <p>MARCAS</p>
        </div>
    </div>)
}

export default Navbar;