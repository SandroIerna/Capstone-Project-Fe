import { Button, Col } from "react-bootstrap";
import "./item.css";

const Item = ({ itemData }) => {
  return (
    <Col className="text-center mt-4 mb-2">
      <div>{itemData.name}</div>
      <div className="mt-4">
        <Button className="item-button mx-3">-</Button>
        <span>Cart</span>
        <Button className="item-button mx-3">+</Button>
      </div>
    </Col>
  );
};
export default Item;
