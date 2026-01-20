import React from "react";

interface ListCartProps {
  onClose: () => void;
}

const ListCart: React.FC<ListCartProps> = ({ onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Giỏ hàng của bạn</h2>
        <p>Danh sách sản phẩm...</p>
        <button onClick={onClose}>Đóng</button>
      </div>
    </div>
  );
};

export default ListCart;
