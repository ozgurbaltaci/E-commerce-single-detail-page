import logo from "./logo.svg";
import { Routes, Route, Navigate } from "react-router-dom";
import DetailPage from "./DetailPage";
import EmptyPage from "./EmptyPage";

import "./App.css";
import Breadcrumb from "./Breadcrumb";

function App() {
  return (
    <div>
      {/* breadcrum */}
      <Routes>
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/" element={<DetailPage />} />
        <Route path="/somePage" element={<EmptyPage />} />
      </Routes>

      {/* product container (sadece içe margin vermek için) */}
      {/*   sol ve sağı kapsayan div */}
      {/*     sol div */}
      {/*       image container */}
      {/*       foto galeri slider */}

      {/* breadcrum */}
      {/* breadcrum */}
      {/* breadcrum */}
    </div>
  );
}

export default App;
