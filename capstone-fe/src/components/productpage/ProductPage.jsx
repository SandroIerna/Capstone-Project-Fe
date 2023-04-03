import Navbar from "../homepage/navbar/Navbar";
import { Col, Container, Row, Card } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "./productpage.css";
import Store from "../homepage/store/Store";
import Footer from "../footer/Footer";
import Typesbar from "../homepage/typesbar/Typesbar";
import CartSideBar from "../cartSidebar/CartSideBar";

const ProductPage = () => {
  const location = useLocation();
  const itemId = location.pathname.split("/")[2];
  const [item, setItem] = useState();

  const getItem = async () => {
    const options = {
      method: "GET",
    };
    const URL = process.env.REACT_APP_BE_URL;
    try {
      let response = await fetch(`${URL}/items/${itemId}`, options);
      if (response.ok) {
        const itemData = await response.json();
        setItem(itemData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getItem();
    console.log(item);
  }, []);

  return (
    <>
      <Navbar />
      <Typesbar />
      <CartSideBar />
      <Container className="mt-5" id="product-page-container">
        {item && (
          <>
            <Row
              className="justify-content-around
        "
            >
              <Col>
                <img src={item.item.image} className="product-img ml-3" />
              </Col>

              <Col id="product-page-card" className="d-flex flex-column ">
                <div>
                  <h2>{item.item.name}</h2>
                  <p>Brand : {item.item.brand}</p>
                  <p>Description:</p>
                </div>
              </Col>
            </Row>
            <Row>
              <Store storeData={item.sortedStores[0]} />
              <Store storeData={item.sortedStores[1]} />
              <Store storeData={item.sortedStores[2]} />
            </Row>
          </>
        )}
      </Container>
      <Footer />
    </>
  );
};
export default ProductPage;
