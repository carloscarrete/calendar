import { useDispatch, useSelector } from "react-redux"
import { onAddNewEvent, onSetActiveEvent } from "../store/calendar/calendarSlice";

export const useCalendarStore = () => {
  const { events, activeEvent } = useSelector((state) => state.calendar);
  const dispatch = useDispatch();

  const setActiveEvent = (calendarEvent) => {
    dispatch(onSetActiveEvent(calendarEvent))
  }

  const startSavingEvent = async (event) => {

    if(event._id){

    }else{
      dispatch(onAddNewEvent({
        ...event,
        id: new Date().getTime()
      }))
    }
  }

  return {
    events,
    activeEvent,
    setActiveEvent,
    startSavingEvent
  }
}
