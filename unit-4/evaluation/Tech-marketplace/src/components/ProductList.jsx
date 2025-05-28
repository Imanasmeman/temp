import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import SearchBar from "./SearchBar";
import Filter from "./Filters";

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState([]);
    useEffect(() => {
        axios.get("https://dummyjson.com/products").then(res => setProducts(res.data.products))
        .catch(err => console.error("Failed to fetch Product", err));
    }, []);
    const productsPerPage = 6;
    const totalPages = Math.ceil(products.length / productsPerPage);
    const start = (page - 1) * productsPerPage;
    const currentProducts = products.slice(start, start + productsPerPage);

    return (
        <div>
            <h1>Tech Marketplace</h1>
            <div style={{display : "grid", gridTemplateColumns: "repeat(3 1fr)", gap: "20px"}}>
                {currentProducts.map(product => (<ProductCard key ={product.id} product = {product} />))}
<div>
    <button onClick={() => setPage(p => Math.max(p - 1, 1))}
        disabled = {page === 1}>Previous</button>
        <span> Page {page} of {totalPages}</span>
        <button onClick={() => setPage(p => Math.min(p + 1, totalPages))} disabled={page === totalPages}>Next</button>
</div>
            </div>
        </div>
    )
};

export default ProductList;