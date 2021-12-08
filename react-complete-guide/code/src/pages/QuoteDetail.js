import { useParams, Route, Link, useRouteMatch } from "react-router-dom";
import { Fragment } from "react";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_QUOTES = [
  {
    id: "q1",
    author: "Nelson Mandela",
    text: "It always seems impossible until it's done.",
  },
  {
    id: "q2",
    author: "Ken Venturi",
    text: "I don't believe you have to be better than everybody else. I believe you have to be better than you ever thought you could be.",
  },
  {
    id: "q3",
    author: "George S. Patton",
    text: "A good plan violently executed now is better than a perfect plan executed next week.",
  },
  {
    id: "q4",
    author: "Babe Ruth",
    text: "You just can't beat the person who never gives up.",
  },
];

const QuoteDetail = () => {
  const match = useRouteMatch();
  const params = useParams();

  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return <p>No quote found!</p>;
  }

  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={match.url} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.url}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
