import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  addContactsToList,
  removeContactFromList,
} from "../../store/ducks/messages/actions";
import { Container } from "./styles";

interface ContactListProps {
  id: number;
  name: string;
  telephone: string;
  selected: boolean;
}

export function ContactList(props: ContactListProps) {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    setSelected(props.selected)
  },[props.selected])

  const handleAddContact = useCallback(() => {
    dispatch(addContactsToList(props.id, props.name, props.telephone));
  }, [dispatch, props.id, props.name, props.telephone]);

  const handleRemoveContact = useCallback(() => {
    dispatch(removeContactFromList(props.id));
  }, [dispatch, props.id]);

  return (
    <Container key={props.id}>
      <td>
        <input
          onChange={(e) =>
            e.target.checked === true
              ? handleAddContact()
              : handleRemoveContact()
          }
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
