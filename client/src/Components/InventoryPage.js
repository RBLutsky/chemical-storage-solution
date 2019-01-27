import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, ListGroup, ListGroupItem } from 'reactstrap';
import _ from 'lodash';
import InventoryItem from './InventoryItem';
import InventoryCard from './InventoryCard';

class InventoryPage extends Component {

    render() {

        return (
            <div>
                <h1>My Storage Solution</h1>
                <Link to='/'>
                    <Button color="primary">Home</Button>
                </Link>

                <Link to='/chemical'>
                    <Button color="primary">SEARCH</Button>
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