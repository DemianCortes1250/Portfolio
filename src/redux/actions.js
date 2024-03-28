import { ADD_PROJECT } from './actionTypes';

export const agregarProyecto = (proyecto) => {
  return {
    type: ADD_PROJECT,
    payload: proyecto
  };
};