import "./store.css";
import { Button, Col } from "react-bootstrap";

const Store = ({ storeData }) => {
  return (
    <Col className="text-center mt-5 mb-2">
      <div>{storeData.name}</div>
      <Button>See store</Button>
    </Col>
  );
};
export default Store;
