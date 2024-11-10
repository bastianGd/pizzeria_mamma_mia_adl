import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import NavbarPizza from "./components/navbar/NavbarPizza";
import UserReg from "./components/register/UserReg";


function App() {
  return (
    <>
      <NavbarPizza />
      <div className="app-container">
        {/* <Home /> */}
        <UserReg />
      </div>
      <Footer />
    </>
  );
}

export default App;
