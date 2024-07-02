import { createSlice } from '@reduxjs/toolkit';
import { addHours } from 'date-fns';


export const calendarSlice = createSlice({
    name: 'calendar',
    initialState: {
        isLoadingEvents: true,
        events: [
            
        ],
        activeEvent: null
    },
    reducers: {
        onSetActiveEvent: (state, {payload})=> {
            state.activeEvent = payload;
        },
        onAddNewEvent: (state, {payload}) => {
            state.events.push(payload);
            state.activeEvent = null;
        },
        onUpdateEvent: (state, {payload}) => {
            state.events = state.events.map(
                (event) => (event.id === payload.id) ? payload : event
            )
        },
        onDeleteEvent: (state) => {
            if(state.activeEvent){
                state.events = state.events.filter((event)=> event.id !== state.activeEvent.id);
                state.activeEvent = null;
            }
        },
        
        onLoadEvents: (state, {payload = []}) => {
            state.isLoadingEvents = false;
            state.events = [...payload];  /* It could be with foreach and some | 427 */
        },
        onLogoutCalendar: (state) => {
            state.isLoadingEvents = true;
            state.events = [];
            state.activeEvent = null;
        }
    },
});

export const {  onSetActiveEvent, onAddNewEvent, onUpdateEvent, onDeleteEvent, onLoadEvents, onLogoutCalendar } = calendarSlice.actions;