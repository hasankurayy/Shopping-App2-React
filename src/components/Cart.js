import React, { useContext } from 'react'
import MainContext from './MainContext'

function Cart() {

    const {cartItems, addToCart, removeFromCart} = useContext(MainContext)
    var total = 0

    return (
        <div className="cart-items">
            <div className="header">Cart Items</div>

            {cartItems.length === 0 && (
                <div className='empty'> No items are added. </div>
            )}

            {cartItems.map(item => (
                <div className="cart-items-list">
                    <img src={item.image} alt="" />
                    <div className="name">{item.name}</div>
                    <div className="functions">
                        <button className="cart-items-add" onClick={() => addToCart(item)}>+</button>
                        <button className="cart-items-remove" onClick={() => removeFromCart(item)}>-</button>
                    </div>
                    <div className="price">
                        {item.amount} * {item.price}
                    </div>
                </div>
            ))}

            <div className="cart-total">
                {cartItems.map((item) => {
                    total += (item.amount * item.price.split("$")[1])
                })}
                Total Price: {total} $
            </div>
        </div>
    )
}

export default Cart