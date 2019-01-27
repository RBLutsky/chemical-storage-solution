import React, { Component } from 'react';
import InventoryItem from './InventoryItem';
import {
    Card, CardDeck, Button, CardHeader, CardFooter, CardBody, CardTitle, CardText
} from 'reactstrap';


class InventoryCard extends Component {

    hasChemicals(props) {
        const inventoryByCategory = [...this.props.inventoryByCategory];
        // filter out empty categories
        const fullCategories = inventoryByCategory.filter(category => category.key !== null);

        console.log('FullCategories:', fullCategories)

        return fullCategories;

    }



    render() {
        return (
            <div>
                <CardDeck>
                    {this.props.categories.map((category, i) =>
                        <Card key={i}>
                            <CardBody inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                                <CardTitle>{category['Storage Categoy']}</CardTitle>

                                <CardText>{category['Category Definitions']} <b>{category["Storage Cautions"]}</b></CardText>

                                {/* <InventoryItem /> */}

                                <Button>Button</Button>

                            </CardBody>
                        </Card>
                    )}
                </CardDeck>
            </div>
        )
    }
}


export default InventoryCard