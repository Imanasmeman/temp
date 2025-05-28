const ProductCard = ({product}) => {
    return (
        <div style={{border: "1px solid #ccc", padding: "10px", borderRadius: "8px"}}>
             <img src={product.thumbnail} alt={product.title} width="100%" height="150px" style={{objectFit: "cover"}} />
             <h3>{product.title}</h3>
             <p>Price: ${product.price}</p>
             <p>Rating: {product.rating}</p>
        </div>
    );
};
export default ProductCard;