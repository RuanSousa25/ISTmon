import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";

import Home from "./pages/Home/Home";
import Activities from "./pages/Activities/Activities";
import Catalog from "./pages/Catalog/Catalog";
import Classes from "./pages/Classes/Classes";
import Atividade from "./pages/Atividade/Atividade";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/activitie" element={<Atividade />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
