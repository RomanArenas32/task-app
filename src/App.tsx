
import  AppRoutes  from "./routes";
import  {Footer, Navbar}  from "./layout";


if (!navigator.geolocation) {
  alert("Recommended: Enable your geolocation for a better experience");
  throw new Error("Recommended: Enable your geolocation for a better experience")
}

export const App:React.FC = () => {
  return (
    <div>
      <Navbar />
      <AppRoutes />
      <Footer />
    </div>
  );
};
