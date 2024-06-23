import { Route, Routes } from "react-router-dom";
import { Guides, About } from "../pages";
import { TodoTask } from "../todo";

const AppRoutes:React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<TodoTask />} />
      <Route path="/guides" element={<Guides />} />
      <Route path="/about" element={<About />} />
      <Route path="/*" element={<TodoTask />} />
    </Routes>
  );
};

export default AppRoutes;