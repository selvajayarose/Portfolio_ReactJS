import React from 'react'
import { Link } from "react-router-dom";
import './Header.css'
export default function Header() {
    const arrow = ('>>');

    return (
        <div className='header'>
            <div className='logo'>
                <h2>SJ {arrow}</h2>
            </div>
            <div className='link'>
                <Link to="/"><p><span>{arrow}</span>Home</p></Link>
                <Link to="/about"><p><span>{arrow}</span>About</p></Link>
                <Link to="/works"><p><span>{arrow}</span>Projects</p></Link>
                <Link to="/contact"><p><span>{arrow}</span>Contact</p></Link>
            </div>
        </div>
    )
}
