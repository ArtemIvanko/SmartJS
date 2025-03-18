import { Outlet as RootOutlet } from "react-router-dom";
import { Navigation } from "@/pages/Navigation/Navigation";

export const Outlet = () => (
  <div>
    <Navigation />
    <RootOutlet />
  </div>
);
