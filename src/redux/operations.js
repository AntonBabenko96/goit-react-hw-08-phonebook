import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../shared/api/contacts';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    return new Promise((resolve, reject) => {
      setTimeout(async () => {
        try {
          const response = await api.getContacts();
          resolve(response.data);
        } catch (e) {
          reject(thunkAPI.rejectWithValue(e.message));
        }
      }, 1000);
    });
  }
);

export const addNewContact = createAsyncThunk(
  'contacts/addNewContact',
  async (contact, thunkAPI) => {
    try {
      const response = await api.addContacts(contact);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const response = await api.deleteContacts(id);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
