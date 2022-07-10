# Subly media task




# Overview

- [Requirements](#requirements)
- [Tech-Stack](#tech-stack)
- [Cards](#cards)
- [Designs](#Design)
- [Tests](#tests)
- [Deployment](#deployment)


# Requirements

Targets of the task (must have):

- Fetch media endpoint. COMPLETE
- Render each Medium into a card: Cover image, Title and Status. COMPLETE
- Render possible states: "ready", "error", "transcribing". COMPLETE

BONUS:

- Add filters to the top. NOT COMPLETE
- Create some tests. IN PROGRESS
- Deploy creation. COMPLETE

## Tech-Stack

This task consists of ReactJS with Typescript. Includes HTML and CSS as well.

# Cards

The cards created are within the components folder. The folder contents consist of the CSS for the cards, the original format of cards and an alternative card. I thought it would be easier to have 2 seperate cards for both transcribing and the original / error cards. Having the loading effect caused problems on the original card.

## Original Format

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


# Design

The design of the cards were made to look as close to Subly's color scheme as possible, with the main colours being purple, white and green.

# Tests

1. Check if component can be rendered:

```
test('should render cards component',() => {
    render(<Card/>);
    const todoElement = screen.getByTestId('cards-1');
    expect(todoElement).toBeInTheDocument();

})
```

test successful

2.

# Deployment

gh-pages is required (npm install gh-pages --save-dev).

in order to run deployment, use "npm run deployment" in terminal

you can view the task live here: https://rodigb.github.io/subly-task/