import { createSlice } from '@reduxjs/toolkit';

const userList = [
  {
    name: 'Alex Waweru',
    email: 'ngashalex8@gmail.com',
    id: 1,
  },
  {
    name: "Gloris Ng'ang'a",
    email: 'gloris@gmail.com',
    id: 2,
  },
  {
    name: 'Peter Kioko',
    email: 'peterkioko@gmail.com',
    id: 3,
  },
];

const userSlice = createSlice({
  name: 'users',
  initialState: userList,
  reducers: {
    addUsers: (state, action) => {
      state.push(action.payload);
    },
    updateUser: (state, action) => {
      const { id, name, email } = action.payload;
      const userToUpdate = state.find((user) => user.id == id);

      if (userToUpdate) {
        userToUpdate.name = name;
        userToUpdate.email = email;
      }
    },
    deleteUser: (state, action) => {
      const { id } = action.payload;
      const userIndex = state.findIndex((user) => user.id === id);

      if (userIndex !== -1) {
        state.splice(userIndex, 1);
      }
    },
  },
});

export const { addUsers, updateUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
