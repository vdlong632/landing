import PageHeader from "../../component/pageheader/PageHeader";
import ProductList from "../../component/products/ProductList";
import FilterProduct from "./component/FilterProduct";

const Shop = () => {
  return (
    <div className="shop">
      <PageHeader
        title="Shop"
        breadcrumb={[
          { label: "Home", path: "/" },
          { label: "Shop", path: "/shop" },
        ]}
      />
      <FilterProduct/>
      <ProductList limit={16} showMore={false} />
    </div>
  );
};
export default Shop;
