import { useEffect, useState } from "react"
import axios from "axios"
import ProductCard from "./ProductCard";

export default function ProductPage() {

    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        async function fetchData() {
            const response = await axios.get("products.json");
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
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}