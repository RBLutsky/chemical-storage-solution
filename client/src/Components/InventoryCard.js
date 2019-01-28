import React, { Component } from 'react';
import _ from "lodash";

class InventoryCard extends Component {

    render() {
        
        return (
            <div>
                <div className="card-deck">
                    
                    <div className="card border-secondary text-white bg-info mb-3" key={this.props.category[0]["Storage Category"]} >
                        <div className="card-body">
                            <div className="card-header text-center">
                                <b>{this.props.category[0]["Storage Category"]}</b>
                            </div >

                            <p className="card-text text-center">
                                {this.props.category[0]["Category Definitions"]} {this.props.category[0]["Storage Cautions"]}
                            </p>
                        </div>


                        <ul className="list-group list-group-flush">
                            {this.props.category.map((chem, i) =>
                                <li className="list-group-item" key={chem.Id + i} >
                                    <button type="button" className="btn btn-secondary" size='sm' onClick={() => this.props.deleteItem(chem.Id)}>x</button>
                                                    
                                    {chem['Chemical Name']}
                                                
                                </li>
                            )}
                        </ul> 

                    </div>
                </div>
            </div>
        )
    }
}


export default InventoryCard