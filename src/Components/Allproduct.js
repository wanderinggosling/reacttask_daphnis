import React, { useState, useEffect, useContext } from 'react'
import ProductItem from './ProductItem';
import { FiRefreshCcw } from 'react-icons/fi'
import ItemContext from '../Context/ItemContext';
import Piechart from './Piechart';

const Allproduct = () => {
    const context = useContext(ItemContext);
    const { list, setnewlist, getAllProduct, newlist } = context;
    const [open, setopen] = useState(false);
    const [value, setValue] = useState('ALL');
    const [pie,setpie]=useState(false);
    const toggleopen = () => {
        setopen(!open);
    }
    const refresh = (e) => {
        setnewlist(list)
        setopen(false)
        setValue("All")
    }

    const displaypie=()=>{
        setpie(!pie);
    }
    const onclick = (e) => {
        setValue(e.target.value);
        setnewlist(list.filter(l => l.category === e.target.value));
    }
    useEffect(() => {
        getAllProduct();
        // eslint-disable-next-line 
    }, [])


    return (
        <div className='container my-3'>

            <div style={{ "display": "flex" }}>
                <div className="dropdown" onClick={toggleopen} style={{ "display": "table-row" }}>
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {value}
                    </button>
                    <div className={`dropdown-menu${open ? 'show' : ''}`} aria-labelledby="dropdownMenuButton">
                        <button className="dropdown-item" value="electronics" onClick={(e) => onclick(e)}>electronics</button>
                        <button className="dropdown-item" value="jewelery" onClick={(e) => onclick(e)}>jewelery</button>
                        <button className="dropdown-item" value="men's clothing" onClick={(e) => onclick(e)}>men's clothing</button>
                        <button className="dropdown-item" value="women's clothing" onClick={(e) => onclick(e)}>women's clothing</button>

                    </div>
                </div>
                <button style={{ "display": "contents" }} onClick={(e) => refresh(e)}><FiRefreshCcw style={{ "height": "initial", "marginLeft": "20px" }} /></button>
            </div>
            <h1 className="text-center">Products</h1>
            <div className="center"style={{"width": "50vh","display": "flex","float": "right"}}>
                {pie && <Piechart></Piechart>} 
            </div>
            <button onClick={()=>displaypie()}>Analyse</button>
            <div className="row">
                {newlist.length>0 ?newlist.map((element) => {
                    return <div className="col-md-4" key={element.id}>
                        <ProductItem title={element.title} description={element.description} imageUrl={element.image} redirect={element.image} price={element.price}>
                        </ProductItem>
                    </div>
                }):list.map((element) => {
                    return <div className="col-md-4" key={element.id}>
                        <ProductItem title={element.title} description={element.description} imageUrl={element.image} redirect={element.image} price={element.price}>
                        </ProductItem>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Allproduct
