import { createContext, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const currency = '$';
    const delivery_fee = 10;
    const [search, setSearch] = useState('')    
    const [showSearch, setShowSearch] = useState(false)
    const [cartItems, setCartItems] = useState({}) 
    const navigate = useNavigate();

    const addToCart = async (itemId, size) => {

        if(!size)
        {
            toast.error('Select Product Size');
            return;
        }

        let cartData = structuredClone(cartItems); 
        //This creates a deep copy of the cartItems object using structuredClone. 
        //This ensures that any changes made to cartData do not affect the original cartItems.

        if(cartData[itemId])
        //This checks if the item with the given itemId already exists in the cart.
        { 
            if(cartData[itemId][size])
            //If the item exists, it then checks if the specific size of that item exists. 
            //If it does, it increments the quantity by 1. If it doesn’t, it sets the quantity to 1.
            {
                cartData[itemId][size] += 1;
            }
            else
            {
                cartData[itemId][size] = 1;
            }
        }
        else
        //If the item does not exist in the cart, 
        //it creates a new entry for that item and sets the quantity for the specified size to 1.
        {
            cartData[itemId] = {}
            cartData[itemId][size] = 1;
        }
        setCartItems(cartData);
    }

    const getCartCount = () =>
    {
        let totalCount = 0;
        for(const items in cartItems)
            //This loop iterates over each item in the cartItems object. 
            //Here, items represents the keys (item IDs) in the cartItems object.
        {
            for(const item in cartItems[items])
                //This nested loop iterates over each size of the current item. 
                //Here, item represents the sizes available for the current item.
            {
                //Inside the nested loop, 
                //it tries to check if the quantity of the current size of the item is greater than 0. 
                //If it is, it adds that quantity to totalCount. The catch block is empty, 
                //meaning it silently handles any errors that might occur.
                try {
                    if(cartItems[items][item] > 0)
                    {
                        totalCount += cartItems[items][item]; 
                    }
                }
                catch (err) {
                }
            }
        }
        return totalCount;
    }


    const updateQuantity = (itemId, size, quantity) => {
        // Create a new object by spreading the existing cartItems and updating the specific item's size quantity
        const updatedCartItems = {
            ...cartItems,
            [itemId]: {
                ...cartItems[itemId],
                [size]: quantity,
            },
        };
    
        // Set the updated cartItems state
        setCartItems(updatedCartItems);
    };


    const getCartAmout = () => {
        let totalAmount = 0;
        for(const items in cartItems){
            let itemInfo = products.find((product) => product._id === items)
            for(const item in cartItems[items])
            {
                try {
                    if(cartItems[items][item] > 0)
                    {
                        totalAmount += itemInfo.price * cartItems[items][item]
                    }
                }
                catch(err)
                {
                    
                } 
            }
        }
        return totalAmount;
    }

    const value = {
        products, currency, delivery_fee,
        search, setSearch,setShowSearch, showSearch,
        cartItems,addToCart,getCartCount, updateQuantity,
        getCartAmout,navigate
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;