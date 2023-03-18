import React, { useEffect} from 'react';

function App() {
  const url = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';

  const [quote, setQuote] = React.useState('');
  const [author, setAuthor] = React.useState('');
  const [quotes, setQuotes] = React.useState([]);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(result => {
        setQuotes(result.quotes);
        const randomNumber = Math.floor(Math.random() * result.quotes.length);
        const randomQuote = result.quotes[randomNumber];
        setQuote(randomQuote.quote);
        setAuthor(randomQuote.author);
      });
  }, []);

  function generateQuote(event) {
    event.preventDefault();
    const randomNumber = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomNumber];
    setQuote(randomQuote.quote);
    setAuthor(randomQuote.author);

  }

  function tweetQuote(event) {
    event.preventDefault();
    const tweetText = encodeURIComponent(`"${quote}" - ${author}`);
    const tweetUrl = `https://twitter.com/intent/tweet?text=${tweetText}`;
    window.open(tweetUrl, '_blank');
  }

  return (
    <div className="big-container">
      <h1>Quotable - Random Quote Generator</h1>
      <div className="quote-box" id="quote-box">
        <div className="quote">
          <div className="text" id="text">
            <p>"{quote}"</p>
          </div>
          <div className="author" id="author">
            <span>-{author}</span>
          </div>
        </div>
        <div className="new-quote">
          <a href="#" id="new-quote" onClick={generateQuote}>
            New Quote
          </a>
        </div>
        <div className="share">
          <label>Share: </label>
          <a href="twitter.com/intent/tweet" id="tweet-quote" onClick={tweetQuote}>
            <ion-icon name="logo-twitter" className="twitter-icon"></ion-icon>
          </a>
        </div>
      </div>
      <h2>
        by{' '}
        <a href="https://github.com/Qnkisa?tab=repositories" target="_blank">
          Yanislav Angelov
        </a>
      </h2>
    </div>
  );
}

export default App;