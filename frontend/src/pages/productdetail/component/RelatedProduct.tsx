import { useEffect, useState } from "react";
import { Product } from "../../../types/product"
import ProductCart from "../../../component/products/item/ProductCart";

interface RelatedProductProps { 
    currentId: number;  
    currentCategory: string;
}
const RelatedProduct = ({currentId, currentCategory} : RelatedProductProps) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchRelated = async () => {
        setLoading(true);
            const response = await fetch (`http://localhost:3001/api/products`);
            const data: Product[] = await response.json();
            const  related = data.filter((p) => p.category === currentCategory && p.id !== currentId)
            setProducts(related.slice(0, 4))
        }
        fetchRelated()
    },[])
    return(
        <div className="related-grid">
            {products.map((product) => (
                <ProductCart key={product.id} product={product}/>
            ))}
        </div>
    )
}
export default RelatedProduct