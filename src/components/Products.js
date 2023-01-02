import { useContext } from "react"
import PRODUCTS from "../data"
import MainContext from './MainContext'

function Products() {

    const {addToCart} = useContext(MainContext)

    return (
        <div className='products'>
            {PRODUCTS.map(product => (
                <div className="card">
                    <div className="img">
                        <img src={product.image} alt="" />
                    </div>
                    <div className="product-details">
                        <h3 className="product-name">{product.name}</h3>
                        <div className="product-price">{product.price}</div>
                    </div>
                    <button className="product-add-btn" onClick={() => addToCart(product)} >Add to Cart</button>
                </div>
            ))}
        </div>
    )
}

export default Products