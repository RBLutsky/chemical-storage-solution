import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, ListGroup, ListGroupItem } from 'reactstrap';

class InventoryPage extends Component {

    render() {
        //remove 'result' as new key on array
        let inventory = this.props.inventory
        console.log('INVENTORY', inventory)
        // let results = inventory.map(item => item)
        return (
            <div>
                <h1>My Storage Solution</h1>
                <Link to='/'>
                    <Button color="primary">Home</Button>
                </Link>

                <Link to='/chemical'>
                    <Button color="primary">SEARCH</Button>
                </Link>

                <div className="listBox">
                    <ListGroup>
                        {inventory.map((item) =>
                            <ListGroupItem key={item.Id} >
                                {/* //item-id={result.id} */}
                                <h5>
                                    <Button color="secondary" size='sm' onClick={() => this.props.deleteItem(item.Id)}>x</Button>
                                    {item['Chemical Name']} {item['Storage Category']}
                                </h5>
                            </ListGroupItem>
                        )}
                    </ListGroup>
                </div>


            </div>
        )
    }
}

export default InventoryPage