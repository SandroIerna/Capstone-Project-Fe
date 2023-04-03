import { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getSingleStoreAction } from "../../redux/actions";
import { Button, Col, Card } from "react-bootstrap";
import Navbar from "../homepage/navbar/Navbar";
import "./store.css";
import Footer from "../footer/Footer";
import Store from "../homepage/store/Store";

const Storepage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const storeId = location.pathname.split("/")[2];
  const selectedStore = useSelector((state) => state.stores.selectedStore);
  const accessToken = useSelector((state) => state.user.accessToken);
  const stores = useSelector((state) => state.stores.stores);

  useEffect(() => {
    dispatch(getSingleStoreAction(storeId, accessToken.accessToken));
  }, []);

  //   // *@param  {H.Map} map
  //   // */
  //  function moveMapToBerlin(map) {
  //    map.setCenter({ lat: 52.5159, lng: 13.3777 });
  //    map.setZoom(14);
  //  }
  //  var platform = new H.service.Platform({
  //    apikey: "Kd6V5FdanfjtE-BfSwzwxzfbLE5AYVKMQ8NzUpyZK_E",
  //  });
  //  var defaultLayers = platform.createDefaultLayers();

  //  var map = new H.Map(
  //    document.getElementById("map"),
  //    defaultLayers.vector.normal.map,
  //    {
  //      center: { lat: 50, lng: 5 },
  //      zoom: 4,
  //      pixelRatio: window.devicePixelRatio || 1,
  //    }
  //  );
  //  window.addEventListener("resize", () => map.getViewPort().resize());

  //  var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

  //  var ui = H.ui.UI.createDefault(map, defaultLayers);

  //  window.onload = function () {
  //    moveMapToBerlin(map);
  //  };

  return (
    <>
      <Navbar />
      {selectedStore && (
        <Container fluid className="mt-5">
          <Row className="justify-content-center">
            <Col sm={5}>
              <iframe
                className="map"
                src={`https://www.google.com/maps/embed/v1/place?q=${selectedStore.location.latitude},${selectedStore.location.longitude}&key=${process.env.REACT_APP_GOOGLE_KEY}`}
              ></iframe>
            </Col>

            <Col sm={5}>
              <img src={selectedStore.banner} id="store-img" alt="store-logo" />
              <h3 className="mt-3">{selectedStore.name}</h3>

              <div className="mt-3">
                <div>
                  <span>Rating:</span>
                </div>
                <div>
                  <span>Open: Closes at 21:00</span>
                </div>
                <div>
                  <span>Address:</span>
                </div>
                <div>
                  <span>{selectedStore.description}</span>
                </div>
              </div>
              <Row>
                {stores &&
                  stores.map((store) => {
                    if (store._id !== selectedStore._id) {
                      console.log(store);
                      return <Store key={store._id} storeData={store} />;
                    }
                  })}
              </Row>
            </Col>
            {/* <div className="d-flex flex-column">
              <h1>"{selectedStore.name}"</h1>
              <span>Store info</span>
              <span>Latitude {selectedStore.location.latitude}</span>
              <span>Longitude {selectedStore.location.longitude}</span>
            </div> */}
          </Row>
        </Container>
      )}
      <Footer></Footer>
    </>
  );
};

export default Storepage;
