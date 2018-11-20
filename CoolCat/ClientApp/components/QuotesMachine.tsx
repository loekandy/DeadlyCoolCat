import * as React from 'react';
import Loading from './Loading';

interface States {
    isLoading: boolean;
    fetchRandomPost: boolean;
}

export default class QuotesMachine extends React.Component<{}, States> {
    constructor() {
        super();
        this.state = {
            isLoading: false,
            fetchRandomPost: false
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

        const quote = quotes.coolQuotes[randomNumber];

        const quoteMockup = <div>
            <h2>{quote.content}</h2>
            <h3 className="quoteText">-{quote.from}</h3>
        </div>

        return quoteMockup;
    }

    fakeLoadingScreen = () => {
        this.setState({
            isLoading: true
        });

        setTimeout(() => {
            this.setState({
                isLoading: false,
                fetchRandomPost: true
            });
        }, 3500);
    }

    componentDidUpdate() {

    }

    render() {
        const { isLoading, fetchRandomPost } = this.state;

        let quote;

        if (isLoading == true) {
            quote = <Loading />;
        }
        else if (fetchRandomPost == true) {
            quote = this.getRandomQuote();
        }


        let bootstrapCarousel = <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
        </div>;

        return (<div className="wrapper">
            <div className="inner">
                <h2>Random Quote Machine!</h2>
                <button onClick={this.fakeLoadingScreen} type="button" className="btn btn-dark btn-lg mt-4">Press Me</button>
                <div id="quoteText">{quote}</div>
            </div>
        </div>
        );
    }
}
