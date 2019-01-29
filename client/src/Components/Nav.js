import React from 'react';
import { Link } from 'react-router-dom'

const Nav = () => (
    <div className="d-flex jusify-content-end p-3 align-items-center">
        <h1>My Storage Solution</h1>
        <div id="nav-buttons" className="ml-5">
            <Link to='/' className="mx-2">
                <button type="button" className="btn btn-sm btn-outline-secondary">Home</button>
            </Link>

            <Link to='/chemical' className="mx-2">
                <button type="button" className="btn btn-sm btn-outline-secondary">SEARCH</button>
            </Link>

            <Link to='/inventory' className="mx-2">
                <button type="button" className="btn btn-sm btn-outline-secondary">View Inventory</button>
            </Link>
        </div>
        
    </div>
)

export default Nav;