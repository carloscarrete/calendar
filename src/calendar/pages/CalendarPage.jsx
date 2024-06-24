import { Calendar } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'

import { Navbar, CalendarEvent,CalendarModal, FabAddNew } from '../'
import { localizer, getMessages } from '../../helpers'
import { useState } from 'react'
import { useUiStore } from '../../hooks'
import { useCalendarStore } from '../../hooks/useCalendarStore'

export const CalendarPage = () => {

  const { openDateModal } = useUiStore();
  const {events, setActiveEvent} = useCalendarStore();

  const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'week');

  const evetStyleGetter = (event, start, end, isSelected) => {

    const style = {
      backgroundColor: 'red',
      borderRadius: '0px',
      opacity: 0.8,
      color: 'white',
      border: '0px',
    }


    return {
      style
    }
  }

  const onDoubleClick = (event) => {
    openDateModal()
  }

  const onSelect = (event) => {
    setActiveEvent(event);
  }

  const onViewChanged = (event) => {

    localStorage.setItem('lastView', event)
    setLastView(event)
  }

  return (
    <>
      <Navbar />
      <Calendar
        culture='es'
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 'calc(100vh - 80px)' }}
        messages={getMessages()}
        eventPropGetter={evetStyleGetter}
        components={
          {
            event: CalendarEvent
          }
        }
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelect}
        onView={onViewChanged}
        defaultView={lastView}
      />

      <CalendarModal />
      <FabAddNew />
    </>
  )
}
