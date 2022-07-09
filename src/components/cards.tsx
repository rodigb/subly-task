import React from 'react'
import './cards.css'

type CardProps = {

    coverImage: string | undefined,
    title: string,
    status: string

}

export const Card = ({coverImage, title, status}: CardProps)  => {
    return(
        <div className="card">
            <div className="image-holder">
                <img src={coverImage}></img>

            </div>
            <div className="text-section">
                <h1 className="title">
                    {title}

                </h1>
                <p className="status">
                    {status}

                </p>
            </div>

        </div>
    )
}