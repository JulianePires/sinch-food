import { action } from "typesafe-actions";
import api from "../../../services/api";
import { ContactsTypes, Contact } from "./types";

export const loadRequest = () => action(ContactsTypes.LOAD_REQUEST);

export const loadSuccess = (data: Contact[]) =>
  action(ContactsTypes.LOAD_SUCCESS, { data });

export const loadFailure = () => action(ContactsTypes.LOAD_FAILURE);

export const getContacts = () => ({
  type: [loadRequest, loadSuccess, loadFailure],
  payload: {
    data: () => api.get(`/contacts`),
  },
});

export const setSelected = (id: number, data: Contact[]) =>
  action(ContactsTypes.SET_SELECTED, id, { data });
