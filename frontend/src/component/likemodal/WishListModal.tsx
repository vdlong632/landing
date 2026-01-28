import WishList from "./component/WishList";

interface ListCartProps {
  onClose: () => void;
}
const LikeModal: React.FC<ListCartProps> = ({ onClose })  => {
    return(
        <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="heading-cart">
          <h5>WishList</h5>
          <button className="close-btn" onClick={onClose}>
            x
          </button>
        </div>
        <WishList/>
      </div>
    </div>
    )
}
export default LikeModal