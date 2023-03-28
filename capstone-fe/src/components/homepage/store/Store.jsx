import "./store.css";
import { Button, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getSingleStoreAction } from "../../../redux/actions";

const Store = ({ storeData }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <Col sm={3}>
      <Card>
        <Card.Img variant="top" src={storeData.image} />
        <Card.Body className="d-flex flex-column justify-content-between align-items-center">
          <div className="d-flex flex-column justify-content-center align-items-center">
            <Card.Title>{storeData.name}</Card.Title>
            <Card.Text>
              {""}

              <span></span>
            </Card.Text>
          </div>
          <Button
            variant="primary"
            onClick={() => {
              dispatch(getSingleStoreAction(storeData._id));
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
