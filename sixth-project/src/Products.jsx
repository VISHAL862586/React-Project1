import { useState } from 'react'
import './App.css'

function Products(){
    let [products, setProducts]= useState([]);

    async function getProduct(){
        const res = await fetch("https://dummyjson.com/products");
        const data = await res.json();
        setProducts(data.products);
    }

    return(
        <div>
            <button onClick={getProduct}>Add Product</button>
            <div>
                {products.map((product)=>{
                    return(
                        <div  className="Container" key={product.id}>
                            <img src={product.thumbnail}  alt=''></img>
                            {product.title}
                        </div>
                    )
                })}
            </div>

        </div>
    )

}
export  default Products;