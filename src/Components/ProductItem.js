import React,{useState} from 'react'

const ProductItem = ({title,description,button,imageUrl,redirect,price}) => {
  
    const[see,setsee]=useState(false);
    const[more,setmore]=useState('...');
    const showmore=()=>{
        setsee(!see);
        more==='...'?setmore("see less"):setmore('...')
    }
    return (
        <div className='my-3'>
            <div className="card" >
                <img src={imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{see ?description:description.slice(0,150)}{description.length>150?<button style={{"border":"none"}}onClick={()=>{showmore()}}>{more}</button>:null}</p>
                    <h6 className="card-text">${price}</h6>
                    <a href={redirect} rel="noreferrer" target={'_blank'} className="btn btn-sm btn btn-primary">Read more</a>
                </div>
            </div>
        </div>
    )
}

export default ProductItem
