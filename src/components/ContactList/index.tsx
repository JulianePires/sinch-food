import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import {
  addContactsToList,
  removeContactFromList,
} from "../../store/ducks/messages/actions";
import { Contact } from "../../store/ducks/messages/types";
import { Container } from "./styles";

export function ContactList(props: Contact) {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState(false);

  const handleAddContact = useCallback(() => {
    const newContact = {
      id: props.id,
      name: props.name,
      telephone: props.telephone,
    };
    dispatch(addContactsToList(newContact));
  }, [dispatch, props.id, props.name, props.telephone]);

  const handleRemoveContact = useCallback(() => {
    const newContact = {
      id: props.id,
      name: props.name,
      telephone: props.telephone,
    };
    dispatch(removeContactFromList(newContact));
  }, [dispatch, props.id, props.name, props.telephone]);

  function handleSelectContact() {
    if (selected === true) {
      handleRemoveContact();
      setSelected(false);
    } else {
      handleAddContact();
      setSelected(true);
    }
  }

  return (
    <Container key={props.id}>
      <td>
        <input
          onChange={handleSelectContact}
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
