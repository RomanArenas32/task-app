
import { AppRoutes } from "./routes";
import { Footer, Navbar } from "./components";

export const App = () => {
  return (
    <div className="App">
      <Navbar />
      <AppRoutes />
      <Footer />
    </div>
  );
};
