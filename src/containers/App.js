import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Layout from './Layout'
import UsersContainer from './Users'

const Home = () => (<div>Home view</div>)

class App extends React.Component {

    render() {
        return (
            <Layout>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/users' component={UsersContainer} />
                </Switch>
            </Layout>
        )
    }
}

export default App