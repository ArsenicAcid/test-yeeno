import React from 'react'
import Image from 'next/image'
import { attendee } from '../interfaces/attendee-interface'

type cardProps = {
    cardAttendee : attendee
}

const Card = (props: cardProps) => {
    const attendee = props.cardAttendee

    if (!attendee.profilePictureUrl || !attendee.fursonaName) return


    return (
        <div data-testid="cardContainer" className="w-full flex md:flex-col bg-white rounded-lg shadow-lg p-2 text-black gap-2">
            <div data-testid="cardImageContainer" className ="">
                <Image src={attendee.profilePictureUrl} alt={attendee.fursonaName} width={100} height={100} className="w-full h-auto" draggable="false" loading="lazy"/>
            </div>
            <span>{attendee.fursonaName}</span>
        </div>
  )
}

export default Card
