import "./store.css";
import { Button, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Store = ({ storeData }) => {
  const navigate = useNavigate();
  return (
    <Col sm={3}>
      <Card>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body className="d-flex justify-content-between align-items-center">
          <div className="d-flex flex-column justify-content-center align-items-center">
            <Card.Title>{storeData.name}</Card.Title>
            <Card.Text>{storeData.name}</Card.Text>
          </div>
          <Button
            variant="primary"
            onClick={() => {
              navigate(`/stores/${storeData._id}`);
            }}
          >
            See store
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};
export default Store;
