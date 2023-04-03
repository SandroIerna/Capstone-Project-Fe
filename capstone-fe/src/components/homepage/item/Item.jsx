import { Button, Col, Card } from "react-bootstrap";
import "./item.css";
import { useDispatch, useSelector } from "react-redux";
import {
  // updateCountAction,
  addToCartAction,
  removeFromCartAction,
} from "../../../redux/actions";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Item = ({ itemData }) => {
  const cart = useSelector((state) => state.cart.cart);
  const [toggle, setToggle] = useState(false);
  const [flipCard, setFlipCard] = useState("");

  useEffect(() => isInCart(), [cart]);
  useEffect(() => isInCart(), []);

  const navigate = useNavigate();

  // const addItemCount = (itemData) => {
  //   let index = cart.findIndex((item) => item._id === itemData._id);
  //   if (index !== -1) {
  //     let count = cart[index].count;
  //     dispatch(updateCountAction({ ...itemData, count: count + 1 }));
  //   } else {
  //     dispatch(addToCartAction({ ...itemData, count: 1 }));
  //   }
  // };

  // const removeItemCount = (itemData) => {
  //   let index = cart.findIndex((item) => item._id === itemData._id);
  //   if (index !== -1) {
  //     let count = cart[index].count;
  //     if (count > 1) {
  //       dispatch(updateCountAction({ ...itemData, count: count - 1 }));
  //     } else {
  //       dispatch(removeFromCartAction(itemData));
  //     }
  //   }
  // };
  const checkCart = (id) => cart.find((item) => item._id === id);
  const isInCart = () => {
    if (checkCart(itemData._id)) setToggle(true);
    else {
      setToggle(false);
    }
  };

  const handleFlip = () => {
    if (flipCard === "") setFlipCard("flip-card-inner-rotate");
    else {
      setFlipCard("");
    }
  };

  const handleCheck = () => {
    if (!toggle) {
      setToggle(true);
      dispatch(addToCartAction(itemData));
    } else {
      setToggle(false);
      dispatch(removeFromCartAction(itemData));
    }
  };

  const dispatch = useDispatch();
  return (
    <Col className="text-center mt-3 mx-3" sm={2}>
      {toggle && (
        <div className="flip-card">
          <div className={flipCard + " flip-card-inner"}>
            <Card className="d-flex align-items-center  card-selected  flip-card-front">
              <div className="item-card-top">
                <Card.Img
                  variant="top"
                  src={itemData.image}
                  className="item-card-image"
                  onClick={() => handleCheck()}
                />
                <div>
                  <div className="d-flex justify-content-around my-2">
                    <input
                      type="checkbox"
                      checked
                      onChange={() => handleCheck()}
                      className="mx-2"
                    />
                    <div>
                      <span>{itemData.name}</span>
                    </div>
                  </div>
                </div>
                <div className="item-card-bottom">
                  <Button
                    className="more-info-button mb-2"
                    onClick={() => {
                      handleFlip();
                    }}
                  >
                    <span className="mr-2">More info</span>
                    <img src="/search-zoom-in.png" />
                  </Button>
                </div>
              </div>
            </Card>
            <div className="flip-card-back">
              <img
                src="/undo.svg"
                className="undo-card-info"
                onClick={() => {
                  handleFlip();
                }}
              />
            </div>
          </div>
        </div>
      )}
      {!toggle && (
        <div className="flip-card">
          <div className={flipCard + " flip-card-inner"}>
            <Card className="d-flex align-items-center card  flip-card-front item-card">
              <div className="item-card-top">
                <Card.Img
                  variant="top"
                  src={itemData.image}
                  className="item-card-image"
                  onClick={() => handleCheck()}
                />
                <div>
                  <div className="d-flex justify-content-around my-2">
                    <input
                      type="checkbox"
                      onChange={() => handleCheck()}
                      className="mx-2"
                    />
                    <div>
                      <span>{itemData.name}</span>
                    </div>
                  </div>
                </div>
                <div className="item-card-bottom">
                  <Button
                    className="more-info-button mb-2"
                    onClick={() => {
                      handleFlip();
                    }}
                  >
                    <span className="mr-2">More info</span>
                    <img src="/search-zoom-in.png" />
                  </Button>
                </div>
              </div>
            </Card>
            <div className="flip-card-back">
              <div className="mt-3">
                <h6 className="px-2">Brand: {itemData.brand}</h6>
                {itemData.information && (
                  <>
                    <p className="informations px-2">
                      Calories: {itemData.information.calories}
                    </p>
                    <p className="informations px-2">
                      Proteins: {itemData.information.proteins}
                    </p>
                    <p className="informations px-2">
                      Carbs: {itemData.information.carbs}
                    </p>
                  </>
                )}
                <div>
                  <Button
                    className="more-info-button mb-2"
                    onClick={() => {
                      navigate(`/product-page/${itemData._id}`);
                    }}
                  >
                    <span className="mr-2 check-product-page-button">
                      Check Product page
                    </span>
                    {/* <img src="/search-zoom-in.png" /> */}
                  </Button>
                </div>
                <img
                  src="/undo.svg"
                  className="undo-card-info"
                  onClick={() => {
                    handleFlip();
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* {toggle && (
        <div className="flip-card">
          <div className={flipCard + "flip-card-inner"}>
            <Card className="d-flex align-items-center card-selected flip-card-front item-card">
              <Card.Img
                variant="top"
                src={itemData.image}
                className="item-card-image"
                onClick={() => handleCheck()}
              />
              <div>
                <div className="d-flex justify-content-around my-2">
                  <input
                    type="checkbox"
                    checked
                    onChange={() => handleCheck()}
                    className="mx-2"
                  />
                  <div>{itemData.name}</div>
                </div>
              </div>

              <div className="flip-card-back">
                <Button
                  onClick={() => {
                    handleFlip();
                  }}
                >
                  Back
                </Button>
              </div>
            </Card>
          </div>
        </div>
      )} */}

      {/* <div className="mt-4">
          <Button
            className="item-button mx-3"
            onClick={() => {
              removeItemCount(itemData);
            }}
          >
            -
          </Button>
          <span>Cart</span>
          <Button
            className="item-button mx-3"
            onClick={() => {
              addItemCount(itemData);
            }}
          >
            +
          </Button>
        </div> */}
    </Col>
  );
};
export default Item;
