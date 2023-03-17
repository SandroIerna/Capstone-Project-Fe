import { Button, Col, Card } from "react-bootstrap";
import "./item.css";
import { useDispatch, useSelector } from "react-redux";
import {
  // updateCountAction,
  addToCartAction,
  removeFromCartAction,
} from "../../../redux/actions";
import { useState } from "react";

const Item = ({ itemData }) => {
  // const cart = useSelector((state) => state.cart.cart);
  const [toggle, setToggle] = useState(false);

  // const addItemCount = (itemData) => {
  //   let index = cart.findIndex((item) => item._id === itemData._id);
  //   if (index !== -1) {
  //     let count = cart[index].count;
  //     dispatch(updateCountAction({ ...itemData, count: count + 1 }));
  //   } else {
  //     dispatch(addToCartAction({ ...itemData, count: 1 }));
  //   }
  // };

  // const removeItemCount = (itemData) => {
  //   let index = cart.findIndex((item) => item._id === itemData._id);
  //   if (index !== -1) {
  //     let count = cart[index].count;
  //     if (count > 1) {
  //       dispatch(updateCountAction({ ...itemData, count: count - 1 }));
  //     } else {
  //       dispatch(removeFromCartAction(itemData));
  //     }
  //   }
  // };

  const handleCheck = () => {
    if (!toggle) {
      setToggle(true);
      dispatch(addToCartAction(itemData));
    } else {
      setToggle(false);
      dispatch(removeFromCartAction(itemData));
    }
  };

  const dispatch = useDispatch();
  return (
    <Col className="text-center mt-4 mb-2">
      <Card>
        <Card.Img
          variant="top"
          src={itemData.image}
          className="item-card-image"
        />
        <div className="d-flex justify-content-around mt-3">
          <input type="checkbox" onChange={() => handleCheck()} />
          <div>{itemData.name}</div>
        </div>

        {/* <div className="mt-4">
          <Button
            className="item-button mx-3"
            onClick={() => {
              removeItemCount(itemData);
            }}
          >
            -
          </Button>
          <span>Cart</span>
          <Button
            className="item-button mx-3"
            onClick={() => {
              addItemCount(itemData);
            }}
          >
            +
          </Button>
        </div> */}
      </Card>
    </Col>
  );
};
export default Item;
