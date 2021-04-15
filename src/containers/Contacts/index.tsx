import { Link } from "react-router-dom";

import { ContactList } from "../../components/ContactList";
import { Contact } from "../../store/ducks/messages/types";
import { useEffect, useState } from "react";

import api from "../../services/api";

import { ContactsTable, Container, Controllers } from "./styles";

export function Contacts() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [selectAll, setSelectAll] = useState(false);

  useEffect(() => {
    api
      .get("/contacts")
      .then((response) => setContacts(response.data.contacts));
  }, []);

  return (
    <>
      <Container>
        <h1>Selecione os contatos</h1>
        <ContactsTable>
          <thead>
            <tr>
              <th>
                <input
                  type="checkbox"
                  name="selectAll"
                  id="selectAll"
                  onClick={() => setSelectAll(!selectAll)}
                  checked={selectAll}
                />
              </th>
              <th>Nome</th>
              <th>Número</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => {
              return (
                <ContactList
                  id={contact.id}
                  name={contact.name}
                  telephone={contact.telephone}
                  selected={selectAll}
                />
              );
            })}
          </tbody>
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
