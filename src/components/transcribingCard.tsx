import React from 'react'
import './cards.css'
import { FaEdit } from 'react-icons/fa';
import {TailSpin} from 'react-loading-icons'



type CardProps = {

    coverImage: string | undefined,
    title: string,
    status: string,
    lastUpdated: string,


}

export const TranscribingCard = ({coverImage, title, status, lastUpdated}: CardProps)  => { //Transcribing card
    return(
        <div className="card">
            <div className="image-holder">

                <div className="overlay">
                <div className="languages"><div className="text-box"><p id="lang"><TailSpin/></p></div>

                </div>
                </div>
                <img src={coverImage}></img>


            </div>
            <div className="text-section">
                <h1 className="title">
                    {title}

                </h1>
                <p className="status">
                    {status}

                </p>
                <p className="last-updated">
                    {lastUpdated}
                </p>
            </div>

        </div>
    )
}