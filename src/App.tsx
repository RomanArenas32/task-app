
import  AppRoutes  from "./routes";
import  Footer  from "./components/Footer";
import  Navbar  from "./components/Navbar";

if (!navigator.geolocation) {
  alert("Recommended: Enable your geolocation for a better experience");
  throw new Error("Recommended: Enable your geolocation for a better experience")
}

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