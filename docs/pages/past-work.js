import React from 'react'
import PastworkHero from '../components/pages/past-work/PastworkHero'
import PastworkPics from '../components/pages/past-work/PastworkPics'
import PastworkVideos from '../components/pages/past-work/PastworkVideos'

function Pastwork() {
    return (
        <>
            <PastworkHero />
            <PastworkVideos />
            <PastworkPics />
        </>
    )
}

export default Pastwork
