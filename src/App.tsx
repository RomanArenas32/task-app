
import  AppRoutes  from "./routes";
import  Footer  from "./components/Footer";
import  Navbar  from "./components/Navbar";


const App:React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <AppRoutes />
      <Footer />
    </div>
  );
};

export default App;