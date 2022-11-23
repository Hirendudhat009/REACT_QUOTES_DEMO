import React, { Fragment } from 'react'
import { Link, Route, useParams, useRouteMatch } from 'react-router-dom'
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote'

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

const QoutesDetail = () => {
    const params = useParams()
    const match = useRouteMatch()

    const quote = DUMMY_QUOTES.find(qoute => qoute.id === params.qouteId)
    if (!quote) {
        return <p>No quotes found</p>
    }

    return <Fragment>
        <HighlightedQuote text={quote.text} author={quote.author} />
        <Route path={`${match.url}`} exact>
            <div className='centered'>
                <Link className='btn--flat' to={`${match.url}/comments`}>
                    Load Comments
                </Link>
            </div>
        </Route>
        <Route path={`${match.path}/comments`}>
            <Comments />
        </Route>
    </Fragment>
}

export default QoutesDetail;