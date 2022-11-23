import { Fragment } from 'react';
import QuoteList from '../components/quotes/QuoteList';


const DUMMY_QUOTES = [
    {
        id: "q1",
        author: "hiren",
        text: "What a qoutes"
    },
    {
        id: "q2",
        author: "hiren",
        text: "Learning react"
    },
]

const AllQoutes = () => {
    return (
        <Fragment>
            <QuoteList quotes={DUMMY_QUOTES} />
        </Fragment>
    )

}

export default AllQoutes;