import React from 'react';
import { Provider } from 'react-redux'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import store from './store'

import Layout from './components/Layout'
import UsersContainer from './containers/Users'

const Home = () => (<div>Home view</div>)

export default class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Provider store={store}>
                    <BrowserRouter>
                        <Layout>
                            <Switch>
                                <Route exact path='/' component={Home} />
                                <Route exact path='/users' component={UsersContainer} />
                            </Switch>
                        </Layout>
                    </BrowserRouter>
                </Provider>
            </div>
        )
    }
}