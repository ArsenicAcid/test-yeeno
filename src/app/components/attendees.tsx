import React from 'react'
import Card from '../components/ui/card'
import { attendee } from './interfaces/attendee-interface'

const AttendeesComponent = async () => {
    const res = await fetch("http://lesgoski.ddns.net:10621/api/pun25/attendees/flat-list")
    const attendees : attendee[] = await res.json()
    return (
        <div className='w-full grid grid-cols-4 justify-items-center'>
            {attendees.map((attendee : attendee, index : number) => (
            <Card key={index} cardAttendee={attendee}></Card>
          ))}
        </div>
    )
}

export default AttendeesComponent
  