import { Outlet } from "react-router-dom";
import Navbar from "./components/common/navbar";
import Footer from "./components/common/footer";

function App() {
  return (
    <div>
      {/* Navbar */}
      <div>
        <Navbar />
      </div>

      {/* Main Content */}
      <div className=" px-4 mt-12">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}

export default App;
