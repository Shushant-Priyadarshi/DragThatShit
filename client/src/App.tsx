import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import DashBoard from "./pages/dashboard";
import NotFound from "./components/page_components/common/not-found";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashBoard" element={<DashBoard />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
