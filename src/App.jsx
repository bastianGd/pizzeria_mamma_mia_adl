import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/footer/Footer";
import FormUser from "./components/register/FormUser";
import NavbarPizza from "./components/navbar/NavbarPizza";

function App() {
  return (
    <>
      <NavbarPizza />
      <div className="app-container">
        <FormUser />
      </div>
      <Footer />
    </>
  );
}

export default App;
