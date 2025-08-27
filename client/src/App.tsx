import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Profile from "./pages/profile";
import NotFound from "./components/page_components/common/not-found";

function App() {
  return(
  <Routes>
        <Route path='/' element={<Home/>} />
         <Route path='/profile' element={<Profile/>} />
         <Route path="*" element={<NotFound/>}/>
  </Routes>
  );

}

export default App;
