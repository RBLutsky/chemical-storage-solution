import React, { Component } from 'react';
import _ from "lodash";

class InventoryCard extends Component {

    render() {
        console.log('cats: ', this.props.cats)
        return (
            <div>
                <div className="card-deck">
                     {this.props.cats}.map((category) =>
                        <div className="card border-secondary text-white bg-info mb-3">
                        <div className="card-body">
                            <div className="card-header text-center">
                                    {'storage category goes here'}
                                {["Storage Category"]}
                            </div >

                            <p className="card-text text-center">
                                {'Storage Cautions go here'}
                                {/* <b> */}
                            {/* {this.props.categories["Category Definitions"]} <b>{this.props.categories["Storage Cautions"]} */}
                            
                            {/* </b> */}
                            </p>
                        </div>
                        )}

{/* category["Category Definitions"] category["Storage Cautions"] */}
                        {/* <ul className="list-group list-group-flush">
                            {this.props.inventoryByCategory[i].map((item, i) =>
                            <li className="list-group-item" key={item.Id + i} >
                                <button type="button" className="btn btn-secondary" size='sm' onClick={() => this.props.deleteItem(item.Id)}>x</button>
                                                
                                {item['Chemical Name']}
                                            
                            </li>
                        )}
                        </ul> */}

                        <button type="button" className="btn btn-secondary">Button</button>

                        {/* <div className="card-body">
                            <a href="#" className="card-link">Card link</a>
                            <a href="#" className="card-link">Another link</a>
                        </div> */}

                     </div>
                    )}
                </div>
            </div>
        )
    }
}


export default InventoryCard