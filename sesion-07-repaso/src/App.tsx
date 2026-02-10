import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import FormTodoList from "./pages/form-basico/FormTodoList";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to ="/form-todo" replace/>}></Route>
        <Route path="/form-todo" element={<FormTodoList />}></Route>
      </Routes>
    </div>
  );
};

export default App;
