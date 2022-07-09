import React from 'react'
import './cards.css'

type CardProps = {

    coverImage: string | undefined,
    title: string,
    status: string,
    lastUpdated: string,
    languages: string

}

export const Card = ({coverImage, title, status, lastUpdated, languages}: CardProps)  => {
    return(
        <div className="card">
            <div className="image-holder">
            
                <div className="overlay">
                <div className="languages"><p>{languages}</p>
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