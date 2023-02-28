import { createSlice } from '@reduxjs/toolkit'

export const contactSlice = createSlice({
    name: 'contact',
    initialState: {
        name: '',
        lastSeen: '',
        status: '',
        profilePic: '',
        messages: []
    },
    reducers: {
        setContact: (state, action) => {
            state.name = action.payload.name
            state.lastSeen = action.payload.lastSeen
            state.status = action.payload.status
            state.profilePic = action.payload.profilePic
            state.messages = action.payload.messages
        },
        removeContact: (state) => {
            state.name = ''
            state.lastSeen = ''
            state.status = ''
            state.profilePic = ''
            state.messages = []
        },
        addMessage: (state, action) => {
            state.messages.push(action.payload)
        },
        removeMessage: (state, action) => {
            state.messages.splice(action.payload, 1)
        },

    }
})

export const { setContact, removeContact, addMessage, removeMessage } = contactSlice.actions

export default contactSlice.reducer