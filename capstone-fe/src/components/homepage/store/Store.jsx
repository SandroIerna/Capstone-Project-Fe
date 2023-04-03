import "./store.css";
import { Button, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSingleStoreAction } from "../../../redux/actions";

const Store = ({ storeData, cardSize }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const accessToken = useSelector((state) => state.user.accessToken);

  return (
    <Col sm={cardSize} className="mt-5 mx-3">
      <Card
        className="store-card"
        onClick={() => {
          dispatch(
            getSingleStoreAction(storeData._id, accessToken.accessToken)
          );
          navigate(`/stores/${storeData._id}`);
        }}
      >
        <Card.Img
          variant="top"
          src={storeData.image}
          className="store-card-img"
        />
        <Card.Body className="d-flex flex-column justify-content-between align-items-center">
          <div className="d-flex flex-column justify-content-center align-items-center">
            <Card.Title>{storeData.name}</Card.Title>
            <Card.Text>
              {""}

              <span></span>
            </Card.Text>
          </div>
          {/* <Button
            onClick={() => {
              dispatch(getSingleStoreAction(storeData._id));
              navigate(`/stores/${storeData._id}`);
            }}
          >
            See store
          </Button> */}
        </Card.Body>
      </Card>
    </Col>
  );
};
export default Store;
