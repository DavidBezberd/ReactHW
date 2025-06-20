import type { FC } from "react"
import type { ProductModel } from "../../models/ProductModel"


type ProductsProp = {product: ProductModel};

export const Post:FC<ProductsProp> = ({product:{title, description, category, price, discountPercentage, rating, tags, brand, warrantyInformation}}) => {
    return (
        <div>
            <h3>{title}</h3>
            <p>{description}</p>
            <p>{category}</p>
            <p>{price}</p>
            <p>{discountPercentage}</p>
            <p>{rating}</p>
            <p>{tags}</p>
            <p>{brand}</p>
            <p>{warrantyInformation }</p>
        </div>
    )
}