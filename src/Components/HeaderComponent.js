import React from 'react'
import { Link } from 'react-router-dom'
require('../css/header.css')
const HeaderComponent = () => (
    <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
    </nav>
)

export default HeaderComponent;