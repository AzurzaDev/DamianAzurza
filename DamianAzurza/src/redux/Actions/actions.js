
import axios from 'axios';

import {
REGISTER_SUCCESS ,
 REGISTER_FAIL ,
 LOGIN_SUCCESS ,
 LOGIN_FAIL ,
 USER_LOGOUT,
 CREATE_CONTACT_SUCCESS ,
 CREATE_CONTACT_FAIL ,
 GET_ALL_CONTACTS_SUCCESS ,
 GET_ALL_CONTACTS_FAIL ,

 CREATE_SHOW_SUCCESS ,
 CREATE_SHOW_FAIL ,
 GET_ALL_SHOWS_SUCCESS ,
 GET_ALL_SHOWS_FAIL ,
 GET_SHOW_SUCCESS ,
 GET_SHOW_FAIL ,
 UPDATE_SHOW_REQUEST,
  UPDATE_SHOW_SUCCESS,
  UPDATE_SHOW_FAILURE,
  DELETE_SHOW_REQUEST,
  DELETE_SHOW_SUCCESS,
  DELETE_SHOW_FAILURE,

} from './actions-types'

export const registerAdmin = (adminData) => async (dispatch) => {
    try {
        const response = await axios.post('/auth/register', adminData);
        dispatch({
            type: REGISTER_SUCCESS,
            payload: response.data
        });
    } catch (error) {
        dispatch({
            type: REGISTER_FAIL,
            payload: error.response.data.message
        });
    }
};


export const loginAdmin = (adminData) => async (dispatch) => {
    try {
        const response = await axios.post('/auth/login', adminData);
        dispatch({
            type: LOGIN_SUCCESS,
            payload: response.data
        });
        return response.data; // Agrega esta línea
    } catch (error) {
        dispatch({
            type: LOGIN_FAIL,
            payload: error.response.data.message
        });
        throw error; // Lanza el error para manejarlo en el componente
    }
};
export const logout = () => (dispatch) => {
    // Limpia el estado de usuario en Redux
    dispatch({ type: USER_LOGOUT });
    
    // Opcional: Elimina el token de autenticación del almacenamiento local
    localStorage.removeItem('adminInfo');
  };


export const createContact = (contactData) => async (dispatch) => {
    try {
        const response = await axios.post('/contacts', contactData);
        dispatch({
            type: CREATE_CONTACT_SUCCESS,
            payload: response.data
        });
    } catch (error) {
        dispatch({
            type: CREATE_CONTACT_FAIL,
            payload: error.response.data.message
        });
    }
};

// Acción para obtener todos los contactos
export const getAllContacts = () => async (dispatch) => {
    try {
        const response = await axios.get('/contacts');
        dispatch({
            type: GET_ALL_CONTACTS_SUCCESS,
            payload: response.data
        });
    } catch (error) {
        dispatch({
            type: GET_ALL_CONTACTS_FAIL,
            payload: error.response.data.message
        });
    }
};

export const createShow = (showData) => async (dispatch) => {
    try {
        const response = await axios.post('/shows', showData);
        dispatch({
            type: CREATE_SHOW_SUCCESS,
            payload: response.data
        });
    } catch (error) {
        dispatch({
            type: CREATE_SHOW_FAIL,
            payload: error.response.data.message
        });
    }
};

// Obtener todos los shows
export const getAllShows = () => async (dispatch) => {
    try {
        const response = await axios.get('/shows');
       console.log(response)
        dispatch({
            type: GET_ALL_SHOWS_SUCCESS,
            payload: response.data
        });
    } catch (error) {
        dispatch({
            type: GET_ALL_SHOWS_FAIL,
            payload: error.response.data.message
        });
    }
};

// Obtener un show por ID
export const getShowById = (idShow) => async (dispatch) => {
    try {
        const response = await axios.get(`/shows/${idShow}`);
        dispatch({
            type: GET_SHOW_SUCCESS,
            payload: response.data
        });
    } catch (error) {
        dispatch({
            type: GET_SHOW_FAIL,
            payload: error.response.data.message
        });
    }
};

export const updateShow = (idShow, updatedShowData) => async (dispatch) => {
    dispatch({ type: UPDATE_SHOW_REQUEST });
  
    try {
      const response = await axios.put(`/shows/${idShow}`, updatedShowData);
      dispatch({ type: UPDATE_SHOW_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({
        type: UPDATE_SHOW_FAILURE,
        payload: error.response?.data?.message || 'Error al actualizar el show',
      });
    }
  };
  
  // Action para eliminar un show
  export const deleteShow = (idShow) => async (dispatch) => {
    dispatch({ type: DELETE_SHOW_REQUEST });
  
    try {
      await axios.delete(`/shows/${idShow}`);
      dispatch({ type: DELETE_SHOW_SUCCESS, payload: idShow });  // Podrías usar solo el ID para removerlo en el frontend
    } catch (error) {
      dispatch({
        type: DELETE_SHOW_FAILURE,
        payload: error.response?.data?.message || 'Error al eliminar el show',
      });
    }
  };