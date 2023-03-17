import { Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import Navbar from "../homepage/navbar/Navbar";

const FilteredItemsPage = () => {
  const location = useLocation();
  const itemType = location.pathname.split("/")[1];

  return (
    <>
      <Navbar />
      <Container></Container>
    </>
  );
};

export default FilteredItemsPage;
