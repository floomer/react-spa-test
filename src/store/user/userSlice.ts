import { createSlice } from '@reduxjs/toolkit';
import { IUser } from '../../types/IUser';

interface UserState extends IUser {
  isArchived: boolean;
}
const initialState: UserState[] = [];
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action) => {
      action.payload.forEach((user: UserState) => {
        state.push({ ...user, isArchived: false });
      });
      const lastUser = state[state.length - 1];
      if (lastUser) {
        lastUser.isArchived = true;
      }
    },
    addOneUser: (state, action) => {
      state.push({ ...action.payload, isArchived: false });
    },
    archiveUser: (state, action) => {
      const user = state.find((user) => user.id === action.payload);
      if (user) {
        user.isArchived = true;
      }
    },
    unArchiveUser: (state, action) => {
      const user = state.find((user) => user.id === action.payload);
      if (user) {
        user.isArchived = false;
      }
    },
    hideUser: (state, action) => {
      const currentUserIndex = state.findIndex((user) => user.id === action.payload);
      state.splice(currentUserIndex, 1);
    },
    editUser: (state, action) => {
      const currentUserIndex = state.findIndex((user) => user.id === action.payload.id);
      state[currentUserIndex] = action.payload;
    },
  },
});

export const { addUser, archiveUser, unArchiveUser, hideUser, addOneUser, editUser } =
  userSlice.actions;
export default userSlice.reducer;
