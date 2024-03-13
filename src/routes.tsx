import { Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home";
import { Perfil } from "./pages/Perfil";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/perfil" Component={Perfil} />
    </Routes>
  );
};

export default MainRoutes;
