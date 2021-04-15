import Modal from "react-modal";
import { CloseButton, Container } from "./styles";

interface InformationModalProps {
  text: string;
  template: string;
  food: string;
  isOpen: boolean;
  onRequestClose(): void;
}

export function InformationModal({
  text,
  template,
  food,
  isOpen,
  onRequestClose,
}: InformationModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      ariaHideApp={false}
    >
      <h2>Informações do envio</h2>
      <button className="react-modal-close" onClick={onRequestClose}>x</button>
      <Container>
        <strong>Texto: </strong>
        <p>{text}</p>
        <strong>Template: </strong>
        <p>{template}</p>
        <strong>Comida: </strong>
        <p>{food}</p>
      </Container>
      <CloseButton onClick={onRequestClose}>OK</CloseButton>
    </Modal>
  );
}
