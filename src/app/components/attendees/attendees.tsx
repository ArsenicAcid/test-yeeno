import React from 'react'
import Card from '../ui/card'
import { attendee } from '../interfaces/attendee-interface'

const AttendeesComponent = async () => {
    const reqURL = "http://lesgoski.ddns.net:10621/api/pun25/attendees/flat-list"
    const res = await fetch(reqURL)
    const attendees : attendee[] = await res.json()
    return (
        <div className="flex items-center flex-col md:grid md:grid-cols-3 lg:grid-cols-4 md:justify-items-center w-fit gap-4">
            {attendees.map((attendee : attendee, index : number) => (
            <Card key={index} cardAttendee={attendee} />
          ))}
        </div>
    )
}

export default AttendeesComponent
  