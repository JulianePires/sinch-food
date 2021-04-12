/* eslint-disable react-hooks/exhaustive-deps */
import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { FoodButton } from "../../components/FoodButton";
import { MessageButton } from "../../components/MessageButton";
import { Container, Controllers } from "./styles";

export function SendMessage() {
  const [food, setFood] = useState("");
  const [message, setMessage] = useState("");
  const [content, setContent] = useState("");

  function handleSendMessage(event: FormEvent) {
    event.preventDefault();
  }

  return (
    <>
      <Container>
        <h1>Monte sua mensagem</h1>

        <h2>Tipo de mensagem</h2>
        <section>
          <MessageButton
            onClick={() => {
              setMessage(
                `Olá, você tem um cupom disponível de R$10 na compra de `
              );
            }}
            value="R$10"
            type="cupom"
          />
          <MessageButton
            onClick={() => {
              setMessage(
                `Olá, você tem um cupom disponível de R$20 na compra de `
              );
            }}
            value="R$20"
            type="cupom"
          />
          <MessageButton
            onClick={() => {
              setMessage(
                "Restaurante novo na área! Venha já conferir em nosso app!"
              );
              setFood("");
            }}
            type="restaurante"
          />
        </section>

        <h2>Tipo de comida</h2>
        <section>
          <FoodButton
            onClick={() => {
              setFood("Lanche");
            }}
            name="Lanche"
          />
          <FoodButton
            onClick={() => {
              setFood("Pastel");
            }}
            name="Pastel"
          />
          <FoodButton
            onClick={() => {
              setFood("Pizza");
            }}
            name="Pizza"
          />
          <FoodButton
            onClick={() => {
              setFood("Sushi");
            }}
            name="Sushi"
          />
        </section>

        <h2>Mensagem</h2>
        <textarea
          value={message + food}
          onChange={(event) => {
            setContent(event.target.value);
          }}
        />
      </Container>
      <Controllers>
        <button>
          <Link to="/">Voltar</Link>
        </button>
        <button type="submit" onClick={handleSendMessage}>
          Enviar
        </button>
      </Controllers>
    </>
  );
}
