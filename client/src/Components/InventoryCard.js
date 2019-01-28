import React, { Component } from 'react';
import _ from "lodash";

class InventoryCard extends Component {

    render() {
        const items = this.props.inventoryByCategory.category
      console.log(items)
        return (
            <div>
                <div className="card-deck">

                    {this.props.inventoryByCategory.map((category, i) => 
                    <div className="card border-secondary text-white bg-info mb-3" key={i}>
                        <div className="card-body">
                            <div className="card-header text-center">
                                <b>{category[0]["Storage Category"]}</b>
                            </div >

                            <p className="card-text text-center">
                                {category[0]["Category Definitions"]} {category[0]["Storage Cautions"]}
                            </p>
                        </div>


                        <ul className="list-group list-group-flush">
                            <li className="list-group-item" key={category.Id + i} >
                                <button type="button" className="btn btn-secondary" size='sm' onClick={() => this.props.deleteItem(category.Id)}>x</button>
                                                
                                {category['Chemical Name']}
                                            
                            </li>
                        </ul>

                        <button type="button" className="btn btn-secondary">Button</button>

                        <div className="card-body">
                            <a href="#" className="card-link">Card link</a>
                            <a href="#" className="card-link">Another link</a>
                        </div>

                    </div>
                    )}
                   
                </div>
            </div>
        )
    }
}


export default InventoryCard