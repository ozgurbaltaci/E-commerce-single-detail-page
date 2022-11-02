import logo from "./logo.svg";
import { Routes, Route, Navigate } from "react-router-dom";
import DetailPage from "./DetailPage/DetailPage";
import EmptyPage from "./EmptyPage";

import "./App.css";
import Breadcrumb from "./BreadCrumb/Breadcrumb";

function App() {
  return (
    <div>
      <Routes>
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/" element={<DetailPage />} />
        <Route path="/somePage" element={<EmptyPage />} />
      </Routes>
    </div>
  );
}

export default App;
