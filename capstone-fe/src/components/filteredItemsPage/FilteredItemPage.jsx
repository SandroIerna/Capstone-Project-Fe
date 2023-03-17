import { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getFilteredItemsAction } from "../../redux/actions";
import Item from "../homepage/item/Item";
import Navbar from "../homepage/navbar/Navbar";

const FilteredItemsPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const itemType = location.pathname.split("/")[1];

  const items = useSelector((state) => state.items.items);

  useEffect(() => {
    dispatch(getFilteredItemsAction(itemType));
  }, [itemType]);

  return (
    <>
      <Navbar />
      <Container>
        <Row>
          {items &&
            items.map((item) => <Item key={item._id} itemData={item} />)}
        </Row>
      </Container>
    </>
  );
};

export default FilteredItemsPage;
