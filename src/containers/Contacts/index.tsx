import { Link } from "react-router-dom";

import { ContactList } from "../../components/ContactList";
import { Contact } from "../../store/ducks/contacts/types";
import { useEffect, useState } from "react";

import api from "../../services/api";

import { ContactsTable, Container, Controllers } from "./styles";

export function Contacts() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [isAllChecked, setIsAllChecked] = useState(false);

  function handleSetAllChecked() {
    setIsAllChecked(!isAllChecked);
  }

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
                  checked={isAllChecked}
                  onClick={handleSetAllChecked}
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
                  allChecked={isAllChecked}
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
