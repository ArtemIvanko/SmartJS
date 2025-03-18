import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Outlet } from "src/components/Outlet";
import { Home } from "@/pages/Home";

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Outlet />}>
        <Route index element={<Navigate to="home" />} />
        <Route path="home" element={<Home />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Route>
    </Routes>
  </BrowserRouter>
);
