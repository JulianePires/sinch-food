import { useState } from "react";
import { InformationModal } from "../../components/InformationModal";
import store from "../../store";
import { ContactsTable } from "../Contacts/styles";
import { Container, OpenModal, Line } from "./styles";

export function Relatories() {
  const [isInformationModalOpen, setIsInformationModalOpen] = useState(false);

  function handleOpenInformationModal() {
    setIsInformationModalOpen(true);
  }

  function handleCloseInformationModal() {
    setIsInformationModalOpen(false);
  }

  const sends = store.getState().messages.sends;
  return (
    <Container>
      <h1>Veja seus envios</h1>
      <ContactsTable>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Número</th>
            <th>Mensagem</th>
          </tr>
        </thead>
        <tbody>
          {sends !== undefined &&
            sends.map((envio) => {
              console.log(envio);
              return (
                <Line key={sends.indexOf(envio)}>
                  <td>{envio.contact.name}</td>
                  <td>{envio.contact.telephone}</td>
                  <td>
                    <InformationModal
                      text={envio.message.content}
                      template={envio.message.template}
                      food={envio.message.comida}
                      isOpen={isInformationModalOpen}
                      onRequestClose={handleCloseInformationModal}
                    />
                    <OpenModal onClick={handleOpenInformationModal}>
                      Abrir mensagem
                    </OpenModal>
                  </td>
                </Line>
              );
            })}
        </tbody>
      </ContactsTable>
    </Container>
  );
}
