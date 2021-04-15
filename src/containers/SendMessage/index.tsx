/* eslint-disable react-hooks/exhaustive-deps */
import { FormEvent, useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { FoodButton } from "../../components/FoodButton";
import { MessageButton } from "../../components/MessageButton";
import { pushSend } from "../../store/ducks/messages/actions";
import { Message } from "../../store/ducks/messages/types";
import { Container, Controllers } from "./styles";

export function SendMessage() {
  const [food, setFood] = useState("");
  const [template, setTemplate] = useState("");
  const [placeholder, setPlaceholder] = useState("");
  const dispatch = useDispatch();

  const pushSendState = useCallback(
    (message: Message) => {
      dispatch(pushSend(message));
    },
    [dispatch]
  );

  function handleSetMessage(event: FormEvent) {
    event.preventDefault();
    const text = document.querySelector("textarea")?.value;
    text !== undefined &&
      pushSendState({
        content: text,
        template: template,
        comida: food,
      });
  }

  return (
    <>
      <Container>
        <h1>Monte sua mensagem</h1>

        <h2>Tipo de mensagem</h2>
        <section>
          <MessageButton
            onClick={() => {
              setPlaceholder(
                `Olá, você tem um cupom disponível de R$10 na compra de `
              );
              food === "" && alert("Você deve selecionar uma comida!");
              setTemplate("Cupom");
            }}
            value="R$10"
            type="cupom"
          />
          <MessageButton
            onClick={() => {
              setPlaceholder(
                `Olá, você tem um cupom disponível de R$20 na compra de `
              );
              food === "" && alert("Você deve selecionar uma comida!");
              setTemplate("Cupom");
            }}
            value="R$20"
            type="cupom"
          />
          <MessageButton
            onClick={() => {
              setPlaceholder(
                "Restaurante novo na área! Venha já conferir em nosso app!"
              );
              setFood("");
              setTemplate("Restaurante");
            }}
            type="restaurante"
          />
        </section>

        <h2>Tipo de comida</h2>
        <section>
          <FoodButton
            onClick={() => {
              placeholder !== "" && template === "Cupom"
                ? setFood("Lanche")
                : alert("Selecione um cupom");
            }}
            name="Lanche"
          />
          <FoodButton
            onClick={() => {
              placeholder !== "" && template === "Cupom"
                ? setFood("Pastel")
                : alert("Selecione um cupom");
            }}
            name="Pastel"
          />
          <FoodButton
            onClick={() => {
              placeholder !== "" && template === "Cupom"
                ? setFood("Pizza")
                : alert("Selecione um cupom");
            }}
            name="Pizza"
          />
          <FoodButton
            onClick={() => {
              placeholder !== "" && template === "Cupom"
                ? setFood("Sushi")
                : alert("Selecione um cupom");
            }}
            name="Sushi"
          />
        </section>

        <h2>Mensagem</h2>
        <textarea
          value={`${placeholder}${food}`}
          onChange={(e) => {
            e.target.value = `${placeholder}${food}`;
          }}
          required
        />
      </Container>
      <Controllers>
        <button>
          <Link to="/">Voltar</Link>
        </button>
        <button type="submit" onClick={handleSetMessage}>
          <Link to="/relatories">Enviar</Link>
        </button>
      </Controllers>
    </>
  );
}
