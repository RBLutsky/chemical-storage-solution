import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import InventoryCard from './InventoryCard';

class InventoryPage extends Component {

    render() {

        return (
            <div>
                <h1>My Storage Solution</h1>
                <Link to='/'>
                    <button type="button" class="btn btn-secondary">Home</button>

                </Link>

                <Link to='/chemical'>
                    <button type="button" class="btn btn-secondary">SEARCH</button>

                </Link>

                <InventoryCard 
                    categories={this.props.categories}
                    inventoryByCategory={this.props.inventoryByCategory}
                    /> 

            </div>


        )
    }
}

export default InventoryPage