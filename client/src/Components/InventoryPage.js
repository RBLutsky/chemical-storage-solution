import React from 'react';
import { Component } from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'reactstrap';

class InventoryPage extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         //COULD BE EMPTY ARRAY THAT GETS CONCAT FROM OTHERS
    //         userId: 'User.id',
    //         chemicalName: 'Chemical.chemicalName',
    //         storageCategory: 'Chemical.storageCategory',
    //         definition: 'Category.definition',
    //         cautions: 'Category.cautions'
    //     };
    // }

    render() {
        return( 
        <div>
            <h1>My Storage Solution</h1>
            <h1>{this.props.inventory.length}</h1>
            <Link to='/'>
                <Button color="primary">Home</Button>
            </Link>
        </div>
        )
    }
}

export default InventoryPage