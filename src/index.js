import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { charactersReducer } from './reducers/characters'
import { Provider } from 'react-redux'
import { legacy_createStore as createStore } from 'redux'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
const store = createStore(charactersReducer)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

