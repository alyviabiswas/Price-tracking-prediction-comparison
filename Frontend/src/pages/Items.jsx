import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchItems } from "../store/slices/itemsSlice";

const Items = () => {
  const dispatch = useDispatch();
  const { items, status } = useSelector((state) => state.items); 

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchItems());
    }
  }, [status, dispatch]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Active Items</h1>
      <ul className="space-y-4">
        {items.map((item) => ( 
          <li key={item.id} className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold">{item.item_name}</h2>
            <p className="text-gray-600">{item.description}</p>
            <p className="text-gray-800">Starting Price: ${item.starting_price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Items;
