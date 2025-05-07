import React from "react"
import AttendeesComponent from "../components/attendees/attendees"
import { roboto } from "../components/variables"


const AttendeesPage = () => {
    return (
      <div className={`${roboto.className} flex flex-col`}>
        <AttendeesComponent />
      </div>
    )
}
  
  export default AttendeesPage
  