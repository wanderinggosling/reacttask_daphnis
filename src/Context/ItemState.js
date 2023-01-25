import React, { useState } from "react";
import ItemContext from "./ItemContext";


const ItemState=(props)=>{
    const [list, setlist] = useState([]);
    const [newlist,setnewlist]=useState(list);
    const getAllProduct = async () => {
        const response = await fetch('https://fakestoreapi.com/products', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const json = await response.json();
        setlist(json);
        setnewlist(list);
        console.log(list.length)
    }

    return (
        <ItemContext.Provider value={{list,setlist,getAllProduct,newlist,setnewlist}}>
          {props.children}
        </ItemContext.Provider>
      )
}

export default ItemState