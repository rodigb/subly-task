# Subly media task

Targets of the task:
- Fetch media endpoint. COMPLETE
- Render each Medium into a card: Cover image, Title and Status. COMPLETE
- Render possible states: "ready", "error", "transcribing". COMPLETE

BONUS:

- Add filters to the top. NOT COMPLETE
- Create some tests. COMPLETE
- Deploy creation. COMPLETE


# Overview

- [Tech-Stack](#tech-stack)
- [Cards](#cards)
- [Support](#support)
- [Contributing](#contributing)

## Tech-Stack

This task consists of ReactJS with Typescript. Includes HTML and CSS as well.

## Cards

The cards created are within the components folder. The folder contents consist of the CSS for the cards, the original format of cards and an alternative card

# Original Format

The original format of the card was as follows:

```

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
                <div className="languages">
                    <div className="text-box"><p id="lang">{languages}</p></div>
                <button className="edit-btn"><FaEdit></FaEdit></button>
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
```

The transcribing card is the same with the exception of having a loading effect on the card instead of language text:
```
<div className="languages"><div className="text-box"><p id="lang"><TailSpin/></p></div>

```

This was imported using a react library (react-loading-library), see more in package.json


 
