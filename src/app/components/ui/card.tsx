'use client'
import React from 'react'
import Image from 'next/image'
import { attendee } from '../interfaces/attendee-interface'
import card from './card.module.css'

type cardProps = {
    cardAttendee : attendee
}

const Card = (props: cardProps) => {
    const attendee = props.cardAttendee

    if (    !attendee.profilePictureUrl 
        ||  !attendee.fursonaName
        ||  !attendee.kind
    ) return


    return (
        <div className="w-full flex md:flex-col bg-white rounded-xl shadow-lg p-2 text-black gap-2">
            <div className={attendee.checkInCompleted ? card.checkedIn : card.notCheckedIn}>
                <Image  src={attendee.profilePictureUrl} 
                        alt={attendee.fursonaName} 
                        width={300} height={300} 
                        className="w-50 md:w-full h-auto" 
                        draggable="false" 
                        loading="lazy"/>
            </div>
            <div className="w-full flex flex-col justify-between">
                <p className="font-bold">{attendee.fursonaName}</p>
                <div className="w-full self-end italic text-right md:flex md:justify-between">
                    <p>{attendee.isFursuiter? "(Fursuiter)" : ""}</p>
                    <p>{attendee.kind?.charAt(0).toUpperCase() + attendee.kind?.slice(1)}</p>
                </div> 
            </div>
        </div>
  )
}

export default Card
