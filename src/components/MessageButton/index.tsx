import { Message } from "./styles";

interface MessageProps {
  type: "restaurante" | "cupom";
  value?: "R$10" | "R$20";
  onClick: () => void;
}

export function MessageButton({ type, value, onClick }: MessageProps) {
  return type === "restaurante" ? (
    <Message onClick={onClick}>Aviso de novo restaurante</Message>
  ) : (
    <Message onClick={onClick}>Cupom {value}</Message>
  );
}
