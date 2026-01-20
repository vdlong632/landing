import { Link } from "react-router-dom";

interface Product {
  id: number;
  slug: string;
  title: string;
  describe: string;
  voucher?: string;
  thumb: string;
  price: number;
  oldPrice?: number;
}

interface ProductProps {
  props: Product;
}

const ProductItem = ({ props }: ProductProps) => {
  return (
    <Link
      key={props.id}
      to={`/productprops/${props.slug}`}
      className="product-card"
    >
      <div className="product-card__image">
        <img src={props.thumb} alt={props.title} />
        <div className="card__title">{props.voucher}</div>
      </div>

      <div className="card__content">
        <h5>{props.title}</h5>
        <h6>{props.describe}</h6>
        <h5>{props.oldPrice}</h5>
      </div>
    </Link>
  );
};

export default ProductItem;
