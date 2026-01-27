import PageHeader from "../../component/pageheader/PageHeader";
import ProductList from "../../component/products/ProductList";
import Service from "../../component/service/Service";
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
      <Service/>
    </div>
  );
};
export default Shop;
