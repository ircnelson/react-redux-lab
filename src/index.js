import React from 'react'
import ReactDOM from 'react-dom'

import store, { actions } from './store'

import './styles/App.css'

import App from './App'

import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<App />, document.getElementById('root'))

setTimeout(() => {
  store.dispatch(actions.startListeningToAuth())
})

registerServiceWorker()
