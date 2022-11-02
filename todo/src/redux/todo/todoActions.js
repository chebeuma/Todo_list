import { ADD, DELETE } from "./todotypes";

export const add = (payload) => {
  return {
    type: ADD,
    payload,
  };
};
export const del = (payload) => {
  return {
    type: DELETE,
    payload,
  };
};
