import { useEffect, useState } from "react"
import axios from "axios"
import ProductCard from "./ProductCard";
import { useCart } from "./CartStore";
import { useFlashMessage } from "./FlashMessageStore";
import { useLocation } from "wouter";

export default function ProductPage() {

    const [products, setProducts] = useState([])
    const {addToCart} = useCart();
    const {showMessage} = useFlashMessage();
    const [,setLocation] = useLocation();
    
    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(import.meta.env.VITE_API_URL + '/products');
            setProducts(response.data);

        }
        fetchData();
    }, []);


    return (
        <div className="container mt-5">
            <h1>Our Products</h1>
            <div class="row gy-2">
                {
                    products.map( p => (
                        <div class="col-md-3">
                            <ProductCard
                                name={p.name}
                                price={p.price}
                                imageUrl={p.imageUrl}
                                onAddToCart={()=>{
                                    addToCart(p);
                                    showMessage("Item has been added to cart")
                                    setLocation("/cart");
                                }}
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}