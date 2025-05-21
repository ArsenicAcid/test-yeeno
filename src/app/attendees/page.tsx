import React from 'react'
import AttendeesComponent from '../components/attendees/attendees'
import { attendee } from '../components/interfaces/attendee-interface'


const AttendeesPage = async () => {

  const {error, success} = await getAttendees()
    if (error) return error
    const attendees : attendee[] = await success?.json()
    if (!attendees) return
    
    return (
      <div className={"flex flex-col w-full items-center"}>
        <AttendeesComponent attendees={attendees} />
      </div>
    )
}

const getAttendees = async () => {
  try {
      const reqURL = "http://lesgoski.ddns.net:10621/api/pun25/attendees/flat-list"
      const data = await fetch(reqURL)
            return { success: data}
  } catch (error) {
      return { error: "Failed to fetch attendees. Error: " + error}
  }
}
  
  export default AttendeesPage
  