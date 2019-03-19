import React from 'react';
import InventoryCard from './InventoryCard';



const InventoryPage = ({ inventoryByCategory, deleteItem }) => (
    <div className="row">
        {inventoryByCategory.map((category) =>
            <InventoryCard category={category} deleteItem={deleteItem} key={Math.random() * 2} />
        )}
    </div>
)

export default InventoryPage