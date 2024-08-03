import { createSelector, createSlice } from "@reduxjs/toolkit";
import { addNewContact, deleteContact, editContact, fetchContacts } from "./operations";
import { logout } from "../auth/operations"
import { selectNameFilter } from "../filters/slice";
import { selectContacts } from "./selectors"

const contactsSlice = createSlice({
    name: "contacts",
    initialState: {
        items: [],
        editedItems: [],
        loading: false,
        error: false,

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchContacts.pending, (state) => {
                state.loading = true
                state.error = false
            })
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.loading = false
                state.items = action.payload
            })
            .addCase(fetchContacts.rejected, (state) => {
                state.loading = false
                state.error = true
            })
            .addCase(addNewContact.pending, (state) => {
                state.loading = true
                state.error = false
            })
            .addCase(addNewContact.fulfilled, (state, action) => {
                state.loading = false
                state.items = [...state.items, action.payload]
            })
            .addCase(addNewContact.rejected, (state) => {
                state.loading = false
                state.error = true
            })
            .addCase(deleteContact.pending, (state) => {
                state.loading = true
                state.error = false
            })
            .addCase(deleteContact.fulfilled, (state, action) => {
                state.loading = false
                state.items = state.items
                    .filter(item => item.id !== action.payload.id
                    )
            })
            .addCase(deleteContact.rejected, (state) => {
                state.loading = false
                state.error = true
            })
            .addCase(editContact.pending, (state) => {
                state.loading = true
                state.error = false
            })
            .addCase(editContact.fulfilled, (state, action) => {
                state.loading = false
                state.error = false
                const index = state.items.findIndex(item => item.id === action.payload.id)
                state.items[index] = action.payload
                state.editedItems = [...state.editedItems, action.payload.id]
            })
            .addCase(editContact.rejected, (state) => {
                state.loading = false
                state.error = true
            })
            .addCase(logout.fulfilled, (state) => {
                state.items = []
                state.loading = false
                state.error = false
            })
    }
})

export default contactsSlice.reducer

export const selectFilteredContacts = createSelector(
    [selectContacts, selectNameFilter]
    , (contactsList, filterList) => {
        return contactsList.filter((contact) =>
            contact.name.toLowerCase().includes(filterList.toLowerCase()))
    })

