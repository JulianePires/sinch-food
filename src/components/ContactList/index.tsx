import { useEffect, useState } from "react";
import { Contact } from "../../store/ducks/contacts/types";
import { Container } from "./styles";

export function ContactList(props: Contact) {
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    props.allChecked !== undefined && setSelected(props.allChecked);
  }, [props.allChecked]);

  return (
    <Container key={props.id}>
      <td>
        <input
          onClick={() => setSelected(!selected)}
          checked={selected}
          type="checkbox"
          name="selectUser"
          id={`user${props.id}`}
        />
      </td>
      <td>{props.name}</td>
      <td>{props.telephone}</td>
    </Container>
  );
}
