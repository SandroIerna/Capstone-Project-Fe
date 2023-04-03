import { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getFilteredItemsAction } from "../../redux/actions";
import CartSideBar from "../cartSidebar/CartSideBar";
import Item from "../homepage/item/Item";
import Navbar from "../homepage/navbar/Navbar";
import Typesbar from "../homepage/typesbar/Typesbar";

const FilteredItemsPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const itemType = location.pathname.split("/")[1];
  const [showSideCart, setShowSideCart] = useState(
    "mt-4 hide d-flex flex-column align-items-center justify-content-center"
  );
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const items = useSelector((state) => state.items.items);

  // const handleIsLoading = () => {
  //   if (isLoading) {
  //     setTimeout(setIsLoading(false), 5000);
  //   }
  // };

  // useEffect(() => {
  //   handleIsLoading();
  // }, []);
  const handleShowSideCart = () => {
    if (
      showSideCart ===
      "mt-4 hide d-flex flex-column align-items-center justify-content-center"
    )
      setShowSideCart(
        "mt-4 d-flex flex-column align-items-center justify-content-center"
      );
    else {
      setShowSideCart(
        "mt-4 hide d-flex flex-column align-items-center justify-content-center"
      );
    }
  };

  useEffect(() => {
    dispatch(getFilteredItemsAction(itemType));
  }, [itemType]);

  return (
    <>
      <Navbar />
      <CartSideBar
        showSideCart={showSideCart}
        handleShowSideCart={handleShowSideCart}
        setShow={setShow}
      />
      <Typesbar itemType={itemType} handleShowSideCart={handleShowSideCart} />
      <Container>
        {/* {isLoading && <Spinner animation="border" role="status"></Spinner>} */}
        <Row className="d-flex">
          {items &&
            items.map((item) => <Item key={item._id} itemData={item} />)}
        </Row>
      </Container>
    </>
  );
};

export default FilteredItemsPage;
