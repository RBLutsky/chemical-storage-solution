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
                <div>
                    <ul>  {results.map((result, id) =>
                        <li key={id} color='black'>
                            {result['Chemical Name']} {result['Storage Category']}
                        </li>
                    )}
                    </ul>
                </div>


                {/* <div className="listBox">
                    <ListGroup>
                        {this.props.inventory.map((chemical, id) =>
                        <ListGroupItem key={id} >
                            <h5>
                                {chemical['Chemical Name']} {chemical['Storage Category']}
                            </h5>
                        </ListGroupItem>
                        )}
                    </ListGroup>
                </div> */}


                <Link to='/'>
                    <Button color="primary">Home</Button>
                </Link>
                <Link to='/chemical'>
                    <Button color="primary">SEARCH</Button>
                </Link>
            </div>
        )
    }
}

export default InventoryPage