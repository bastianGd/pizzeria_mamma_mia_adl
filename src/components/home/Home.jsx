import Header from "../header/Header"
import CardPizza from "../cardPizza/CardPizza"

const Home = () => {
  return (
    <>
      <div className="content-wrapper">
        <Header />
        <div className="container mx-5 my-2 px-5">
          <h1>Menú</h1>
          <hr />
        </div>
        <CardPizza />
      </div>
    </>
  );
};

export default Home;
