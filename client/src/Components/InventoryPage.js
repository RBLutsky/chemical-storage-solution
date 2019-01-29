import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import InventoryCard from './InventoryCard';

class InventoryPage extends Component {
    
    render() {
 
        return (
            <div>
                <h1 style={{ textAlign: "center"}}>My Storage Solution</h1>

                <Link to='/'>
                    <button type="button" className="btn btn-secondary">Home</button>
                </Link>

                <Link to='/chemical'>
                    <button type="button" className="btn btn-secondary">SEARCH</button>
                </Link>

                <br/>

                {this.props.inventoryByCategory.map((category) => 
                    <InventoryCard category={category} deleteItem={this.props.deleteItem}/>
                )}
               
            </div>
        )
    }
}

export default InventoryPage