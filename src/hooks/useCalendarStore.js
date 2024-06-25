import { useDispatch, useSelector } from "react-redux"
import { onAddNewEvent, onDeleteEvent, onSetActiveEvent, onUpdateEvent } from "../store/calendar/calendarSlice";

export const useCalendarStore = () => {
  const { events, activeEvent } = useSelector((state) => state.calendar);
  const dispatch = useDispatch();

  const setActiveEvent = (calendarEvent) => {
    dispatch(onSetActiveEvent(calendarEvent))
  }

  const startSavingEvent = async (event) => {

    if(event._id){
      dispatch(onUpdateEvent({...event}));
    }else{
      dispatch(onAddNewEvent({
        ...event,
        _id: new Date().getTime(),
      }))
    }
  }

  const startDeletingEvent = () => {
    dispatch(onDeleteEvent())
  }

  return {
    events,
    activeEvent,
    hasEventSelected: !!activeEvent,


    setActiveEvent,
    startSavingEvent,
    startDeletingEvent
  }
}
