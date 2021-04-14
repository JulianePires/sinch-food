import { ContactsTable } from "../Contacts/styles";
import { Container } from "./styles";

export function Relatories() {
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

        </tbody>
      </ContactsTable>
    </Container>
  );
}
