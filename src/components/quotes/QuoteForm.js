import { Fragment, useRef, useState } from 'react';
import { Prompt } from "react-router-dom";

import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './QuoteForm.module.css';

const QuoteForm = (props) => {
  const authorInputRef = useRef();
  const textInputRef = useRef();
  const [isEntering, setEntering] = useState(false)
  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    // optional: Could validate here

    props.onAddQuote(
      {
        id: Math.random().toString(),
        author: enteredAuthor,
        text: enteredText
      });
  }

  const focusHandler = () => {
    setEntering(true)
  }

  const finishHandler = () => {
    setEntering(false)

  }

  return (
    <Fragment>
      <Prompt
        when={isEntering}
        message="You have leave this page ?? you lost your data " />
      <Card>
        <form className={classes.form} onSubmit={submitFormHandler} onFocus={focusHandler}>
          {props.isLoading && (
            <div className={classes.loading}>
              <LoadingSpinner />
            </div>
          )}

          <div className={classes.control}>
            <label htmlFor='author'>Author</label>
            <input type='text' id='author' ref={authorInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor='text'>Text</label>
            <textarea id='text' rows='5' ref={textInputRef}></textarea>
          </div>
          <div className={classes.actions}>
            <button onClick={finishHandler} className='btn'>Add Quote</button>
          </div>
        </form>
      </Card>
    </Fragment>
  );
};

export default QuoteForm;
