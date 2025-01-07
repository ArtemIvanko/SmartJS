import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Outlet } from "src/components/Outlet";

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Outlet />}>
        <Route path="*" element={<div>Not Found</div>} />
      </Route>
    </Routes>
  </BrowserRouter>
);
