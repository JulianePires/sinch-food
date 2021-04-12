import { Link } from "react-router-dom";
import { ContactsTable, Container, Controllers } from "./styles";

export function Contacts() {
  return (
    <>
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
          <tbody></tbody>
        </ContactsTable>
      </Container>
      <Controllers>
        <button>Cancelar</button>
        <button>
          <Link to="/message">Próximo</Link>
        </button>
      </Controllers>
    </>
  );
}
