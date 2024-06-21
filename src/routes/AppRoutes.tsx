import { Route, Routes } from "react-router-dom";
import { Guides, Task, About } from "../pages";


export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Task />} />
      <Route path="/guides" element={<Guides />} />
      <Route path="/about" element={<About />} />
      <Route path="/*" element={<Task />} />
    </Routes>
  );
};
