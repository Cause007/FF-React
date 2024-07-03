import {createSlice } from '@reduxjs/toolkit'

const rootSlice = createSlice({
    name: "root",
    initialState: {
        FirstName: "First Name",
        LastName: "Last Name",
        Photo: "Student Photo",
        Parent1: "Parent 1 Name",
        Parent2: "Parent 2 Name",
        Phone1: "Parent 1 Phone",
        Phone2: "Parent 2 Phone",
        Email1: "Parent 1 Email",
        Email2: "Parent 2 Email",
        Address1: "Parent 1 Address",
        Address2: "Parent 2 Address"
    },
    reducers: {
        chooseFirstName: (state, action) => {state.FirstName = action.payload},
        chooseLastName: (state, action) => {state.LastName = action.payload},
        choosePhoto: (state, action) => {state.Photo = action.payload},
        chooseParent1: (state, action) => {state.Parent1 = action.payload},
        chooseParent2: (state, action) => {state.Parent2 = action.payload},
        choosePhone1: (state, action) => {state.Phone1 = action.payload},
        choosePhone2: (state, action) => {state.Phone2 = action.payload},
        chooseEmail1: (state, action) => {state.Email1 = action.payload},
        chooseEmail2: (state, action) => {state.Email2 = action.payload},
        chooseAddress1: (state, action) => {state.Address1 = action.payload},
        chooseAddress2: (state, action) => {state.Address2 = action.payload}
    }
})

export const reducer = rootSlice.reducer;
export const { chooseFirstName, chooseLastName, choosePhoto, chooseParent1, chooseParent2, choosePhone1, choosePhone2, chooseEmail1, chooseEmail2, 
    chooseAddress1, chooseAddress2 } = rootSlice.actions
