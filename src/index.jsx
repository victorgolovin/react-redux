import React from 'react'
import ReactDOM from 'react-dom/client'
import CounterPage from './pages/counter/CounterPage.jsx'
import './index.css'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension' // взял с https://redux.js.org/usage/configuring-your-store раздел Integrating the devtools extension
import { counterReducer } from './pages/counter/reducer.js'

const rootReducer = combineReducers({ // combineReducers() позволяет нам обьединять другие reducers
    counter: counterReducer
}); 

const store = createStore(rootReducer, undefined, composeWithDevTools()) // В createStore прокидываем наш reducer

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(  // <Provider> Позволяет нам связывать компоненты react с store redux (сам Provider находится в react-redux библиотеке)
    <React.StrictMode>
        <Provider store={store}> 
            <CounterPage />
        </Provider>
    </React.StrictMode>
)
