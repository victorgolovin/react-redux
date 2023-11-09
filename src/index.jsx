import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension' // взял с https://redux.js.org/usage/configuring-your-store раздел Integrating the devtools extension
import { counterReducer } from './reducer.js'
import './index.css'




const store = createStore(counterReducer, undefined, composeWithDevTools()) // В createStore прокидываем наш reducer

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(  // <Provider> Позволяет нам связывать компоненты react с store redux (сам Provider находится в react-redux библиотеке)
    <React.StrictMode>
        <Provider store={store}> 
            <App />
        </Provider>
    </React.StrictMode>
)
