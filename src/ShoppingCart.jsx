import { useCart } from "./CartStore";
import CartQuantity from "./CartQuantity";
import { useJWT } from "./UserStore";
import { useEffect } from "react";

export default function ShoppingCart() {
    const { getCartTotal, cart, removeFromCart, modifyQuantity, fetchCart } = useCart();
    const { jwt} = useJWT();

    useEffect(()=>{
        if (jwt) {
            fetchCart();
        }
    }, [])

    return (
        <div className="container mt-4">
            <h2>Shopping Cart</h2>
            {
                (cart.length === 0) ?
                    <p>Empty Shopping Cart</p> :
                    (<>
                        <ul className="list-group">
                            {
                                cart.map(item => (
                                    <li key={item.id} className="list-group-item d-md-flex justify-content-between">
                                        <div>
                                            <h5>{item.name}</h5>
                                            <p>
                                                <button class="btn btn-primary btn-sm m-1"
                                                    onClick={()=>{
                                                        modifyQuantity(item, item.quantity -1);
                                                    }}
                                                >-</button>
                                                Quantity: 
                                                
                                                {/* <input type="text" style={{maxWidth: "35px"}} 
                                                    onChange={(e)=>{
                                                        if (!isNaN(e.target.value) && e.target.value >= 0){
                                                            modifyQuantity(item, e.target.value);
                                                        }
                                                    }}
                                                    value={item.quantity}/> */}

                                                <CartQuantity item={item}
                                                    onUpdateValue={(newQuantity)=>{
                                                        modifyQuantity(item, newQuantity)
                                                    }}
                                                
                                                />
                    
                                                <button class="btn btn-primary btn-sm m-1"
                                                    onClick={()=>{
                                                        modifyQuantity(item, item.quantity + 1)
                                                    }}
                                                >+</button>
                                            </p>
                                            <div>
                                                <button class="btn btn-danger btn-sm"
                                                    onClick={()=>{
                                                        removeFromCart(item)
                                                    }}
                                                >Remove</button>
                                            </div>
                                        </div>
                                        <div>
                                            <img src={item.imageUrl} />
                                        </div>
                                        <div>
                                            <span>${(item.price * item.quantity).toFixed(2)}</span>

                                        </div>
                                    </li>
                                ))
                            }

                        </ul>
                        <div className="mt-3 mb-3 text-end">
                            <h4>Total: ${getCartTotal().toFixed(2)}</h4>
                        </div>
                    </>)
            }


        </div>
    )
}