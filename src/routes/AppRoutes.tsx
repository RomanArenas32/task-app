import { Route, Routes } from "react-router-dom";
import { Guides, About, Home } from "../pages";
import { TodoTask } from "../todo";

const AppRoutes:React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/guides" element={<Guides />} />
      <Route path="/about" element={<About />} />
      <Route path="/task" element={<TodoTask />} />
      <Route path="/*" element={<Home />} />
    </Routes>
  );
};

export default AppRoutes;