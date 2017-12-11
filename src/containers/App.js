import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Action from '../store/actions'

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

const mapStateToProps = state => ({ ...state })
const mapDispatchToProps = dispatch => bindActionCreators(Action, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App)