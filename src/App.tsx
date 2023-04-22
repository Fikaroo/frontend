import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/Landing";
import { useThemeMode } from "flowbite-react";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import NotFound404 from "./pages/NotFound404";
import Category from "./components/Category";
import Quiz from "./components/Quiz";
import Exam from "./pages/Exam";

const App = () => {
  return (
    <div className="w-full min-h-screen text-gray-900">
      <Routes>
        <Route index path="/" element={<LandingPage />} />
        <Route path="/category" element={<Category />} />
        <Route path="/:categorySlugName" element={<Quiz />} />
        <Route
          path="/:categorySlugName/:quizSlugName/exam"
          element={<Exam />}
        />
        <Route path="*" element={<NotFound404 />} />
        <Route path="/auth">
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
