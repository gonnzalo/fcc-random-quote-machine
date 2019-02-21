let quote = document.getElementById('new-quote'),
    tweet = document.getElementById('tweet-quote'),
    text = document.getElementById('text'),
    author = document.getElementById('author');

let colors = ['#fd79a8', '#FFA726', '#00b894', '#5C6BC0', '#ffeaa7', '#636e72', '#ED4C67', '#4CAF50', '#95E6C1', '#D980FA'];

const newQuote = () => {
    fetch('https://favqs.com/api/qotd')
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson) {
            text.textContent = myJson.quote.body;
            author.textContent = "- " + myJson.quote.author;
            tweet.setAttribute('href', `https://twitter.com/intent/tweet?hashtags=quotes&text=%20${encodeURI(text.textContent)}%20-%20${encodeURI(author.textContent)}`);
            document.body.style.backgroundColor = colors[Math.floor(Math.random()*colors.length)];
        })
};

quote.addEventListener('click', newQuote);
window.onload = newQuote;

