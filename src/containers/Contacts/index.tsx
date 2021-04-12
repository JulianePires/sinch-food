import { ContactsTable, Container } from "./styles";

export function Contacts() {
  return (
    <Container>
      <h1>Selecione os contatos</h1>
      <ContactsTable>
        <thead>
          <tr>
            <th>
              <input type="checkbox" name="selectAll" id="selectAll" />
            </th>
            <th>Nome</th>
            <th>Número</th>
          </tr>
        </thead>
      </ContactsTable>
    </Container>
  );
}
