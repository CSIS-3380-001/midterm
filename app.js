// =============================================================
//   WRITE YOUR CODE BELOW
// =============================================================

// <Header />
class Header extends React.Component {
    render() {
        return (
            <header>
                <h1>
                    Playing Cards Game of {this.props.state.cards.length}
                </h1>
                <button onClick={() => this.props.shuffleCards()}>Shuffle Cards</button>
            </header>
        );
    }
}

// <Card />
class Card extends React.Component {
    render() {
        return (
                <div className="card">
                    <button className="remove-card" onClick={() => this.props.delete(this.props.id)}>Delete Card</button>
                    <div><img src={this.props.url}></img></div>
                </div>
        );
    }
}

// <App />
class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            cards: props.data.cards,
            all: props.data.cards
        }

        this.setState = this.setState.bind(this);
        
    }

    delete(id) {
        let updatedCards = this.state.cards.filter((card) => {
            return card.id !== id
        });

        this.setState({
            cards: updatedCards
        });
    }

    shuffleCards() {

        let random10 = 
            this.state.all
            .sort(() => Math.random() - Math.random())
            .slice(0, Math.floor(Math.random() * (10 - 1 + 1) + 1));
        
        this.setState({
            cards: random10
        })
    }

    render() {
        return (
            <div className="app">
                <Header 
                    key="header"
                    shuffleCards={this.shuffleCards}

                    state={this.state}
                    setState={this.setState}
                ></Header>
                <div className="container">
                    {
                        this.state.cards.map((card) => {
                            return (
                                <Card
                                    key={card.id}
                                    id={card.id}
                                    url={card.url}
                                    delete={this.delete}

                                    state={this.state}
                                    setState={this.setState}
                                ></Card>
                            );
                        })
                    }
                </div>
            </div>
        );
    }

}

// Data:
    const data = {
        cards: [
        {
            id: 1,
            url: 'img/AC.svg',
        },
        {
            id: 2,
            url: 'img/AD.svg',
        },
        {
            id: 3,
            url: 'img/AH.svg',
        },
        {
            id: 4,
            url: 'img/AS.svg',
        },
        {
            id: 5,
            url: 'img/2C.svg',
        },
        {
            id: 6,
            url: 'img/2D.svg',
        },
        {
            id: 7,
            url: 'img/2H.svg',
        },
        {
            id: 8,
            url: 'img/2S.svg',
        },
        {
            id: 9,
            url: 'img/3C.svg',
        },
        {
            id: 10,
            url: 'img/3D.svg',
        },
        {
            id: 11,
            url: 'img/3H.svg',
        },
        {
            id: 12,
            url: 'img/3S.svg',
        },
        {
            id: 13,
            url: 'img/4C.svg',
        },
        {
            id: 14,
            url: 'img/4D.svg',
        },
        {
            id: 15,
            url: 'img/4H.svg',
        },
        {
            id: 16,
            url: 'img/4S.svg',
        },
        {
            id: 17,
            url: 'img/5C.svg',
        },
        {
            id: 18,
            url: 'img/5D.svg',
        },
        {
            id: 19,
            url: 'img/5H.svg',
        },
        {
            id: 20,
            url: 'img/5S.svg',
        },
        {
            id: 21,
            url: 'img/6C.svg',
        },
        {
            id: 22,
            url: 'img/6D.svg',
        },
        {
            id: 23,
            url: 'img/6H.svg',
        },
        {
            id: 24,
            url: 'img/6S.svg',
        },
        {
            id: 25,
            url: 'img/7C.svg',
        },
        {
            id: 26,
            url: 'img/7D.svg',
        },
        {
            id: 27,
            url: 'img/7H.svg',
        },
        {
            id: 28,
            url: 'img/7S.svg',
        },
        {
            id: 29,
            url: 'img/8C.svg',
        },
        {
            id: 30,
            url: 'img/8D.svg',
        },
        {
            id: 31,
            url: 'img/8H.svg',
        },
        {
            id: 32,
            url: 'img/8S.svg',
        },
        {
            id: 33,
            url: 'img/9C.svg',
        },
        {
            id: 34,
            url: 'img/9D.svg',
        },
        {
            id: 35,
            url: 'img/9H.svg',
        },
        {
            id: 36,
            url: 'img/9S.svg',
        },
        {
            id: 37,
            url: 'img/TC.svg',
        },
        {
            id: 38,
            url: 'img/TD.svg',
        },
        {
            id: 39,
            url: 'img/TH.svg',
        },
        {
            id: 40,
            url: 'img/TS.svg',
        },
        {
            id: 41,
            url: 'img/JC.svg',
        },
        {
            id: 42,
            url: 'img/JD.svg',
        },
        {
            id: 43,
            url: 'img/JH.svg',
        },
        {
            id: 44,
            url: 'img/JS.svg',
        },
        {
            id: 45,
            url: 'img/QC.svg',
        },
        {
            id: 46,
            url: 'img/QD.svg',
        },
        {
            id: 47,
            url: 'img/QH.svg',
        },
        {
            id: 48,
            url: 'img/QS.svg',
        },
        {
            id: 49,
            url: 'img/KC.svg',
        },
        {
            id: 50,
            url: 'img/KD.svg',
        },
        {
            id: 51,
            url: 'img/KH.svg',
        },
        {
            id: 52,
            url: 'img/KS.svg',
        },
        ]
    }
  

// Render the container component to the DOM

ReactDOM.render(<App data={data}/>, document.getElementById('root'));
