import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import Home from "./components/home/Home" 
import Footer from "./components/footer/Footer";
// import FormUser from "./components/register/FormUser";
import NavbarPizza from "./components/navbar/NavbarPizza";
import UserLog from "./components/login/UserLog";

function App() {
  return (
    <>
      <NavbarPizza />
      <div className="app-container">
        {/* <Home/> */}
        {/* <FormUser /> */}
        <UserLog/>
      </div>
      <Footer />
    </>
  );
}

export default App;
