import React from 'react';
import { Component } from 'react';

class InventoryPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //COULD BE EMPTY ARRAY THAT GETS CONCAT FROM OTHERS
            userId: 'User.id',
            chemicalName: 'Chemical.chemicalName',
            storageCategory: 'Chemical.storageCategory',
            definition: 'Category.definition',
            cautions: 'Category.cautions'
        };
    }

    render() {
        return;
        //SOME JSX TO DISPLAY

    }
}

export default InventoryPage