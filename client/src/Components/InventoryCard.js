import React, { Component } from 'react';
import _ from "lodash";

const InventoryCard = ({category, deleteItem}) => (
    // <div className="container">
    //     <div className="row">
    //         <div>
    //             <div className="card text-white bg-info mb-3 " style={{ border: "3px solid #6c757d" }} key={category[0]["Storage Category"]} >
    //                 <div className="card-body" >
    //                     <div className="card-header" style={{ textAlign: "center" }}>
    //                         <h3>{category[0]["Storage Category"]}</h3>
    //                     </div >

    //                     <p className="card-text text-center">
    //                         {category[0]["Category Definitions"]}
    //                     </p>
    //                     <b> <h4 className="card-text text-center" style={{ color: "#d25a05"}}>{category[0]["Storage Cautions"]}
    //                     </h4></b>
    //                 </div>


    //                 <ul className="list-group list-group-flush" >
    //                     {category.map((chem, i) =>
    //                         <li className="list-group-item" key={chem.Id + i} style={{ color: "black", padding: "0.25rem 1rem" }}>
    //                             <button type="button" className="btn btn-secondary btn-sm" onClick={() => deleteItem(chem.Id+i)}>x</button>

    //                             {chem['Chemical Name']}

    //                         </li>
    //                     )}
    //                 </ul>

    //             </div>
    //         </div>
    //     </div>
    // </div>
        <div class="col-sm-3">
        <div class="card" key={category[0]["Storage Category"]} style={{ border: "3px solid #6c757d" }}>
                <div class="card-body">
                    <h5 class="card-title">{category[0]["Storage Category"]}</h5>
                    <p class="card-text">{category[0]["Category Definitions"]}</p>
                    <b><p class="card-text">{category[0]["Storage Cautions"]}</p></b>
                </div>

            <ul className="list-group list-group-flush" >
              {category.map((chem, i) =>
                <li className="list-group-item" key={Math.random()*5} style={{ color: "black", padding: "0.25rem 1rem" }}>
                    <button type="button" className="btn btn-secondary btn-sm" onClick={() => deleteItem(chem.Id)}>x</button>

                    {chem['Chemical Name']}

                </li>
            )}
            </ul>
       </div>
    </div>
 
)


export default InventoryCard
