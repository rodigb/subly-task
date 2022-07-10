import React from 'react'
import './cards.css'
import { FaEdit } from 'react-icons/fa';


//creating the card component interface

type CardProps = {

    coverImage: string | undefined,
    title: string,
    status: string,
    lastUpdated: string,
    languages: string 


}

//creating the card component
export const Card = ({coverImage, title, status, lastUpdated, languages}: CardProps)  => {
    return(
        <div data-testid="cards-1" className="card">
            <div className="image-holder">

                <div className="overlay">

                <div className="languages">
                    {/* languages property */}
                    <div className="text-box"><p id="lang">{languages}</p></div>

                <button className="edit-btn"><FaEdit></FaEdit></button>

                </div>

                </div>
                  {/* image property */}
                <img src={coverImage}></img>

            </div>
            <div className="text-section">
                <h1 data-testid="title-field" className="title">
                {/* title property */}
                    {title}

                </h1>
                <p className="status">
                      {/* status property */}
                    {status}

                </p>
                <p className="last-updated">
                      {/* last updated property */}
                    {lastUpdated}
                </p>
            </div>

        </div>
    )
}