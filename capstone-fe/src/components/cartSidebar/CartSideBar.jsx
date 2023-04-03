import "./CartSidebar.css";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { Col, Button } from "react-bootstrap";
import {
  removeFromCartAction,
  searchStoresAction,
  setShowAction,
} from "../../redux/actions";
import { useNavigate } from "react-router-dom";

const CartSideBar = ({ showSideCart, handleShowSideCart, setShow }) => {
  const cart = useSelector((state) => state.cart.cart);
  const [toggle, setToggle] = useState(false);
  const accessToken = useSelector((state) => state.user.accessToken);
  //   const [showSideCart, setShowSideCart] = useState(
  //     "mt-4 hide d-flex flex-column align-items-center justify-content-center"
  //   );
  const cartItems = [];

  const dispatch = useDispatch();
  const navigate = useNavigate();

  //   const handleShowSideCart = () => {
  //     if (
  //       showSideCart ===
  //       "mt-4 hide d-flex flex-column align-items-center justify-content-center"
  //     )
  //       setShowSideCart(
  //         "mt-4 d-flex flex-column align-items-center justify-content-center"
  //       );
  //     else {
  //       setShowSideCart(
  //         "mt-4 hide d-flex flex-column align-items-center justify-content-center"
  //       );
  //     }
  //   };

  const handleSearchStores = () => {
    cart.map((item) => {
      if (!cartItems.includes(item._id)) cartItems.push(item._id);
    });
    navigate("/");
    dispatch(searchStoresAction(cartItems, accessToken.accessToken));
  };

  const handleCheck = (itemData) => {
    // if (!toggle) {
    //   setToggle(true);
    //   dispatch(addToCartAction(itemData));
    // } else {
    setToggle(false);
    dispatch(removeFromCartAction(itemData));
    // }
  };

  return (
    <>
      <div
        id="show-cart-sidebar"
        className={showSideCart}
        onClick={() => {
          handleShowSideCart();
        }}
      >
        {showSideCart ===
          "mt-4 hide d-flex flex-column align-items-center justify-content-center" && (
          <img src="/fast-forward.svg" />
        )}
        {showSideCart !==
          "mt-4 hide d-flex flex-column align-items-center justify-content-center" && (
          <img src="/rewind.svg" />
        )}
      </div>
      <div id="cart-sidebar-container" className={showSideCart}>
        <Col className="d-flex flex-column">
          <div className="d-flex mt-3 justify-content-around align-items-center">
            {" "}
            <img src="/cart-bold.svg" className="cart-image" />
            <h4>Cart</h4>
          </div>
          {cart.length === 0 && (
            <>
              <h5 className="mt-3">Cart Empty!</h5>
              <span className="mt-5 text-center">
                Select something to add to the cart first!
              </span>
            </>
          )}
          {cart.length > 0 && (
            <>
              <ul className="mt-3">
                {cart.map(
                  (item) => (
                    <div className="d-flex justify-content-between cart-list listed-item">
                      <li
                        key={item._id}
                        onClick={() => {
                          dispatch(removeFromCartAction(item));
                        }}
                      >
                        {item.name}
                      </li>
                      <div>
                        <input
                          type="checkbox"
                          onChange={() => handleCheck(item)}
                          checked
                          className="mx-2"
                        />
                      </div>
                    </div>
                  ) // <span key={item._id}>{item.name}</span>)
                )}
              </ul>
              <Button
                className="side-cart-button"
                onClick={() => {
                  if (accessToken) {
                    handleSearchStores();
                    setShow(true);
                    dispatch(setShowAction(true));
                  } else {
                    console.log("login first");
                  }
                }}
              >
                Search Stores
              </Button>
            </>
          )}
        </Col>
      </div>
    </>
  );
};

export default CartSideBar;
