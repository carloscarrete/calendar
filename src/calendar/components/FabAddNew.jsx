import React from 'react'
import { useCalendarStore } from '../../hooks/useCalendarStore'
import { useUiStore } from '../../hooks';
import { addHours } from 'date-fns';

export const FabAddNew = () => {

    const {setActiveEvent} = useCalendarStore();
    const {openDateModal} = useUiStore();

    const handleNewEvent = () =>{
        setActiveEvent({     
            title: '',
            notes: '',
            start: new Date(),
            end: addHours(new Date(), 2),
            bgColor: '#ffffff',
            user: {
              _id: 'c15164',
              name: 'Carlos',
            }
        })

        openDateModal()
    }

  return (
    <button className='btn btn-primary fab' onClick={handleNewEvent}>
        <i className='fas fa-plus'></i>
    </button>
  )
}
