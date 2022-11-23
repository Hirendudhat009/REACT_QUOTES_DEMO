import { useHistory } from "react-router-dom";
import QuoteForm from '../components/quotes/QuoteForm'
import useHttp from "../hooks/use-http";
import { useEffect } from "react";
import { addQuote } from "../lib/api";

const AddNewQoutes = () => {
    const { sendRequest, status } = useHttp(addQuote);
    const history = useHistory()

    useEffect(() => {
        if (status === "completed") {
            history.push('/qoutes')
        }
    }, [status, history])

    const AddQuoteHandler = (qoutes) => {
        sendRequest(qoutes)
    }
    return (
        <QuoteForm isLoading={status === "pending"} onAddQuote={AddQuoteHandler} />
    )
}

export default AddNewQoutes;