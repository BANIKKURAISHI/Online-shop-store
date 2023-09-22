import { useLoaderData } from "react-router-dom";
import Products from "../Products/Products";

const Product = () => {
    const {products} =useLoaderData()
    console.log(products)
    return (
        <div>
            
        <div className="grid grid-cols-3 gap-5 mx-80 my-10 ">
            {
                products?.map(product=><Products key={products.id} product={product}></Products>)

            
            }
        </div>
        </div>
    );
};

export default Product;