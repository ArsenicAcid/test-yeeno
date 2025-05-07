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
        <div className='flex flex-col w-40 h-60'>
            <Image src={attendee.profilePictureUrl} alt={attendee.fursonaName} width={100} height={100} className='w-full h-auto' loading='lazy'/>
            <h1>{attendee.fursonaName}</h1>
        </div>
  )
}

export default Card
