import React, { Component } from 'react';
import InventoryItem from './InventoryItem';
import {
    Card, CardDeck, Button, CardHeader, CardFooter, CardBody, CardTitle, CardText, ListGroup, ListGroupItem
} from 'reactstrap';


class InventoryCard extends Component {



    render() {
        

        return (
            <div>
                <CardDeck>
                    {this.props.inventoryByCategory.map((category, i) =>
                        <Card key={i}>
                            <CardBody  style={{ backgroundColor: 'lightgrey', borderColor: '#333', color: 'black'}}
                            >
                                <CardTitle>{category["Storage Category"]}</CardTitle>

                                <CardText>{this.props.categories["Category Definitions"]} <b>{this.props.categories["Storage Cautions"]}</b></CardText>

{/* category["Category Definitions"] category["Storage Cautions"] */}
                                <ListGroup>
                                    {this.props.inventoryByCategory[i].map((item, i) =>
                                        <ListGroupItem key={item.Id + i} >
                                            <h5>
                                                <Button color="secondary" size='sm' onClick={() => this.props.deleteItem(item.Id)}>x</Button>

                                                {item['Chemical Name']}
                                            </h5>
                                        </ListGroupItem>
                                    )}
                                </ListGroup>

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