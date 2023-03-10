import { Button, Col } from "react-bootstrap";
import "./item.css";
import { useDispatch } from "react-redux";
import { addToCartAction, removeFromCartAction } from "../../../redux/actions";

const Item = ({ itemData }) => {
  const dispatch = useDispatch();
  return (
    <Col className="text-center mt-4 mb-2">
      <div>{itemData.name}</div>
      <div className="mt-4">
        <Button
          className="item-button mx-3"
          onClick={() => {
            dispatch(removeFromCartAction(itemData));
          }}
        >
          -
        </Button>
        <span>Cart</span>
        <Button
          className="item-button mx-3"
          onClick={() => {
            dispatch(addToCartAction(itemData));
          }}
        >
          +
        </Button>
      </div>
    </Col>
  );
};
export default Item;
