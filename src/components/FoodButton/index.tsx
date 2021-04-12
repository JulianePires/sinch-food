import { Food } from "./styles";

interface FoodButtonProps {
  name: "Lanche" | "Sushi" | "Pizza" | "Pastel";
  onClick: () => void;
}

export function FoodButton({ name, onClick }: FoodButtonProps) {
  return <Food onClick={onClick}>{name}</Food>;
}
