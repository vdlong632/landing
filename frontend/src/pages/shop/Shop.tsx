import ProductList from "../../component/products/ProductList"

const Shop = () => {
    return(
        <div className="shop">
            <ProductList limit={16} showMore={false}/>
        </div>
    )
}
export default Shop