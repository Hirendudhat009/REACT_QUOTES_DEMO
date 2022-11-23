import React, { Suspense } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Layout from './components/layout/Layout'
import LoadingSpinner from './components/UI/LoadingSpinner'
// import AddNewQoutes from './pages/AddNewQuotes'
// import AllQoutes from './pages/AllQoutes'
// import NotFound from './pages/NotFound'
// import QoutesDetail from './pages/QuotesDetail'


const AddNewQoutes = React.lazy(() => import('./pages/AddNewQuotes'))
const AllQoutes = React.lazy(() => import('./pages/AllQoutes'))
const NotFound = React.lazy(() => import('./pages/NotFound'))
const QoutesDetail = React.lazy(() => import('./pages/QuotesDetail'))




function App() {

  return (
    <div>
      <Layout>
        <Suspense fallback={
          <div className="centered">
            <LoadingSpinner />
          </div>}>
          <Switch>
            <Route path="/" exact >
              <Redirect to='/qoutes' />
            </Route>

            <Route path="/qoutes" exact >
              <AllQoutes />
            </Route>

            < Route path="/qoutes/:qouteId" >
              <QoutesDetail />
            </Route >

            <Route path="/new-qoutes">
              <AddNewQoutes />
            </Route>

            <Route path="*">
              <NotFound />
            </Route>

          </Switch>
        </Suspense>
      </Layout>

    </div>
  );
}

export default App;
