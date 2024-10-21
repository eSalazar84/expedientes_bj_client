import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./features/dashboard/Dashboard";
import NuevoExpediente from "./features/add_expedientes/NuevoExpediente";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/nuevo-expediente" element={<NuevoExpediente />} />
    </Routes>
  )
}

export default App;