import ProductList from "../../component/products/ProductList";
import Banner from "./component/banner/Banner";
import Inspiration from "./component/inspiration/Inspiration";
import RoomType from "./component/roomtype/RoomType";

const Home = () => {
  return (
    <div className="home">
    <Banner/>
    <RoomType/>
    <ProductList limit={8} showMore={true}/>
    <Inspiration/>
    </div>
  )
};
export default Home
