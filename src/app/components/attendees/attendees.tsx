import React from 'react'
import Card from '../ui/card'
import { attendee } from '../interfaces/attendee-interface'

const AttendeesComponent = async () => {
    const {error, success} = await getAttendees()
    if (error) return error
    const attendees : attendee[] = await success?.json()
    return (
        <div className="flex items-center flex-col md:grid md:grid-cols-3 lg:grid-cols-4 md:justify-items-center gap-4 w-full md:w-auto">
            {attendees.map((attendee : attendee, index : number) => (
            <Card key={index} cardAttendee={attendee} />
          ))}
        </div>
    )
}

const getAttendees = async () => {
    try {
        const reqURL = "http://lesgoski.ddns.net:10621/api/pun25/attendees/flat-list"
        const data = await fetch(reqURL)
        return { success: data}
    } catch (error) {
        return { error: "Failed to fetch attendees"}
    }
}

export default AttendeesComponent
  