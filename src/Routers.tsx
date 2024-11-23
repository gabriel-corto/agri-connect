import { Route, Routes } from "react-router-dom";
import { Landing } from "./layouts/Landing";
import { Home } from "./pages/Home";

export function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Landing />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  )
}