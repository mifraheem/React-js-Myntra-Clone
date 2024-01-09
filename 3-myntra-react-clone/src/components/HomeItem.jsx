import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/bagSlice";
import { GrAddCircle } from "react-icons/gr";
import { AiFillDelete } from "react-icons/ai";
export default function HomeItem({ item }) {
  const dispatch = useDispatch();
  const bagItems = useSelector((store) => store.bag);

  const handleAddToBag = () => {
    dispatch(bagActions.addToBag(item.id));
  };
  const handleRemoveFromBag = () => {
    dispatch(bagActions.removeFromBag(item.id));
  };
  return (
    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
        {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name"> {item.company}</div>
      <div className="item-name"> {item.item_name}</div>
      <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">( {item.discount_percentage}% OFF)</span>
      </div>
      {bagItems.indexOf(item.id) >= 0 ? (
        <button
          type="button"
          className="btn btn-danger w-100 mt-2"
          onClick={handleRemoveFromBag}
        >
          <AiFillDelete />
          Remove
        </button>
      ) : (
        <button
          type="button"
          className="btn btn-success w-100 mt-2"
          onClick={handleAddToBag}
        >
          <GrAddCircle /> Add to Bag
        </button>
      )}
    </div>
  );
}
