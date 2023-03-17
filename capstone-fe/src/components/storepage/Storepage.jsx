import { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getSingleStoreAction } from "../../redux/actions";
import Navbar from "../homepage/navbar/Navbar";
import "./store.css";

const Storepage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const storeId = location.pathname.split("/")[2];
  const selectedStore = useSelector((state) => state.stores.selectedStore);

  useEffect(() => {
    dispatch(getSingleStoreAction(storeId));
  }, []);
  return (
    <>
      <Navbar />
      {selectedStore && (
        <Container>
          <Row>
            <div>
              <img src={selectedStore.image} alt="The store image" />
            </div>
            <div className="d-flex flex-column">
              <h1>
                Owner: "{selectedStore.owner.firstName}{" "}
                {selectedStore.owner.lastName}"
              </h1>
              <span>Store info</span>
            </div>
          </Row>
        </Container>
      )}
    </>
  );
};

export default Storepage;
