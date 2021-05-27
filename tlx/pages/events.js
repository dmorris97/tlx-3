import React from 'react'
import EventsAbout from '../components/pages/events/EventsAbout'
import EventsHero from '../components/pages/events/EventsHero'
import EventsMap from '../components/pages/events/EventsMap'
import EventsNav from '../components/pages/events/EventsNav'
import EventsVideo from '../components/pages/events/EventsVideo'

const Events = () => {
    return (
        <div>
            <EventsHero />
            <EventsNav />
            <div id="E-video">
                <EventsVideo />
            </div>
            <div id="E-about">
                <EventsAbout />
            </div>
            <div id="E-map">
                <EventsMap />
            </div>
                
        </div>
    )
}


export default Events