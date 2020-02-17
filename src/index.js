import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let quotesData = ['Loading...'];
let authorNames = ['Douglas Adams', 'Douglas Noel Adams', 'Douglas N. Adams',
'D. N. Adams', 'D. Adams', 'D. N. A.'];

class QuoteBox extends React.Component {
  constructor() {
    super();
    this.state = {
      quote: 'Loading',
      author: Math.floor(Math.random() * authorNames.length)
    };
  }

  componentDidMount() {
    fetch(`https://raw.githubusercontent.com/davidmorton0/QuoteGenerator/master/quotes.txt`)
    .then(response => {
      return response.text()
     })
    .then(text => {
  	  console.log(text);
      quotesData = text.split('|');
      this.updateQuote();
    });
  }

  updateQuote() {
    this.setState((prevState, props) => {
      return {
        quote: quotesData[Math.floor(Math.random() * quotesData.length)],
        author : (this.state.author + 1) % authorNames.length
      };
    });
  }

  render() {
    return (<div id="quote-box">
              <div id="item1">
                <quote id="text">{this.state.quote}</quote>
              </div>
              <div id="item2">
                <p id="author">{authorNames[this.state.author]}</p>
              </div>
              <div id="item3">
                <a id="new-quote" onClick={() => this.updateQuote()}>New Quote</a>
              </div>
              <div id="item4">
                <a href={'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + this.state.quote + '"\n - ' + authorNames[this.state.author] + '\n')} id="tweet-quote">Tweet</a>
               </div>
            </div>
           );
  }
}

ReactDOM.render(<QuoteBox />, document.getElementById('app'));
serviceWorker.unregister();
