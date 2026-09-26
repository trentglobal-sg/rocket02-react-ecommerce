import Navbar from "./Navbar";
import Header from "./Header";
import ProductCard from "./ProductCard";

function App() {
  return <>
    <Navbar/>
    <Header/>
    <main className="container my-5">
      <h2 className="text-center mb-4">Featured Products</h2>
      <div className="row">
        <div className="col-md-3 mb-4">
          <ProductCard name="Product 1"
                       price={19.99}
                       imageUrl="https://picsum.photos/id/20/300/200"
          />
        </div>
        <div className="col-md-3 mb-4">
        <ProductCard name="Product 2"
                       price={29.99}
                       imageUrl="https://picsum.photos/id/22/300/200"
          />
        </div>
        <div className="col-md-3 mb-4">
          <ProductCard name="Product 3"
                       price={39.99}
                       imageUrl="https://picsum.photos/id/24/300/200"
          />
        </div>
        <div className="col-md-3 mb-4">
       <ProductCard name="Product 4"
                       price={199.99}
                       imageUrl="https://picsum.photos/id/30/300/200"
          />
        </div>
      </div>
    </main>

    <footer className="bg-dark text-white text-center py-3">
      <div className="container">
        <p>&copy; 2023 E-Shop. All rights reserved.</p>
      </div>
    </footer>

  </>

}

export default App;