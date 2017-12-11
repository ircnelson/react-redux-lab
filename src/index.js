import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import store from './store'

import App from './containers/App'

import registerServiceWorker from './registerServiceWorker';

class Root extends React.Component {
    render() {
        return (
            <div>
                <Provider store={store}>
                    <BrowserRouter>
                        <App />
                    </BrowserRouter>
                </Provider>
            </div>
        )
    }
}

ReactDOM.render(<Root />, document.getElementById('root'));

registerServiceWorker();
