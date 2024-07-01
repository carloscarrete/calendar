import { useDispatch, useSelector } from "react-redux"
import { onAddNewEvent, onDeleteEvent, onLoadEvents, onSetActiveEvent, onUpdateEvent } from "../store/calendar/calendarSlice";
import calenadrApi from "../api/calendarApi";
import { convertEventsToDateEvents } from "../helpers";
import Swal from "sweetalert2";

export const useCalendarStore = () => {
  const { events, activeEvent } = useSelector((state) => state.calendar);
  const { user } = useSelector(state=>state.auth);
  const dispatch = useDispatch();

  const setActiveEvent = (calendarEvent) => {
    dispatch(onSetActiveEvent(calendarEvent))
  }

  const startSavingEvent = async (event) => {

    if (event.id) {
      try{
        await calenadrApi.put(`/events/${event.id}`, event);
        dispatch(onUpdateEvent({ ...event, user }));
        return; 
      }catch(error){
        console.log(error)
        Swal.fire('Error al actualizar', error.response.data.message, 'error')
      }
    } else {
      try {
        const {data} = await calenadrApi.post('/events', event);
        dispatch(onAddNewEvent({
          ...event,
          id: data.event.id,
          user: user.uid
        }))
      } catch (error) {
        console.log(error)
      }
    }
  }

  const startDeletingEvent = async () => {
    try{
      const {data} = await calenadrApi.delete(`/events/${activeEvent.id}`);
      console.log(data)
      if(data.ok){
        dispatch(onDeleteEvent())
        Swal.fire('Deleted', 'Your event has been deleted', 'success')
        return;
      }

    }catch(error){
      console.log(error)
      Swal.fire('Error al eliminar', error.response.data.message, 'error')
    }
  }

  const startLoadingEvents = async () => {
    try{
      const {data} = await calenadrApi.get('/events');
      const events = convertEventsToDateEvents(data.events);
      dispatch(onLoadEvents(
        events
      ))
    }catch(error){
      console.log(error)
    }
  }

  return {
    events,
    activeEvent,
    hasEventSelected: !!activeEvent,


    setActiveEvent,
    startSavingEvent,
    startDeletingEvent,
    startLoadingEvents
  }
}
