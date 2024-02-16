import React, { useContext } from 'react';
import { useCart } from 'react-use-cart';
import { MyContext } from '../../../utils/ContextProvider';

export const FirstSection = () => {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        updateItemQuantity,
        removeItem,
    } = useCart();
    const [data, setData] = useContext(MyContext)


    return (
        <>
            {/* <h1>Cart ({totalUniqueItems})</h1>

<ul>
  {items.map((element) => (
    <li key={element.id}>
        
      {element.quantity} x {element.name} &mdash;
      <button
        onClick={() => updateItemQuantity(element.id, element.quantity - 1)}
      >
        -
      </button>
      <button
        onClick={() => updateItemQuantity(element.id, element.quantity + 1)}
      >
        +
      </button>
      <button onClick={() => removeItem(element.id)}>remove</button>
      <p><img src={element.img} alt="" /></p>
    </li>
  ))}
</ul> */}
            <div className="max-w-screen-md mx-auto">
                <h1 className="text-3xl font-bold mb-6">Cart </h1>
                <ul>
                    {items.map((element) => (
                        <li key={element.id} className="flex items-center justify-between mb-4 border-b pb-4">
                            <div className="flex items-center">
                                <img src={element.img} alt={element.name} className="w-20 h-20 object-cover mr-4" />
                                <div>
                                    <p className="font-semibold">{element.name}</p>
                                    <p className="text-gray-600">${element.price}</p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <button className="text-gray-500 hover:text-gray-700 focus:outline-none" onClick={() => updateItemQuantity(element.id, element.quantity - 1)}>-</button>
                                <span className="mx-2">{element.quantity}</span>
                                <button className="text-gray-500 hover:text-gray-700 focus:outline-none" onClick={() => updateItemQuantity(element.id, element.quantity + 1)}>+</button>
                                <button className="ml-4 text-red-500 hover:text-red-700 focus:outline-none" onClick={() => removeItem(element.id)}>Remove</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

        </>
    );
};

