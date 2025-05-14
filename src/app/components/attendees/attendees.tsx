'use client'
import React from 'react'
import Card from '../ui/card'
import { attendee } from '../interfaces/attendee-interface'

const AttendeesComponent = (props: any) => {
    const [search, setSearch] = React.useState('')
    const [kindFilter, setKindFilter] = React.useState('all')
    const [isFursuiterFilter, setIsFursuiterFilter] = React.useState('all')
    const [ticketKindFilter, setTicketKindFilter] = React.useState('all')
    const cardAttendees =  props.attendees
    
    const handleKindFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setKindFilter(event.target.value)
    }

    const handleIsFursuiterFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setIsFursuiterFilter(event.target.value)
    }

    const handleTicketKindFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setTicketKindFilter(event.target.value)
    }

    const filteredAttendees = cardAttendees.filter((attendee: attendee) => {
        const searchMatch = attendee.fursonaName?.toLowerCase().includes(search.toLowerCase())
        const kindMatch = kindFilter === 'all' || attendee.kind === kindFilter
        const isFursuiterMatch = isFursuiterFilter === 'all' || attendee.isFursuiter?.toString() === isFursuiterFilter
        const ticketKindMatch = ticketKindFilter === 'all' || attendee.ticketKind === ticketKindFilter
        return searchMatch && kindMatch && isFursuiterMatch && ticketKindMatch
    })

    return (
        <div className="flex flex-col items-center w-full">
            <div className="w-full flex flex-col md:flex-row gap-2 md:h-12 my-4">
                <form>
                    <input  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3" 
                            type="search" 
                            id="searchbar" 
                            name="searchbar" 
                            placeholder="Search attendees by Name" 
                            onChange={(e) => setSearch(e.target.value)}
                        />
                </form>
                <div className="flex gap-2">
                    <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-3" value={kindFilter} onChange={handleKindFilterChange}>
                        <option value="all">All Kinds</option>
                        <option value="staff">Staff</option>
                        <option value="attendee">Attendee</option>
                        <option value="dealer">Dealer</option>
                        <option value="security">Security</option>
                        <option value="bar">Bar</option>
                        <option value="av/it">AV/IT</option>
                        <option value="wildcard">Wildcard</option>
                    </select>
                    <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-3" value={isFursuiterFilter} onChange={handleIsFursuiterFilterChange}>
                        <option value="all">All</option>
                        <option value="true">Fursuiters</option>
                        <option value="false">Non-fursuiters</option>
                    </select>
                    <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-3" value={ticketKindFilter} onChange={handleTicketKindFilterChange}>
                        <option value="all">All Tickets</option>
                        <option value="base">Base</option>
                        <option value="early">Early</option>
                    </select>
                </div>
            </div>
            <div className="flex items-center flex-col md:grid md:grid-cols-3 lg:grid-cols-4 md:justify-items-center gap-4 w-full">
                {filteredAttendees.map((attendee: attendee, index: number) => (
                    <Card key={index} cardAttendee={attendee} />
                ))}
            </div>
        </div>
    )
}

export default AttendeesComponent