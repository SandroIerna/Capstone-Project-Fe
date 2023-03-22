import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import UserLogin from "./components/login/UserLogin";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserRegister from "./components/register/Register";
import Homepage from "./components/homepage/Homepage";
import Storepage from "./components/storepage/Storepage";
import FilteredItemsPage from "./components/filteredItemsPage/FilteredItemPage";
import ProfilePage from "./components/profilePage/ProfilePage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/users/login" element={<UserLogin />} />
          <Route path="/users/register" element={<UserRegister />} />
          <Route path="/stores/:storeId" element={<Storepage />} />
          <Route path="/:itemType" element={<FilteredItemsPage />} />
          <Route path="/profile-page/:userId" element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
