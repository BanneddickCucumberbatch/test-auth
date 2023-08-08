import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: null,
    token: null,
    id: null,
    firstName: null,
    lastName: null,
    age: null
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.id = action.payload.id;
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.age = action.payload.age;
        },
        removeUser(state) {
            state.email = null;
            state.token = null;
            state.id = null;
            state.firstName = null;
            state.lastName = null;
            state.age = null;
        }
    }
});

export const {setUser, removeUser} = userSlice.actions;
export default userSlice.reducer