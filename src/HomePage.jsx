import axios from "axios";
import Header from "./Header";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";

export default function HomePage() {

    const [products, setProducts] = useState([]);

    // in react, an effect is a behaviour not related to the <body> or the DOM
    // useEffect takes two argument
    // arugment 1: the effect function, which cannot be ASYNCHRONOUS
    // argument 2: a list of depdendencies (values), when they change, effect function trigges
    // if the dependencies is an empty array, then the effect function will trigger ONCE when the component first renders
    useEffect(() => {

        async function fetchData() {
            const response = await axios.get('featured.json');
            setProducts(response.data);

        }

        fetchData();

    }, [])

    function renderProducts() {
        const jsx = [];
        for (let p of products) {
            jsx.push(<div className="col-md-3 mb-4" key={p.id}>
                <ProductCard name={p.name}
                    price={p.price}
                    imageUrl={p.imageUrl}
                />
            </div>)
        }
        return jsx;
    }

    return <>
        <Header />
        <main className="container my-5">
            <h2 className="text-center mb-4">Featured Products</h2>
            <div className="row">
                {renderProducts()}

            </div>
        </main>

    </>
}