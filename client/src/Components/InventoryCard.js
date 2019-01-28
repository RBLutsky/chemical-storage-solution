import React, { Component } from 'react';

class InventoryCard extends Component {

    render() {
        
        return (
            <div>
                <div className="card-deck">


                    {this.props.inventoryByCategory.map((category, i) =>
                        <div className="card border-secondary text-white bg-info mb-3">
                        <div className="card-body">
                            <div className="card-header text-center">
                                    {'storage category goes here'}
                                {/* {category["Storage Category"]} */}
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
                        <ul className="list-group list-group-flush">
                            {this.props.inventoryByCategory[i].map((item, i) =>
                            <li class="list-group-item" key={item.Id + i} >
                                <button type="button" class="btn btn-secondary" size='sm' onClick={() => this.props.deleteItem(item.Id)}>x</button>
                                                
                                {item['Chemical Name']}
                                            
                            </li>
                        )}
                        </ul>

                        <button type="button" class="btn btn-secondary">Button</button>

                        {/* <div class="card-body">
                            <a href="#" class="card-link">Card link</a>
                            <a href="#" class="card-link">Another link</a>
                        </div> */}

                     </div>
                    )}
                </div>
            </div>
        )
    }
}


export default InventoryCard