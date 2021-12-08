import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
    {
        id: 'q1',
        author: "Nelson Mandela",
        text: "It always seems impossible until it's done.",
    },
    {
        id: 'q2',
        author: "Ken Venturi",
        text: "I don't believe you have to be better than everybody else. I believe you have to be better than you ever thought you could be.",
    },
    {
        id: 'q3',
        author: "George S. Patton",
        text: "A good plan violently executed now is better than a perfect plan executed next week.",
    },
    {
        id: 'q4',
        author: "Babe Ruth",
        text: "You just can't beat the person who never gives up.",
    },
];

const AllQuotes = () => {
    return <QuoteList quotes={DUMMY_QUOTES}/>
 };

export default AllQuotes;