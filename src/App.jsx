import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import NavbarPizza from "./components/navbar/NavbarPizza";


function App() {
  return (
    <>
    <NavbarPizza/>
      <div className="app-container">
        <div className="content-wrapper">
          <Home />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
