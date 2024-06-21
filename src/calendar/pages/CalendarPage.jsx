import { Calendar } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { addHours } from 'date-fns'

import { Navbar } from '../components/Navbar'
import { localizer, getMessages } from '../../helpers'
import { CalendarEvent } from '../components/CalendarEvent'
import { useState } from 'react'
import { CalendarModal } from '../components/CalendarModal'



const events = [{
  title: 'Big Meeting',
  allDay: true,
  start: new Date(),
  end: addHours(new Date(), 2),
  bgColor: '#ffffff',
  user: {
    _id: 'c15164',
    name: 'Carlos',
  }
}]

export const CalendarPage = () => {

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
    console.log({ doubleclick: event })
  }

  const onSelect = (event) => {
    console.log({ click: event })
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
        defaultView= {lastView}
      />

      <CalendarModal />
    </>
  )
}
