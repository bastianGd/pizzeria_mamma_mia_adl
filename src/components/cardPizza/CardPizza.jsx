// CardPizza.js

import { Button, Card } from "react-bootstrap";
import formatNumber from "/src/utils/formateo/Format";
import ListGroup from "react-bootstrap/ListGroup";

const CardPizza = () => {
  return (
    <>
      <div className="d-flex justify-content-evenly flex-wrap">
        {/* Tarjeta para la pizza Napolitana */}
        <Card
          style={{
            width: "28rem",
            marginBottom: "20px",
          }}
        >
          <Card.Img
            variant="top"
            src="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c"
            alt="Napolitana"
          />
          <Card.Body>
            <Card.Title
              className="mb-0"
              style={{ fontSize: "1.5rem", fontWeight: "bold" }}
            >
              Pizza Napolitana
            </Card.Title>
          </Card.Body>

          <ListGroup variant="flush my-2">
            <p
              className="text-center mb-0"
              style={{ color: "grey", fontWeight: "bold" }}
            >
              Ingredientes:
            </p>

            <ListGroup.Item className="text-center">
              <span
                className="text-center"
                role="img"
                aria-label="pizza"
                style={{ marginRight: "5px" }}
              >
                🍕
              </span>
              mozzarella, tomates, jamón, orégano
            </ListGroup.Item>
            <p
              className="text-center my-3"
              style={{ fontSize: "1.5rem", fontWeight: "bold" }}
            >
              Precio: ${formatNumber(5950)}
            </p>

            <Card.Body className="d-flex justify-content-around">
              <Button variant="outline-secondary" size="md">
                Ver Más 👀
              </Button>
              <Button variant="dark" size="md">
                Añadir 🛒
              </Button>
            </Card.Body>
          </ListGroup>
        </Card>
        {/* Tarjeta para la pizza Española */}
        <Card
          style={{
            width: "28rem",
            marginBottom: "20px",
          }}
        >
          <Card.Img
            variant="top"
            src="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.co
m/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-
a1c6-8c57bc388fab"
            alt="Española"
          />
          <Card.Body>
            <Card.Title
              className="mb-0"
              style={{ fontSize: "1.5rem", fontWeight: "bold" }}
            >
              Pizza Española
            </Card.Title>
          </Card.Body>

          <ListGroup variant="flush my-2">
            <p
              className="text-center mb-0"
              style={{ color: "grey", fontWeight: "bold" }}
            >
              Ingredientes:
            </p>

            <ListGroup.Item className="text-center">
              <span
                className="text-center"
                role="img"
                aria-label="pizza"
                style={{ marginRight: "5px" }}
              >
                🍕
              </span>
              mozzarella, pepperoni, orégano
            </ListGroup.Item>
            <p
              className="text-center my-3"
              style={{ fontSize: "1.5rem", fontWeight: "bold" }}
            >
              Precio: ${formatNumber(6950)}
            </p>

            <Card.Body className="d-flex justify-content-around">
              <Button variant="outline-secondary" size="md">
                Ver Más 👀
              </Button>
              <Button variant="dark" size="md">
                Añadir 🛒
              </Button>
            </Card.Body>
          </ListGroup>
        </Card>
        {/*Pepperoni*/}
        <Card
          style={{
            width: "28rem",
            marginBottom: "20px",
          }}
        >
          <Card.Img
            variant="top"
            src="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.co
m/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040-
ac54-90f6c31eb3e3"
            alt="Pepperoni"
          />
          <Card.Body>
            <Card.Title
              className="mb-0"
              style={{ fontSize: "1.5rem", fontWeight: "bold" }}
            >
              Pizza Pepperoni
            </Card.Title>
          </Card.Body>

          <ListGroup variant="flush my-2">
            <p
              className="text-center mb-0"
              style={{ color: "grey", fontWeight: "bold" }}
            >
              Ingredientes:
            </p>

            <ListGroup.Item className="text-center">
              <span
                className="text-center"
                role="img"
                aria-label="pizza"
                style={{ marginRight: "5px" }}
              >
                🍕
              </span>
              mozzarella, pepperoni, orégano
            </ListGroup.Item>
            <p
              className="text-center my-3"
              style={{ fontSize: "1.5rem", fontWeight: "bold" }}
            >
              Precio: ${formatNumber(6950)}
            </p>

            <Card.Body className="d-flex justify-content-around">
              <Button variant="outline-secondary" size="md">
                Ver Más 👀
              </Button>
              <Button variant="dark" size="md">
                Añadir 🛒
              </Button>
            </Card.Body>
          </ListGroup>
        </Card>
      </div>
    </>
  );
};

export default CardPizza;
