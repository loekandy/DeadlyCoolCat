import * as React from 'react';

interface States {
    currentQuoteContent: string;
    quoteID: number;
    quoteAuthor: string;
}

export default class QuotesMachine extends React.Component<{}, States> {
    constructor() {
        super();
        this.state = {
            currentQuoteContent: "",
            quoteID: 0,
            quoteAuthor: ""
        };
    }

    getRandomQuote = () => {
        var quotes = {
            "coolQuotes": [{
                "id": 1,
                "from": "Albert Camus",
                "content": "Don't walk behind me; I may not lead. Don't walk in front of me; I may not follow. Just walk beside me and be my friend."
            }, {
                "id": 2,
                "from": "R. Buckminster Fuller",
                "content": "I just invent, then wait until man comes around to needing what I've invented."
            }, {
                "id": 3,
                "from": "William Christopher Handy",
                "content": "Nature was my kindergarten."
            },
            {
                "id": 3,
                "from": "Sophia Loren",
                "content": "Spaghetti can be eaten most successfully if you inhale it like a vacuum cleaner. "
            },
            {
                "id": 4,
                "from": "Oscar Wilde",
                "content": "Everything popular is wrong. "
            },
            {
                "id": 5,
                "from": "Nathaniel Hawthorne",
                "content": "Selfishness is one of the qualities apt to inspire love. "
            },
            ]
        };

        var randomNumber = Math.floor(Math.random() * quotes.coolQuotes.length);

        while (this.state.quoteID == randomNumber) {
            randomNumber = Math.floor(Math.random() * quotes.coolQuotes.length);
        }

        this.setState({
            currentQuoteContent: quotes.coolQuotes[randomNumber].content,
            quoteID: quotes.coolQuotes[randomNumber].id,
            quoteAuthor: quotes.coolQuotes[randomNumber].from
        });
    }

    render() {

        let quote;
        if (this.state.currentQuoteContent != "") {
            quote = <div>
                <div>{this.state.currentQuoteContent}</div>
                <div className="author">- {this.state.quoteAuthor}</div>
            </div>
        }

        return (<div className="wrapper">
            <div className="inner">
                <h2>Random Quote Machine!</h2>
                <button onClick={this.getRandomQuote} type="button" className="btn btn-dark">Press Me</button>
                <div id="quoteText">{quote}</div>
            </div>
        </div>);
    }
}