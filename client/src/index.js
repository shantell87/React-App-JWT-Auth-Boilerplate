import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, createStore} from 'redux';
import reduxThunk from 'redux-thunk';

//import containers
import App from './containers/App';
import Counter from './containers/Counter'

//import components
import Welcome from './components/Welcome/index'

import reducers from './reducers'

//configure redux dev tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducers,
    {},//preloadedState
    composeEnhancers(applyMiddleware(reduxThunk))
);

ReactDOM.render(
<Provider store={store}>
    <Router>
        <App>
            <Route exact path="/" component={Welcome}/>
            <Route exact path="/counter" component={Counter}/>
        </App>
    </Router>

</Provider> 
, document.getElementById('root'));

