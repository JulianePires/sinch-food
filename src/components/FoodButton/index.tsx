import { Food } from "./styles";

interface FoodButtonProps {
  name: "Lanche" | "Sushi" | "Pizza" | "Pastel";
  onClick: () => void;
}

export function FoodButton({ name, onClick }: FoodButtonProps) {
  return <Food className="food-button" onClick={onClick}>{name}</Food>;
}
