import {
  ADD_MEMORY,
  GET_ALL_MEMORIES,
  UPDATE_MEMORY,
  DELETE_MEMORY,
  SET_PENDING,
  GET_ALL_MEMORIES_REFRESH,
  DESTROY_MEMORIES,
  SET_DARK_MODE,
  baseUrl,
} from './types';
import axios from 'axios';

export const addMemory = (data) => async (dispatch) => {
  try {
    const response = await axios.post(`${baseUrl}/memory`, data);
    dispatch(getAllMemoriesRefresh(1, 20));
  } catch (error) {
    console.log(error);
  }
};

export const getAllMemoriesRefresh = (page, limit) => async (dispatch) => {
  dispatch({
    type: SET_PENDING,
    payload: true,
  });

  try {
    const response = await axios.get(
      `${baseUrl}/memory?page=${page}&limit=${limit}`,
    );
    await dispatch({
      type: GET_ALL_MEMORIES_REFRESH,
      payload: response.data,
    });
    dispatch({
      type: SET_PENDING,
      payload: false,
    });
  } catch (error) {
    console.log(error.response);
    dispatch({
      type: SET_PENDING,
      payload: false,
    });
  }
};

export const getAllMemories = (page, limit, refresh) => async (dispatch) => {
  if (refresh) {
    dispatch({
      type: SET_PENDING,
      payload: true,
    });
  }

  try {
    const response = await axios.get(
      `${baseUrl}/memory?page=${page}&limit=${limit}`,
    );
    await dispatch({
      type: GET_ALL_MEMORIES,
      payload: response.data,
    });
    dispatch({
      type: SET_PENDING,
      payload: false,
    });
  } catch (error) {
    console.log(error.response);
    dispatch({
      type: SET_PENDING,
      payload: false,
    });
  }
};

export const deleteMemory = (id) => async (dispatch) => {
  try {
    const response = await axios.delete(`${baseUrl}/memory/${id}`);
    dispatch({
      type: DELETE_MEMORY,
      payload: id,
    });
  } catch (error) {
    console.log(error.response);
  }
};

export const updateMemory = (id, data) => async (dispatch) => {
  try {
    const response = await axios.put(`${baseUrl}/memory/${id}`, data);
    dispatch({
      type: UPDATE_MEMORY,
      payload: response.data,
    });
  } catch (error) {
    console.log(error.response);
  }
};

export const deleteMemoryImage = (id, fileName) => async (dispatch) => {
  try {
    const response = await axios.put(`${baseUrl}/memory/imageDelete/${id}`, {
      fileName,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const destroyMemories = () => async (dispatch) => {
  try {
    dispatch({
      type: DESTROY_MEMORIES,
    });
  } catch (error) {
    console.log(error);
  }
};

export const darkMode = (mode) => async (dispatch) => {
  dispatch({
    type: SET_DARK_MODE,
    payload: mode,
  });
};
