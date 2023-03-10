import "./store.css";
import { Button, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Store = ({ storeData }) => {
  const navigate = useNavigate();
  return (
    <Col className="text-center mt-5 mb-2">
      <div>{storeData.name}</div>
      <Button
        onClick={() => {
          navigate(`/stores/${storeData._id}`);
        }}
      >
        See store
      </Button>
    </Col>
  );
};
export default Store;
