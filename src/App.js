import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import RoutesComp from "./components/RoutesComp";
import MainContext from "./components/MainContext"


function App() {

    const [cartItems, setCartItems] = useState([])

    const addToCart = (product) => {
        const productExist = cartItems.find((cartItem) => product.name === cartItem.name)
        if(productExist){
            console.log("girdi");
            productExist.amount += 1;
            setCartItems([...cartItems.filter((cartItem) => cartItem.name !== product.name), productExist])
        } else {
            setCartItems([...cartItems, {...product, amount: 1}])
        }
    }

    const removeFromCart = (product) => {
        const productExist = cartItems.find((cartItem) => cartItem.name === product.name)
        productExist.amount -= 1
        if(productExist.amount === 0){
            setCartItems([...cartItems.filter((cartItem) => cartItem.name !== product.name)])
        }
        else {
            setCartItems([...cartItems.filter((cartItem) => cartItem.name !== product.name), productExist])
        }
    }

    const values = {
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart
    }

    return (
        <div className="app">
            <MainContext.Provider value={values}>
                <BrowserRouter>
                    <Header />
                    <RoutesComp />
                </BrowserRouter>
            </MainContext.Provider>
        </div>
    );
}

export default App;
