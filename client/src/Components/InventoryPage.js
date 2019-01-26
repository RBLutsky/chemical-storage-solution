import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, ListGroup, ListGroupItem } from 'reactstrap';

class InventoryPage extends Component {
           

    render() {
        //remove 'result' as new key on array
        let results = this.props.inventory.map(item => item.result)
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
                        {results.map((result, id) =>
                        <ListGroupItem key={id} >
                            <h5>
                                {result['Chemical Name']} {result['Storage Category']}
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