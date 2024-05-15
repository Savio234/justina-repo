import { Link } from "react-router-dom";
// import Products from "../../pages/Products";
import { Product } from '../../types/productlist'

const ProductCard = ({image, name, price}: Product) => {
  return (
    <div className='container'>
        {/* <Link id="productLinks" to={`/products/${product.id}`}> */}
        <Link id="productLinks" to={`/products`}>
            <div className="image_container">
                <div className="image">
                    <img src={image} alt="" />
                </div>
            </div>
            <div className="texts">
                <p>{name}</p>
                <h3>Rs. {price}</h3>
            </div>
        </Link>
    </div>
  )
}

export default ProductCard