import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import Footer from "./components/Footer";
import NavbarPizza from "./components/NavbarPizza";


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
